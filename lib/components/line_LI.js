import {h, Component} from 'preact'

export default (props) => {
  return (
    <li title={props.title}>{props.data}</li>
  )
}
