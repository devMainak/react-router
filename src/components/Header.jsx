import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container pt-4">
      <h2 className='display-2'>My Food Delivery Website</h2>
      <nav className='pt-4'>
        <ul className="nav">
          <li className='nav-item'><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/restaurants">Restaurants</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/about">About</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
