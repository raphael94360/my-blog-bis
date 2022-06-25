import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = () => {
  return(
    <>
      <ItemTitle title={"ABOUT ME"}/>
      <ItemPicture picture={"IMG"}/>
      <ItemDescription description={"dummy text ever since the 1500s"}/>
    </>
  )
}

export default AboutMe;