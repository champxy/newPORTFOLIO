
import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"
import Image from 'next/image';
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
         <div className="flex items-end">
         <h1 className="text-4xl font-semibold">
           champ
           </h1>
           <Image
            src='/assets/kek.ico'
            property='me'
            quality={100}
            alt='me'
            width={20}
            height={20}
            className='object-contain rounded-full'
          />
         </div>
            </Link>


            {/* nav and hire me*/}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>

     
        </div>
    </header>
  )
}
export default Header