import React from "react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";

const Section: React.FC = () => {
  return (
    <RadioGroup
      defaultValue="default"
      className="space-y-4 p-4 bg-neutral-100 rounded-lg"
    >
      <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-black font-bold">
          A
        </div>
        <div className="flex-grow">
          <RadioGroupItem value="optionA" id="r1" className="hidden" />
          <Label htmlFor="r1" className="cursor-pointer">
            ობიექტს
          </Label>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-black font-bold">
          B
        </div>
        <div className="flex-grow">
          <RadioGroupItem value="optionB" id="r2" className="hidden" />
          <Label htmlFor="r2" className="cursor-pointer">
            მასივს
          </Label>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-black font-bold">
          C
        </div>
        <div className="flex-grow">
          <RadioGroupItem value="optionC" id="r3" className="hidden" />
          <Label htmlFor="r3" className="cursor-pointer">
            სტრინგს
          </Label>
        </div>
      </div>
    </RadioGroup>
  );
};

export default Section;
