import { AiOutlineBold, AiOutlineItalic, AiOutlineLink, AiOutlineUnderline } from 'react-icons/ai'
import { BsCardImage, BsQuote } from 'react-icons/bs'
import React, { ReactNode } from "react";
import { placeBeforeAfterString } from '../utils/textEdit.util';
import { TextareaProps } from '../interfaces';

function Editor({ props }) {
    const editorIconControls: {
        icon: ReactNode,
        action: () => void
    }[] = [
            {
                icon: props.boldIcon || <AiOutlineBold />,
                action: () => {
                    placeBeforeAfterString('**')
                }
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
        <ul className="markster-editor">
            {editorIconControls.map((item, index: number) => <li onClick={item.action} key={index}>
                {item.icon}
            </li>)}
        </ul>
    )
}

export default function Textarea(props: TextareaProps) {
    return (
        <>
            <Editor props={props} />
            <textarea className='markster-textarea' {...props}></textarea>
        </>
    )
}