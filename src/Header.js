import './style.css';

function Header() {
    return (
        <div>
            <nav>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;