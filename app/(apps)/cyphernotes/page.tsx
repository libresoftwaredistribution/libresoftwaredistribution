export const metadata = {
    title: 'Cypher Notes',
    description: 'Modern notes manager for iOS',
}

import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Hero from "@/components/hero";

import heroImage from '../../../public/images/cyphernotehero.png'
import featureImage01 from '../../../public/images/features-03-image-01.png'
import featureImage02 from '../../../public/images/features-03-image-02.png'


const featureDetails = [
    {
        title: "Store plain text",
        subtitle: "Everything you need, nothing you dont. Simple plain text notes."
    },
    {
        title: "Store notes securely",
        subtitle: "Private, secure, encrypted with RNCryptor."
    },
    {
        title: "Upcoming",
        subtitle: "Full Markdown support soon™"
    },
]

const zigzagItems = [
    {
        title: "Plain text",
        subtitle: "Most popular plain text formats",
        body: "Currently support plain text files. Full Markdown support on the road map",
        image: featureImage01,
        list: [
          "Simple",
          "Intuitive",
          "Elegant",
        ]
    },
    {
        title: "Secure",
        subtitle: "At most focus on security",
        body: "No key / password is ever stored anywhere. Not even in keychain or iCloud.",
        image: featureImage02,
        list: [
            "AES256",
            "PBKDF2",
            "Open Source",
        ]
    },
]


export default function CypherNotes() {
    return (
        <>
            <Hero
                title={"Cypher Notes"}
                subtitle={"Simple, intuitive, elegant note taking app. Heavily focused on privacy and security. No password or key is ever stored anywhere."}
                primaryTitle={"Download"}
                primaryURL={"https://apps.apple.com/us/app/cypher-notes-by-lsd/id6461458801"}
                secondaryTitle={"Support"}
                secondaryURL={"https://github.com/libresoftwaredistribution/libresoftwaredistribution.github.io/issues"}
                heroImage={heroImage}
            />
            <Features
                title={"Open Source"}
                subtitle={"Cypher notes is an open source project and is provided for free, but you can support development by buying application in App Store."}
                features={featureDetails}
            />
            <Zigzag
                title={"Powerful, feature packed, secure"}
                subtitle={"Full of unique advanced features for power users"}
                bubble={"cypher notes"}
                items={zigzagItems}
            />
            <Newsletter/>
        </>
    )
}
