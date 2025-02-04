import { auth } from '@/auth';
import { SessionProvider } from '@/auth/sessionProvider';
import StyledComponentsRegistry from '@/lib/registry';
import ReduxProvider from '@/store/reduxProvider';
import '@/styles/globals.css';
import GlobalStyledComponents from '@/styles/globalStyledComponents';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale }: { locale: string } = await params;
  const t = await getTranslations({
    locale: locale,
    namespace: 'metaData'
  });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const messages = await getMessages();
  const locale = (await params).locale;
  const session = await auth();

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <SessionProvider session={session}>
          <ReduxProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <StyledComponentsRegistry>
                <GlobalStyledComponents />
                {children}
              </StyledComponentsRegistry>
            </NextIntlClientProvider>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
