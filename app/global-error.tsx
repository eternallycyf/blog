'use client';
import React, { useEffect } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Result
          status="error"
          title="Submission Failed"
          subTitle="Please check and modify the following information before resubmitting."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy" onClick={reset}>
              Try Again
            </Button>,
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                The content you submitted has the following error:
                <pre>{JSON.stringify(error, null, 2)}</pre>
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
              Your account has been frozen. <a>Thaw immediately &gt;</a>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
              Your account is not yet eligible to apply.{' '}
              <a>Apply Unlock &gt;</a>
            </Paragraph>
          </div>
        </Result>
      </body>
    </html>
  );
};

export default GlobalError;
