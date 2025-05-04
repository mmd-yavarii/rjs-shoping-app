import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { categoryRequest, shorterText } from '../helper/functions';

import styles from '../styles/ProductDetail.module.scss';
import BookmarkBtn from '../components/module/BookmarkBtn';
import Card from '../components/module/Card';
import { PulseLoader } from 'react-spinners';

import { BiCategoryAlt } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { RiDiscountPercentLine } from 'react-icons/ri';
import CartControllers from '../components/module/CartControllers';

function ProductDetail() {
  const id = useParams().id;
  const { state } = useLocation();

  const { name, image, rating, category, price, discount, description } = state;

  const [moreDescription, setMoreDescription] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);

  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  // get similar products
  useEffect(() => {
    setIsLoading(true);
    categoryRequest(category)
      .then((res) => res.filter((i) => i.id !== id).slice(0, 2))
      .then((filtered) => setSimilarProducts(filtered))
      .finally(() => setIsLoading(false));
  }, [category, id]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.bookmark}>
            <BookmarkBtn info={state} />
          </div>
          <img src={image} alt={name} />
        </div>

        <div className={styles.info}>
          <div className={styles.productInfo}>
            <div>
              <BiCategoryAlt />
              <p>{category}</p>
            </div>

            <div>
              <FaRegStar />
              <p>{rating}</p>
            </div>

            <div>
              <LiaMoneyBillWaveSolid />
              <p>${(price * (1 - discount)).toLocaleString()}</p>
            </div>

            <div>
              <RiDiscountPercentLine />
              <p>{discount} %</p>
            </div>
          </div>

          <h3 className={styles.name}>{name}</h3>

          <div className={styles.detail}>
            <p className={styles.detailTitle}>Product Details</p>
            {moreDescription ? (
              <p>{description}</p>
            ) : (
              <p>
                {shorterText(description)} {!moreDescription && <button onClick={() => setMoreDescription(true)}>Read more</button>}
              </p>
            )}
          </div>

          <CartControllers info={state} />
        </div>
      </div>

      {/* similar products session  */}
      {similarProducts.length > 0 && (
        <div className={styles.recommendContainer}>
          <h4>You Might Also Like</h4>
          {isLoading ? (
            <div className={styles.loader}>
              <PulseLoader />
            </div>
          ) : (
            <div className={styles.recommend}>
              {similarProducts.map((i) => (
                <Card key={i.id} info={i} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProductDetail;
