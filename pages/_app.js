import "@/styles/globals.css";

import Navigation from '@/components/Navigation';
import Header from '@/components/Header';

import { Josefin_Sans } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>The Wild Oasis</title>
      <link rel="icon" href="logo.png" />
    </Head>
      <div
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <header className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            {/* CONTENT GOES HERE */}
            <Component {...pageProps} />
          </main>
        </header>
      </div>
    </>
  )
}
