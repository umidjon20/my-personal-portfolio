import { TypeAnimation } from 'react-type-animation'
import PersonalImg from '../../assets/images/photo.webp'
import './Home.scss'

export function Home(){
    return(
       <section>
        <div className="home-page container">
            <div className="home-page-info">
              <h2>
                Hi I'm <span className='top'>U</span><span className='text-style'>midjon</span>
              </h2>
              <h3>
                <TypeAnimation 
                sequence={[
                  // "I'm a Frontend developer",
                  2000,
                  ''
                ]}
                speed={40}
                // style={{color:'red'}}
                repeat={Infinity}
                />
              </h3>
              <p>
              I am a strong junior programmer.
              I offer you my services and I want to learn new technologies.
              You will not regret choosing me, Inshallah
              </p>
              <div className="buttons">
                <button className='btn btn-style'>Contact me</button>
                <button className='btn btn-style'>Download Cv</button>
              </div>
            </div>
            <div className="home-page-pr-image">
                  <div className="shadow-img">
                      <div className="image-cover">
                        <img src={PersonalImg} alt="Personal-image" />
                        <div className="spin spinner"></div>
                      </div>
                  </div>
            </div>
        </div>


       </section>
    )
}