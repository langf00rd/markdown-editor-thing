/**
 * Places the passed markdown symbol before and after selected text
 * @param symbol 
 */
export function placeBeforeAfterString(symbol: string) {
    const textareaElement = document.querySelector('.markster-textarea') as HTMLTextAreaElement
    if (!textareaElement) {
        console.warn('Could not find `textarea` HTML element')
        return
    }
    const { selectionStart, selectionEnd } = textareaElement; // Gets the start and end indexes of the selected text
    const selectedText = textareaElement.value.substring(selectionStart, selectionEnd); // Gets selected text string based on the start and end indexes
    const n = textareaElement.value.slice(0, selectionStart) + symbol + selectedText + symbol + textareaElement.value.slice(selectionEnd); // Places the symbols at start and end and replaces the new string in the textarea
    textareaElement.value = n // Sets the textarea value the formatted/editted string with markdown symbols
}