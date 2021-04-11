import React, {useState} from 'react'
import './Card.scss'

const Card = (props) => {
  const [toggle, setToggle] = useState(true)
  



  return (
    <div className="card-container">
      <div className="card-body">


        <div className="card-side side-front">
          <div className="side-front-content">
          
            {props.english}
          
          </div>
        </div>
       


          <div className="card-side side-back">
          <div className="side-front-content">
          {props.russian}
          </div>
        </div>
      
        </div>
    </div>
  )
}

export default Card