import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()

    return (
        <div className='flex flex-row justify-center w-full'>
            <div className='text-6xl flex flex-col justify-center'>My Github Follower {data.followers}
            </div>
            <img src={data.avatar_url} width={200} alt="" className='p-5 rounded-s-full'/>
            <div className='text-6xl flex flex-col justify-center'>My Repo Are ON GitHub{data.public_repos}</div>
        </div>
    )
}

export default Github

export const  GitHubData=async()=>{
    const response=await fetch("https://api.github.com/users/Muhammadumar20104")
    return response.json()
}