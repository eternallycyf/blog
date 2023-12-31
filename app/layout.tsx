import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.css';
import '@/public/scss/global.scss';
import { i18n } from '@/i18n-config';
import StoreProvider from '@/model/StoreProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'blog',
  description: 'eternallycyf blog',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: (typeof i18n)['locales'][number];
  };
}) {
  return (
    <html lang={params.lang} dir="auto">
      <body className={inter.className}>
        <main w="100%" h="100%">
          <StoreProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
