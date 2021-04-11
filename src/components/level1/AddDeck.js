import React, {useState} from 'react'
import DeckCreationForm from './level2/DeckCreationForm'

const AddDeck = (props) => {

  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>
      <button className="btn-newDeck btn--stripe" onClick={() => setToggleForm(!toggleForm)}>Create a New Deck</button>
      {toggleForm === true ? <DeckCreationForm decks={props.decks} toggle={toggleForm} toggleForm={setToggleForm} /> : null}
    </div>
  )
}

export default AddDeck