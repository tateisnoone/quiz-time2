import { useState } from "react";
import { Button } from "../../../../components/ui/button";


type ContinueButtonProps = {
  onContinue: () => void
}

const ContinueButton:React.FC<ContinueButtonProps> = ({onContinue}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onContinue();
    setIsClicked(true);
  }

  return (
    <Button
      onClick={handleClick}
      className={`w-full py-3 text-center text-white rounded-lg ${
        isClicked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      CONTINUE
    </Button>
  );
};

export default ContinueButton;
