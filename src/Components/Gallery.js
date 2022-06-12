import React, {useState, useEffect} from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Carrousel from './Carrousel'

import { StyledGalleryPage, StyledGallery } from '../Styles/Gallery'

const Gallery = ({data}) => {
  const [carrousel, setCarrousel] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState(null)

  const handleCarrousel = (pictureIndice) => {
    setCarrousel(carrousel => !carrousel)
    setSelectedPicture(pictureIndice)
  }

  const changePicture = (value) => {
    setSelectedPicture(selectedPicture => selectedPicture += value)
  }

  const handleClose = () => setCarrousel(false)

  console.log(data.includes.Asset)
  
  return (
    <StyledGalleryPage  className="hey">
      {carrousel && <Carrousel open={carrousel} pictures={data.includes.Asset} selectedPicture={selectedPicture} callback={changePicture} callbackClose={handleClose}/>}
      <h2 style={{marginLeft: "1%"}}>{data.items[0].fields.name}</h2>
      <div className="description">
        {documentToReactComponents(data.items[0].fields.description)}
      </div>
      <StyledGallery>
        {data.includes.Asset.map((picture, i) => {
          return (
            <div className="card" key={i}  onClick={() => handleCarrousel(i)}>
                <img src={picture.fields.file.url} alt={picture.fields.title}/>
                <p>{picture.fields.title}</p>
                <p>{picture.fields.description}</p>
            </div>
          )
          }
        )}
      </StyledGallery>
    </StyledGalleryPage>
  )
}

export default Gallery