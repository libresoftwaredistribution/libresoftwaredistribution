import ModalVideo from "@/components/modal-video";

export const metadata = {
    title: 'Cypher Notes',
    description: 'Modern notes manager for iOS',
}

import Link from 'next/link'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Image from "next/image";
import HeroCypherNotes from "@/components/herocyphernotes";

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
            <HeroCypherNotes/>
            <Features
                title={"Open Source"}
                subtitle={"Cypher notes is an open source project and is provided for free, but you can support development by buying application in App Store."}
                features={featureDetails}
            />
            <Zigzag
                title={"Powerful, feature packed, secure"}
                subtitle={"Full of unique advanced features for power users"}
                items={zigzagItems}
            />
            <Newsletter/>
        </>
    )
}
