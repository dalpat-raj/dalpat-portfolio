import React, { useState } from 'react'
import Modal from './Modal'

const Projexts = () => {

    const obj = [
        {
            id: 1,
            work__title: 'App Design',
            img: '/images/work-1.webp',
            detail__title: 'App Design',
            detail__description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis totam iusto quasi!',
            created: '4 dec 2020',
            technologies: 'html css',
            role: 'frontend',
            view: 'www.resumebuildin.com'
        },
        {
            id: 2,
            work__title: 'Design',
            img: '/images/work-2.webp',
            detail__title: 'Design',
            detail__description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis totam iusto quasi!',
            created: '4 dec 2020',
            technologies: 'react html css',
            role: 'frontend',
            view: 'www.resumebuildin.com'
        },
        {
            id: 3,
            work__title: 'Web',
            img: '/images/work-3.webp',
            detail__title: 'Web',
            detail__description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis totam iusto quasi!',
            created: '4 dec 2020',
            technologies: 'html css java script',
            role: 'backend',
            view: 'www.resumebuildin.com'
        },
    ]

    const [showModal, setShowModal] = useState(false)
    const [verifyId, setVerifyId] = useState('')

    const handleChange=(e)=>{
        setVerifyId(e.target.id)
        setShowModal(true)
    }

    const closeModal=()=>setShowModal(false);

  return (
    <section className='project__section container' id='project'>
        <h2 data-aos="fade-down" data-heading="My Portfolio" className='section__title__heading'>Recent Work</h2>

        <div className="work__filters">
            <span className="work__item active__work">All</span>
            <span className="work__item">Web</span>
            <span className="work__item">App</span>
            <span className="work__item">Design</span>
        </div>

        <div className="work__container__grid">

            {
                obj.map((item)=>(
                    <div data-aos="fade-up" className="work__card" key={item.id}>
                        <img src={item.img} alt="work" className='work__img' />
                        <h3 className='work__title'>{item.work__title}</h3>
                        <span className="work__button" id={item.id} onClick={handleChange} >Demo 
                        <i className='uil uil-arrow-right work__button__icon'></i>
                        </span>
                    </div>
                ))
            }
            { showModal && <Modal value={closeModal} item={obj.filter(x=>x.id === JSON.parse(verifyId))}/> }

            

        </div>

    </section>
  )
}

export default Projexts