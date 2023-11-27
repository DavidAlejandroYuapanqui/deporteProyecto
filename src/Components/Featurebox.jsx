import React from 'react';

function IndividualFeaturebox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>
          "El mejor ejericio para estar sano"
        </p>
      </div>
    </div>
  );
}

export default IndividualFeaturebox;