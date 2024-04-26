import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="subscription">
            <h1>Subscribe for Updates</h1>
            <h3>Receive exclusive news and updates straight into your inbox</h3>
            <div className="email-field">
                <input type='email' placeholder='Email Address' /><button>Subscribe</button>
            </div>
        </div>
        <div className="footer">
            <div className="footer-info">
                <a href="/"><img src="/images/logo.png" className="footer-logo" /></a>
                <h3>Ensuring an informative experience</h3>
            </div>
            <div className="footer-link-section">
                <div className="footer-link">
                    <h3> Pages </h3>
                    <ul>
                        <li className="footer-links links">Home</li>
                        <li className="footer-links links">About</li>
                        <li className="footer-links links">Contact</li>
                    </ul>
                </div>
                <div className="footer-link">
                    <h3> Socials </h3>
                    <ul>
                        <li className="footer-links links">Instagram</li>
                        <li className="footer-links links">Facebook</li>
                        <li className="footer-links links">LinkedIn</li>
                    </ul>
                </div>
                <div className="footer-link">
                    <h3> Products </h3>
                    <ul>
                        <li className="footer-links links">Style Guide</li>
                        <li className="footer-links links">Licensing</li>
                        <li className="footer-links links">Change log</li>
                    </ul>
                </div>
                <div className="footer-link">
                    <h3> Contacts </h3>
                    <ul>
                        <li className="footer-links links">(+1) 234 567 8900</li>
                        <li className="footer-links links">info@logo.com</li>
                        <li className="footer-links links">123 Street, city, country</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
