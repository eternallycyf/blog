import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.css';
import '@/public/scss/global.scss';
import { i18n } from '@/i18n-config';
import StoreProvider from '@/model/StoreProvider';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <main w="100%" h="100%">
          <StoreProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
