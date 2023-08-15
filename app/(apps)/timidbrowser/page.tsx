export const metadata = {
    title: 'Timid Browser',
    description: 'Modern notes manager for iOS',
}

import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Hero from "@/components/hero";

import heroImage from '../../../public/images/timidhero.png'
import featureImage01 from '../../../public/images/features-timid-001.png'
import featureImage02 from '../../../public/images/features-timid-002.png'

const featureDetails = [
    {title: "Block invasive ads", subtitle: "Cross-site trackers, Third-party cookie tracking and fingerprinting blocked"},
    {title: "Browser you love", subtitle: "Another instance of browser you already know and love"},
    {title: "Compartmentalization", subtitle: "Separate browser for your work stuff, personal & anon stuff is wise way to go."},
]

const zigzagItems = [
    {
        title: "Privacy",
        subtitle: "Privacy is a human right",
        body: "Web browser that respects your privacy. Sensible blocking and anti tracking out of the box by default.",
        image: featureImage01,
        list: [
            "Block cross-site trackers",
            "Block third-party cookie tracking",
            "Block fingerprinting blocked",
        ]
    },
    {
        title: "Browser you already love",
        subtitle: "Fork of your favourite browser",
        body: "When is comes to privacy, compartmentalization is important tool in the tool box. Separate browser for your work stuff, personal & anon stuff is wise way to go. If you love Brave browser and you wish you could have another instance of it on your phone, that's where Timid comes in.",
        image: featureImage02,
        list: [
            "Fast",
            "Simple",
            "Sleek",
        ]
    },
]


export default function TimidBrowser() {
    return (
        <>
            <Hero
                title={"Timid Browser"}
                subtitle={"When is comes to privacy, compartmentalization is important tool in the tool box. Separate browser for your work stuff, personal & anon stuff is wise way to go. If you love Brave browser and you wish you could have another instance of it on your phone, that's where Timid comes in."}
                primaryURL={"https://testflight.apple.com/join/mZbcqiQ0"}
                secondaryURL={"https://github.com/libresoftwaredistribution/timid-browser-ios/issues"}
                heroImage={heroImage}
            />
            <Features
                title={"Privacy"}
                subtitle={"Timid never collects any user data or analytics. Adverts and tracking blocking out of the box."}
                features={featureDetails}
            />
            <Zigzag
                title={"Powerful, feature packed, secure"}
                subtitle={"Full of unique advanced features for power users"}
                bubble={"timid"}
                items={zigzagItems}
            />
            <Newsletter/>
        </>
    )
}
