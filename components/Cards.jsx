import React from 'react'

function Cards(props) {
  return (
    <>
    <div className='container'>
    <div className="card" style={{width: "18rem"}}>
  <img src={props.data.mg} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5> {props.data.price} </h5>
    <p className="card-text">{props.data.prg}</p>
    <a href="https://www.google.com/" class="btn btn-primary">{props.data.btn}</a>
  </div>
</div>
</div>
    </>
  )
}

export default Cards