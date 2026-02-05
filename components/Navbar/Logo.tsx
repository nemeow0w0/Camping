import { Button } from "@/components/ui/button"
import Link from "next/link"
import logo from '../Navbar/Logo/logocamp.jpg'
import Image from "next/image"
const Logo = () => {
  return (
    <Link
      href={'/'}
      >
        <div className=" w-auto h-auto">
    <Button size={'icon-lg'} variant={'ghost'}>
      
        <Image
        src={logo}
        alt="Camp Logo"
        className="rounded-full object-cover h-10 w-10 sm:h-8 sm:w-8"
        />
    </Button>
    </div>
    </Link>
  )
}
export default Logo