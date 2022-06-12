import React, {useState, useEffect} from 'react'
import api from "../api/APIHandler"
import { useParams  } from 'react-router-dom';
import galleryMock from '../mocks/gallery.mock';

import Gallery from '../Components/Gallery'

const Collection = () => {

    let {slug} = useParams();

    const [status, setStatus] = useState("loading")
    const [pageData, setPageData] = useState()

    const initDatas = async () => {
        let params = {
            "content_type": "category",
            "access_token": "xG0UPgdg5xb2CB8vN6s1pcBLmlqpnuREmNU6e4fsmCc",
            "fields.slug": slug
        }
        await api.get('entries', params)
        .then(res => {
            if (res.status === 200 && res.data.items.length > 0) {
                setPageData(res.data)
                setStatus("ok")
            }
            // else {setStatus("error")}
            setPageData(galleryMock)
            setStatus("ok")
        })
        .catch(res => {setStatus("error")})
    }

    useEffect(() => {
        setStatus("loading")
        initDatas()
      }, [slug])


      
  return (
    <>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Sorry, there was an error charging data or the page doesn't exist.</div>}
        {status === "ok" && <Gallery data={pageData}/>}
        
    </>
  )
}

export default Collection