import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components';

const DIV = styled.div`
font-size:4xl;
background-color:aqua;
width:${({ message }) => (message ? `${message}%` : '50%')};


`

function About() {
  const location = useLocation();
  const message = location?.state?.id;

  return (
    <>
      <>
        {location?.state?.id ? (
          <DIV message={message}  >
            <div className='text-9xl flex flex-row justify-center w-full'>About {message}</div>
          </DIV>

        ) : (
          <DIV message={message}>
            <div>No parameters received</div>
          </DIV>
        )}
      </>
    </>
  )
}

export default About