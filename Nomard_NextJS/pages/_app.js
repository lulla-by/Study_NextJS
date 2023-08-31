import Navbar from "../components/Navbar"
import { Fragment } from "react"

const App = ({Component,pageProps}) => {
  
  return (<Fragment>
    <Navbar/>
    <Component {...pageProps}/>
    <style jsx global>{`
    a{
      color:white;
    }
    `}</style>
    </Fragment>
  )
}

export default App