import React, { FunctionComponent, useEffect, useState } from "react"
import { Program } from "../../../api"
import { StyledContainer, StyledNavigationButton } from "./view.styled"
import LeftArrow from "../../../assets/icons/arrow-left.svg"
import RightArrow from "../../../assets/icons/arrow-right.svg"
import { ProgramItem } from "./program-item"

type TProps = {
  programs: Program[]
}

const HomeView: FunctionComponent<TProps> = ({ programs }) => {
  const [showedPrograms, setShowedPrograms] = useState<Program[]>([])
  const [indexShowedPrograms, setIndexShowedPrograms] = useState(5)

  useEffect(() => {
    setShowedPrograms(programs.slice(0, 5))
  }, [programs])

  const showNextPrograms = () => {
    const newIndex = indexShowedPrograms + 5

    setIndexShowedPrograms(newIndex)
    setShowedPrograms(programs.slice(indexShowedPrograms, newIndex))
  }

  const showPreviousPrograms = () => {
    const newIndex = indexShowedPrograms - 5

    setIndexShowedPrograms(newIndex)
    setShowedPrograms(programs.slice(newIndex - 5, newIndex))
  }

  return (
    <StyledContainer>
      <StyledNavigationButton
        onClick={showPreviousPrograms}
        side="left"
        disabled={indexShowedPrograms === 5}
      >
        <LeftArrow />
      </StyledNavigationButton>
      {showedPrograms.map((program) => (
        <ProgramItem program={program} key={program.id} />
      ))}
      <StyledNavigationButton
        side="right"
        onClick={showNextPrograms}
        disabled={indexShowedPrograms === programs.length}
      >
        <RightArrow />
      </StyledNavigationButton>
    </StyledContainer>
  )
}

export default HomeView
export type THomeViewProps = TProps
