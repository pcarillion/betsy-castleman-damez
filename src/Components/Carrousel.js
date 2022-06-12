import React from 'react'

import { StyledCarrousel } from '../Styles/Carrousel'

import arrow from '../static/arrow.svg'

const Carrousel = ({pictures, selectedPicture, callback, callbackClose}) => {
  return (
    <StyledCarrousel>
      <div className="corner-section">
        <img src={arrow} className="chevron close" onClick={() => callbackClose()}/>
        <p>{pictures[selectedPicture].fields.title}</p>
        <p>{pictures[selectedPicture].fields.description}</p>
      </div>
      <div>
        {selectedPicture !== 0 && <img src={arrow} className="chevron left" onClick={() => callback(-1)}/>}
      </div>
      <img src={pictures[selectedPicture].fields.file.url} className="mainPicture"/>
      <div>
        {(selectedPicture +1 !== pictures.length) && <img src={arrow} className="chevron right" onClick={() => callback(1)}/>}
      </div>
    </StyledCarrousel>
  )
}

export default Carrousel