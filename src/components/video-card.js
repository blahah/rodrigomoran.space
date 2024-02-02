'use client';

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
      <div class="p-6">
        <div style={containerStyle}>
          <iframe
            style={iframeStyle}
            // width="560"
            // height="315"
            src={url}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    )
  } else {
    return (
      <div class="p-6">
        <div style={containerStyle}>
          <iframe
            style={iframeStyle}
            allowfullscreen=""
            title={title}
            src={url}
          ></iframe>
        </div>
      </div>
    )
  }
}
