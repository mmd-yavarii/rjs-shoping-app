import { Link, NavLink, useLocation } from 'react-router-dom';

import { GoHome, GoHomeFill } from 'react-icons/go';
import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from 'react-icons/pi';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { RiUserSettingsLine, RiUserSettingsFill } from 'react-icons/ri';

import styles from './Layout.module.scss';
import Search from '../components/module/Search';

function Layout({ children, isLogin, role }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname != '/login' && pathname != '/add' && pathname != '/signup' && (
        <footer className={styles.mobileFooter}>
          <NavLink replace={true} to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            {({ isActive }) => (isActive ? <GoHomeFill /> : <GoHome />)}
          </NavLink>

          <NavLink replace={true} to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            {({ isActive }) => (isActive ? <PiShoppingCartSimpleFill /> : <PiShoppingCartSimple />)}
          </NavLink>

          <NavLink to="/add" className={styles.addBtn}>
            <BiMessageSquareAdd />
          </NavLink>

          <NavLink replace={true} to="/bookmark" className={({ isActive }) => (isActive ? 'active' : '')}>
            {({ isActive }) => (isActive ? <IoBookmark /> : <IoBookmarkOutline />)}
          </NavLink>

          {role == 'admin' && (
            <NavLink to={isLogin ? '/admin' : '/login'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {({ isActive }) => (isActive ? <RiUserSettingsFill /> : <RiUserSettingsLine />)}
            </NavLink>
          )}

          <NavLink to={isLogin ? '/profile' : '/login'} className={({ isActive }) => (isActive ? 'active' : '')}>
            {({ isActive }) => (isActive ? <RiUserFill /> : <RiUserLine />)}
          </NavLink>
        </footer>
      )}

      {pathname != '/login' && pathname != '/add' && pathname != '/signup' && (
        <footer className={styles.pcFooter}>
          {pathname != '/add' ? (
            <Link className={styles.add} to="/add">
              Add Product +
            </Link>
          ) : (
            <div></div>
          )}

          {pathname == '/' && <Search />}

          <div>
            <NavLink replace={true} to="/">
              Home
            </NavLink>
            <NavLink replace={true} to="/cart">
              Cart
            </NavLink>
            <NavLink replace={true} to="/bookmark">
              Bookmarks
            </NavLink>

            {isLogin ? (
              <>
                {role == 'admin' && (
                  <NavLink replace={true} to="/admin">
                    Admin
                  </NavLink>
                )}

                <NavLink replace={true} to="/profile">
                  Profile
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </footer>
      )}

      {children}
    </>
  );
}

export default Layout;
