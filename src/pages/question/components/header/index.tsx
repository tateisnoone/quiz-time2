import React from "react";

type HeaderProps = {
  quizName: string;
};

const Header: React.FC<HeaderProps>= ({quizName}) => {
  return (
    <div className="">
      <div className="flex items-center   justify-between">
        <h2>QuizTime</h2>
        <h1>{quizName}</h1>
      </div>
    </div>
  );
};

export default Header;
