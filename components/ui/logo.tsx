import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/favicon.ico'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="md:max-w-none mx-auto rounded" src={LogoImage} width={45} height="30" alt="Features bg"></Image>
    </Link>
  )
}
