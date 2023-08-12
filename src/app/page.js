import Image from 'next/image'
import styles from './page.module.css'
import ImageListing from "@/components/ImageListing";

export default function Home() {
  return (
    <main >
      <ImageListing/>
    </main>
  )
}
