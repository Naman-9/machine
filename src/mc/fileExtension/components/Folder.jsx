import React, { useState } from 'react'
import explorer from '../data/folderData'

function Folder({explorer, handleInsertNode}) {

    const [expand, setexpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setexpand(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput, visible: false});
        }
    }

  if(explorer.isFolder) {
    return (
        <>
          <div style={{marginTop:5}}>
             <div className='folder' onClick={() => setexpand(!expand)}> 
                <span>📁 {explorer.name}</span>

                <div className="add-icons-wrapper">
                    <button className='icon' onClick={(e) => handleNewFolder(e, true)}> Folder +</button>
                    <button className='icon' onClick={(e) => handleNewFolder(e, false)}> Page +</button>
                </div>
                
            </div>
         </div>
     
         <div style={{ display: expand ? "block": "none", paddingLeft: 25}}>
            {
                showInput.visible && (
                    <div className="inputContainer">
                        <span className="">{showInput.isFolder ? "📁" : "📄" }</span>
                        <input 
                            type="text" 
                            className='inputContainer__input'
                            onKeyDown={onAddFolder}
                            autoFocus
                            onBlur={() => setShowInput({...showInput, visible: false})}
                        />
                    </div>
                )
            }
             {explorer.items.map((exp, idx) => {
                 return (
                     <Folder explorer={exp} key={idx} handleInsertNode={handleInsertNode}/>
                 )
             })}
         </div>
        </>
       )
} else {
    return <span className='file'> 📄{explorer.name}</span>
}
}

export default Folder


/**
 * if Folder 
 *  title with Folder img
 *  expand useState 
 *  if expand then block else none
 *      give item to FolderComponent
 * 
 * else 
 *  title with File img
 */