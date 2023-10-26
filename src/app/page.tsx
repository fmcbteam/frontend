import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <p>hello there!</p>
    <Link href={'/dashboard'} >Go to home</Link>
   </div>
  )
}
