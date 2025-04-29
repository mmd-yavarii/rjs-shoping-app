import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import styles from '../styles/Form.module.scss';
import { PulseLoader } from 'react-spinners';
import { getUserFromServer } from '../helper/helper';

function Login() {
  const usernameInp = useRef();
  const username = useRef('');
  const password = useRef('');
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  // login handler
  async function loginHandler() {
    const user = await getUserFromServer(username.current, password.current);

    if (user.length) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      alert('No user found with the provided information');
    }
  }

  return (
    <div className={styles.formLogin}>
      <h4>Login</h4>

      <input type="text" placeholder="username" ref={usernameInp} onChange={(e) => (username.current = e.target.value)} />
      <div className={styles.inp}>
        <input type={showPass ? 'text' : 'password'} placeholder="password" onChange={(e) => (password.current = e.target.value)} />
        {<div onClick={() => setShowPass((prev) => !prev)}>{showPass ? <BsEyeSlash /> : <BsEye />}</div>}
      </div>

      <button onClick={loginHandler}>{isLoading ? <PulseLoader color="#fff" size="0.6rem" /> : 'Login'}</button>

      <Link to="/signup" replace={true}>
        Don't have an account ?
      </Link>
    </div>
  );
}

export default Login;
