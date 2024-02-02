import makeImgStyle from "@/utils/makeImgStyle"

export const GalleryCard = ({imgUrl, onClick}) => {
  const imgStyle = makeImgStyle(imgUrl)
  return (
    <button
      type="button"
      className="p-1 image-card w-1/2 md:w-1/4 lg:w-1/6 block"
      onClick={onClick}
    >
      <div style={imgStyle}>
      </div>
    </button>
  )
}
