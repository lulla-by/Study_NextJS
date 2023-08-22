import React from 'react'
import { useRouter } from 'next/router';
import NewMeetupForm from './../../components/meetups/NewMeetupForm';
// import Layout from './../../components/layout/Layout';

const NewMeetupPage = () => {
  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    // api라우트 폴더 내부의 new-meetup으로 경로 설정해서 해당 경로로 POST 요청
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      // JSON 형식으로 변환하여 body에 담음
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json();

    // console.log(data)

        // replace: 뒤로 가기 금지 
    // router.replace("/")
    router.push("/")
  }
  return (
    // <Layout>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    // </Layout>
  )
}

export default NewMeetupPage