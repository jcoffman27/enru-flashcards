import React, {useState} from 'react'
import ViewDeckContents from './level3/ViewDeckContents'
import StudyDeckButton from './level3/StudyDeckButton'



const Deck = (props) => {
  const [showDeckContents, setShowDeckContents] = useState(false)
  console.log(props, "Coming to Deck.js")
  

  return (
    
    <span key={props.deck_id}>
      <button className="btn btn--stripe" onClick={() => setShowDeckContents(!showDeckContents)}>{props.title} <br/> Total # of Cards: {props.cards.length} </button>
      
      {/* <StudyFlashDeck cards={props.cards} /> */}
      {showDeckContents === true ? <ViewDeckContents cards={props.cards} deck={props.deck}/> : null}
    </span>
  )
}

export default Deck