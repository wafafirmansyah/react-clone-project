import React, {Component} from "react";
import './TextEditor.scss';

class TextEditor extends Component {
    render(){
        return(
            <div className="text-editor-result">
                <div className="text-editor-container">
                    <div className="text-editor-header">
                        LIVE JSX EDITOR
                        <div className="input-content">
                            <input type="checkbox" />
                            JSX?
                        </div>
                    </div>
                    <textarea></textarea>
                </div>
                <div className="result-container">
                    <div className="result-header">
                        RESULT
                    </div>
                    <textarea></textarea>
                </div>
            </div>
        )
    }
}

export default TextEditor;