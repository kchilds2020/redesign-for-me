import React, {useState} from 'react'
import { FiPhoneCall } from "react-icons/fi";
import styled from "styled-components"

const Contact = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [message,setMessage] = useState('')

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
      const data = {
          Name: name,
          Email: email,
          Number: number,
          Message: message
      }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", data })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    
  };

    return (
        <Body>
            <div>
            <Info>
                <h2>Contact Us for a Free Quote! </h2>
                <p>Please complete the form and I will get back to you as soon as possible! You can also email me at kevinchilds@redesignforme.com.</p>

            </Info>
                
            <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <Center><h2>Contact <FiPhoneCall size={30} style={{color: ' #108db8'}}/></h2></Center>
               <input type="hidden" name="form-name" value="contact" />
                <label>Name</label>
                <Input type="text" value = {name} onChange = {(e) => {setName(e.target.value)}} name = "name"/>
                <label>Email Address</label>
                <Input type="email" value = {email} onChange = {(e) => {setEmail(e.target.value)}} name = "email"/>
                <label>Phone Number</label>
                <Input type="phone" value = {number} onChange = {(e) => {setNumber(e.target.value)}} name = "number"/>
                <label>Message</label>
                <TextArea value={message} onChange={e => setMessage(e.target.value)} name='message' required></TextArea>
                <Button>Submit</Button>
            </Form>
            </div>
        </Body>
    )
}


const Info = styled.div`
    padding: 20px;

    
`
const Form = styled.form`
    box-shadow: 0px 0px 8px #aaa;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 600px) {
        box-shadow: none;
        padding: 0px;
  }
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Body = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    font-size: 18px;
    padding: 20px;
    width: 100%;    
    max-width: 1200px;
`

const Button = styled.button`
    width: 100%;
    border: none;
    background-color: #108db8;
    color: white;
    padding: 5px;
    border-radius: 4px;

    :focus{
        outline: none;
    }
`

const Input = styled.input`
    width: 100%;
    border: none;
    background-color: #f4f4f4;
    padding: 5px;
    border-radius: 4px;

    :focus{
        outline: none;
    }
`

const TextArea = styled.textarea`
    width: 100%;
    border: none;
    background-color: #f4f4f4;
    height: 150px;
    padding: 5px;
    border-radius: 4px;

    :focus{
        outline: none;
    }
`

export default Contact
