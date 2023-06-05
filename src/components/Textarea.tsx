import React, { FC, ReactNode, TextareaHTMLAttributes, useState } from "react";
import { AiOutlineBold, AiOutlineItalic, AiOutlineLink, AiOutlineUnderline } from 'react-icons/ai'
import { BsCardImage, BsQuote } from 'react-icons/bs'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

interface EditorProps {
    text: string
    setText: (str) => void
    boldIcon?: ReactNode | string
    italicIcon?: ReactNode | string
    underlineIcon?: ReactNode | string
    quoteIcon?: ReactNode | string
    imageIcon?: ReactNode | string
    linkIcon?: ReactNode | string
}

const Editor: FC<EditorProps> = ({ text, setText, boldIcon, italicIcon, underlineIcon, quoteIcon, imageIcon, linkIcon }) => {
    const textareaElement = document.querySelector('.markster-textarea') as HTMLTextAreaElement
    const editorControls: {
        icon: ReactNode,
        action: () => void
    }[] = [
            {
                icon: boldIcon || <AiOutlineBold />,
                action: () => {
                    const { selectionStart, selectionEnd } = textareaElement;
                    const selectedText = textareaElement.value.substring(selectionStart, selectionEnd);
                    const n = text.slice(0, selectionStart) + '**' + selectedText + '**' + text.slice(selectionEnd);
                    setText(n);
                }
            },
            {
                icon: italicIcon || <AiOutlineItalic />,
                action: () => {
                    const { selectionStart, selectionEnd } = textareaElement;
                    const selectedText = textareaElement.value.substring(selectionStart, selectionEnd);
                    const n = text.slice(0, selectionStart) + '*' + selectedText + '*' + text.slice(selectionEnd);
                    setText(n);
                }
            },
            {
                icon: underlineIcon || <AiOutlineUnderline />,
                action: () => {
                    const { selectionStart, selectionEnd } = textareaElement;
                    const selectedText = textareaElement.value.substring(selectionStart, selectionEnd);
                    const n = text.slice(0, selectionStart) + '__' + selectedText + '__' + text.slice(selectionEnd);
                    setText(n);
                }
            },
            {
                icon: quoteIcon || <BsQuote />,
                action: () => { }
            },
            {
                icon: imageIcon || <BsCardImage />,
                action: () => setText(prev => prev + '![Image Alt Text](image-url)')
            },
            {
                icon: linkIcon || <AiOutlineLink />,
                action: () => setText(prev => prev + '[Link Text](link-url)')
            },
        ]
    return (
        <ul className="markster-editor">
            {editorControls.map((item, index: number) => <li key={index}>
                <button onClick={item.action}>
                    {item.icon}
                </button>
            </li>)}
        </ul>
    )
}

const Textarea: FC<TextareaProps> = ({ ...props }) => {
    const [text, setText] = useState('')

    return (
        <div className="markster-textarea-wrapper">
            <Editor text={text} setText={setText} />
            <textarea className="markster-textarea" value={text} onChange={e => setText(e.target.value)} {...props}></textarea>
        </div>
    )
}

export default Textarea