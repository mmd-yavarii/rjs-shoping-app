import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Auth.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { checkRequest, emailValidation, passwordValidation, signUpRequest } from '../helper/functions';

import { v4 as uuidv4 } from 'uuid';
import { useUserInfo } from '../context/UserProvider';

function Signup() {
  const firstInp = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const [visablePass, setVisablePass] = useState(false);
  const [visableConf, setVisableConf] = useState(false);

  useEffect(() => firstInp.current.focus(), []);

  const [isEmailValied, setIsEmailValied] = useState(false);
  const [isPasswordValied, setIsPasswordValied] = useState(false);
  const [isConfirmValied, setIsConfirmValied] = useState(false);

  const [userInfo, setUserInfo] = useUserInfo();

  const navigate = useNavigate();

  // sign up handler
  async function signUpHandler() {
    if (isEmailValied && isPasswordValied && isConfirmValied) {
      setIsLoading(true);

      if (password.current === confirmPassword.current) {
        const getUser = await checkRequest(email.current);

        const isUserExist = !!getUser.length;

        if (isUserExist) {
          setIsLoading(true);
          alert('A user with this information already exists');
          setIsLoading(false);
          return;
        }

        const user = {
          id: uuidv4(),
          email: email.current,
          role: 'user',
          password: password.current,
          products: [],
        };

        const response = await signUpRequest(user);
        setUserInfo(response);
        navigate('/', { replace: true });

        alert('Registration successful! Welcome .');
      } else {
        alert('The password confirmation does not match.');
      }

      setIsLoading(false);
    } else {
      alert('Please fill in all the input fields correctly.');
    }
  }

  // email input handler
  function emailInpHandler(event) {
    setIsEmailValied(emailValidation(event.target.value));
    email.current = event.target.value;
  }

  // password input handler
  function passwordInpHandler(event) {
    setIsPasswordValied(passwordValidation(event.target.value));
    password.current = event.target.value;
  }

  // confirm input handler
  function confirmInpHandler(event) {
    setIsConfirmValied(passwordValidation(event.target.value));
    confirmPassword.current = event.target.value;
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Create an account</h4>

      <div className={styles.inputsContainer}>
        <input type="text" placeholder="email" onChange={emailInpHandler} className={isEmailValied ? 'success-inp' : 'error-inp'} ref={firstInp} />

        {/* passwor input  */}
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

        {/* conform password input */}
        <div className={styles.passinp}>
          <input
            type={visableConf ? 'text' : 'password'}
            placeholder="confirm password"
            onChange={confirmInpHandler}
            className={isConfirmValied ? 'success-inp' : 'error-inp'}
          />
          {visableConf ? (
            <AiOutlineEyeInvisible onClick={() => setVisableConf(!visableConf)} size="1.3rem" opacity="0.5" className={styles.eye} />
          ) : (
            <AiOutlineEye onClick={() => setVisableConf(!visableConf)} size="1.3rem" opacity="0.5" className={styles.eye} />
          )}
        </div>

        <div className={styles.messageContteiner}>
          <span className={styles.message}>Please use at least 8 characters.</span>
          <span className={styles.message}>Include both uppercase and lowercase letters. </span>
          <span className={styles.message}>Include numbers as well.</span>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <button className="them-btn" onClick={signUpHandler}>
          {isLoading ? <PulseLoader size="0.7rem" color="#fff" /> : 'Sign up'}
        </button>
        <Link to="/login" replace={true}>
          Already have an account
        </Link>
      </div>
    </div>
  );
}

export default Signup;
