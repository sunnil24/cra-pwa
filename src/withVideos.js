/* eslint-disable */
import React, { cloneElement, useEffect, useState } from "react";

function withVideos(Component) {
  return () => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
      (async () => {
        const data = await fetch("https://orangevalleycaa.org/api/videos");
        const videos = await data.json();
        setVideoList(videos);
      })();
    }, []);

    return cloneElement(<Component />, { videoList });
  };
}

export default withVideos;
