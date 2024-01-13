import React from 'react'
import "./Comment.css"

export default function Comment ({cancelAction}) {
  return (
    <div className='modal-parent active'>
        <div className='comment-container'>
            <p>سلام من از این محصول رضایت کافی رو دارم.</p>
            <button onClick={() => cancelAction()}>بستن</button>
        </div>
    </div>
  )
}
