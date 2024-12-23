import React from "react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";

type Variant = {
  id: number;
  name: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  score: number;
  name: string;
  variants: Variant[];
};

interface SectionProps {
  question: Question;
}

const Section: React.FC<SectionProps> = ({ question }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <h2>{question.name}</h2>
      </div>

      <RadioGroup
        defaultValue="default"
        className="space-y-4 p-4 bg-neutral-100 rounded-lg"
      >
        {question.variants.map((variant, index) => (
          <div key={variant.id} className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-black font-bold">
              {String.fromCharCode(65 + index)} {/* Dynamically set A, B, C, etc. */}
            </div>
            <div className="flex-grow">
              <RadioGroupItem value={`option${String.fromCharCode(65 + index)}`} id={`r${variant.id}`} className="hidden" />
              <Label htmlFor={`r${variant.id}`} className="cursor-pointer">
                {variant.name}
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Section;
