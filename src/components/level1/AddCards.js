import React, {useState} from 'react'
import CardCreationForm from './level2/CardCreationForm'
import './button.scss'
import './handDrawnBtn.scss'

const AddCards = (props) => {

const [toggleForm, setToggleForm] = useState(false)
console.log(props)
return (
  <div>
    <button className="btn btn--stripe" onClick={() => setToggleForm(!toggleForm)}>Add a New Card</button>
    {toggleForm === true ? <CardCreationForm deck={props.deck} toggle={toggleForm} toggleForm={setToggleForm} /> : null}
  </div>
  )
}

export default AddCards