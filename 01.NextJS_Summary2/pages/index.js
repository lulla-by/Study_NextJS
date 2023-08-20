import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from './../components/layout/Layout';

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A first tea party",
      image: "https://cdn.shopify.com/s/files/1/0057/4439/4355/files/A-DSC_6996.jpg?v=1626384797",
      addresss: "London"
    },
    {
      id: "m2",
      title: "A second wine party",
      image: "https://media-api.xogrp.com/images/4ea8688c-85e3-44bf-83d5-83304429a7d6~cr_5.0.992.661?quality=50",
      addresss: "Paris"
    },
    {
      id: "m3",
      title: "A third dance party",
      image: "https://images.thebrag.com/tmn/uploads/Daybreaker-Sydney-2019.png",
      addresss: "Sydney"
    },

  ]
  const [loadedMeetups, setLoadedMeetups]=useState([])
  useEffect(()=>{
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS)
    // 문제점
    // 해당 데이터 페칭을 기다려서 전체 사전렌더링 페이지를 표시하는 것이 아니라 첫 번째 컴포넌트 렌더링 사이클의 결과만을 반환함
  },[])
  return (
  // <Layout>
    <MeetupList meetups={loadedMeetups} />
  // </Layout>
  )
}

export default HomePage;