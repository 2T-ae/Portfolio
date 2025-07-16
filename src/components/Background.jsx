import React from 'react';

const SplitBackground = ({
  src = '/bluesky.jpg', // 기본 배경 이미지 경로
  alt = "배경 이미지",
  type = "cover",
  opacity = 1,
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  position = "center center",
  backgroundRatio = 2 / 3,
  textAreaColor = "#000000",
  direction = "horizontal",
  children,
  textContent,
  className = "",
  height = "100vh", // 화면 높이에 맞게 설정
  minHeight = "500px"
}) => {
  const containerStyles = {
    minHeight: height, // height 대신 minHeight 사용
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    position: 'relative',
  };

  const backgroundSectionStyles = {
    position: 'relative',
    width: direction === 'horizontal' ? `${backgroundRatio * 100}%` : '100%',
    height: direction === 'horizontal' ? '100%' : `${backgroundRatio * 100}%`,
    minHeight: direction === 'horizontal' ? minHeight : `${backgroundRatio * parseInt(minHeight)}px`,
    backgroundImage: `url(${src})`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: type === 'fixed' ? 'fixed' : 'scroll',
    backgroundSize: type === 'cover' ? 'cover' : type === 'contain' ? 'contain' : 'cover',
    opacity: opacity,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

  const textSectionStyles = {
    position: 'relative',
    width: direction === 'horizontal' ? `${(1 - backgroundRatio) * 100}%` : '100%',
    height: direction === 'horizontal' ? 'auto' : `${(1 - backgroundRatio) * 100}%`,
    minHeight: direction === 'horizontal' ? minHeight : `${(1 - backgroundRatio) * parseInt(minHeight)}px`,
    backgroundColor: textAreaColor,
    color: textAreaColor === '#000000' ? '#ffffff' : '#000000',
    padding: '60px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '18px',
    lineHeight: '1.6',
    boxSizing: 'border-box',
    flexShrink: 0,
    overflow: 'auto'
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className={`split-background ${className}`} style={containerStyles}>
      <div className="split-background__image-section" style={backgroundSectionStyles}>
        {overlay && <div className="split-background__overlay" style={overlayStyles} />}
        <div className="split-background__content" style={contentStyles}>
          {children}
        </div>
      </div>
      
      <div className="split-background__text-section" style={textSectionStyles}>
        {textContent}
      </div>
    </div>
  );
};

export default SplitBackground;