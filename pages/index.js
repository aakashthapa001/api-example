import React, { Component } from "react";
import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>Dummy Data</h1>
    <ul>
      {props.users.map(user => (
        <li key={user.id}>
          <Link as={`/u/${user.username}`} href={`/users?id=${user.id}`}>
            <a>{user.username}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
        font-family: "Arial";
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    users: data
  };
};

<style jsx global>{`
  body {
    background: red
  }
`}</style>

export default Index;
