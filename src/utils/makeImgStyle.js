const makeImgStyle = (imgUrl) => {
  return {
    backgroundImage: `url(https://gitlab.com/blahah/rodrigomoran.space/-/raw/main/${imgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: 0,
    paddingTop: "66.64%",
    position: "relative",
  }
}

export default makeImgStyle
