'use client';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";
const links = [
    { path: "/", label: "home" },
    { path: "/services", label: "services" },
    { path: "/resume", label: "resume" },
    { path: "/work", label: "work" },
    { path: "/contact", label: "contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle>

                </SheetTitle>
                <h1 className='mt-32 mb-40 text-center text-2xl'>
                    champ<span className='text-accent'>.</span>
                </h1>
                
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        links.map((link, index) => (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent-hover transition-all`}
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>

        </Sheet>
    );
};

export default MobileNav;
