import React from 'react';

import { Gallery, Header, Footer } from './container';
import { Brand, Navbar, Contact } from './components';
import './App.css';
import TikTokEmbed from './components/TikTokEmbed/TikTokEmbed';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Brand />
    <TikTokEmbed />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
