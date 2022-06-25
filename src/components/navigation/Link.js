const Links = (props) => {
  return(
    <>
      <div className="navigation-links">
        <ul>
          <li>{props.link}</li>
          <li>{props.link}</li>
          <li>{props.link}</li>
        </ul>
        <ul>
          <li>{props.link}</li>
        </ul>
      </div>
    </>

  )
}

export default Links;