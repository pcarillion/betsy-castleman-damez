import React, {useState, useEffect} from 'react'
import { useParams  } from 'react-router-dom';
import api from "../api/APIHandler"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../Components/Layout'

const Page = () => {

  let {slug} = useParams();

  const [status, setStatus] = useState("loading")
  const [pageData, setPageData] = useState()

  const initDatas = async () => {
      let params = {
          "content_type": "page",
          "access_token": "xG0UPgdg5xb2CB8vN6s1pcBLmlqpnuREmNU6e4fsmCc",
          "fields.slug": slug
      }
      await api.get('entries', params)
      .then(res => {
          if (res.status === 200 && res.data.items.length > 0) {
              setPageData(res.data)
              console.log(res.data)
              setStatus("ok")
          } else {
              setStatus("error")
          }
          // setPageData(galleryMock)
          // setStatus("ok")
      })
      .catch(res => {setStatus("error")})
  }

  useEffect(() => {
    setStatus("loading")
    initDatas()
  }, [slug])
  return (
    <Layout>
    <h3>{pageData.items[0].fields.name}</h3>
      {documentToReactComponents(pageData.items[0].fields.textContent)}
    </Layout>
  )
}

export default Page