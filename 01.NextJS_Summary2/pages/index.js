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

// 장점
// 페이지를 매번 재생성하지 않고 캐시로 남기거나 다시 사용할 수 있어서 getServerSideProps에 비해 빠름

// export async function getStaticProps () {
// //fetch API

// // 반드시 객체를 반환
// return{
//   // 반드시 props
//   props:{
//     // 본페이지의 컴포넌트 함수가 전달받는 props
//     meetups:DUMMY_MEETUPS
//   },
//   // 증분 정적 생성, 숫자가 필요함, 10 입력 => 10초마다 갱신된 페이지 표시
//   revalidate:10
// }
// }

// 입력되는 요청마다 해당 페이지를 재생성해야 할 때가 있음
// 즉, 서버에 배포한 후 모든 요청에 대해 바로 동적으로 해당 페이지를 사전 생성해야 할 때

//getStaticProps와의 차이점 => 빌드 프로세스 중 실행되지 않음, 대신 배포 후 상시 서버 상에 존재

// 전달받는 매개변수(context)에 대한 작업이 가능함 
// => req 키를 사용하여 요청 객체에 액세스, res키를 사용하여 response 객체를 전송받을 수 있음

// 구체적인 request 객체에 대한 액세스가 있을 때에만 사용, 데이터가 매초 변해서 revalidate로 감당할 수 없다면 사용

export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;
  // fetch data from an API
return {
  props:{
    meetups:DUMMY_MEETUPS
  }
}
}
export default HomePage;