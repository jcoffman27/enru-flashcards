import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import App from '../../../App'
import firebase from '../../../utils/firebase'


function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const CardCreationForm = (props) => {
  const [englishCard, setEnglishCard] = useState("")
  const [russianCard, setRussianCard] = useState("")
  const [key, setKey] = useState(0)
  console.log(props)

  const handleOnChangeCardEnglish = (e) => {
    setEnglishCard(e.target.value)
  }
  const handleOnChangeCardRussian = (e) => {
    setRussianCard(e.target.value)
  }

  console.log(props)

  const forceUpdate = useForceUpdate();


  const createCard = () => {

    const card = {
          card_id: props.deck.cards.length + 1,
          russian: russianCard,
          english: englishCard,

    };

    props.deck.cards.push(card)
    ReactDOM.render(<App />, document.getElementById('root'))
  }

   const handleOnSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
      props.toggleForm(!props.toggle)
   }

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>English:</p>
        <input type="text" onChange={handleOnChangeCardEnglish} value={englishCard}/>
        <p>Russian:</p>
        <input type="text" onChange={handleOnChangeCardRussian} value={russianCard}/>

        <button onClick={createCard}>Add Card</button>
      </form>

    </div>
  )
}

export default CardCreationForm