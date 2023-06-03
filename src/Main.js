import './style.css';

function Main() {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                <h1>Welcome to Little Lemon Restaurant</h1>
                <p>Discover a world of delicious flavors.</p>
                <a href="/menu" className="cta-button">View Menu</a>
                </div>
            </section>

            <section className="about">
                <div className="about-content">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus vitae quam gravida, non dapibus dui porttitor. Proin fringilla tortor id enim consequat viverra.</p>
                </div>
            </section>

            <section className="specials">
                <div className="specials-content">
                    <h2>Today's Specials</h2>
                    <div className="specials-grid">
                        <div className="special-item">
                        <img src="/images/special1.jpg" alt="Special 1" />
                        <h3>Special Dish 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="special-item">
                        <img src="/images/special2.jpg" alt="Special 2" />
                        <h3>Special Dish 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;