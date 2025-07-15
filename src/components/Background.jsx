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

  const backgroundStyles = {
    backgroundImage: `url(${src})`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: type === 'fixed' ? 'fixed' : 'scroll',
    backgroundSize: type === 'cover' ? 'cover' : type === 'contain' ? 'contain' : 'cover',
    opacity: opacity,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
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

  const containerStyles = {
    height: height,
    minHeight: minHeight,
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    overflow: 'hidden',
    position: 'relative', // 콘텐츠가 겹치지 않도록 위치 설정
  };

  const textSectionStyles = {
    position: 'relative',
    zIndex: 2,
    width: direction === 'horizontal' ? `${(1 - backgroundRatio) * 100}%` : '100%',
    height: direction === 'horizontal' ? '100%' : `${(1 - backgroundRatio) * 100}%`,
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

  return (
    <div className={`split-background ${className}`} style={containerStyles}>
      <div className="split-background__image-section" style={backgroundStyles}>
        {overlay && <div className="split-background__overlay" style={overlayStyles} />}
        <div className="split-background__content" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
          {children}
        </div>
      </div>

      <div className="split-background__text-section" style={textSectionStyles}>
        {textContent || (
          <div>
            <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold' }}>
              텍스트 영역
            </h2>
            <p>
              이 공간에 원하는 텍스트나 콘텐츠를 추가할 수 있습니다. 
              배경 이미지와 함께 멋진 레이아웃을 만들어보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitBackground;
