import React from 'react'
import styled from 'styled-components'
import { FcViewDetails, FcFile, FcCellPhone } from "react-icons/fc";
import { Link, Router } from 'components/Router'

const Services = () => {
    return (
        <Body>
            <h1>Services</h1>
            <p>
                Redesign For Me is a Web Development Company that focuses on designing and hosting websites and web applications.
                RFM would like to help businesses get the recognition they deserve by modern website development. You will be working with an Accredited Software Engineer to ensure the job gets done right.
            </p>
            <br/>
            <h2>Are you looking for a Websites or a Web App?</h2>
            <p>From the surface you might not know the difference between the two. They look so similar yet the pricing and functionality between them are very different.</p>
            <br/>
            <h2>Websites</h2>
            <p>Websites are considered static. They are specifically there to display information to you about what your business is or product. Plenty of customers will learn about you through your website so these need to be designed with that in mind. We create professionally designed websites to ensure the first impression is a good one.</p>
            <h4>Website Pricing</h4>
            <p>Due to the lack of interactivity needed for these sites, the pricing is reflected by that. </p>
            <Cards>
                <Card>
                    <h2 style={{textAlign: 'center'}}>$100 per page</h2>
                    <Center><FcFile size={200}/></Center>
                    
                </Card>
                <Card>
                    <h2 style={{textAlign: 'center'}}>Contact Form Included</h2>
                    <Center><FcViewDetails size={200}/></Center>
                </Card>
            </Cards>
            <br/>
            <h2>Web Apps</h2>
            <p>You can break down web apps into three categories: Simple Apps, Medium Apps and Large Scale Apps. Each version of a web app varies in cost as well as time it takes to complete.</p>
            <h4>Simple Apps</h4>
            <p>These are one-pagers, landing pages, and usual online stores with a standard design and a bare minimum of features. Usually, they require basic interactive forms and little content. A simple website or web app will cost you $3,000-$15,000, while the development time rarely exceeds 1 month.</p>
            <h4>Medium Apps</h4>
            <p>These are primarily small-to-medium company sites and e-commerce sites. They need a lot of interactive elements to be integrated, and the volume of content is pretty large. Their cost can vary from $15,000 to $50,000, and the development time can reach 4 months.</p>
            <h4>Large Scale Apps</h4>
            <p>This category includes exclusive websites for large-scale businesses. They can include unique CMSs, a lot of exclusive features, large databases, and tons of content. The development cost can reach (but is not limited to) $250,000, and the average development time is half a year.</p>
            <Cards>
                <Card>
                    <h2 style={{textAlign: 'center'}}>Contact to for a free quote!</h2>
                    <Center><FcCellPhone size={200}/></Center>
                    <Center><Link to='/contact' style={{width: '100%'}}><CallToAction style={{width: '100%'}}>Contact</CallToAction></Link></Center>
                </Card>
            </Cards>
        </Body>
    )
}


const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const FlexEnd = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 100%;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const Card = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #f4f4f4;
    border-radius: 4px;
    padding: 20px;
    margin: 5px;
`
const Body = styled.div`
    max-width: 1000px;
    margin: auto;
    font-size: 18px;
    padding: 20px;
`

export const CallToAction = styled.button`
    margin: 20px 0px 0px 0px;
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

export default Services
