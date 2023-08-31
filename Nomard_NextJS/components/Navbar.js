import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/"  legacyBehavior>
        <a className={router.pathname === "/"?"active":""}>
          Home
        </a>
      </Link>
      <Link href="/about"  legacyBehavior>
        <a className={router.pathname === "/about"?"active":""}>
          About
        </a>
      </Link>
      {/* styled JSX를 사용했기 때문에 이 스타일들은 오직 이 컴포넌트 내부로 범위 한정 */}
      <style jsx>{`
      a{
        text-decoration:none
      }
      .active{
        color:tomato;
      }
      `}</style>
    </nav>
  )
}

export default Navbar