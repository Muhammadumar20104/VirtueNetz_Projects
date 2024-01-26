import React, { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
background-color:${prop => prop.$primary ? "blueviolet" : "white"};
color:${prop => prop.$primary ? "white" : "black"};
padding:0.3em;
border:solid;
border-radius:1em;
border-color:${prop => prop.$primary ? "#1F2937" : "solid"};
transition:background-color 0.8s ease;
&:hover{background-color:${prop => prop.$primary ? "brown" : "blueviolet"};}
width:10%;
height: min-content;
`
const Heading1 = styled.h1`
font-size:8em;
text-align:center;
color:blueviolet;
background-color:${(props) => props.on && props.color || "brown"};
border:solid;
border-radius:0.2em;
border-color:black;
`
const Input = styled.input`
width:min-content;
height:min-content;
border:solid;
font-weight:normal;
padding:2px;
&:hover{
  background-color:grey;
  color:white;
  font-weight:400;
  border:solid;
  border-color:black;

}
`

const Wrapper = styled.section`
display:flex;
justify-content:space-evenly;
padding: 5%;
width:100%;

`


function Home() {
  const [color, setColor] = useState("")
  const [on, setOn] = useState(false)
  const handleColor = () => {
    setOn(true)
  }
  return (
    <Wrapper>
      <Heading1 color={color} on={on}>Home</Heading1>
      <Button>Normal</Button>
      <Button onClick={handleColor} $primary>Color Change</Button>
      <Input value={color.toLocaleLowerCase()} onChange={(e) => {
        setColor(e.target.value)
        setOn(false)
      }} placeholder='Enter Color Name' />
    </Wrapper>

  )
}

export default Home