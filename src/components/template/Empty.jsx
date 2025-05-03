import styles from '../../styles/Empty.module.scss';
import img from '../../../public/empty.png';

function Empty() {
  return (
    <div className={styles.container}>
      <img src={img} alt="empty" />

      <h4>There's nothing here... yet!</h4>
      <p>Looks like we couldn’t find anything to show you right now !</p>
    </div>
  );
}

export default Empty;
