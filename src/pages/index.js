import React from 'react'
import background from 'images/background.jpg'
import secOne from 'images/sec1.jpg'
import styled, {keyframes} from 'styled-components'
import picture from 'images/logo.png'
import { FcPrint, FcMultipleDevices, FcAssistant, FcShipped, FcSurvey, FcApproval } from "react-icons/fc";

export default () => {
    return (
        <>
        <Header>
            <div style={{height: '100px'}}></div>
            <Background src = {background}/>
            <Title>Redesign for Me</Title>
            <TagLine>Web Solutions Made Simple</TagLine>
            <FDRow>
                <CallToAction onClick={() => window.location.href="/contact"}>Contact</CallToAction>
                <CallToAction onClick={() => window.location.href="/services"}>Services</CallToAction>               
            </FDRow>
        </Header>
        <Section> 
            <SecInfo style={{display: 'flex', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <Logo src={picture} style={{display: 'flex', justifyContent: 'center'}}/>
            </SecInfo>
            <SecInfo>
            <h1>About</h1>
            <Paragraph>
            Redesign For Me is a Web Development Company that focuses on designing and hosting websites and web applications.
            </Paragraph>
            <Paragraph>
RFM would like to help businesses get the recognition they deserve by modern website development. You will be working with an Accredited Software Engineer to ensure the job gets done right.
            </Paragraph>
            </SecInfo>
        </Section>
        {/* <SecDiv></SecDiv> */}
        <Section style={{backgroundColor: '#404851'}}> 
            <SecInfo>
                <h1>Step 1</h1>
                <Paragraph>We have a meeting to better understand the requirements needed specifically for your site.</Paragraph>
            </SecInfo>
            <SecInfo style={{display: 'flex', justifyContent: 'center'}}>
            <FcAssistant size={300}/>
            </SecInfo>

            
        </Section>
        {/* <SecDiv></SecDiv> */}
        <Section > 
            <SecInfo>
                <h1>Step 2</h1>
                <Paragraph>I document the requirements as well as give a free quote on how much time it will take me to create. </Paragraph>
            </SecInfo>
            <SecInfo style={{display: 'flex', justifyContent: 'center'}}>
                
                <FcPrint size={300}/>
            </SecInfo>
            
        </Section>
        {/* <SecDiv></SecDiv> */}
        <Section style={{backgroundColor: '#404851'}}> 
            <SecInfo>
                <h1>Step 3</h1>
                <Paragraph>I develop the first draft of the site fulfilling the requirements requested in step 2.</Paragraph>
            </SecInfo>
            <SecInfo style={{display: 'flex', justifyContent: 'center'}}>
                <FcMultipleDevices size={300}/>
            </SecInfo>
            
        </Section>

        <Section > 
            <SecInfo>
                <h1>Step 4</h1>
                <Paragraph>Email back the final revisions need for the site. </Paragraph>
            </SecInfo>
            <SecInfo style={{display: 'flex', justifyContent: 'center'}}>
                
                <FcSurvey size={300}/>
            </SecInfo>
            
        </Section>
        {/* <SecDiv></SecDiv> */}
        <Section style={{backgroundColor: '#404851'}}> 
            <SecInfo>
                <h1>Step 5</h1>
                <Paragraph>Finish the final revisions and make your site live with your domain!</Paragraph>
            </SecInfo>
            <SecInfo style={{display: 'flex', justifyContent: 'center'}}>
                <FcApproval size={300}/>
            </SecInfo>
            
        </Section>
        
        </>
    )
}

const Img = styled.img`
    position: fixed;
`

const SecDiv = styled.div`
    
    background-image: url(${secOne});

  /* Set a specific height */
  height: 300px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Paragraph = styled.p`
    font-size: 20px;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
    object-fit: cover;
`

const Logo = styled.img`
    width: 250px;
    height: 250px;
    
`

const Section = styled.div`
    background-color: #343a40;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`

const SecInfo = styled.div`
    width: 500px;
    height: 100%;
    padding: 10px;
    ${'' /* background-color: #404851; */}
    color: #f4f4f4;
    border-radius: 4px;
    height: auto;
`

const CallToAction = styled.button`
    margin: 20px;
    border: none;
    padding: 5px;
    background-color: rgb(44, 114, 211);
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    font-size: 18px;
    box-shadow: 0px 0px 8px #333;
    transition: 400ms;

    :hover{
        background-color: rgb(44, 114, 250);
        transition: 400ms;
    }

    :focus{
        outline: none;
    }

    @media (max-width: 600px) {
        width: 100%;
  }
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    padding: 20px;
    height: 100vh;
`

const colors = keyframes`
     0% {color: #39f;}
     15% {color: #8bc5d1;}
     30% {color: #f8cb4a;}
     45% {color: #95b850;}
     60% {color: #944893;}
     75% {color: #c71f00;}
     90% {color: #bdb280;}
    100% {color: #39f;}
`;

const Title = styled.h2`
    font-family: 'Viga', sans-serif;
    font-size: 72px;
    text-transform: uppercase;
    text-align: center;
    color: white;
    letter-spacing: 10px;
    animation: ${colors} 10s linear infinite;   

    @media (max-width: 600px) {
    font-size: 48px;
    letter-spacing: 5px;
  }
`

const TagLine = styled.h4`
    font-family: 'Viga', sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: white;
    letter-spacing: 10px;
`

const FDRow = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
  }
`