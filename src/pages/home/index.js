import Gif from "../../component/gifContent/index.js";

const Home = ({passData}) => {

  return (
    <div className="container">
      {passData.map((image) => {
        return (
          passData !== undefined && (
            <Gif url={image.images.fixed_width.url} title={image.title} key={image.id} />
          )
        );
      })}
    </div>
  );
};
export default Home;