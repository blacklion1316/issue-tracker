"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const currentPath = usePathname();
    // console.log(currentPath);
    const links = [
        { href: "/", label: "Home" },
        { href: "/issues", label: "Issues" },
    ];

    return (
        <nav className="flex justify-center border-b mb-5 px-5 h-14">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/">
                        <AiFillBug className="text-2xl" />
                    </Link>
                </li>
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link
                            className={`${
                                href === currentPath
                                    ? "text-zinc-900"
                                    : "text-zinc-500"
                            } transition-colors duration-300 hover:text-zinc-900`}
                            href={href}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
