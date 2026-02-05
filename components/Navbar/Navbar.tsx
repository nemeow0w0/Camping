"use client"
import { Button } from "../ui/button"
import { DarkMode } from "./DarkMode"
import DropdownListmenu from "./DropdownListmenu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
                {/* Logo */}
                <Logo />
                {/* Search */}
                <div>
                    <Search />
                </div>

                {/*  Darkmode & Profile*/}
                <div className="flex gap-4">
                    <DarkMode />
                    <DropdownListmenu />
                </div>

            </div>
        </nav>
    )
}
export default Navbar