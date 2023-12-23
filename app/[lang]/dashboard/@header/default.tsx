import Link from 'next/link';
import { Button, Space } from 'antd';
import React from 'react';

const Demo = () => {
  return (
    <Space>
      <Button type="link">
        <Link href="/">index</Link>
      </Button>
      <Button type="link">
        <Link href="/dashboard/docs/1">blog</Link>
      </Button>
    </Space>
  );
};

export default Demo;
