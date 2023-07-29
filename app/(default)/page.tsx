export const metadata = {
  title: 'Timid Browser',
  description: 'Modern notes manager for iOS',
}

import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Hero from "@/components/hero";

import heroImage from '../../public/images/hero-image-01.jpg'
import featureImage01 from '../../public/images/zig-001.png'
import featureImage02 from '../../public/images/zig-002.png'

const featureDetails = [
  {title: "Software Development Consulting", subtitle: " With a team of highly skilled and experienced experts, they provide tailored solutions to businesses, leveraging cutting-edge technologies and best practices to address diverse challenges and deliver exceptional results."},
  {title: "Lovingly crafted in house apps", subtitle: "we take pride in creating lovingly crafted applications that blend exquisite design with top-notch functionality. Our passionate team of developers and designers meticulously curates each app, ensuring an intuitive user experience and unparalleled attention to detail, making them a joy to use and cherish."},
  {title: "Open Source Software Distribution", subtitle: "Comprehensive services for the distribution of open source software. Seamless access to a wide array of open source applications, tools, and platforms, empowering businesses to leverage the benefits of cost-effective, customizable, and community-driven software solutions."},
]

const zigzagItems = [
  {
    title: "Full Software Solutions",
    subtitle: "iOS, Android, React Native, Full Stack",
    body: "Comprehensive full-stack solutions to meet our clients' diverse needs. Our expert team can handle everything from frontend development to backend architecture, delivering end-to-end software solutions that are tailored to each client's unique requirements.",
    image: featureImage01,
    list: [
      "Native and React mobile applications",
      "Modern Reactive Websites",
      "Full stack solutions",
    ]
  },
  {
    title: "Distribution Management",
    subtitle: "We'll take care of busy work",
    body: "We can help with software distribution and management. Offering seamless and efficient processes for reaching wider audiences. With our expertise, we ensure that software products reach the right marketplaces and platforms, maximizing their visibility and potential for success.",
    image: featureImage02,
    list: [
      "Focus on what you do best",
      "We will handle the rest",
      "Software deployment hustle free",
    ]
  },
]


export default function TimidBrowser() {
  return (
      <>
        <Hero
            title={"libreSoftDistro"}
            subtitle={"Lovingly, expertly crafted software is the epitome of technological excellence infused with a heartfelt passion for the craft. The attention to detail is unparalleled, with each feature carefully designed and meticulously implemented to ensure a seamless user experience."}
            downloadURL={"mailto:contact@libresoftdistro.com"}
            supportURL={"mailto:contact@libresoftdistro.com"}
            heroImage={heroImage}
        />
        <Features
            title={"Experts in Building, Distributing and Managing Software Solutions"}
            subtitle={"Adeptness in diverse software domains enables us to deliver highly targeted solutions."}
            features={featureDetails}
        />
        <Zigzag
            title={"Exquisite Software Solutions"}
            subtitle={"We believe that meeting and exceeding our customers' expectations is of utmost importance, and we strive to ensure that every client receives the highest level of service and support."}
            bubble={"libreSoftDistro"}
            items={zigzagItems}
        />
        <Newsletter/>
      </>
  )
}
