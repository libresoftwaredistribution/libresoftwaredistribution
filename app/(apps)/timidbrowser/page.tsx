export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function TimidBrowser() {
  return (
      <>
       <h1>Timid browser</h1>
        <Hero />
        <Features />
        <Zigzag />
        <Testimonials />
        <Newsletter />
      </>
  )
}
