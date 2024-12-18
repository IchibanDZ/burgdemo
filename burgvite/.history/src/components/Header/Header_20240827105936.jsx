import ''

const Header = () => {
    return ( 
        <nav className="navbar">
      <div className="logo">img</div>
      <div className="menu-toggle" id="menu-toggle">
        <i className="fa-solid fa-burger"></i>
      </div>
      <div className="menu">
        <ul className="nav-links" id="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>

          
          <div className="icones">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
             <button className="click-and-collect-btn">
              <i className="fa-solid fa-bag-shopping"></i> Click and Collect
            </button>
          </div>
           <div className="ClickColl">
           
          </div>
          
        </ul>
        
      </div>
    </nav>
    )
}

export default Header