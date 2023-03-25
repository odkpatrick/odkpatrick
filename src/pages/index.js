import * as React from "react"
import { useState } from "react";
import { DiJavascript } from "react-icons/di"
import { 
  FaHtml5, FaCss3, FaGit,
  FaReact, FaNodeJs, 
  FaBars, FaDev, FaGithub, 
  FaHeart, FaLinkedinIn, FaRegWindowClose, 
  FaTwitter, FaBootstrap, FaSass, FaNpm
} from "react-icons/fa";
import "./index.css"
import * as Styles from "./index.module.css"


const IndexPage = () => {
  return (
    <Layout>
      <IntroSection />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  )
}

const Layout = ({children}) => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <main className="main-wrapper">
      <HeaderBar 
      toggle={toggle}
      handleToggle={handleToggle}
      />
      <div className="main-content">
        { children }
      </div>
      <Footer />
    </main>
  )
}

const Logo = <span className="logo">odk</span>

const NavButton = ({toggle, handleToggle}) => {
  if(toggle) {
    return (
      <button className="nav-btn" onClick={handleToggle}>
        <FaBars />
      </button>
    )
  } else {
    return (
      <button className="nav-btn" onClick={handleToggle}>
        <FaRegWindowClose />
      </button>
    )
  }
}

const HeaderBar = ({toggle, handleToggle}) => {
  return (
    <header className="header-wrapper">
      <div className="header-top">
        { Logo }
        <NavButton toggle={toggle} handleToggle={handleToggle}/>
      </div>
      <nav className={toggle ? "nav-wrapper" : "nav-wrapper show"}>
        <ul className="nav-list">
          <li>
            <a href="#portfolio" onClick={handleToggle}>portfolio</a>
            </li>
          <li>
            <a href="#about" onClick={handleToggle}>about me</a>
            </li>
          <li>
            <a href="#contact" onClick={handleToggle}>contact</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          <FaGithub />
          <FaLinkedinIn />
          <FaDev />
          <FaTwitter />
        </div>
        <div className="footer-info">
          <p>Copyright ©2023 All rights reserved </p>
          <p>with <FaHeart /> odkpat</p>
        </div>
      </div>
    </footer>
  )
}

const ProfileImg = <div className={Styles.profileImg}></div>

const IntroSection = () => {
  return (
    <div className="intro-content-wrapper">
      <div className="intro-content">
        <h1 className="greeting">Hi, I'm Patrick,</h1>
        <p className="title">frontend developer</p>
        <button className="resume-btn">download resume</button>
      </div>
      <div>
        { ProfileImg }
      </div>
    </div>
  )
}

const ProjectCard = ({appTitle, appDesc, liveUrl, codeUrl}) => {
  return (
    <div className="project-wrapper">
      <div className="project-img-wrapper">
        <div className="project-img"></div>
      </div>
      <div className="project-details-wrapper">
        <h3 className="project-title">{appTitle}</h3>
        <p className="project-description">{appDesc}</p>
        <div className="project-links">
          <a href={liveUrl} className="live-btn">view live</a>
          <a href={codeUrl} className="code-btn">view code</a>
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-content">
        <h2 className="heading">Recent work</h2>
        <div className="portfolio-projects">
          <ProjectCard 
          appTitle="Todo app"
          appDesc="A todo app built for the web"
          liveUrl="#"
          codeUrl="#"
          />
        </div>
      </div>
      <div className="toolbox-content">
        <h2 className="heading">toolbox</h2>
        <div className="toolbox-tools">
            <h3>Most comfortable:</h3>
            <p className="tools-wrapper">
              <FaHtml5/>
              <FaCss3/>
              <DiJavascript/>
              <FaReact/>
              <FaNpm/>
              <FaNodeJs/>
              <FaGit/>
            </p>
            <h3>comfortable:</h3>
            <p className="tools-wrapper">
              <FaBootstrap/>
              <FaSass/>
            </p>
            <h3>Decent:</h3>
            <p className="tools-wrapper">

            </p>
        </div>
        <a href="#" className="hireme-btn">hire me</a>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className="about-wrapper">
      <h2 className="heading">about me</h2>
      <div className="about-info">
        { ProfileImg }
        <p>
          I'm a software developer and enthusiast based in Kampala, Uganda.
          I have been building solutions to businesses and helping them grow
          since early 2019. I have a passion for solving complex issues faced
          by businesses growing their reach online and always approach from 
          an empathetic point of view first.
        </p>
        <p>
          When I'm not building software solutions, I enjoy physical activities
          such as running, hitting the gym and my personal favorite, playing
          football/soccer. 
          I'm also an avid reader and a big appreciator of art and music and
          am fond of hitting a music concert if its classic, rock or pop.
        </p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="heading">reach me</h2>
      <p>Drop me a line and we'll talk</p>
      <form className="contact-form">
        <input typeof="text" placeholder="name" />
        <input typeof="text" placeholder="email" />
        <input 
        typeof="text" 
        placeholder="enter message..." 
        />
        <button className="submit">send</button>
      </form>
    </div>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Patrick Odeke</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap" rel="stylesheet" />
  </>
)
