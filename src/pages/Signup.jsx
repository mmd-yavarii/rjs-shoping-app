import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import styles from '../styles/Form.module.scss';
import axios from 'axios';
import { signUpApi } from '../api/urls';
import { getUserFromServer } from '../helper/helper';
import { PulseLoader } from 'react-spinners';

import { v4 as uuidv4 } from 'uuid';

function Signup() {
  const usernameInp = useRef();
  const username = useRef('');
  const password = useRef('');
  const repassword = useRef('');
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  // handle sign up
  async function signUpHandler() {
    if (password.current === repassword.current && password.current && repassword.current && username.current) {
      setIsloading(true);

      const userData = {
        role: 'user',
        username: username.current,
        password: password.current,
        id: uuidv4(),
      };

      const existanceuser = await getUserFromServer(username.current, password.current);

      localStorage.setItem('user', JSON.stringify(userData));

      if (existanceuser.length) {
        alert('you already have an account');
      } else {
        axios
          .post(signUpApi, userData)
          .then((res) => {
            navigate('/');
          })
          .catch((err) => alert('An Error occurred'));
      }
    } else {
      alert('please fill in form correctly ');
    }
    setIsloading(false);
  }

  return (
    <div className={styles.formLogin}>
      <h4>Sign Up</h4>

      <input type="text" placeholder="username" ref={usernameInp} onChange={(e) => (username.current = e.target.value)} />
      <div className={styles.inp}>
        <input type={showPass ? 'text' : 'password'} placeholder="password" onChange={(e) => (password.current = e.target.value)} />
        {<div onClick={() => setShowPass((prev) => !prev)}>{showPass ? <BsEyeSlash /> : <BsEye />}</div>}
      </div>
      <div className={styles.inp}>
        <input type={showPass ? 'text' : 'password'} placeholder="confirm lpassword" onChange={(e) => (repassword.current = e.target.value)} />
      </div>

      <button onClick={signUpHandler}>{isLoading ? <PulseLoader color="#fff" size="0.6rem" /> : 'Sign Up'}</button>

      <Link to="/login" replace={true}>
        Already have an account ?
      </Link>
    </div>
  );
}

export default Signup;
