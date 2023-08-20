import {useRouter} from 'next/router'
// our-domain.com/news/[newsId] 접속

function DetailPage (){
  const router = useRouter();
  const newsId = router.query.newsId;

  //send a request to the backend API
  // to fetch the news item with newsId

  
  return <h1> This is Detail Page</h1>
}

export default DetailPage;