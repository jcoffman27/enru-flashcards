import React from 'react'
import Card from './level4/level5/level6/Card'
import AddCards from '../../AddCards'
import EditCards from './level4/level5/EditCards'



const ViewDeckContents = (props) => {
  console.log(props)
  return (
    <div>
      <h1>View Cards</h1>
      {props.cards.map(card => {return(<Card key={card.card_id} card_id={card.card_id} russian={card.russian} english={card.english} />)})}
      <AddCards deck={props.deck}/>
      <EditCards />
    </div>
  )
}

export default ViewDeckContents