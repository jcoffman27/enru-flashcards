import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import Card from './level5/level6/Card'
import DrawCardButton from './level5/DrawCardButton'
import '../../../button.scss'

// import Card from '../Card'
// import DrawCardButton from '../DrawCardButton'
//Possibly reduce all available decks into seperate objects and then do a lodash merge?


const StudyFlashDeck = (props) => {
   console.log(props)
  const flatDeck = props.deck
  console.log(flatDeck)

  


  //Get random card from the Deck
  const getRandomCard = (flatDeck) => {
    var card = flatDeck[Math.floor(Math.random() * flatDeck.length)]
    console.log(card)
    return(card)
  }
  
  console.log(flatDeck.length)

  const [currentCard, setCurrentCard] = useState({});

  
  useEffect(() => {
    setCurrentCard(getRandomCard(flatDeck))

  }, [])
  

    //Update card on button click
  const updateCard = () => {
    setCurrentCard(getRandomCard(flatDeck))
  }

  return (
    <div>
    <h1>Study</h1>
    {}
      <Card english={currentCard.english} russian={currentCard.russian}  />
      <DrawCardButton className="btn-newDeck btn--stripe" drawCard={updateCard} /> 
    </div>
  )
}

export default StudyFlashDeck