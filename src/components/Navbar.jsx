const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div>
                <a href="/"><img src="/images/logo.png" className="navbar-logo" /></a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="links">Home</li>
                    <li className="links">About</li>
                    <li className="links">Contact</li>
                </ul>    
            </div>  
        </nav>
    </>
  )
}

export default Navbar
