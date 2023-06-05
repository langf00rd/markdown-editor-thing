import React from "react"
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineLink } from "react-icons/ai"
import { BsQuote, BsCardImage } from "react-icons/bs"
import { placeBeforeAfterString } from "../utils/textEdit.util"
import { EditControlItem } from "../interfaces"

export default function TextEditControls({ props }): JSX.Element {
    const editControlItems: EditControlItem[] = [
        {
            icon: props.boldIcon || <AiOutlineBold />,
            action: () => placeBeforeAfterString('**')
        },
        {
            icon: props.italicIcon || <AiOutlineItalic />,
            action: () => placeBeforeAfterString('*')
        },
        {
            icon: props.underlineIcon || <AiOutlineUnderline />,
            action: () => placeBeforeAfterString('__')
        },
        {
            icon: props.quoteIcon || <BsQuote />,
            action: () => { }
        },
        {
            icon: props.imageIcon || <BsCardImage />,
            action: () => { }
        },
        {
            icon: props.linkIcon || <AiOutlineLink />,
            action: () => { }
        },
    ]


    return (
        <ul className="mdt-edit-controls">
            {editControlItems.map((item, index: number) => <li onClick={item.action} key={index}>
                {item.icon}
            </li>)}
        </ul>
    )
}