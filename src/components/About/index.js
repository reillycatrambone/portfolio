import { faCss3, faGitAlt, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>

                <p> 
                    I am an engineer looking to solve difficult problems and build quality products.
                </p>

                <p> 
                    I graduated from UC Berkeley with a Bachelors in Data Science, 
                    primarily focused in Finance.    
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#7FFFD4'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color='#FF7F50'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#FFD700'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#BA55D3'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCss3} color='#98FB98'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About