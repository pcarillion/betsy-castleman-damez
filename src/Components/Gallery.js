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


  let assetsArray = data.includes.Asset
  let picturesOrderedArray = data.items[0].fields.pictures
  for (let i = 0; i < assetsArray.length; i ++) {
    for (let j = 0; j < picturesOrderedArray.length; j ++){
      if (assetsArray[j].fields.file.url.includes(picturesOrderedArray[i].sys.id)) {
        picturesOrderedArray[i].sys.url = assetsArray[j].fields.file.url
        picturesOrderedArray[i].sys.title = assetsArray[j].fields.title
        picturesOrderedArray[i].sys.description = assetsArray[j].fields.description
      }
    }
  }
  
  return (
    <StyledGalleryPage  className="hey">
      {carrousel && <Carrousel open={carrousel} pictures={picturesOrderedArray} selectedPicture={selectedPicture} callback={changePicture} callbackClose={handleClose}/>}
      <h2 style={{marginLeft: "1%"}}>{data.items[0].fields.name}</h2>
      <div className="description">
        {documentToReactComponents(data.items[0].fields.description)}
      </div>
      <StyledGallery>
        {picturesOrderedArray.map((picture, i) => {
          return (
            <div className="card" key={i}  onClick={() => handleCarrousel(i)}>
                <img src={picture.sys.url} alt={picture.sys.title}/>
                <p>{picture.sys.title}</p>
                {/* <p>{picture.sys.description}</p> */}
            </div>
          )
          }
        )}
      </StyledGallery>
    </StyledGalleryPage>
  )
}

export default Gallery