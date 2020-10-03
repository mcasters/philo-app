import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './RichTextEditor.css';

const RichTextEditor = () => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    };

    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }
    const onItalicClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }
    const onUnderlineClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }


    return <>
        <button onClick={onBoldClick}>Bold</button>
        <button onClick={onItalicClick}>Italic</button>
        <button onClick={onUnderlineClick}>Underline</button>
        <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand}/>
        </>
}

export default RichTextEditor;
