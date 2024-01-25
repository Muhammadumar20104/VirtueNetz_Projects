import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserID from './Components/UserID';
import Github, { GitHubData } from './Components/Github';

// First Way To Define Routes 
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     { path: '', element: <Home /> },
//     { path: 'about', element: <About /> },
//     { path: 'contact', element: <Contact /> }
//   ]
// }])

// Second And Easy  Way To Define Routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<UserID/>}/>
      <Route
      loader={GitHubData}
       path='github' 
       element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
