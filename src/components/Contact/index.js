import './index.scss'

const Contact = () => {
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                Contact Me
            </h1>
            <p>
                I am interested in solving difficult problems
                and creating quality products. Please feel free 
                to contact me with any questions or opportunities.
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder='Subject' type= "text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required/>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send" />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        </div>
        
    )
}

export default Contact