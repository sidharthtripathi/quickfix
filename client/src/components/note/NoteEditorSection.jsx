import React from 'react'
import Editor from './Editor'
import { useLocation } from 'react-router-dom'

const NoteEditorSection = () => {

    const location = useLocation();
    const data = location.state
    console.log(data)
    
  return (
    <div style={{width:'100%', height:"100%"}}>
        <h5>{data?.title}</h5>
        {/* <Editor block={data.block} /> */}
        <Editor />
    </div>
  )
}

export default NoteEditorSection