import React from 'react'
// Import Libs
import { Helmet } from 'react-helmet'
// Components
import Header from './components/Header/Header'
import Social from './components/Social/Social'
// Style
import './App.scss'

function App() {
  return (
    <>
      {/* Title and meta tags */}
      <Helmet>
        <title>Title from Helmet Test</title>
        <meta name="description" content="Descriprion from Helmet" />
      </Helmet>
      <Header />
      <Social />
    </>
  );
}

export default App;