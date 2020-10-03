/* eslint-disable react/no-multi-comp */
import React, {Component} from 'react';

import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor';

import createToolbarPlugin, {Separator} from 'draft-js-static-toolbar-plugin';
import {
    BlockquoteButton,
    BoldButton,
    CodeBlockButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineThreeButton,
    HeadlineTwoButton,
    ItalicButton,
    OrderedListButton,
    UnderlineButton,
    UnorderedListButton,
} from 'draft-js-buttons';
import editorStyles from './CustomEditor.module.css';

const toolbarPlugin = createToolbarPlugin();
const {Toolbar} = toolbarPlugin;
const plugins = [toolbarPlugin];
const text = 'Hello';

export default class CustomEditor extends Component {

    state = {
        editorState: createEditorStateWithText(text),
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
            <div className={editorStyles.editor} onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => {
                        this.editor = element;
                    }}
                />
                <Toolbar>
                    {
                        (externalProps) => (
                            <>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <UnderlineButton {...externalProps} />
                                <CodeButton {...externalProps} />
                                <Separator {...externalProps} />
                                <HeadlineOneButton {...externalProps} />
                                <HeadlineTwoButton {...externalProps} />
                                <HeadlineThreeButton {...externalProps} />
                                <UnorderedListButton {...externalProps} />
                                <OrderedListButton {...externalProps} />
                                <BlockquoteButton {...externalProps} />
                                <CodeBlockButton {...externalProps} />
                            </>
                        )
                    }
                </Toolbar>
            </div>
        );
    }
}
