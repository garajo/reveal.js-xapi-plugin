import {h} from 'preact'

export default(props) => {
  return (
    <div style={{ minHeight: '30px', maxHeight: '300px', width: '100%', overflowY: 'scroll' }}>
      <ul class="statement_list">
        {props.data.sort((a, b) => {
          const termA = a.string.toLowerCase() // ignore upper and lowercase
          const termB = b.string.toLowerCase() // ignore upper and lowercase
          if (termA < termB) {
            return -1
          }
          if (termA > termB) {
            return 1
          }
          return 0
        }).map(ea => {
          return (
            <li
              class="statement-item"
            ><a
              title={`${ea.concept.definition[props.langISO]}  ${ea.concept.id}`}
              target="_blank"
              href={`http://xapi.vocab.pub/describe/?url=${ea.concept.id}`}
            ><span
              dangerouslySetInnerHTML={{__html: `${(ea.string)}`}}
            ></span></a> <span class="type_notation">[{ea.concept.type}]</span></li>)
        })}
      </ul>
    </div>
  )
}
