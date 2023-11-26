import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-item">
                <FontAwesomeIcon icon={faLinkedinIn} />
                <a href="https://www.linkedin.com/in/mahmoud-samir-salama-992681238" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/MahmoudSamir2003?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:mahmoud.samir.salama@gmail.com">mahmoud.samir.salama@gmail.com</a>
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+201552203715</span>
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Egypt, Zagazig</span>
            </div>
        </div>
    );
};

export default Contact;
