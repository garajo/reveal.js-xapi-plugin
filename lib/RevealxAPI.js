'use strict'

import {dotVerbActivity} from './concepts'
import getProfiles from './profiledata'
import pickFnCall from './pickFnCall'
import Statement from './statement'
import statementLog, {mapElementXapi} from './statementLog'

import uiConsole, {trace} from './uiConsole'
import statementHelper from './statementHelper'
import toggleState from './toggleState'
import css from 'css/revealxapi.css'

import R from 'ramda'
const defer = require('lodash.defer');
const TinCan = require('tincanjs')

  // TinCan.enableDebug()

  const private_state = () => {}

    let statement_log,
      statement

    const state = Object.seal({
      privateData: new WeakMap([
        [
          private_state, {
            dev_mode: true,
            send_enabled: false,
            statement_helper: true,
            debug: true,
            lang_iso: 'en',
            local_iso: 'US',
            state_toggler: true
          }
        ]
      ]),
      get c() {
        return this.privateData.get(private_state)
      },
      set update(newdata) {
        const setkeys = R.keys(newdata)
        const currkeys = R.keys(this.c)
        if (R.intersection(setkeys, currkeys).length !== setkeys.length) {
          throw new Error(`Not expected ${R.difference(setkeys, currkeys)}`)
        }

        this.privateData.set(private_state, {
          ...this.c,
          ...newdata
        })

      },
      set dev_mode(val) {
        this.update = {
          dev_mode: Boolean(val),
          send_enabled: !Boolean(val),
          statement_helper: Boolean(val),
          debug: Boolean(val),
          state_toggler: Boolean(val)
        }
      },
      get dev_mode() {
        return this.c.dev_mode
      },
      set lang_iso(val) {
        this.update = {
          lang_iso: val
        }
      },
      get lang_iso() {
        return this.c.lang_iso
      },
      set local_iso(val) {
        this.update = {
          local_iso: val
        }
      },
      get local_iso() {
        return this.c.local_iso
      },
      get statement_helper() {
        return this.c.statement_helper
      },
      set statement_helper(val) {
        this.c.statement_helper = Boolean(val)
      },
      get send_enabled() {
        return this.c.send_enabled
      },
      set send_enabled(val) {
        this.c.send_enabled = Boolean(val)
      },
      get debug() {
        return this.c.debug
      },
      set debug(val) {
        this.c.debug = Boolean(val)
      },
      get toggler() {
        return this.c.state_toggler
      },
      set toggler(val) {
        this.c.state_toggler = Boolean(val)
      }
    })

    const XAPI = (tincan) => {
      return {
        saveStatements: (statements, saveStatementCallback) => {
          if (!Array.isArray(statements)) {
            throw new Error('expecting array')
          }

          statements.map(ea => uiConsole.log(`to send: ${ea.verb.display[state.lang_iso]} ${ea.object.definition.name[state.lang_iso + '-' + state.local_iso]}`))

          if (state.send_enabled) {
            tincan.sendStatements(statements, (error, xhr) => {
              if (R.any(ea => ea.err)(error)) {
                throw new Error(R.compose(R.prop('err'), R.find(ea => ea.err))(error))
              } else {
                saveStatementCallback.call(undefined, xhr)
              }
            })
          } else {
            console.log('(not) send:', statements)
          }
        }
      }
    }

    const RevealxAPI = (Reveal, {profile_data, statements, tincan}) => {
      const _xapi = XAPI(tincan)

      // TODO: is there a functional approach?
      // provide global handle
      window.xapi = wrapped_custom_fns(statements, _xapi, profile_data)

      const listenerFn = attachListeners(selectAscertain(_xapi, {
        fn_list: statements,
        profile_data
      }))

    }

    const setupTinCan = (config) => {
      /* Set up TinCanJS */
      config.registration = TinCan.Utils.getUUID()
      var tincan = new TinCan({
        registration: config.registration,
        actor: {
          name: config.actor.name,
          mbox: config.actor.mbox
        },
        activity: config.activity,
        recordStores: [
          {
            endpoint: config.endpoint,
            username: config.authUser,
            password: config.authPassword,
            allowFail: false
          }
        ]
      })

      return {tincan, registration: config.registration}
    }

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    export const getActorName = async (shell, actor) => {
      const promise = new Promise(function(resolve, reject) {
        // const parent = document.createElement('div')
        shell.setAttribute('class', 'bottom_left')
        shell.style.zIndex = 3
        // shell.append(parent)

        const mbox_input = document.createElement('input')
        mbox_input.setAttribute('type', 'text')
        mbox_input.setAttribute('placeholder', actor.mbox.replace(/^mailto:/, ''))
        shell.append(mbox_input)

        const name_input = document.createElement('input')
        name_input.setAttribute('placeholder', actor.name)
        name_input.setAttribute('type', 'text')
        shell.append(name_input)

        const submit = document.createElement('input')
        submit.setAttribute('type', 'submit')
        shell.append(submit)

        submit.addEventListener('click', (e) => {
          resolve({
            mbox: `mailto:${validateEmail(mbox_input.value)
              ? mbox_input.value
              : actor.mbox}`,
            name: name_input.value || actor.name
          })
          shell.parentNode.removeChild(shell)
        })
      })
      return promise
    }

    const actorNameUI = async (shell, actor) => {
      const user_actor = await getActorName(shell, actor)
      uiConsole.log(`actor mbox set to ${user_actor.mbox}`)
      uiConsole.log(`actor name set to ${user_actor.name}`)
      return user_actor
    }

    const rendeUIHelpers = (profile_data) => {
      const [reveal_elem] = document.getElementsByClassName("reveal")

      const debugger_parent = document.createElement("div")
      const statement_helper_parent = document.createElement("div")
      const toggle_parent = document.createElement("div")

      reveal_elem.appendChild(debugger_parent)
      reveal_elem.appendChild(statement_helper_parent)
      reveal_elem.appendChild(toggle_parent)

      const debugger_node = uiConsole.init(debugger_parent)
      const statement_helper_node = statementHelper(statement_helper_parent, profile_data, state.lang_iso)
      statement_helper_node.style.marginBottom = '2rem'

      const triggerFn = () => {
        debugger_parent.style.visibility = Boolean(state.debug)
          ? 'visible'
          : 'hidden'
        statement_helper_parent.style.visibility = Boolean(state.statement_helper)
          ? 'visible'
          : 'hidden'
        return state
      }

      const toggle_node = toggleState(toggle_parent, state, triggerFn)

      return triggerFn
    }


    const attachListeners = (selectAscertain) => {
      const listenerFn = (event) => {
        selectAscertain.call(undefined, (event.currentSlide || event.fragment))
      }
      const evt_keys = ['ready', 'slidechanged', 'fragmentshown']
      Reveal.addEventListener(evt_keys[1], listenerFn)
      Reveal.addEventListener(evt_keys[2], listenerFn)
      if (!Reveal.isReady()) {
        Reveal.addEventListener(evt_keys[0], listenerFn)
      } else {
        listenerFn({currentSlide: Reveal.getCurrentSlide()})
      }
      return new Map([
        [evt_keys, listenerFn]
      ])
    }

    const wrapped_custom_fns = (fns, _xapi, profile_data) => {
      // state Map([fn, 0]) generator
      fns[Symbol.iterator] = function* () {
        yield* Object.values(this).map(ea => [ea, 0])
      }

      const fn_state = new WeakMap(fns)

      return Object.freeze(R.mapObjIndexed((fn, key, obj) => (arg, option) => {
        // prevent fns with 'once' param to run more than once
        if (option === 'once' && fn_state.get(fn) === 1) {
          return
        }

        const user_val = fn.call(undefined, arg)

        const experiences = [strToVerbActivity(user_val, profile_data)]

        if (experiences) {
            fn_state.set(fn, 1)
          sendExperiences(_xapi, {experiences})
        }

        return user_val
      })(fns))
    }


    const strToVerbActivity = (str, profile_data) => {
      const splitstr = checkStringSplit(str)
      if (splitstr) {
        const [verb, activity] = splitstr
        return dotVerbActivity({
            verb,
            activity
          }, state.lang_iso, profile_data)
      }
    }

    const checkStringSplit = (str) => {
      if (!str.includes('.')) {
        uiConsole.log(`Expected dot notation in string "${str}"`)
        return
      }

      const verb_activity_str = str.split('.')

      if (verb_activity_str.length !== 2) {
        uiConsole.log(`Expected ${str} as verb.activity`)
        return
      }

      return verb_activity_str
    }

    const selectAscertain = (_xapi, { fn_list, profile_data }) => (element) => {
      const {xapi: arg, name, description, activityId: overrideID} = element.dataset
      const id = overrideID || activityId()

      if (arg && statement_log.checkAvailable(element, arg)) {
        let verb,
          activity,
          experiences = []

        // for dot_statement data
        if (typeof arg === 'string' && arg.includes('.')) {
          experiences = [strToVerbActivity(arg, profile_data)]
        } else {
          // we test for statement functions to call
          const dot_fn_result = pickFnCall(fn_list, arg)
          if (dot_fn_result.debug) {
            uiConsole.log(dot_fn_result.message)
            return // halt execution if debug mode
          }

          if (typeof dot_fn_result === 'string') {

            experiences = [strToVerbActivity(dot_fn_result, profile_data)]

          } else if (Array.isArray(dot_fn_result)) {

            experiences = dot_fn_result.map(ea => strToVerbActivity(ea, profile_data))

          }
        }
        sendExperiences(_xapi, {experiences, id, name, description})
      }
    }

    const sendExperiences = (_xapi, { experiences, id, name, description }) => {
      const statements = experiences.map(ea => {
        const verb_obj = ea[0]
        const activity_obj = ea[1]
        const [verb_lemma] = R.keys(verb_obj)
        const [activity_lemma] = R.keys(activity_obj)

        const [found_verb] = R.values(verb_obj)
        const [found_activity] = R.values(activity_obj)

        // we take the first, b/c a verb lemma could have multiple entries
        // this could be handled more elegantly, such as letting the designer
        // choose between which statement
        const [first_xapi_verb, ...rest_xapi_verb] = found_verb
        const [first_xapi_activity, ...rest_xapi_activity] = found_activity

        if (rest_xapi_verb.length > 0) {
          uiConsole.log(`There are multiple records for "${verb_lemma}"`, JSON.stringify(R.pluck('id', found_verb)))
        }

        if (rest_xapi_activity.length > 0) {
          uiConsole.log(`There are multiple records for "${activity_lemma}"`, JSON.stringify(R.pluck('id', found_activity)))
        }

        if (first_xapi_verb && first_xapi_activity) {
          return statement.fromVerbActivityProfile(first_xapi_verb, first_xapi_activity, { id, name, description})
        } else {

          // Log to ui
          if (!first_xapi_verb) {
            uiConsole.log(`Did not find match for "${verb_lemma}" in ${verb_lemma}.${activity_lemma}`)
          }

          if (!first_xapi_activity) {
            uiConsole.log(`Did not find match for "${activity_lemma}" in ${verb_lemma}.${activity_lemma}`)
          }

          return
        }
      })

      _xapi.saveStatements(R.filter(R.identity)(statements), (xhr) => {
        if (xhr.length > 0) {
          xhr.map(ea => (uiConsole.log(`confirmed received: ${ea.verb.toString()}.${ea.target.toString()}`)))
        }
      })
    }

    let activityId = (Reveal, version) => () => {
      const {h, v} = Reveal.getIndices()
      const iri = window.location.host ? window.location.origin : `${window.location.origin}${window.location.pathname}`
      return `${iri}#/${h}/${v}:${version}`
    }

    export default async (Reveal, {
      authority = {
        name: "reveal.js-xapi-plugin"
      },
      dev_mode = false,
      getActorOnInit,
      lang_ISO = navigator.language.split('-')[0],
      local_ISO = navigator.language.split('-')[1] || '',
      lrs,
      profiles,
      send_enabled,
      statement_helper,
      statements,
      version,
    }) => {

      Reveal.configure({ history: true })

      // connect function to component
      const [parent] = document.getElementsByClassName("reveal")
      const shell = document.createElement("div")
      let config = lrs
      parent.appendChild(shell)

      config.actor = getActorOnInit
        ? await actorNameUI(shell, config.actor)
        : config.actor

      state.dev_mode = dev_mode
      state.send_enabled = send_enabled
      state.statement_helper = statement_helper
      state.lang_iso = lang_ISO
      state.local_iso = local_ISO

      activityId = Object.freeze(activityId(Reveal, version))
      const id = activityId()
      statement = Statement(id, state.lang_iso, state.local_iso, authority)

      const {tincan} = setupTinCan(config)
      const profile_data = await getProfiles(profiles)

      const allslides = Reveal.getSlides()

      const xapi_map = mapElementXapi(allslides)

      statement_log = statementLog(xapi_map)

      if (state.dev_mode) {
        const triggerFn = rendeUIHelpers(profile_data)()
      }

      return RevealxAPI(Reveal, {profile_data, statements, tincan})
    }
