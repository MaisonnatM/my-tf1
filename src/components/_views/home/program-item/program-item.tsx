import React, { FunctionComponent } from "react"
import Image from "next/image"
import { Program } from "../../../../api"
import AddIcon from "../../../../assets/icons/add.svg"
import {
  StyledImageContainer,
  StyledProgramTitle,
  StyledProgram,
  StyledAddButton,
} from "./program-item.styled"

type TProps = {
  program: Program
}

const ProgramItem: FunctionComponent<TProps> = ({
  program: { thumnail, ...program },
}) => {
  const onAddButtonClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation()

    window.alert(`Program with the id: ${program.id} has been added`)
  }

  const onProgramClicked = () => {
    window.alert(`Program with the id: ${program.id} has been clicked`)
  }

  return (
    <StyledProgram onClick={onProgramClicked}>
      <StyledImageContainer>
        <Image
          objectFit="cover"
          src={thumnail.url}
          layout="fill"
          alt={thumnail.alt}
        />
        <StyledAddButton onClick={onAddButtonClicked}>
          <AddIcon />
        </StyledAddButton>
      </StyledImageContainer>
      <StyledProgramTitle style={{ color: "#fff" }}>
        {program.name}
      </StyledProgramTitle>
    </StyledProgram>
  )
}

export default ProgramItem
export type TProgramItemProps = TProps
