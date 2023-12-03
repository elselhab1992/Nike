/* eslint-disable no-unused-vars */
import { useGlobalContext } from "../Context/Context";
import { Clip } from "./ClipsStyles";

const Clips = () => {
  const { hero } = useGlobalContext();

  return (
    <>
      {hero.videos.map((video, index) => {
        const { imgsrc, clip } = video;

        return (
          <div key={index}>
            <Clip src={imgsrc} alt="clip" />
            {/* <Video autoPlay={true} loop={true} muted={true} playsInline={true}>
              <source type="video/mp4" src={clip} />
            </Video> */}
          </div>
        );
      })}
    </>
  );
};

export default Clips;
