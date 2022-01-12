import React from 'react'
import './feature.css';

// const Feature = () => {
//     return (
//         <div className='nekoh__features-container__feature'>
//             <div className='nekoh__features-container__feature-title'>
//         </div>
//         <h1>{title}</h1>
//         </div>
//         <div className='nekoh__features-container_feature-text'>
//             <p>{text}</p>
//         </div>
//         </div>
//     )
// }

const Feature = ({ title, text }) => (
    <div className="nekoh__features-container__feature">
      <div className="nekoh__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="nekoh__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
export default Feature
