import React from 'react';
import { Segmented } from 'antd';

const Demo: React.FC = () => (
  <Segmented<string>
    options={['客服', '风控', '运营', '配置']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
);

export default Demo;
