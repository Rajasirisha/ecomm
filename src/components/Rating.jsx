import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="small" color='orange'/>
          ) : (
            <AiOutlineStar fontSize="small" color='#541743'/>
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;