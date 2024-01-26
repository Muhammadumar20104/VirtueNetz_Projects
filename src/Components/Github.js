import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    /* opacity: 100; */
    transform:rotate(0deg)
  }
  to {
    /* opacity: 100; */
    transform:rotate(360deg)
  }
`;

const AnimateDiv = styled.div`
  width: 200px;
  height: 200px;
  animation: ${fadeIn} 10s linear infinite;
`;

function Github() {
  const data = useLoaderData();

  return (
    <div className='flex flex-row justify-center w-full'>
      <div className='text-6xl flex flex-col justify-center'>My Github Follower {data.followers}</div>
      <AnimateDiv>
        {/* <img src={data.avatar_url} width={200} alt="" className='p-5 rounded-s-full' /> */}
        {/* <div>Umar</div> */}
        <img src={data.avatar_url} width={200} alt="" className='p-5 rounded-s-full rounded-e-full'/>
      </AnimateDiv>
      <div className='text-6xl flex flex-col justify-center'>My Repo Are ON GitHub {data.public_repos}</div>
    </div>
  );
}

export default Github;

export const GitHubData = async () => {
  const response = await fetch("https://api.github.com/users/Muhammadumar20104");
  return response.json();
};
