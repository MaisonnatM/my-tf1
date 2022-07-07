import React, { PropsWithChildren } from "react"
import { StyledLayout } from "./layout.styled"

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default MainLayout
