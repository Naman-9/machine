import React, { useState } from 'react'
import explorer from './data/folderData'
import Folder from './components/Folder';
import "./FileExtensionApp.css";
import useTraverseTree from './hooks/use-traverse-tree';

function FileExtensionApp() {
    const [explorerData, setExplorerData] = useState(explorer)


    const {insertNode} = useTraverseTree();

    const handleInsertNode = ( folderId, item, isFolder) => {
      const finalTree = insertNode(explorerData, folderId, item, isFolder);
      setExplorerData(finalTree);
    }

  return (
    <div className='wrapper-exp'>
      <Folder explorer = {explorerData} handleInsertNode={handleInsertNode}/>
    </div>
  )
}

export default FileExtensionApp