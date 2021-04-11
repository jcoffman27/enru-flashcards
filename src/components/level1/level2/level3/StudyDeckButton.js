import React, {useState} from 'react'
import StudyFlashDeck from './level4/StudyFlashDeck'

const StudyDeckButton = (props) => {

  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () => {
    setShowComponent(!showComponent)
  }
  console.log(props)

  return (
    <span>
      <button className="btn btn--stripe" onClick={handleClick} >Study Deck </button>
      {showComponent && <StudyFlashDeck deck_id={props.deck_id} deck={props.deck} />}
    </span>
  )
}

export default StudyDeckButton