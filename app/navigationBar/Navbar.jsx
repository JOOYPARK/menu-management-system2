"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;

    const navItems = [
        {
            label: "Home",
            href: '/'
        },
        {
            label: "Menu",
            href: '/menu'
        },
    ];

    return (
        <div className="bg-gray-800 text-white p-4">
            <ul className="">
                {
                    navItems.map((link, index) => (
                        <li key={index} className="hover:text-green-500">
                            <Link href={link.href}>
                                <span className={pathname === link.href ? "text-green-500 font-bold cursor-pointer" : "cursor-pointer"}>
                                    {link.label}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;
