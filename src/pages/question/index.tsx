import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import Header from "./components/header";
import Section from "./components/section";
import ContinueButton from "./components/continue";
import { quiz } from "../../data/quiz";
import SuccessPage from "../success/success";
const Questions: React.FC = () => {
const [index,setIndex] = useState(0);

const question = quiz.questions[index];
const quizName = quiz.name;


const handleContinue = () => {
  setIndex(index + 1);
};

if(index==3){
  return <SuccessPage/>
}else{
  return (
    <div className="h-screen bg-[#f5f5f5] flex items-center justify-center">
      <Card className="w-[50%] max-w-lg shadow-md bg-[#ede8e3]">
        <CardHeader>
          <Header quizName={quizName} />
        </CardHeader>
        <CardContent>
          <Section question={question} />
        </CardContent>
        <CardContent>
          <ContinueButton  onContinue={handleContinue}/>
        </CardContent>
      </Card>
    </div>
  );

}

};

export default Questions;
