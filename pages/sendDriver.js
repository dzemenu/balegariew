import React from 'react'
import tw from 'tailwind-styled-components'
import {FaFacebook,FaWhatsapp} from 'react-icons/fa'
const sendDriver = () => {
  return (
    <Wrapper>
      <DriverName>BALEGARIEW</DriverName>
        <DriverName> Mr Ermias Zeleke on they way </DriverName>
        <DriverImage src='/driver.png'></DriverImage>
        <IconList>
        <IconWrapper><FaFacebook /></IconWrapper> 
       <IconWrapper><FaWhatsapp /></IconWrapper> </IconList>
       <CancelButton>Cancel</CancelButton>
    </Wrapper>
  )
}

export default sendDriver
const Wrapper=tw.div`
flex flex-col justify-center items-center w-screen h-screen `
const DriverImage=tw.img` rounded-full h-26 w-26 pt-50 shadwow-2xl shadow-black`
const DriverName=tw.h1`
font-black text-2xl  `
const IconList=tw.div` flex h-200 w-screen justify-center items-center`
const IconWrapper=tw.div`
h-20 w-20 text-4xl text-green-500 rounded-full`
const CancelButton=tw.button`
bg-red-500 text-white
w-4/5 h-15 mt-10 rounded-lg shadow-2xl`