'use client';

import React from 'react';
import { GalleryCard } from '@/components/gallery-card';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgRoot = 'https://gitlab.com/blahah/rodrigomoran.space/-/raw/main'
const project = 'work/2018_meaning_of_life'
const containerStyle = {
  width: "100%",
  paddingTop: "56%",
  position: "relative",
}
const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: 'black'
}

export default function Page() {
  const [open, setOpen] = React.useState(0);
  const images = Array
    .from({ length: 4 }, (_, i) => i + 1)
    .map(n => `${project}/${n}.jpg`)
  const slides = images.map(imgUrl => (
    { type: 'image', src: `${imgRoot}/${imgUrl}` }
  ))

  return (
    <>
      <div className="w-full p-6 flex md:flex-row flex-col">
        <div className="w-full md:w-50%">
          <div className="pb-6 md:w-2/3">
            <h1 className="text-xl h1 pb-4">Meaning of Life</h1>
            <p className={`pb-2 text-sm font-sans`}>Meaning of Life is an experimental video-exploration of some existencial thougts. The four elements, air, fire, soil and water, are the central axis of the video, which arises and stands as an inevitable question.</p>
            <p>2018</p>
          </div>
        </div>
        <div style={containerStyle}>
          <iframe style={iframeStyle} allowfullscreen="" title="Reproductor de vídeo vimeo" src="https://player.vimeo.com/video/507782639?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0#t="></iframe>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-wrap flex-row w-full">
        {images.map((img, i) => <GalleryCard
          imgUrl={`${img}`}
          onClick={() => setOpen(i + 1)}
          key={i +  1}
        />)}
      </div>
      <Lightbox
        open={open}
        index={open - 1}
        close={() => setOpen(0)}
        slides={slides}
      />
    </>
  );
}

