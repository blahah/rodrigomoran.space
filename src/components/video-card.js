'use client'

import React from 'react'
import ReactPlayer from 'react-player/lazy'

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

export const VideoCard = ({ url, title }) => {
  if (/youtube/.test(url)) {
    return (
      <div className="px-6 pb-6">
        <div style={containerStyle}>
          <ReactPlayer url={url} width="100%" height="100%" style={iframeStyle} controls={false}/>
        </div>
      </div>
    )
  }
}
