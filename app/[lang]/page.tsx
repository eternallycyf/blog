'use client';
import { Locale } from '@/i18n-config';
import { useStore } from '@/model/store';
import ThemeConfig from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/zh_CN';
import { useLayoutEffect } from 'react';

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <section>
      <div id="root" w="100%" h="100%">
        <ConfigProvider
          locale={locale}
          componentSize="small"
          theme={ThemeConfig}
        ></ConfigProvider>
      </div>
    </section>
  );
}
