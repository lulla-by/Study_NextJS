import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from "./Navbar.module.css"

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav>
      <Link  href="/" className={`${classes.link} ${router.pathname === "/"?classes.active:""}`} >
        <span >
          Home
        </span>
      </Link>
      <Link  href="/about" className={`${classes.link} ${router.pathname === "/about" ? classes.active:""}`} >
        <span >
          About
        </span>
      </Link>
    </nav>
  )
}

export default Navbar