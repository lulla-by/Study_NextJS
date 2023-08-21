import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetails = (props) => {
  console.log(props)
  return (
    <MeetupDetail image="https://cdn.shopify.com/s/files/1/0057/4439/4355/files/A-DSC_6996.jpg?v=1626384797" title="first meetup" address="London" description="description" />
  )

}


export async function getStaticProps(context) {
  //useRouter는 함수 컴포넌트에서만 사용가능, getStaticProps에서는 사용x
  // => context매개변수 사용 가능, getServerSideProps와 달리 req, res는 없지만 params는 키는 사용가능
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://cdn.shopify.com/s/files/1/0057/4439/4355/files/A-DSC_6996.jpg?v=1626384797",
        id: meetupId,
        title: "first meetup",
        address: "London",
        description: "description"
      }
    }
  }
}
export default MeetupDetails;