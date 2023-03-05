import picture from './images/info-img.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Info(){
    return(
        <div className="info-section">
            <img src={picture} className="image"/>
            <h1 className="name">Laura Smith</h1>
            <h4 className="profession">Software Developer</h4>
            <p className="website">Laurasmithwebsite.com</p>
            <div className="btns">
                <a className="email-btn" href="#">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <p>Email</p>
                </a>
                <a href="#"className="linkedin-btn">
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <p>Linkedin</p>
                </a>

            </div>
        </div>
    )
}

export default Info