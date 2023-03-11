import React from "react";
import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/photos");

    getData
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);
  return <div>ConsumiendoApis</div>;
};

export default ConsumiendoApis;
