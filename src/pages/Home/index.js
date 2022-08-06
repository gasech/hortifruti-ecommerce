import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/products">Go to products</Link>
    </>
  );
}

export default Home;
