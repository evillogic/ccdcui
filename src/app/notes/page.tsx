'use client';

import React, { useState } from 'react';
import { useFilesFromSandbox } from '../../utils'; // Import the necessary dependencies
import Sidebar from "../../components/sidebar";
import { FileTree } from "../../components/file-tree";
import { Code } from "../../editor/code";
const CURRENT_SANDBOX_ID = "ww9kis";
import { Type, File, Directory, findFileByName } from "../../utils/file-manager";

const dummyDir: Directory = {
  id: "1",
  name: "loading...",
  type: Type.DUMMY,
  parentId: undefined,
  depth: 0,
  dirs: [],
  files: []
};


export default function Page() {
  const [rootDir, setRootDir] = useState(dummyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  useFilesFromSandbox(CURRENT_SANDBOX_ID, (root: any) => { // Fix the type issue by specifying 'any' type for the 'root' parameter
    if (!selectedFile) {
      setSelectedFile(findFileByName(root, "index.tsx"));
    }
    setRootDir(root);
  });

  const onSelect = (file: File) => setSelectedFile(file);

  return (
    <div style={{ display: 'flex' }}>
        <Sidebar>
          <FileTree
            rootDir={rootDir}
            selectedFile={selectedFile}
            onSelect={onSelect}
          />
        </Sidebar>
        <Code selectedFile={selectedFile} />
    </div>
  );
}
