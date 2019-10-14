import React from 'react'
import './card.css'

import { PLACEHOLDER } from '../../Utils/placeholders'

const Card = ({ title, introduction, extra, points, complete }) =>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100  center">
    <img src={extra.image ? extra.image : PLACEHOLDER} className="db w-100 br2 br--top" alt={title} />
    <div className='pa2'>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="title mv0">{title}</h1>
        </div>
      </div>
      <span>Points: {points}</span>
      <p> Completed:  {complete ? <span role="img" aria-label='clap'>✅</span> : 'Not yet'}</p>
      <br />
      <p className="f5 lh-copy measure mt2 mid-gray">
        {introduction}
      </p>
    </div>
    </div>
  </article>

export default Card
