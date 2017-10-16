import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import NoSSR from "react-no-ssr";

import Layout from "../components/MyLayout";
import Loading from "../components/Loading";

const Post = props => (
  <Layout>
    <h1>{props.users.name}</h1>
    <p>{props.users.email}</p>
    <p>{props.users.phone}</p>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return { users: user };
};

export default Post;
