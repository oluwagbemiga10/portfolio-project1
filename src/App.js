import React from 'react';
import './App.css';
import { Brand, Cta, Navbar} from "./components/index.js"
import { Blog, Features, Footer, Header, Possibility, Whatgpt3} from "./containers/index.js"

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
