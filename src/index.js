import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const link_headers = 1 
const top_link_names = ["Erik", "About", "Resume", "Contact"]
const top_link_paths = ["/", "/about", "/resume", "/contact"]

const bot_link_names = ["Contact", "Email", "GitHub", "LinkedIn"]
const bot_link_paths = ["/contact", "/", "/", "/"]
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='page'>
        <Navbar link_names={top_link_names} paths={top_link_paths} ratio={link_headers}/>
        <Home />
        <Navbar link_names={bot_link_names} paths={bot_link_paths} ratio={link_headers}/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
