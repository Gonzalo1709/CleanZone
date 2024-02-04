import { dataType } from "@/lib/form-interface";
import React from "react";
import { Dispatch, SetStateAction } from "react";

interface FormTwoProps {
  currentForm: string;
  setCurrentForm: Dispatch<SetStateAction<string>>;
  data: dataType;
  setData: Dispatch<SetStateAction<dataType>>;
}

const FormTwo: React.FC<FormTwoProps> = ({
  currentForm,
  setCurrentForm,
  data,
  setData,
}) => {

  function showData() {
    console.log({data})
  }

  function goBack() {
    setCurrentForm("formOne");
  }

  return (
    <div>
      Form Two
      <p>cas</p>
      <button onClick={showData}>conole data</button>
      <button onClick={goBack}>go back</button>
    </div>
  );
};

export default FormTwo;
