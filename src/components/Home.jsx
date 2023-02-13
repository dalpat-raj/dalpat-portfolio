import React from 'react'
import { UilUser } from '@iconscout/react-unicons'
import tabbanner from '../assets/tabbanner.png'
import phonebanner from '../assets/phonebanner.png'


const Home = () => {
  return (
    <main id='home' className='home__main container'>
      <img src={tabbanner} alt="logo" className='tab__banner'/>
      <img src={phonebanner} alt="logo" className='phone__banner'/>
        <section className='home' id='home'>
            <div className="home__container ">

                <div className="home__social">
                  <span className='home__social__follow'>Follow Me</span>
                  <div className="home__social__links">
                    <a href="https://www.facebook.com/" className='home__social__link'>
                    <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/raj_dalpat_" className='home__social__link'>
                    <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className='home__social__link'>
                    <i className="uil uil-twitter-alt"></i>
                    </a>
                  </div>
                </div>     

                <div className="home__data">
                  <h1 className='home__title'>Hi, I'am Dalpat Raj</h1>
                  <h3 className='home__subtitle'>Frontend Devloper</h3>
                  <p className='home__description'>high level experience in web design and devlopment knowledge,
                  prodecing qualiy work.</p>
                  <a href="#about" className='button'><UilUser/>More About Me</a>
                </div>

                <div className="my__info">
                  <div className="info__item">
                  <i className="uil uil-facebook-messenger-alt info__icon"></i>
                    <div>
                      <h3 className='info__title'>Messenger</h3>
                      <span className='info__subtitle'>Dalpat Raj</span>
                    </div>
                  </div>

                  <div className="info__item">
                    <i className="uil uil-whatsapp info__icon"></i>
                    <div>
                      <h3 className='info__title'>Whatsapp</h3>
                      <span className='info__subtitle'>+91 9587478769</span>
                    </div>
                  </div>

                  <div className="info__item">
                    <i className="uil uil-envelope-edit info__icon"></i>
                    <div>
                      <h3 className='info__title'>Email</h3>
                      <span className='info__subtitle'>Dalpatt1212@gmail.com</span>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home