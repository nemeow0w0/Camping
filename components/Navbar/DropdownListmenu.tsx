import { TextAlignStart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Usericon } from './Usericon';
import Link from 'next/link';
import { links } from '@/utils/Links';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'

const DropdownListmenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <TextAlignStart />
                    <Usericon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {/* ยังไม่ SingIn(SignedOut) */}
                    <SignedOut>
                        <DropdownMenuItem >
                            <SignUpButton mode='modal'>
                                <button>Register</button>
                            </SignUpButton>

                        </DropdownMenuItem>
                        <DropdownMenuItem >

                            <SignInButton mode='modal'>
                                <button>Login</button>
                            </SignInButton>
                        </DropdownMenuItem>
                    </SignedOut>

                    {/* SignIn แล้ว */}
                    <SignedIn>
                        {
                            links.map((plink, inx) => {
                                return <DropdownMenuItem key={inx}>
                                    <Link href={plink.href}>{plink.label}</Link>
                                </DropdownMenuItem>
                            })
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <SignOutLinks />
                        </DropdownMenuItem>

                    </SignedIn>

                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default DropdownListmenu