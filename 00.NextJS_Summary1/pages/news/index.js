// 도메인/news에 접속을 요청할 때 표시되는 페이지
// our-domain.com/news 접속 => news.js파일 불러옴
import Link from "next/link"
import { Fragment } from "react"

function NewsPage() {

  return <Fragment>
    <h1> This is News Page</h1>
    <ul>
      {/* 이 두 항목은 클릭이 가능하며 클릭했을 때
    URL에 부호화된 각 값에 따라 각 ID에 맞는 newsId 페이지로 이동 */}
      <li><Link href="/news/nextJS-greate">Next is a great framework</Link></li>
      <li>something else</li>
    </ul>
  </Fragment>
}

export default NewsPage;