import React, { useContext } from 'react';
import { LearningContext } from '../App';

const LevelMeter = () => {
  const { level, progress } = useContext(LearningContext);

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', width: '200px', background: '#eee', borderRadius: '8px', padding: '8px' }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>Level {level}</div>
      <div style={{ width: '100%', background: '#ddd', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, background: '#4caf50', height: '8px' }}></div>
      </div>
    </div>
  );
};

export default LevelMeter;