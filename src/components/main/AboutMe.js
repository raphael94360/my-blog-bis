import ItemTitle from "./ItemTitle";
import ItemDescription from "./ItemDescription";
import about from "../img/about.jpg";

const AboutMe = () => {
  return(
    <>
      <ItemTitle title={"ABOUT ME"}/>
      <img alt="about" src={about}/>
      <ItemDescription description={"dummy text ever since the 1500s"}/>
    </>
  )
}

export default AboutMe;