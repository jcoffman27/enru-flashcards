import React from 'react'
import Deck from './level2/Deck'
import StudyAllDecksButton from './level2/StudyAllDecksButton'
import StudyDeckButton from './level2/level3/StudyDeckButton'
import './handDrawnBtn.scss'
import './moreButton.scss'



//Map over all decks and create a list of deck components with the necessary props like title and number of cards and so on.

const AllDecks = (props) => {

  return (
    <div>
      <h1>En/Ru Flashcards </h1>
      {props.decks.map(deck => 
      {
        return (deck.map( d => {
          return (<span key={d.deck_id}>
            <Deck id={d.deck_id} title={d.title} cards={d.cards} deck={d} />
            <StudyDeckButton className="btn" deck={d.cards} deck_id={d.deck_id} />
          </span>)}
          ))
        })}
        <StudyAllDecksButton className="lined thin" totalCards={props.totalCards} decks={props.decks} onClick={props.onClick} />
    </div>
  )
}

export default AllDecks