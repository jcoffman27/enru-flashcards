import React from 'react'
import AllDecks from './level1/AllDecks'
import AddDeck from './level1/AddDeck'
import './level1/button.scss'


const decks = [
  [ {deck_id: '1', title: 'Greetings', cards: [
    {
      card_id: '1',
      russian: 'Доброе утро!',
      english: 'Good morning!'
    },
    {
      card_id: '2',
      russian: 'Добрый день!',
      english: 'Good afternoon!'
    },{
      card_id: '3',
      russian: 'Добрый вечер!',
      english: 'Good evening!'
    },
    {
      card_id: '4',
      russian: 'спокойной ночи!',
      english: 'Good night!'
    },{
      card_id: '5',
      russian: 'Здравствуйте!',
      english: 'Hello!'
    }
  ]}
  ]
]



const FlashCardHome = (props) => {

  return (
    <div>
      <div className="decks-container">
      <AllDecks decks={decks} />
      </div>

      <div className="newDeck-footer">
      
        <AddDeck decks={decks} />
      </div>

    </div>
  )
}

export default FlashCardHome