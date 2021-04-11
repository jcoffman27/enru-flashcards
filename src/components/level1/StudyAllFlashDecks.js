import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import Card from './level2/level3/level4/level5/level6/Card'
import DrawCardButton from './level2/level3/level4/level5/DrawCardButton'
import './handDrawnBtn.scss'

// import Card from '../Card'
// import DrawCardButton from '../DrawCardButton'
//Possibly reduce all available decks into seperate objects and then do a lodash merge?


const StudyAllFlashDecks = (props) => {

  const flatDeck = props.decks.flat();
  console.log(flatDeck)

  const allDeckCards = flatDeck.map(deck => {return deck.cards})
  console.log(allDeckCards)

  const flatAllDeckCards = allDeckCards.flat();
  console.log(flatAllDeckCards)

  // const totalCards = {}

  // const totalDeck = _.merge(totalCards, flatAllDeckCards)

  //I may need to unmerge this and iterate through it as an array???
  // console.log(totalDeck)

  //Get random card from the totalDeck
  const getRandomCard = (flatAllDeckCards) => {
    var card = flatAllDeckCards[Math.floor(Math.random() * flatAllDeckCards.length)]
    console.log(card)
    return(card)
  }
  
  console.log(flatAllDeckCards.length)

  const [currentCard, setCurrentCard] = useState({});
  const [deckLength, setDeckLength] = useState(flatAllDeckCards.length)

  
  useEffect(() => {
    setCurrentCard(getRandomCard(flatAllDeckCards))

  }, [])
  

    //Update card on button click
  const updateCard = () => {
    setCurrentCard(getRandomCard(flatAllDeckCards))
  }

  return (
    <div>
    <h1>Study All Decks</h1>
      <Card english={currentCard.english} russian={currentCard.russian}  />
      <DrawCardButton drawCard={updateCard} /> 
    </div>
  )
}

export default StudyAllFlashDecks