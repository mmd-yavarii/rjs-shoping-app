import { useUserInfo } from '../context/UserProvider';

import styles from '../styles/Profile.module.scss';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { deleteRequest, getUserProductsRequest } from '../helper/functions';

import { Link } from 'react-router-dom';

import { LuUserRound } from 'react-icons/lu';
import { FiTrash2, FiEdit } from 'react-icons/fi';

function Profile() {
  const [userInfo, setUserInfo] = useUserInfo();
  const { email, id } = userInfo;
  const [userProducts, setUserProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserProductsRequest(id).then((res) => {
      setUserProducts(res);
      setIsLoading(false);
    });
  }, [userProducts]);

  // logout handler
  function logoutHandler() {
    const confirmation = confirm('Are you sure ?');
    if (confirmation) {
      setUserInfo({});
      location.reload();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.profile}>
          <LuUserRound opacity="0.6" />
        </div>
        <div>
          <h3>
            {email} {userInfo.role == 'admin' && ' / Admin'}
          </h3>
          <button onClick={logoutHandler} className={styles.logout}>
            Logout
          </button>
        </div>
      </div>

      {isLoading && !userProducts.length ? (
        <div className={styles.loader}>
          <BeatLoader size="0.6rem" />{' '}
        </div>
      ) : (
        <div>
          <h4 className={styles.title}>Your products </h4>
          {userProducts.length ? (
            userProducts.map((i) => <Cards key={i.id} info={i} />)
          ) : (
            <p className={styles.message}>You haven't added any products yet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;

function Cards({ info }) {
  const { id, image, name, category, price, discount } = info;

  // delete an item
  async function deleteHandler(event) {
    const confirmation = confirm('Are you sure ?');
    if (confirmation) {
      deleteRequest(id).then((res) => alert('Deleted succefully'));
    }
  }

  return (
    <div className={styles.card}>
      {/* image and controllers  */}
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
        <div className={styles.controller}>
          <button onClick={deleteHandler}>
            <FiTrash2 />
          </button>

          <Link to="/edit" state={info}>
            <FiEdit />
          </Link>
        </div>
      </div>

      {/* other info  */}
      <div>
        <h3>{name}</h3>
        <p>price : ${price.toLocaleString()}</p>
        {!!discount && (
          <>
            <p>discount : -{discount * 100}%</p>
            <p>final price : ${(price * (1 - discount)).toLocaleString()}</p>
          </>
        )}
        <p>category : {category}</p>
      </div>
    </div>
  );
}
