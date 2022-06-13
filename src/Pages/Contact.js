import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'

import { StyledForm, StyledFormContainer } from '../Styles/Form'
import { useParams  } from 'react-router-dom';

const Contact = () => {
  let {result} = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contactForm");
    let formData = new FormData(myForm);
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => alert(error));
  };
  useEffect(() => {
    document.getElementById("contactForm").addEventListener("submit", handleSubmit);
  }, [])

  return (
    <Layout>
      <StyledFormContainer >
        <form id="contactForm" netlify-honeypot="bot-field" name="contact" netlify>
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
            
              <input type="hidden" name="form-name" value="contact" />
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