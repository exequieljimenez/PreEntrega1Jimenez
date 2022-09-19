import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem'}}>
            <div>
                <h1>La Tabla</h1>
            </div>
            <div>
                <button>Quesos</button>
                <button>Embutidos y salazones</button>
                <button>Vinos</button>
                <button>Panes</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar