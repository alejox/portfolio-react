/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <a href="https://github.com/alejox/" target="_blank" rel="noreferrer">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>See my projects on github</small> 
              </a>
            </article>
          </div>

          <p>
          Graphic designer and music graduate with professional experience in work environments, passionate about programming and looking for opportunities in the IT industry. I am an enterprising and innovative person; I consider myself self-taught since I have promoted projects without any prior knowledge, I demand myself in order to acquire the necessary tools to use and carry out the proposed work.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
