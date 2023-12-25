import React from 'react';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const marks: SliderMarks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: { color: '#f50' },
    label: <strong>100°C</strong>,
  },
};

const App: React.FC = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </>
);

export default App;
