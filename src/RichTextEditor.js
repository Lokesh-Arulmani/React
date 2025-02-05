import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => setEditorState(state);

  return (
    <div>
      <h2>Text Editor</h2>
      <Editor editorState={editorState} onChange={handleEditorChange} />
    </div>
  );
};

export default RichTextEditor;
