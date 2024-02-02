'use client';

import React from 'react';
import { GalleryCard } from '@/components/gallery-card';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgRoot = 'https://gitlab.com/blahah/rodrigomoran.space/-/raw/main'

export const Gallery = ({ project, n }) => {
  const [open, setOpen] = React.useState(0);
  const images = Array
    .from({ length: n }, (_, i) => i + 1)
    .map(i => `${project}/${i}.jpg`)
  const slides = images.map(imgUrl => (
    { type: 'image', src: `${imgRoot}/${imgUrl}` }
  ))

  return (
    <>
      <div className="px-5 pb-5 flex flex-wrap flex-row w-full">
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
      />
    </>
  )
}
