import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Auth.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { emailValidation, loginRequest, passwordValidation } from '../helper/functions';
import { useUserInfo } from '../context/UserProvider';
function Login({}) {
  const firstInp = useRef();
  const email = useRef();
  const password = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [visablePass, setVisablePass] = useState(false);

  useEffect(() => firstInp.current.focus(), []);

  const [isEmailValied, setIsEmailValied] = useState(false);
  const [isPasswordValied, setIsPasswordValied] = useState(false);

  const [userInfo, setUserInfo] = useUserInfo();

  const navigate = useNavigate();

  // login handler
  async function loginHandler() {
    if (isEmailValied && isPasswordValied) {
      setIsLoading(true);
      const res = await loginRequest(email.current, password.current);
      setUserInfo(res);
      setIsLoading(false);
      if (res.length) {
        alert('You have logged in successfully. Welcome back!');
        navigate('/', { replace: true });
      } else {
        alert('No user found with the provided information.');
      }
    } else {
      alert('Please fill in all the input fields correctly.');
    }
  }

  // email input handler
  function emailInpHandler(event) {
    setIsEmailValied(emailValidation(event.target.value));
    email.current = event.target.value;
  }

  // email input handler
  function passwordInpHandler(event) {
    setIsPasswordValied(passwordValidation(event.target.value));
    password.current = event.target.value;
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Login here</h4>

      <div className={styles.inputsContainer}>
        <input type="text" placeholder="email" onChange={emailInpHandler} ref={firstInp} className={isEmailValied ? 'success-inp' : 'error-inp'} />

        {/* password input  */}
        <div className={styles.passinp}>
          <input
            type={visablePass ? 'text' : 'password'}
            placeholder="password"
            onChange={passwordInpHandler}
            className={isPasswordValied ? 'success-inp' : 'error-inp'}
          />
          {visablePass ? (
            <AiOutlineEyeInvisible onClick={() => setVisablePass(!visablePass)} size="1.3rem" opacity="0.5" className={styles.eye} />
          ) : (
            <AiOutlineEye onClick={() => setVisablePass(!visablePass)} size="1.3rem" opacity="0.5" className={styles.eye} />
          )}
        </div>

        <div className={styles.messageContteiner}>
          <span className={styles.message}>Please use at least 8 characters.</span>
          <span className={styles.message}>Include both uppercase and lowercase letters. </span>
          <span className={styles.message}>Include numbers as well.</span>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <button className="them-btn" onClick={loginHandler}>
          {isLoading ? <PulseLoader size="0.7rem" color="#fff" /> : 'Sign in'}
        </button>
        <Link to="/signup" replace={true}>
          Create new account
        </Link>
      </div>
    </div>
  );
}

export default Login;
