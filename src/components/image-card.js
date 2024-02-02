import makeImgStyle from "@/utils/makeImgStyle"

export const ImageCard = ({imgUrl, caption, linkUrl}) => {
  const imgStyle = makeImgStyle(imgUrl)
  return (
    <a className="image-card w-full md:w-1/2 lg:w-1/3 block" href={linkUrl}>
      <div style={imgStyle}>
        <div className="image-caption absolute left-0 bottom-0 bg-black px-1 text-white text-center text-xs">
          {caption}
        </div>
      </div>
    </a>
  )
}
