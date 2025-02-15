// app/[locale]/client/layout.tsx
import { ReactElement } from 'react'
import { I18nProviderClient } from '../../../locales/client'
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import Navbar from './components/NavBar/NavBar';

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
  variable: "--font-radio-canada", // Custom CSS variable
});
 
// If you are using Next.js < 15, you don't need to await `params`:
export default async function SubLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params
 
  return (
    
    <html lang="fr" >
    <body className={radioCanada.variable}>
        <I18nProviderClient locale={locale}>
          <Navbar />
          {children}
    </I18nProviderClient>
    </body>
  </html>
  )
}