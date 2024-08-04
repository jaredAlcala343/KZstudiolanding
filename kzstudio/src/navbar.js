import './Navbar.css';

function Navbar() {
  return (
    <body>
            <nav class="navbar">
                <div class="container">
                    <a href="#" class="logo">KZstudio</a>
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
    </body>
  );
}

export default Navbar;
