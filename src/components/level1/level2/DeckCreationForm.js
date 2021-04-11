import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import App from '../../../App'
import firebase from '../../../utils/firebase'
import '../button.scss'
const DeckCreationForm = (props) => {
  const [title, setTitle] = useState('');
  console.log(props)

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value)
  }


  const createDeck = () => {
    const deck = 
      [{
        deck_id: props.decks.length + 1,
        title: title,
        cards:[]
      }]
    ;
    

    //A push generates a new data path, with a server timestamp as its key. These keys look like -JiGh_31GA20JabpZBfa, so not numeric.
    props.decks.push(deck)

    ReactDOM.render(<App />, document.getElementById('root'))
  }

   const handleOnSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
      setTitle('')
      props.toggleForm(!props.toggle)
   }

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>Deck Name:</p>
        <input type="text" onChange={handleOnChangeTitle} value={title}/>
        <button className="btn btn--stripe" onClick={createDeck}>Add Deck</button>
      </form>

    </div>
  )
}

export default DeckCreationForm