import ItemSubtitle from "./ItemSubtitle";
import ItemTitle from "./ItemTitle";
import ItemDescription from "./ItemDescription";
import city1 from "../img/city1.jpg";
import city2 from "../img/city2.jpg";
import city3 from "../img/city3.jpg";

const Item = () => {
  return (
    <>
      <div className="content-main--item">
        <ItemTitle title={"FIRST HEADING"}/>
        <ItemSubtitle subtitle={"First heading subtitle"}/>
        <img alt="city" src={city1}/>
        <ItemDescription description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
      </div>

      <div className="content-main--item">
        <ItemTitle title={"SECOND HEADING"}/>
        <ItemSubtitle subtitle={"Second heading subtile"}/>
        <img alt="city" src={city2}/>
        <ItemDescription description={"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
      </div>   

      <div className="content-main--item">
        <ItemTitle title={"THIRD HEADING"}/>
        <ItemSubtitle subtitle={"Third heading subtile"}/>
        <img alt="city" src={city3}/>
        <ItemDescription description={"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
      </div>  
    </>



  )
}

export default Item;