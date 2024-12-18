const Header = () => {
    return ( 
        <nav class="navbar">
      <div class="logo"><img src="./logo-BurgerNation.png" alt=""></div>
      <div class="menu-toggle" id="menu-toggle">
        <i class="fa-solid fa-burger"></i>
      </div>
      <div class="menu">
        <ul class="nav-links" id="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>

          
          <div class="icones">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
             <button class="click-and-collect-btn">
              <i class="fa-solid fa-bag-shopping"></i> Click and Collect
            </button>
          </div>
           <div class="ClickColl">
           
          </div>
          
        </ul>
        <div class="container">
          
         
        </div>
      </div>
    </nav>
    )
}