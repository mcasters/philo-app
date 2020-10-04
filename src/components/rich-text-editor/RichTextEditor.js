import React from 'react';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import './RichEditor.css';
import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";


class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});

        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4, /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        const contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div className="RichEditor-root">
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <div className={className} onClick={this.focus}>
                    <Editor
                        blockStyleFn={getBlockStyle}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.mapKeyToEditorCommand}
                        onChange={this.onChange}
                        placeholder="Tell a story..."
                        ref="editor"
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}

// onBoldClick = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
// }
// onItalicClick = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
// }
// onUnderlineClick = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
// }
// onH1Click = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'header-one'));
// }
// onH2Click = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'header-two'));
// }
// onH3Click = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'header-three'));
// }
// onH4Click = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'header-four'));
// }
// onH5Click = () => {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'header-five'));
// }

// <button onClick={this.onBoldClick.bind(this)}>Bold</button>
// <button onClick={this.onItalicClick.bind(this)}>Italic</button>
// <button onClick={this.onUnderlineClick.bind(this)}>Underline</button>
// <button onClick={this.onH1Click.bind(this)}>H1</button>
// <button onClick={this.onH2Click.bind(this)}>H2</button>
// <button onClick={this.onH3Click.bind(this)}>H3</button>
// <button onClick={this.onH4Click.bind(this)}>H4</button>
// <button onClick={this.onH5Click.bind(this)}>H5</button>

export default RichTextEditor;
