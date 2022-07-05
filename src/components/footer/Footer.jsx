/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ALEJANDRO DEVELOPER</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/luis-alejandro-grajales-80873053/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/alejox" target="_blank" rel="noreferrer"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ALEJANDRO DEVELOPER. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer