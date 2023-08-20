import React, { Fragment } from 'react'
import { useRouter } from 'next/router';

const Detail = () => {
  const id = useRouter().query.meetupId;
  return<Fragment>
    <div>router id: {id}</div>
  </Fragment>
  
}

export default Detail;