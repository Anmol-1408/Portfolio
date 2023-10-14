import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Profile from '../image/anmol.png'
import Resume from '../document/resume.pdf'

export default function Home() {
    const [text] = useTypewriter({
        words: ['IT Engineer.', 'Freelancer.', 'Full Stack Developer.'],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80,
    });
    return (

        <>
            <main>
                <section className="home" id="home">
                    <div className="section1">
                        Hi, I'm <span className="purple">Anmol</span>
                        <div>and I am passionate</div>
                        <span id="element" className='purple'>{text} <Cursor /></span>
                        <div className="links">
                            <span><a href="https://linkedin.com/in/anmol-776877294"><i className="uil uil-linkedin"></i></a></span>
                            <span><a href="https://github.com/anmol-1408"><i className="uil uil-github"></i></a></span>
                            <span><a href="https://www.instagram.com/i_am.anmol"><i className="uil uil-instagram"></i></a></span>
                        </div>
                        <div className="buttons">
                            <a href={Resume} className="resume btn" target="_blank" rel="noreferrer">Download Resume <span><i className="uil uil-file-download"></i></span></a>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="image"><img src={Profile} alt="img" /></div>
                    </div>
                </section>
            </main>
        </>
    )
}
