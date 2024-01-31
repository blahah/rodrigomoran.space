export const ImageCard = ({imgUrl, caption, linkUrl}) => {
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: 0,
    paddingTop: "66.64%",
    position: "relative",
  }
  return (
    <a className="image-card w-full md:w-1/2 lg:w-1/3" href={linkUrl}>
      <div style={imgStyle}>
        <div className="image-caption absolute left-0 bottom-0 bg-black px-1 text-white">
          {caption}
        </div>
      </div>
    </a>
  )
}