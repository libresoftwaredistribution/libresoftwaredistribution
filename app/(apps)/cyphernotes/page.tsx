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
        title: "Store images & plain text",
        subtitle: "Seamless exchange of plain text files, like Markdown or Fountain, between sandboxed applications."
    },
    {title: "Store notes secure with", subtitle: "Encrypted Text Bundle is Text Pack, but encrypted with RNCryptor."},
    {title: "Markdown-first", subtitle: " Additionally supports plaintext and RTF files."},
    {title: "Fast and lightweight", subtitle: "Handles 10k+ files without breaking sweat"},
    {title: "Access anywhere", subtitle: "Sync with iCloud Drive or Dropbox or even with Github repository."},
    {title: "Syntax highlighting", subtitle: " within code blocks. Supports over 170 programming languages"},
]

const zigzagItems = [
    {
        title: "Plain text",
        subtitle: "Most popular plain text formats",
        body: "Markdown, plaintext and RTF files. As well as inline support of images via TextBundle and EncryptedTextBundle containers.",
        image: featureImage01,
        list: [
          "Syntax highlighting within code blocks",
          "Supports over 170 programming languages",
          "External editor support",
        ]
    },
    {
        title: "Access anywhere",
        subtitle: "All the sync methods !",
        body: "Support for variety of sync methods. Including iCloud Drive, DropBox and even Github. ",
        image: featureImage02,
        list: [
            "iCloud",
            "DropBox",
            "Github",
        ]
    },
]


export default function CypherNotes() {
    return (
        <>
            <Hero
                title={"Cypher Notes"}
                subtitle={"Cypher notes is modern notes manager for iOS. App respects open formats like GitHub Flavored Markdown, so you can easily write documents on iPhone. It's simple and blazing fast!"}
                downloadURL={"https://testflight.apple.com/join/MSYsRXau"}
                supportURL={"https://github.com/libresoftwaredistribution/cyphersnotes/issues"}
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
