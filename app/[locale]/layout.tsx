import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../i18n/config";
import { ThemeProvider } from "../context/ThemeContext";
import { ScrollProvider } from "../context/ScrollContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
