import './About.scss'

export function About(){
    return(
        <section className='about-section'>
            <div className="about-section-info container">
                <div className="about-section-inner">
                    About Me
                </div>
                <h3>I'm Umid Amirqulov <span>Frontend</span> Developer</h3>
                <p className='about-me'>
                If you are looking for a partner or friend in 
                the field of programming, then I offer you my services. My goal is to increase my experience working in real projects and learn new technologies. I have 8 months of experience in this
                 field and I am currently building my portfolio.
                </p>
                <div className="about-section-my-skills">
                    <div className="personal-info">
                        <div className="about-content">
                            <div className='flex'>
                                 <div className='color-head'>Birthday : </div>
                                 <div className='color-b'>28 March 1997</div>                       
                            </div>
                            <div className='flex'>
                                 <div className='color-head'>Phone : </div>
                                 <div className='color-b'>+998997346704</div>                       
                            </div>
                            <div className='flex'>
                                 <div className='color-head'>Email : </div>
                                 <div className='color-b'>amirqulov@gmail.com</div>                       
                            </div>

                        </div>
                    </div>
                    <div className="my-skills">
                        <div className="row">
                        <div className="skills-item">
                            <h5>JS</h5>
                            <div className="progress">
                                <div className="progress-in" style={{width: '70%'}}></div>
                                <div className="skill-percent">70%</div>
                            </div>
                        </div>
                        <div className="skills-item">
                            <h5>HTML</h5>
                            <div className="progress">
                            <div className="progress-in" style={{width: '85%'}}></div>
                                <div className="skill-percent">85%</div>
                            </div>
                        </div>                       
                         <div className="skills-item">
                            <h5>CSS/SCSS</h5>
                            <div className="progress">
                                <div className="progress-in" style={{width: '90%'}}></div>
                                <div className="skill-percent">90%</div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="skills-item">
                            <h5>React</h5>
                            <div className="progress">
                            <div className="progress-in" style={{width: '60%'}}></div>
                                <div className="skill-percent">60%</div>
                            </div>
                        </div>
                        <div className="skills-item">
                            <h5>Typescript</h5>
                            <div className="progress">
                            <div className="progress-in" style={{width: '50%'}}></div>
                                <div className="skill-percent">50%</div>
                            </div>
                        </div>
                        <div className="skills-item">
                            <h5>Tailwind</h5>
                            <div className="progress">
                            <div className="progress-in" style={{width: '80%'}}></div>
                                <div className="skill-percent">80%</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}