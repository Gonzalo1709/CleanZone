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
    console.log({ data });
  }

  function goBack() {
    setCurrentForm("formOne");
  }

  return (
    <div>
      <p>Form Two</p>
      <button onClick={showData}>conole data</button>
      <br />
      <button onClick={goBack}>go back <br /></button>
    </div>
  );
};

export default FormTwo;
