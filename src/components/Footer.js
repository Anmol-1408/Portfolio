import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="heading">
                <h2>Anmol's Portfolio</h2>
            </div>
            <div className="content">
                <div className="services">
                    <h4>Services</h4>
                    <p>Web development</p>
                    <p>Websites</p>
                    <p>Web designing</p>
                    <p>Freelancing</p>
                </div>
                <div className="social-media">
                    <h4>Social</h4>
                    <p>
                        <a href="https://linkedin.com/in/anmol-776877294"><i className="uil uil-linkedin"></i> Linkedin</a>
                    </p>
                    <p>
                        <a href="https://github.com/anmol-1408"><i className="uil uil-github"></i> Github</a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/i_am.anmol"><i className="uil uil-instagram"></i> Instagram</a>
                    </p>
                </div>
                <div className="link">
                    <h4>Quick links</h4>
                    <p className="center"><a href="/#home"> <i className="uil uil-estate"></i> Home</a></p>
                    <p className="center"><a href="/#projects"><i className="uil uil-file"></i> Projects</a></p>
                    <p className="center"><a href="/#about"><i className="uil uil-user"></i> About</a></p>
                    <p className="center"><a href="/#contact"><i className="uil uil-phone"></i> Contact</a></p>
                </div>
                <div className="details">
                    <h4 className="mobile">Mobile</h4>
                    <p><a href="tel:+918178357459"><i className="uil uil-phone"></i> +918178357459</a></p>
                    <h4 className="mail">Email</h4>
                    <p><a href="mailto:pal592@gmail.com"><i className="uil uil-envelope"></i> pal592@gmail.com</a></p>
                </div>
            </div>

            <hr />
            <p>
                © 2023 Anmol
            </p>
        </footer>
    )
}
