import React, {useState} from 'react'
import StudyAllFlashDecks from '../StudyAllFlashDecks'
import '../handDrawnBtn.scss'
import '../button.scss'
import '../moreButton.scss'

const StudyAllDecksButton = (props) => {

  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () => {
    setShowComponent(!showComponent)
  }

  const flatDeck = props.decks.flat();


  const allDeckCards = flatDeck.map(deck => {return deck.cards})


  const flatAllDeckCards = allDeckCards.flat();

  return (
    <div>
      <button className="btn btn--stripe" onClick={handleClick} >Study All Decks <br/> Total # of Cards: {flatAllDeckCards.length} </button>
      {showComponent && <StudyAllFlashDecks decks={props.decks} />}
    </div>
  )
}

export default StudyAllDecksButton