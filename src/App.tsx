import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
                    <div className="App">
            <header>
        <div className="container">
            <div className="header-content">
                <a href="#" className="logo">
                    <img src="./images/a-1.jpg" alt="$Anatoly Bull Logo" width="60" height="60" /> 
                    Anatoly
                </a>
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    <a href="#about">About</a>
                    <a href="#tokenomics">Tokenomics</a>
                    <a href="#gallery">Moments</a>
                    <a href="#community">Community</a>
                    <a href="#">Buy Now</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section className="hero">
            <div className="hero-container">
                <h1>$Anatoly</h1>
                <p>Official Anatoly Coin</p>
                <a href="#" className="cta-button">SWAP Anatoly
                    </a>
            </div>
        </section>

        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title fade-in">Welcome to official Anatoly</h2>
                <div className="about-content">
                    <div className="about-text fade-in">
                        <p>$Anatoly - The only official Anatoly coin meme.
                            </p>

                    </div>
                    <div className="about-image slide-in-right">
                        <a href="https://www.instagram.com/Anatoly">
                            <img src="./images/a-1.jpg" alt="A mighty bull" width="500" height="500" />
                        </a>
                    </div>                    
                </div>
            </div>
        </section>

        <section id="tokenomics" className="section">
            <div className="container">
                <h2 className="section-title fade-in">Anatoly Tokenomics</h2>
                <div className="tokenomics-grid">
                    <div className="tokenomics-item fade-in">
                        <h3>SUPPLY: 1 BILLION </h3>
                        <p>Enough for everyone</p>
                    </div>
                    <div className="tokenomics-item fade-in">
                        <h3>Lp Burned</h3>
                        <p>Fair for all</p>
                    </div>
                    <div className="tokenomics-item fade-in">
                        <h3>No taxes</h3>
                        <p> Keeping your transactions cheap</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="gallery" className="section">
            <div className="container">
                <h2 className="section-title fade-in">OFFICIAL Anatoly</h2>
                <div className="gallery-container fade-in">
                    <button className="gallery-nav prev" aria-label="Previous image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <div className="gallery-wrapper">
                        <div className="gallery-preview prev-preview">
                            <img src="./images/img2.png" alt="Previous image preview" />
                        </div>
                        <div className="gallery-image-container">
                            <img src="./images/a-2.png" alt="video" className="gallery-image" />
                        </div>
                        <div className="gallery-preview next-preview">
                            <img src="./images/img2.png" alt="Next image preview" />
                        </div>
                    </div>
                    <button className="gallery-nav next" aria-label="Next image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                <div className="gallery-description">
                    <p className="gallery-description-text"></p>
                </div>
            </div>
        </section>

        <section id="community" className="section community">
            <div className="container">
                <h2 className="section-title fade-in">Join the Anatoly Community</h2>
                <p className="fade-in">Want to be part of the wildest crypto community? Follow $Anatoly socials.
                    </p>
                <div className="social-links fade-in">
                    <a href="https://x.com/Official_toly" target="_blank" rel="noopener noreferrer">
                        <img src="./images/IMG_2027.PNG" alt="Social Icon 2" className="social-icon" />
                    </a>
                    <a href="https://t.me/Official_Anatoly" target="_blank" rel="noopener noreferrer">
                        <img src="./images/IMG_2029.png" alt="Social Icon 4" className="social-icon" />
                    </a>
                </div>
                <p className="fade-in">Raydium: <a href="#">
                        Buy here!</a>
                </p>
            </div>
        </section>
    </main>

    <footer>
        <div className="container">
            <p>Anatoly</p>
        </div>
    </footer>
        </div>
        </>
    );
}

export default App;
