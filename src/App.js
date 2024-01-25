import React, { useState } from 'react';
import Counter from './Class_Com';
import ChatRoom from './ChatRoom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Contact from './Components/Contact';
import UserID from './Components/UserID';
import Github from './Components/Github';

export default function App() {
  const [roomID, setRoomID] = useState("general")
  const [open, setOpen] = useState(false)
  return (
    <>
    {/* This Way is Simple and Most Easy */}
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/"><Header/></Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<UserID/>}/>
      <Route path='github' element={<Github />} />
    </Routes>
    </BrowserRouter>


      {/* <label htmlFor="">Chat Room Name DropDown

        <select value={roomID} onChange={e => { setRoomID(e.target.value) }}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
        <button onClick={()=>setOpen(!open)}>{open ? "close" : "open"}</button>
      </label>
      {open && <hr />}
      {open && <ChatRoom roomID={roomID} />} */}

    </>
  );
}

// export default App;
