import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled} from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor(props){
    const {
        displayName, language, value, onChange
    } = props

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value){
        onChange(value)
    }

    return(
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button type='button' className='expand-collapse-btn' onClick={()=> setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
                </button>
            </div>
            <Controlled onBeforeChange={handleChange} value={value} options={{lineWrapping:true,lint:true,mode:language,lineNumbers:true,theme:'material'}} className='code-mirror-wrapper'/>
        </div>
    )
}