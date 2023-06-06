import { ReactNode, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    CustomIconProps {}
// export interface TextEditControlsProps extends HTMLUListElement { }

export interface CustomIconProps {
  boldIcon?: ReactNode | string;
  italicIcon?: ReactNode | string;
  underlineIcon?: ReactNode | string;
  quoteIcon?: ReactNode | string;
  imageIcon?: ReactNode | string;
  linkIcon?: ReactNode | string;
}

export interface EditControlItem {
  icon: ReactNode;
  action: () => void;
}
