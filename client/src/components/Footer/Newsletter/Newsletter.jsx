import React from 'react';
import "./Newsletter.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';

const Newsletter = () => {
    const handleSubscribeClick = () => {
        const email = document.getElementById('emailInput').value;
    
        // Simulate an API call to handle the subscription
        subscribeUser(email);
      };
    
      const subscribeUser = (email) => {
        // Simulate an API call (replace with actual API call)
        console.log(`Subscribing user with email: ${email}`);
    
        // Reset the input field after subscribing
        document.getElementById('emailInput').value = '';
      };

    const handleSocialIconClick = (platform) => {
        // Handle social icon clicks
        console.log(`${platform} icon clicked`);
    };

    return (
        <div className='newsletter-section'>
            <div className='newsletter-content'>
                <span className='small-text'>Newsletter</span>
                <span className='big-text'>Sign up for the latest updates and offers</span>
                <div className='form'>
                    <input id='emailInput' type='text' placeholder="Email Address"></input>
                    <button onClick={handleSubscribeClick}>Subscribe</button>
                </div>
                <div className='text'>Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon" onClick={() => handleSocialIconClick('Facebook')}>
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon" onClick={() => handleSocialIconClick('Instagram')}>
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon" onClick={() => handleSocialIconClick('LinkedIn')}>
                        <FaLinkedin size={14} />
                    </div>
                    <div className="icon" onClick={() => handleSocialIconClick('Twitter')}>
                        <FaTwitter size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
