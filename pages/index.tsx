// import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';

import postData from './api/payment';

(async function() {
  console.log('fff');
  const response = await postData();
  console.log('sdfsd', response);
})();

const Home = () => {
  return (
    <div className={styles.container}>
      <div>test</div>
    </div>
  );
};

export default Home;
