'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')

const XAPI = (config) => {
  const lrs = new TinCan.LRS(config.lrs)

  return Object.freeze({
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) { throw new Error('expecting array') }
      lrs.saveStatements(
        statements,
        {
          callback: function (err, xhr) {
            if (err !== null) {
              if (xhr !== null) {
                saveStatementCallback("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")")
                // TODO: do something with error, didn't save statement
                return
              }

              saveStatementCallback("Failed to save statement: ", err)
              // TODO: do something with error, didn't save statement
              return
            }

            saveStatementCallback("Statement saved")
            // TODO: do something with success (possibly ignore)
          }
        }
      )
    },

    completedStatement: () => {
      const completedAction = R.merge(
        {
          verb: {
            id: 'http://adlnet.gov/expapi/verbs/completed',
          },
          target: {
            id: 'http://adlnet.gov/expapi/activities/lesson',
            definition: {
              name: {
                'en-US': 'A presentation'
              },
              description: {
                'en-US': 'An xAPI enable Reveal presentation'
              }
            }
          },
        }
        , config.statement.completed
      )
      const completedStatement = R.merge(completedAction, config.statement)
      return new TinCan.Statement(completedStatement)
    },
  })
}

const userDialog = (...args) => console.log(...args)

/*
  xapi
*/
let xapi

export const composeEndMessage = (stmnt) => `Hooray, you\'re done! ${JSON.stringify(stmnt, null, 4)}`

export const saveEndOnce = R.once((endstmt) => {
  xapi.saveStatements([endstmt], userDialog)
  return composeEndMessage(endstmt)
})

export const initSlidesConsumed = (allslides) => {
  // console.log('allslides', allslides)
  // console.log(R.zip(allslides, new Uint8Array(allslides.length)))
  // console.log(R.map(ea => isVerticalSlide(ea), allslides))
  // console.log(R.toPairs(ea => isVerticalSlide(ea), allslides))
  return R.zip(allslides, new Uint8Array(allslides.length))
}

// fn that calculates how much of the pages have been loaded
export const allSlidesConsumed = R.all(e => e == 1)

/*

*/
export const ifFullyConsumedElse = (slidesmap) => R.ifElse(
  allSlidesConsumed,
  () => {
    const endMessage = saveEndOnce(xapi.completedStatement())
    return {
      completed: true,
      message: endMessage,
    }
  },
  () => {
    const completePercStr = (R.countBy(e => e)(slidesmap)[1]/slidesmap.length).toLocaleString("en", { style: "percent" })
    return {
      completed: false,
      message: `You have completed ${completePercStr} of the presentation.`
    }
  }
)(slidesmap)

export const updateSlidesConsumed = (currentSlide, indexes, slidesmap) => {
  console.log(slidesmap[indexes.indexh])
  slidesmap[indexes.indexh][1] = 1
  console.log('slidesmap', slidesmap)

  return slidesmap
}

export const reportIfPresoCompleted = (e, slidesmap, completedCallback) => {

  console.log('e', e)
  console.log('slidesmap', slidesmap)

  slidesmap = updateSlidesConsumed(e.currentSlide, R.pick(['indexh', 'indexv'], e), slidesmap)
  const completedStatus = ifFullyConsumedElse(slidesmap)
  if ( completedStatus.completed ) {
    completedCallback()
  }
  userDialog('completedStatus', completedStatus);
}

export const completedStatusHandler = (slidesmap, removeListener) => e => reportIfPresoCompleted(e, slidesmap, removeListener)

export const initXAPI = (c) => XAPI(c)

/** private methods of Reveal
 * Checks if the current or specified slide is vertical
 * (nested within another slide).
 *
 * @param {HTMLElement} [slide=currentSlide] The slide to check
 * orientation of
 * @return {Boolean}
 */
const isVerticalSlide = ( slide ) => {
  return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );
}

const findSlideIndex = (currentSlide, slidesmap) => R.findIndex(R.propEq(0, currentSlide))(slidesmap)
/*
  Searches for currentSlide in slides map and updates consumed value
*/
export const updateSlidemap = (currentSlide, slidesmap) => {
  console.log('findSlideIndex(currentSlide, slidesmap)', findSlideIndex(currentSlide, slidesmap))
  slidesmap = R.update(findSlideIndex(currentSlide, slidesmap), [ currentSlide, 1 ])(slidesmap)
  console.log('slidesmap', slidesmap)
}

export const readyEventHandler = (e, slidesmap) => {
  return updateSlidemap(e.currentSlide, slidesmap)
}

export const mapSlideChangeListeners = reveal => R.map(ea => {
  reveal.addEventListener( 'slidechanged', ea)
  return ea
})

let temp

const RevealxAPI = (reveal, config) => {

  temp = reveal

  console.log('config', config)
  

  xapi = initXAPI(config)
  const { events={} } = config

  console.log('events', events)

  
  const { slidechanged, ...rest } = events

  if (!reveal) { throw new Error('need Reveal instance') }
  // console.log('events', events);
  // console.log('reveal', reveal)
  // // const slidesmap = initSlidesConsumed(reveal.getTotalSlides())
  // console.log('reveal.getTotalSlides()', reveal.getTotalSlides())
  const slidesmap = initSlidesConsumed(reveal.getSlides())
  // Map[['h', 0], ['v', 0]]


  console.log('slidechanged', slidechanged)
  const {
    every,
    first,
    last,
    ...slidechangerest,
  } = slidechanged

  const pagenumEvents = R.pickBy((val, key) => parseFloat(key))(slidechangerest)

  console.log('pagenumEvents', pagenumEvents)

  
  const [
    completedEventListener,
  ] = mapSlideChangeListeners(reveal)([
    completedStatusHandler(
      slidesmap,
      () => reveal.removeEventListener('slidechanged', completedEventListener),
    ),
  ])
  
/*
*/

  reveal.addEventListener('ready', (e) => readyEventHandler(e, slidesmap))

  return {
    slidesmap,
    xapi,
  }
}

export default (reveal, config) => RevealxAPI(reveal, config)
