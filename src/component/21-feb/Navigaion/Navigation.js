import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Crown } from '../../../assets/crown.svg';
import './Navigation.scss'

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <Link to='/'>
                <Crown className='logo'/>
            </Link>
            <div className='links-container'>
              <Link className='nav-link' to='/shop'>SHOP</Link>
              <Link className='nav-link' to='/signin'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;