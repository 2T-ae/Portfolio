import React from 'react';

const SplitBackground = ({
  src = '/bluesky.jpg',
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
  height = "100vh",
  minHeight = "500px",
  fixedBackground = false, // 새 옵션: 배경 고정 여부
  textAreaProps = {} // 텍스트 영역 추가 스타일링
}) => {
  const containerStyles = {
    width: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    minHeight: height,
  };

  const backgroundSectionStyles = {
    position: fixedBackground ? 'fixed' : 'relative',
    width: direction === 'horizontal' ? `${backgroundRatio * 100}%` : '100%',
    height: direction === 'horizontal' ? '100vh' : `${backgroundRatio * 100}%`,
    top: fixedBackground ? 0 : 'auto',
    left: fixedBackground ? 0 : 'auto',
    backgroundImage: `url(${src})`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundSize: type === 'cover' ? 'cover' : type === 'contain' ? 'contain' : 'cover',
    opacity: opacity,
    zIndex: 1,
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
    background: typeof overlayColor === 'string' && overlayColor.includes('gradient') 
      ? overlayColor 
      : `rgba(${overlayColor.replace('rgba(', '').replace(')', '')})`,
    zIndex: 1
  } : {};

  const textSectionStyles = {
    position: 'relative',
    width: direction === 'horizontal' ? `${(1 - backgroundRatio) * 100}%` : '100%',
    marginLeft: fixedBackground && direction === 'horizontal' ? `${backgroundRatio * 100}%` : 0,
    minHeight: height,
    backgroundColor: textAreaColor,
    color: textAreaColor === '#000000' ? '#ffffff' : '#000000',
    zIndex: 3,
    ...textAreaProps
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
      {/* 배경 섹션 */}
      <div className="split-background__image-section" style={backgroundSectionStyles}>
        {overlay && <div className="split-background__overlay" style={overlayStyles} />}
        <div className="split-background__content" style={contentStyles}>
          {children}
        </div>
      </div>
      
      {/* 텍스트 섹션 */}
      <div className="split-background__text-section" style={textSectionStyles}>
        {textContent}
      </div>
    </div>
  );
};

export default SplitBackground;