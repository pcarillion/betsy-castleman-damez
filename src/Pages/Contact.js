import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'

import { StyledForm, StyledFormContainer } from '../Styles/Form'
import { useParams  } from 'react-router-dom';
import emailjs from '@emailjs/browser'

const Contact = () => {
  let {result} = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contactForm");
    // let formData = new FormData(myForm);
    // formData.append('service_id', '3439D9FF76F21C0DFE1D4535');
    // formData.append('template_id', 'template_okstuxs');
    // formData.append('user_id', 'user_DlYdoyEkxwf84MFRThvCk');
 
    // fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    //   method: "POST",
    //   headers: { "Content-Type": "false" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => setFormSubmitted(true))
    //   .catch((error) => alert(error));
    emailjs.sendForm("service_leait64", 'template_d1t3rky', myForm)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setFormSubmitted(true)
   }, function(error) {
      console.log('FAILED...', error);
   });

  };
  useEffect(() => {
    document.getElementById("contactForm").addEventListener("submit", handleSubmit);
  }, [])

  return (
    <Layout>
      <StyledFormContainer >
          <StyledForm name="contact" id ="contactForm">
          {
            formSubmitted ? 
            <p>Your message was sent, thank you for reaching out.<br/><br/>Nous vous remercions pour votre message, celui-ci a bien été envoyé.</p> :
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
      </StyledFormContainer>
    </Layout>
  )
}

export default Contact