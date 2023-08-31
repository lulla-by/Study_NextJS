import { Fragment, useState } from "react";
import Navbar from './../components/Navbar';
import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return <Fragment>
<Seo title="Home" />
    <h1>Home</h1>
  </Fragment>
}