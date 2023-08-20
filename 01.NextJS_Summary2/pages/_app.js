// NextJS 특수파일
// NextJS가 렌더링할 루트 컴포넌트로 동작
import '../styles/globals.css'
import Layout from './../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  // console.log(Component);
  // console.log(pageProps);
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
