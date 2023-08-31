import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav>
      <Link href="/" >
        <span style={{color:router.pathname === "/"?"red":"blue"}}>
          Home
        </span>
      </Link>
      <Link href="/about" >
        <span  style={{color:router.pathname === "/about"?"red":"blue"}}>
          About
        </span>
      </Link>
    </nav>
  )
}

export default Navbar