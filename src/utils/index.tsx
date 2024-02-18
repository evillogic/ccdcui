import React from 'react'
import {buildFileTree, Directory} from "./file-manager";

export const useFilesFromSandbox = (id: string, callback: (dir: Directory) => void) => {
  React.useEffect(() => {
    fetch('/example-response.json')
      .then(response => response.json())
      .then(({data}) => {
        const rootDir = buildFileTree(data);
        callback(rootDir)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
