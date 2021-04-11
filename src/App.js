import React, {Fragment} from 'react'
import Home from './components/Home'
import FlashCardHome from './components/FlashCardHome'



const App = () => {
  return(
    <Fragment>
      <Home>
        <FlashCardHome />
        {/* <MemoryGameHome /> */}
      </Home>
    </Fragment>
  )
}

export default App