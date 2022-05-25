import styles from './Card.module.scss';
import React from 'react';
function Card({onFavorite, title, imageUrl, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

    return (
        <div className={styles.card}>
         <div className={styles.favorite} onClick={onFavorite}> 
          <img src="/img/unlikee.svg" alt="Unlike" />
          </div> 
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b> {price} lei.</b>
          </div>
          
            <img className={styles.plus} onClick={onClickPlus}  src={isAdded ?  "/img/verde.svg" :"/img/btnn-plus.svg" }
             alt="Plus"/>
          
        </div>
      </div> 
    );
}


export default Card;




