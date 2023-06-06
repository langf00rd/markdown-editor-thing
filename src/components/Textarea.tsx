import React from "react";
import { TextareaProps } from "../interfaces";
import TextEditControls from "./TextEditControls";

export default function Textarea(props: TextareaProps) {
  return (
    <div className="mdt">
      <TextEditControls props={props} />
      <textarea className="mdt-textarea" {...props}></textarea>
    </div>
  );
}
