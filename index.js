import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gallery from './gallery';
import Hero from './hero';
import Section from './section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery />
    <Section/>
    <Hero />
  </React.StrictMode>
);


