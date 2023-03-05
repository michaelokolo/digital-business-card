import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="footer-section">
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faGithub}/>
        </div>
    )
}

export default Footer