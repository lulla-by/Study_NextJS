import { Fragment } from "react";
import Head from "next/head"
import { MongoClient } from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  console.log(props)
  return (
    <Fragment>
      <Head>
        {/* html요소 추가 */}
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      {props.meetups.length > 1 &&  <MeetupList meetups={props.meetups} />}
      {props.meetups.length < 1 &&  <div>no contents</div>}
     
    </Fragment>
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB)
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  //find는 기본값으로 그 컬렉션의 모든 문서를 찾아줌, toArray()를 사용해서 문서 배열을 받음
  const meetups = await meetupsCollection.find().toArray()
  client.close()
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 10
  }
}

export default HomePage;



// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
// return {
//   props:{
//     meetups:DUMMY_MEETUPS
//   }
// }
// }