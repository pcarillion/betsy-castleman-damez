import React from 'react'

import { StyledCarrousel } from '../Styles/Carrousel'

import arrow from '../static/arrow.svg'

const Carrousel = ({pictures, selectedPicture, callback, callbackClose}) => {
  console.log(pictures[selectedPicture])
  return (
    <StyledCarrousel>
      <div className="corner-section">
        <img src={arrow} className="chevron close" onClick={() => callbackClose()}/>
        <p>{pictures[selectedPicture].sys.title}</p>
        <p>{pictures[selectedPicture].sys.description}</p>
      </div>
      <div>
        {selectedPicture !== 0 && <img src={arrow} className="chevron left" onClick={() => callback(-1)}/>}
      </div>
      <img src={pictures[selectedPicture].sys.url} className="mainPicture"/>
      <div>
        {(selectedPicture +1 !== pictures.length) && <img src={arrow} className="chevron right" onClick={() => callback(1)}/>}
      </div>
    </StyledCarrousel>
  )
}

export default Carrousel