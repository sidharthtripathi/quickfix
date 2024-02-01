import React from 'react'
import Editor from './Editor'
import { useLocation } from 'react-router-dom'

const NoteEditorSection = () => {

    const location = useLocation();
    const data = location?.state
    console.log(data)
    
  return (
    <div style={{width:'100%', height:"100%"}}>
      <div>hi</div>
        <h5 className='border rounded p-3 m-3 text-green-500 flex justify-center bg-traparent shadow ' >{data?.title}</h5>
        {/* <Editor block={data.block} /> */}
        <Editor />
    </div>
  )
}

export default NoteEditorSection