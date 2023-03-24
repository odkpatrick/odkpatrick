import * as React from "react"
import { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
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

const Logo = <span className="logo">dkpat</span>

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
            <a href="#portfolio">portfolio</a>
            </li>
          <li>
            <a href="#about">about me</a>
            </li>
          <li>
            <a href="#contact">contact</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className={Styles.myFooter}>
      <div>
        <p>with love</p>
        <p>odkpat official copyright 2023.</p>
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
        <p className="title">a creative technologist</p>
        <button className="resume-btn">download resume</button>
      </div>
      <div>
        { ProfileImg }
      </div>
    </div>
  )
}

const ProjectImg = <div className={Styles.ProjectImg}></div>

const Portfolio = () => {
  return (
    <div>
      <div>
        <h2>recent work</h2>
        <p>check out some of my most recent work</p>
        <div className={Styles.projectImgWrapper}>
          { ProjectImg }
          { ProjectImg }
          { ProjectImg }
        </div>
        <button>hire me</button>
      </div>
      <div>
        <h2>services</h2>
        <p>how I help businesses grow</p>
        <div>
          <div>
            <h3>Business operations analysis</h3>
            <p>go on more</p>
          </div>
          <div>
            <h3>web design & development</h3>
            <p>go on more</p>
          </div>
          <div>
            <h3>mogile design & development</h3>
            <p>go on more</p>
          </div>
        </div>
        <button>reach me</button>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>about me</h2>
      <div>
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
    <div>
      <h2>reach me</h2>
      <p>drop me a line and we'll talk</p>
      <form className={Styles.myForm}>
        <input typeof="text" placeholder="name" />
        <input typeof="text" placeholder="email" />
        <input typeof="text" placeholder="enter message..." />
        <button>send</button>
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
