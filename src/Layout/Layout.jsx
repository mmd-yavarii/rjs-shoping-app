import { FaRegUser } from 'react-icons/fa6';
import { IoArrowBackOutline } from 'react-icons/io5';
import { LiaUserCogSolid } from 'react-icons/lia';

import styles from './Layout.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Layout({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <header className={styles.header}>
        {pathname != '/' ? (
          <button onClick={() => navigate(-1)}>
            <IoArrowBackOutline fontSize="1.3rem" opacity="0.7" />
          </button>
        ) : (
          <p>Explore</p>
        )}

        <div className={styles.buttons}>
          <Link>
            <LiaUserCogSolid opacity="0.6" fontSize="1.3rem" />
          </Link>

          <Link to="/login">
            <FaRegUser opacity="0.6" />
          </Link>
        </div>
      </header>

      {children}
    </>
  );
}

export default Layout;
