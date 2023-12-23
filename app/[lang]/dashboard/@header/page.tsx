import Link from 'next/link';
import { Button, Space } from 'antd';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Space>
        <Button type="link">
          <Link href="/">首页</Link>
        </Button>
        <Button type="link">
          <Link href={`/dashboard/docs/${Math.random()}`}>博客页</Link>
        </Button>
      </Space>
    </div>
  );
};

export default Demo;
