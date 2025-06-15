import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/logo.png';
import { Bell, Menu, Mic, Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <>
            <div className="conatiner mx-auto bg-secondary sticky top-0 z-50">
                <div className="flex items-center px-4 py-2">
                    <div className="left w-1/4 flex items-center justify-start gap-2.5">
                        <div className="menu">
                            <Menu strokeWidth={1} />
                        </div>
                        <div className="img_area  w-28 overflow-clip h-auto">
                            <Image src={logo} alt='...' title='...' fetchPriority='low' width={100} height={50} className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className="center w-1/2 flex items-center justify-center-safe ">
                        <div className='flex items-center gap-2'>
                            <div className="flex items-center bg-[#303030] rounded-md py-0.5 px-0.5">
                                <Input type="text" placeholder="Search" className='min-w-96' />
                                <Search width={64} hanging={40} />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background">
                                <Mic />
                            </div>
                        </div>
                    </div>
                    <div className="right w-1/4 flex items-center justify-end-safe">
                        <div className="flex gap-4 items-center">
                            <div className="icon flex items-center justify-center w-10 h-10 ">
                                <Bell />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className='rounded-full w-12 h-12 p-0 overflow-clip'>
                                        <Image src={logo} alt='...' title='...' fetchPriority='low' width={48} height={48} className='w-full h-full object-cover' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="start">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Settings
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default Header
