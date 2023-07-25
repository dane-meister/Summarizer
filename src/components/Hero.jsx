import React from 'react';
import { logo } from '../assets/';
import logo2 from '../assets/summarizerlogo.png'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo2} alt='logo'
        className='w-20 object-contain h-20'/>
        <button
          type='button'
          onClick={() => window.open('https://github.com/dane-meister')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GTP-4</span>
      </h1>
      <h2 className='desc'>
      Simplify your reading with Summarizer, an 
        open-source article condenser that transforms 
        articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero