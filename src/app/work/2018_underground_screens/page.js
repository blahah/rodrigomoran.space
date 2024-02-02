'use client';

import React from 'react';
import { GalleryCard } from '@/components/gallery-card';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgRoot = 'https://gitlab.com/blahah/rodrigomoran.space/-/raw/main'
const project = 'work/2018_underground_screens'
const containerStyle1 = {
  width: "100%",
  paddingTop: "50%",
  position: "relative",
}
const containerStyle2 = {
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
  // const images = Array
  //   .from({ length: 4 }, (_, i) => i + 1)
  //   .map(n => `${project}/${n}.jpg`)
  // const slides = images.map(imgUrl => (
  //   { type: 'image', src: `${imgRoot}/${imgUrl}` }
  // ))

  return (
    <>
      <div className="w-full p-6 flex md:flex-row flex-col">
        <div className="w-full md:w-50%">
          <div className="pb-6 w-2/3">
            <h1 className="text-xl h1 pb-4">Meaning of Life</h1>
            <p className={`pb-2 text-sm font-sans`}>Underground Screens is a 3 screen videoinstallation loop about interpersonal interactions in the specific context of Seoul metro network. The work explores the concept of screen and image through some behavioural tendencies that take place among the metro users. It seeks to explore and built a reflection about how technology takes in in our lifes.</p>

            <p className={`pb-2 text-sm font-sans`}>Each one of the three video channels is showing a specific aspect of the metro life, were the main character is always a screen.</p>
            <p>2018</p>
          </div>
        </div>
      </div>
      <div className="relative p-6">
        <div style={containerStyle1} className="mb-6 ">
          <iframe style={iframeStyle} allowfullscreen="" title="Reproductor de vídeo vimeo" src="https://player.vimeo.com/video/510485104?color&autopause=0&loop=0&muted=0&title=1&portrait=0&byline=0#t="></iframe>
        </div>
        <div style={containerStyle2}>
          <iframe style={iframeStyle} allowfullscreen="" title="Reproductor de vídeo vimeo" src="https://player.vimeo.com/video/509044094?autoplay=1&color&autopause=0&loop=0&muted=1&title=0&portrait=0&byline=0#t="></iframe>
        </div>
      </div>
      {/* <div className="px-5 pb-5 flex flex-wrap flex-row w-full">
        {images.map((img, i) => <GalleryCard
          imgUrl={`${img}`}
          onClick={() => setOpen(i + 1)}
          key={i + 1}
        />)}
      </div>
      <Lightbox
        open={open}
        index={open - 1}
        close={() => setOpen(0)}
        slides={slides}
      /> */}
    </>
  );
}

