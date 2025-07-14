import React from 'react';
import './Background.css';

const Background = ({ 
  src,
  alt = "배경 이미지",
  type = "cover", // cover, contain, fixed, parallax, gradient
  opacity = 1,
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  position = "center center",
  children,
  className = "",
  height = "100vh"
}) => {
  const backgroundStyles = {
    height: height,
    backgroundImage: `url(${src})`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: type === 'fixed' ? 'fixed' : 'scroll',
    backgroundSize: type === 'cover' ? 'cover' : 
                   type === 'contain' ? 'contain' : 
                   type === 'fixed' ? 'cover' : 'cover',
    opacity: opacity,
    position: 'relative'
  };

  const overlayStyles = overlay ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: overlayColor,
    zIndex: 1
  } : {};

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    height: '100%'
  };

  return (
    <div 
      className={`background ${type === 'parallax' ? 'background--parallax' : ''} ${className}`}
      style={backgroundStyles}
    >
      {overlay && <div className="background__overlay" style={overlayStyles} />}
      <div className="background__content" style={contentStyles}>
        {children}
      </div>
    </div>
  );
};

// 그라디언트 배경을 위한 별도 컴포넌트
export const GradientBackground = ({ 
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  children,
  className = "",
  height = "100vh"
}) => {
  const gradientStyles = {
    background: gradient,
    height: height,
    position: 'relative'
  };

  return (
    <div className={`background background--gradient ${className}`} style={gradientStyles}>
      <div className="background__content" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

// 멀티 레이어 배경을 위한 컴포넌트
export const MultiLayerBackground = ({ 
  layers = [],
  children,
  className = "",
  height = "100vh"
}) => {
  const layerStyles = layers.map((layer, index) => ({
    backgroundImage: `url(${layer.src})`,
    backgroundPosition: layer.position || 'center center',
    backgroundSize: layer.size || 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: layer.opacity || 1,
    zIndex: index
  }));

  return (
    <div className={`background background--multi-layer ${className}`} style={{ height, position: 'relative' }}>
      {layers.map((layer, index) => (
        <div
          key={index}
          className="background__layer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...layerStyles[index]
          }}
        />
      ))}
      <div className="background__content" style={{ position: 'relative', zIndex: 100, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Background;