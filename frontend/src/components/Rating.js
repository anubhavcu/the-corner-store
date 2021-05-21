import React from 'react';

const Rating = ({ value, text, color }) => {
  // const { value, text } = props;
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        >
          {' '}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        >
          {' '}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        >
          {' '}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        >
          {' '}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        >
          {' '}
        </i>
      </span>
      <span>{text ? text : ''}</span>
    </div>
  );
};
//not passing color as a prop but setting it's default value for this component
Rating.defaultProps = {
  color: '#f8e825',
};
export default Rating;

// {text ? text : " "}  same as {text && text}
