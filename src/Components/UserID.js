import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const StyleButton = styled.button`
background-color:brown;
color:#fff;
padding:${({ userID }) => (userID ? `${userID}px` : '5px')} ${({ userID }) => (userID ? `${userID}px` : '5px')} ;
font-size:16px;
border: none;
border-radius:4px;
cursor:pointer;
`

function UserID() {
    const navigate = useNavigate()
    const [userID, setUserID] = useState(null)

    const handlesubmit = () => {
        navigate('/about', { state: { id: userID } })
    }

    return (
        <>
            <div className='p-5'>
                <input type="number" value={userID} onChange={(e) => { setUserID(e.target.value) }} className='border border-slate-950 w-fit h-fit rounded-lg p-3' placeholder='Enter The ID' />
                <StyleButton userID={userID}>
                    <button onClick={handlesubmit} className='p-2'>Submit</button>
                </StyleButton>

            </div>

            <div className='text-9xl flex flex-row justify-center w-full'>USER_ID</div>
        </>
    )
}

export default UserID