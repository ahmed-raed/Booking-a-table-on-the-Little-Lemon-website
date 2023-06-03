import './style.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <p>&copy; 2023 Your Restaurant. All rights reserved.</p>
                    <ul className="footer-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;