import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UserID() {
    const [userID, setUserID] = useState(0)
    const { id } = useParams()

    return (
        <>
            <div className='p-5'> 
                {/* <input type="number" value={userID} onChange={(e)=>{setUserID(e.target.vaue)}} className='border border-slate-950 w-fit h-fit rounded-lg p-3' placeholder='Enter The ID' /> */}
            </div>

            <div className='text-9xl flex flex-row justify-center w-full'>USER_ID:{id}</div>
        </>
    )
}

export default UserID