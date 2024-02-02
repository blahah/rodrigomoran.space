'use client';

import React from 'react';
import { GalleryCard } from '@/components/gallery-card';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgRoot = 'https://gitlab.com/blahah/rodrigomoran.space/-/raw/main'
const project = 'work/2017_interactions'
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
    .from({ length: 12 }, (_, i) => i + 1)
    .map(n => `${project}/${n}.jpg`)
  const slides = images.map(imgUrl => (
    { type: 'image', src: `${imgRoot}/${imgUrl}` }
  ))

  return (
    <>
      <div className="w-full p-6 flex md:flex-row flex-col">
        <div className="w-full md:w-50%">
          <div className="pb-6 md:w-2/3">
            <h1 className="text-xl h1 pb-4">Interactions</h1>
            <h2 className="text-l pb-2">상호 작용</h2>
            <p className={`pb-2 text-sm font-sans`}>Interactions is an installation exhibited at Laumt art gallery in Seoul that seek to create a space of reflection to explore inner and outer worlds trough  word, sound,  light and space. Ancient Korean writting and Chinese poetry shūfǎ (書法)  are meeting in this timeless room. an attempt to comunicate trought space.</p>
            <p>2017</p>
          </div>
        </div>
        <div style={containerStyle}>
          <iframe style={iframeStyle} allowfullscreen="" title="Reproductor de vídeo vimeo" src="https://player.vimeo.com/video/509173832?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0#t="></iframe>
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

