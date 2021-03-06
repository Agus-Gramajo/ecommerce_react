import CartWidget from './CartWidget';
import Logo from '../img/logo.png'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand w-10" href="/"><img src={Logo} alt="logo" className="w-50" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Quiénes somos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Productos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/">Alimentos</a>
                    <a className="dropdown-item" href="/">Belleza</a>
                    <a className="dropdown-item" href="/">Deco</a>
                    </div>
                </li>
                </ul>
            </div>
            <CartWidget />
            </nav>
        </div>
    );
}

export default NavBar;