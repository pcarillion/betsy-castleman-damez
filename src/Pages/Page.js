import React, {useState, useEffect} from 'react'
import { useParams  } from 'react-router-dom';
import api from "../api/APIHandler"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../Components/Layout';

import {StyledContent} from '../Styles/Page';


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
    {status === "ok"
    ? <>
      <h2>{pageData.items[0].fields.name}</h2>
      <StyledContent>{documentToReactComponents(pageData.items[0].fields.textContent)}</StyledContent>
    </>
    : <div>Sorry, there was an error charging data or the page doesn't exist.</div>}
    </Layout>
  )
}

export default Page