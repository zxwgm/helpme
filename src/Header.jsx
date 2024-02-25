import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default function Header() {
  return (
    <div id='head' className='flex justify-around font-bold text-4xl p-5'>
        <a href="Header.jsx"><div>akaИ</div></a>
        <div>EA SPORTS FC ONLINE</div>
    </div>
  )
}
