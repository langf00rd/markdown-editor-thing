import { ReactNode, TextareaHTMLAttributes } from "react"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, CustomIconProps { }

export interface CustomIconProps {
    boldIcon?: ReactNode | string
    italicIcon?: ReactNode | string
    underlineIcon?: ReactNode | string
    quoteIcon?: ReactNode | string
    imageIcon?: ReactNode | string
    linkIcon?: ReactNode | string
}