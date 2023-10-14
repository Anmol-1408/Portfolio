import React from 'react'

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="project">
                <div className="content">
                    <h3>MyAwesomeCart</h3>
                    <p>It is a E-commerce website created using Django. It also have blog integration.</p>
                    <a className='btn' href='https://github.com/Anmol-1408/MyAwesomeCart'>View <i className="uil uil-eye"></i></a>
                </div>
            </div>
            <div className="project">
                <div className="content">
                    <h3>e-Coder</h3>
                    <p>It is a Blog website created using Django. It also have advanced featues.</p>
                    <a className='btn' href='https://github.com/Anmol-1408/e-Coder'>View <i className="uil uil-eye"></i></a>
                </div>
            </div>
        </section>
    )
}
