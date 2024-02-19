import React from 'react';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

const RippleContainer = ({ children, onClick }) => {
  const rippleRef = React.useRef(null);

  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };

  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

  return (
    <div
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      onClick={onClick}
      style={{ position: 'relative' }}
    >
      {children}
      <TouchRipple ref={rippleRef} center={false} />
    </div>
  );
};

export default RippleContainer;