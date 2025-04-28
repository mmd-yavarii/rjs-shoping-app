import { FaStar } from 'react-icons/fa';

function Rating({ rate }) {
  const stars = [];

  const fullStars = Math.floor(rate);
  const emptyStars = 5 - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} fontSize="0.75rem" color="orange" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaStar key={`empty-${i}`} fontSize="0.75rem" opacity="0.5" color="lightgray" />);
  }

  return (
    <p>
      {stars}

      <span style={{ marginLeft: '8px' }}>{rate}</span>
    </p>
  );
}

export default Rating;
