import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Carticon from './Carticon'
import Image from 'next/image'

const Navbar = () => {

    const user = false
  return (
    <div className=' h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 '>
        {/* Left links */}
        <div className=' hidden md:flex gap-4 flex-1'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
        </div>
        {/* logo */}
        <div className=' text-lg md:font-bold flex-1 md:text-center'>
            <Link href="/">
                Restaurant Name
            </Link>
        </div>
        {/* mobile menu */}

        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* Right links */}
        <div className=' hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className=' md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                <Image src="/phone.png" alt='' width={20} height={20}/>
                <span>+251 962 808 100</span>
            </div>
           {!user? <Link href="/">Login</Link>:
            <Link href="/menu">Order</Link>}
            <Carticon/>
        </div>
    </div>
  )
}

export default Navbar