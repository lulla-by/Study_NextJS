import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetails = () => {
  return (
    <MeetupDetail image="https://cdn.shopify.com/s/files/1/0057/4439/4355/files/A-DSC_6996.jpg?v=1626384797" title="first meetup" address="London" description="description" />
  )

}

export default MeetupDetails;