import React from "react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineLink,
} from "react-icons/ai";
import { BsQuote, BsCardImage } from "react-icons/bs";
import { placeBeforeAfterString } from "../utils/textEdit.util";
import { CustomIconProps, EditControlItem } from "../interfaces";

export default function TextEditControls({
  boldIcon,
  italicIcon,
  underlineIcon,
  quoteIcon,
  imageIcon,
  linkIcon,
}: CustomIconProps): JSX.Element {
  const editControlItems: EditControlItem[] = [
    {
      icon: boldIcon || <AiOutlineBold />,
      action: () => placeBeforeAfterString("**"),
    },
    {
      icon: italicIcon || <AiOutlineItalic />,
      action: () => placeBeforeAfterString("*"),
    },
    {
      icon: underlineIcon || <AiOutlineUnderline />,
      action: () => placeBeforeAfterString("__"),
    },
    {
      icon: quoteIcon || <BsQuote />,
      action: () => {},
    },
    {
      icon: imageIcon || <BsCardImage />,
      action: () => {},
    },
    {
      icon: linkIcon || <AiOutlineLink />,
      action: () => {},
    },
  ];

  return (
    <ul className="mdt-edit-controls">
      {editControlItems.map((item, index: number) => (
        <li className="mdt-edit-control-item" onClick={item.action} key={index}>
          {item.icon}
        </li>
      ))}
    </ul>
  );
}
