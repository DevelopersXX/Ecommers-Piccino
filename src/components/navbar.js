import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Logo from "./logo.png"

const NavBarMac = () => {
    return(

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='logotype' href='/'>
          <Link to ='/'>
            <img src={ Logo } alt="logo" width='100' />
          </Link>
        </a>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
          <div className='navbar-nav mx-auto'>
            <a className='nav-link active' aria-current="page" href="/">Inicio</a>
            <Link to='/categories/Macetas de Cemento'> <a className='nav-link' href="/Streetwear">Macetas de Cemento</a> </Link>
            <Link to='/categories/Macetas de Madera'> <a className='nav-link' href="/Skate">Macetas de Madera</a> </Link>
          </div>
        </div>
      </div>
    
        <CartWidget />
    
    </nav>
    )
}
export default NavBarMac