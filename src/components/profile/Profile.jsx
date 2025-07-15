import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({ 
  src, 
  alt = "프로필 사진", 
  size = "medium", 
  shape = "circle",
  className = "",
  onClick
}) => {
  const sizeClasses = {
    small: "profile-image--small",
    medium: "profile-image--medium", 
    large: "profile-image--large",
    exlarge: "profile-image--ex-large"
  };

  const shapeClasses = {
    circle: "profile-image--circle",
    square: "profile-image--square",
    rounded: "profile-image--rounded"
  };

  return (
    <div 
      className={`profile-image ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt}
        className="profile-image__img"
        onError={(e) => {
          e.target.src = 'default-avatar.png';
        }}
      />
    </div>
  );
};

export default ProfileImage;