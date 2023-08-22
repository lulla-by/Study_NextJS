import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import { MongoClient,ObjectId  } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetails = (props) => {
  const {image,title,address,description} = JSON.parse(props.meetupData)

  return (
      <MeetupDetail image={image} title={title} address={address} description={description} />
  )

}
//
export async function getStaticPaths() {

  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB)
  const db = client.db()
  const meetupsCollection = db.collection("meetups")
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close();

  return {
    //fallback => 특정 meetupId에 대해서 일부 페이지만 사전 생성할 수 있는 기능
    // fallback:true,        // 입력 요청에 따라 NextJS가 동적으로 해당 meetupId에 대한 페이지를 서버에 생성하려 할 것
    fallback: false,    // paths가 지원하는 모든 meetupId가 있다는 뜻, if 존재하지않는 id로 들어가면 404 ERROR 출력
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
  }
}

export async function getStaticProps(context) {
  //useRouter는 함수 컴포넌트에서만 사용가능, getStaticProps에서는 사용x
  // => context매개변수 사용 가능, getServerSideProps와 달리 req, res는 없지만 params는 키는 사용가능
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB)
  const db = client.db()
  const meetupsCollection = db.collection("meetups")
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
  

  return {
    props: {
      meetupData: JSON.stringify(selectedMeetup)
    }
  }
}
export default MeetupDetails;