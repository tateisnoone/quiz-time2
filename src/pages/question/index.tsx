import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Header from "./components/header";
import Section from "./components/section";

const Questions: React.FC = () => {
  return (
    <Card className="w-[50%]  m-auto">
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>
        <Section />
      </CardContent>
    </Card>
  );
};

export default Questions;
