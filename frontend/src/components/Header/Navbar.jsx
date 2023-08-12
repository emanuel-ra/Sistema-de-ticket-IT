function Navbar() {
    const styles = {
        padding:'0 5em 0 5em'
    }
    
  return (
    <>
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper blue darken-4" style={styles}>
                <a href="#" className="brand-logo">Sistema de Tickets</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li> */}
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}


export default Navbar
