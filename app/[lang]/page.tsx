import { Alert, Button, ConfigProvider, Typography, Input } from 'antd';
import ThemeConfig from '@/theme/themeConfig';
import locale from 'antd/locale/zh_CN';
import Link from 'next/link';
import HelloWorld from './hello-world/page.mdx';
import { getLocale } from '@/locale/utils';
import { Locale } from '@/i18n-config';
import LocaleSwitcher from './_components/locale-switcher';
import variables from '@/styles/variables.module.scss';
import type { Route } from 'next';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const localLocale = await getLocale(lang);
  return (
    <section>
      <div id="root">
        <ConfigProvider
          locale={locale}
          componentSize="small"
          theme={ThemeConfig}
        >
          <HelloWorld />
          <Link href={'/proxy' as Route}>proxy</Link>
          <LocaleSwitcher />
          {localLocale['server-component'].welcome}
          <h1 style={{ color: variables.colorPrimary }}>Hello, scss!</h1>
        </ConfigProvider>
      </div>
    </section>
  );
}
