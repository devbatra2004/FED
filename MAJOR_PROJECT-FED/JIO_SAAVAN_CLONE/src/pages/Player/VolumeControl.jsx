import React from 'react';

const VolumeControl = () => {
  return (
    <div className="volume-control">
      <input type="range" min={0} max={100} step='0.1' value={0} className="range-slider" />
    </div>
  );
}

export default VolumeControl;
