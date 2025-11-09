import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">My Simple Home</h1>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <h2>Welcome to My Site</h2>
            <p className="tagline">A simple, clean homepage built with React + Vite.</p>
            <a className="btn" href="#features">Get Started</a>
          </div>
        </section>

        <section id="features" className="features container">
          <h3>Features</h3>
          <div className="feature-grid">
            <div className="feature">Fast</div>
            <div className="feature">Responsive</div>
            <div className="feature">Minimal</div>
          </div>
        </section>

        <section id="about" className="about container">
          <h3>About</h3>
          <p>This is a small demo homepage. Replace text and styles as needed.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} My Simple Home</small>
        </div>
      </footer>
    </div>
  )
}

export default Home
