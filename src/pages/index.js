import React from 'react'
import {Header, Title, TagLine, CallToAction, FDRow} from 'components/styles/general'
import background from 'images/background.jpg'
import styled from 'styled-components'
import picture from 'images/Official-RFM-Logo.png'

export default () => {
    return (
        <>
        <Header>
            <div style={{height: '100px'}}></div>
            <Background src = {background}/>
            <Title>Redesign for Me</Title>
            <TagLine>Web Solutions Made Simple</TagLine>
            <FDRow>
                <CallToAction onClick = {() => {window.location.href='/contact'}}>Contact</CallToAction>
                <CallToAction onClick = {() => {window.location.href = '/services'}}>Services</CallToAction>
                
            </FDRow>
        </Header>
        <Section> 
            <SecInfo style={{backgroundColor: 'white'}}>
            <Logo src={picture}/>
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
        <SecDiv></SecDiv>
        </>
    )
}

const SecDiv = styled.div`
    height: 300px;
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
    width: 100%;
`

const Section = styled.div`
    background-color: white;
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
    background-color: #f4f4f4;
    border-radius: 4px;
    height: auto;
`

