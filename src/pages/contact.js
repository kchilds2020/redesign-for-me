import React, {useState} from 'react'
import { FcPhone } from "react-icons/fc";
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
                <Center><h2><FcPhone size={40}/> Contact </h2></Center>
            {/* <Form onSubmit={handleSubmit} style={{border: 'none', margin: '0px'}} name="contact" >
                <Field type='text' value={text} setValue={setText} label='Name' labelPos='top' name='name'/>
                <Field type='email' value={email} setValue={setEmail} label='Email Address' labelPos='top' name='email'/>
                <Field type='phone' value={phone} setValue={setPhone} label='Phone Number' labelPos='top' name='number'/>
                <label>Message</label>
                <TextArea value={message} onChange={e => setMessage(e.target.value)} name='message' required></TextArea>
                <Button>Submit</Button>
            </Form> */}
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
            </form>
        </Body>
    )
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Body = styled.div`
    max-width: 1000px;
    margin: auto;
    font-size: 18px;
    padding: 20px;
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
