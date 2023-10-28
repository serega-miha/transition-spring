import './header.scss';

import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
        <div class="nav-wrapper container">
          
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li className='header-link'><NavLink to='.'>Menu1</NavLink></li>
            <li className='header-link'><NavLink to='/menu2'>Menu2</NavLink></li>
            <li className='header-link'><NavLink to='/menu3'>Menu3</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
 export default Header;