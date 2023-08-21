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

export async function getStaticProps () {

return{
  props:{
    meetups:DUMMY_MEETUPS
  },
  revalidate:10
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