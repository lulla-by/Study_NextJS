import MeetupList from "../components/meetups/MeetupList";
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

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

// 특수함수
// NextJS는 컴포넌트 함수를 호출하기전 getStaticProps를 먼저 호출, 본페이지(위의 HomePage 컴포넌트)를 위한 프로퍼티를 준비해주는 역할
// async를 사용하여 promise를 반환하고 NextJS는 프로미스의 수행을 기다림
// => 이러한 비동기 접근을 통해 데이터가 로딩될 때까지 기다렸다가 이 컴포넌트 함수를 위한 프로퍼티르 반환
export async function getStaticProps () {
//fetch API

// 반드시 객체를 반환
return{
  // 반드시 props
  props:{
    // 본페이지의 컴포넌트 함수가 전달받는 props
    meetups:DUMMY_MEETUPS
  },
  // 증분 정적 생성, 숫자가 필요함, 10 입력 => 10초마다 갱신된 페이지 표시
  revalidate:10
}
}

export default HomePage;