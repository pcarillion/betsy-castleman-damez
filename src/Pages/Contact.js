import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'

import { StyledForm, StyledFormContainer } from '../Styles/Form'
import { useParams  } from 'react-router-dom';

const Contact = () => {
  let {result} = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false)
  useEffect(()=> {
    if(result==="success") setFormSubmitted(true)
  },[result])
  return (
    <Layout>
      <StyledFormContainer >
        <form  name="contact" method="POST" data-netlify="true" action="/contact/success">
          <StyledForm>

          {
            formSubmitted ? 
            <p>Your message was sent, thank you for reaching out.</p> :
            <>
              <h3>Contact</h3>
            
              <label>Your Name: </label>
              <input type="text" name="name" />
            
            
              <label>Your Email: </label>
              <input type="email" name="email" />

              <label>Object: </label>
              <input type="object" name="object" />
            
            
            
              <label>Message:</label> 
              <textarea name="message"></textarea>
            
            
              <button type="submit">Send</button>
            </>
          }
          </StyledForm>
        </form>
      </StyledFormContainer>
    </Layout>
  )
}

export default Contact