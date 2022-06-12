import React, { useState } from 'react'

import { StyledForm, StyledFormContainer } from '../Styles/Form'

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <StyledFormContainer >
      <StyledForm name="contact" method="POST" data-netlify="true" >

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
    </StyledFormContainer>

  )
}

export default Contact