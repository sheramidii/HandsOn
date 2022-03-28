const Gif = (props) => {
    return (
      <div className="gifComp">
        <p>{props.title}</p>
        <img src={props.url} alt="giphy-component" />
      </div>
    );
  };
  export default Gif;
  