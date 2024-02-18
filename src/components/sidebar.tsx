import React, {ReactNode} from 'react';
import styled from "@emotion/styled";

export const Sidebar = ({children}: { children: ReactNode }) => {
  return (
    <Aside>
      {children}
    </Aside>
  )
}

const Aside = styled.aside`
  display: block;
  width: 250px;
  height: 100vh;
  border-right: 2px solid;
  border-color: #d1d1d1; // Lighter border color for light theme
  padding-top: 3px;
  background-color: #f9f9f9; // Optional: light background for the sidebar
  color: #333; // Darker text color for readability on light background
`

export default Sidebar
