import React from 'react'
import '../../../../button.scss'

const DrawCardButton = (props) => {

  const drawCard = () => {
    props.drawCard();
  }

  return (
    <div>
      <button className="btn-newDeck btn--stripe" onClick={drawCard} >Draw Card</button>
    </div>
  )
}

export default DrawCardButton