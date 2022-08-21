/* eslint-disable */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import withVideos from "./withVideos";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1100px;
  margin: 0 auto;
  max-width: 100%;
  grid-gap: 1rem;
`;

function Home({ videoList }) {
  return (
    <>
      <h1>Videos</h1>
      <Container>
        {videoList?.map(({ id, name, thumbnail, cropped, video_url }) => (
          <div key={id}>
            {/* <picture>
              <source src={thumbnail} />
              <source src={cropped} />
              <img src={thumbnail} loading="lazy" />
            </picture> */}

            <video height="200" controls={true} loading="lazy">
              <source src={video_url} type="video/mp4" />
            </video>
            <h5>{name}</h5>
          </div>
        ))}
      </Container>
    </>
  );
}

export default withVideos(Home);
