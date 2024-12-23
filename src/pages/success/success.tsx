import img from "../../assets/resultlogo.png";
import check from "../../assets/check.png";
import score from "../../assets/score.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const SuccessPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-[415px] mt-20">
        <img src={img} alt="success logo" className="w-40 h-30 mb-10" />
        <div className="flex flex-col h-56 w-1/3 justify-between">
          <div className="flex flex-row justify-between h-18 p-5 bg-white rounded-md items-center">
            <Avatar>
              <AvatarImage src={score} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3>SCORE GAINED</h3>
            <h3>1000</h3>
          </div>
          <div className="flex flex-row justify-between h-18 p-5 bg-white rounded-md items-center">
            <Avatar>
              <AvatarImage src={check} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3>CORRECT ANSWERS</h3>
            <h3>1000</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
