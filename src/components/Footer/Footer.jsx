import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    icon: <AiFillYoutube />,
    link: 'https://www.youtube.com/@ChrisGamezProfe',
  },
  {
    icon: <AiFillGithub />,
    link: 'https://www.github.com/ChrisGamezProfe',
  },
  {
    icon: <AiOutlineInstagram />,
    link: 'https://www.instagram.com/ChrisGamezProfe',
  },
  {
    icon: <RiLinkedinFill />,
    link: 'https://www.linkedin.com/Christian-Gamez',
  }
]

const navLinks01 = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Buscar Dev",
    path: "/developers",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];

const navLinks02 = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];

const navLinks03 = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Buscar Dev",
    path: "/developers",
  },

];


const Footer = () => {
  return (
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt='logo' />
          <p className='text-[16px] leading-7 font-[400] text-textColor'>
            Copyright {new Date().getFullYear()} desarrollado por ChrisGamezProfe
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link,index) => (
              <Link key={index} to={link.link} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-yellowColor hover:border-none">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Navegación
          </h3>
          <ul>
            {navLinks01.map((link,index) => (
              <li key={index} className='mb-4'>
                <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Navegación
          </h3>
          <ul>
            {navLinks02.map((link,index) => (
              <li key={index} className='mb-4'>
                <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Navegación
          </h3>
          <ul>
            {navLinks03.map((link,index) => (
              <li key={index} className='mb-4'>
                <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer