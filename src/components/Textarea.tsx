import React from "react";
import { TextareaProps } from "../interfaces";
import TextEditControls from "./TextEditControls";

export default function Textarea(props: TextareaProps) {
  const textareaProps_ = { ...props };
  delete textareaProps_.boldIcon;
  delete textareaProps_.italicIcon;
  delete textareaProps_.underlineIcon;
  delete textareaProps_.quoteIcon;
  delete textareaProps_.imageIcon;
  delete textareaProps_.linkIcon;
  return (
    <div className="mdt">
      <TextEditControls
        boldIcon={props.boldIcon}
        italicIcon={props.italicIcon}
        underlineIcon={props.underlineIcon}
        quoteIcon={props.quoteIcon}
        imageIcon={props.imageIcon}
        linkIcon={props.linkIcon}
      />
      <textarea className="mdt-textarea" {...textareaProps_}></textarea>
    </div>
  );
}
