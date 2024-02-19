import React from 'react';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

const RippleContainer = ({ children, component, onClick }) => {
  const As = component || 'div';
  const rippleRef = React.useRef(null);

  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };

  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

  return (
    <As
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      onClick={onClick}
      style={{ position: 'relative' }}
    >
      {children}
      <TouchRipple ref={rippleRef} center={false} />
    </As>
  );
};

export default RippleContainer;