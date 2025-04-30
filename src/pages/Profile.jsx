import { Link } from 'react-router-dom';
import { useLogin } from '../context/LoginProvider';

import styles from '../styles/Profile.module.scss';

import { FaRegUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { IoBookmarkOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

function Profile() {
  const [userInfo, setUserInfo] = useLogin()?.[0];

  function logoutHandler() {
    localStorage;
  }

  return (
    <>
      <div className={styles.userInfo}>
        <div>
          <FaRegUser fontSize="1.3rem" opacity="0.5" />
        </div>
        <h5>{userInfo.username}</h5>
      </div>

      <div className={styles.links}>
        <Link>
          <IoCartOutline /> <span>Cart</span>
        </Link>

        <Link>
          <IoBookmarkOutline /> <span>Bookmarks</span>
        </Link>

        <button className={styles.logout} onClick={logoutHandler}>
          <MdLogout fontSize="1rem" /> <span>Logout</span>
        </button>
      </div>
    </>
  );
}

export default Profile;
