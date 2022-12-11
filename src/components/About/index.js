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
                    Hometown: San Diego
                </p>

                <p> 
                    Education: BA Data Science from UC Berkeley    
                </p>
                <p> 
                    Current Position: Data Engineer at Pacific Gas and Electric working with the 
                    Public Safety Power Shutoff team to mitigate risk in high fire threat areas 
                    throughout California.    
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