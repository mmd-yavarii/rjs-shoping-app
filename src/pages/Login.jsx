import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import styles from '../styles/Form.module.scss';

function Login() {
  const usernameInp = useRef();
  const username = useRef('');
  const password = useRef('');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={styles.formLogin}>
      <h4>Login</h4>

      <input type="text" placeholder="username" ref={usernameInp} onChange={(e) => (username.current = e.target.value)} />
      <div className={styles.inp}>
        <input type={showPass ? 'text' : 'password'} placeholder="password" onChange={(e) => (password.current = e.target.value)} />
        {<div onClick={() => setShowPass((prev) => !prev)}>{showPass ? <BsEyeSlash /> : <BsEye />}</div>}
      </div>

      <button>Login</button>

      <Link to="/signup" replace={true}>
        Don't have an account ?
      </Link>
    </div>
  );
}

export default Login;
