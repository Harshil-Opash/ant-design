import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const App: React.FC = () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);

export default App;
