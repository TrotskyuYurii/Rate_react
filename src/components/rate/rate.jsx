import { useState, useEffect } from 'react';
import Ratings from 'react-ratings-declarative';

const Rate = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log('Current rating:', rating);
  }, [rating]);

  const changeRating = (newRating) => {
    setRating(Number(newRating));
  };

  return (
    <div>
      <Ratings
        rating={Number(rating)}
        widgetRatedColors="blue"
        changeRating={changeRating}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget
          widgetDimension="60px"
          svgIconViewBox="0 0 5 5"
          svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        />
        <Ratings.Widget widgetHoverColor="black" />
        <Ratings.Widget />
      </Ratings>
      <p>Current rating: {rating}</p>
    </div>
  );
};

export default Rate;