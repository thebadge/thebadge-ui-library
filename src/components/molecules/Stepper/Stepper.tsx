import { TBColor } from '@assets/defaultTheme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box } from '@mui/material'
import React, { createRef, RefObject, useMemo, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './stepper.scss'

export type StepperProps = {
  title: React.ReactNode
  elements: React.ReactNode[]
  minHeight: number
  color?: TBColor
  backgroundColor?: TBColor
  glowTitle?: boolean
  border?: boolean
}

const defaultStepperProps = {
  title: null,
  elements: [],
  minHeight: 0,
}

export const Stepper = ({
  elements,
  title,
  minHeight,
  color,
  backgroundColor,
  glowTitle,
  border,
}: StepperProps = defaultStepperProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  // Refs to move the elements
  const elementRefs: RefObject<HTMLDivElement>[] = useMemo(
    () => elements.map(() => createRef<HTMLDivElement>()),
    [elements]
  )

  if (!elements || !(elements.length > 0)) {
    return null
  }

  function onArrowForwardClickHandler() {
    setSelectedElement((prev) => {
      if (prev === elements.length - 1) return prev
      else return prev + 1
    })
  }

  function onArrowBackClickHandler() {
    setSelectedElement((prev) => {
      if (prev === 0) return prev
      else return prev - 1
    })
  }

  function onDotClickHandler(index: number) {
    return () => {
      setSelectedElement(index)
    }
  }

  return (
    <Box
      className={[
        `stepper`,
        `background-color--${backgroundColor ?? 'white'}`,
        border ? `stepper--withBorder border-color--${color}` : '',
      ].join(' ')}
      minHeight={minHeight}
    >
      <Box>
        <StepperTitle color={color} glow={glowTitle}>
          {title}
        </StepperTitle>
      </Box>
      <Box className="stepper__content">
        <ArrowBackIosIcon
          className={[
            `stepper__arrow`,
            `color--${color ?? ''}`,
            selectedElement === 0 ? 'stepper__arrow--disable' : '',
          ].join(' ')}
          onClick={onArrowBackClickHandler}
        />
        <Box className="stepper__step">
          <SwitchTransition>
            <CSSTransition
              key={selectedElement}
              nodeRef={elementRefs[selectedElement]}
              addEndListener={(done) => {
                elementRefs[selectedElement].current?.addEventListener('transitionend', done, false)
              }}
              timeout={300}
              classNames="stepper__step-fade"
            >
              <Box ref={elementRefs[selectedElement]}>{elements[selectedElement]}</Box>
            </CSSTransition>
          </SwitchTransition>
        </Box>
        <ArrowForwardIosIcon className={`stepper__arrow color--${color ?? ''}`} onClick={onArrowForwardClickHandler} />
      </Box>
      <Box className="stepper__dot__container">
        {elements.map((_, i) => {
          return (
            <Box
              key={`dot-${i}`}
              className={`stepper__dot ${
                i === selectedElement ? `background-color--${color ?? ''}` : 'background-color--blackBackground'
              }`}
              onClick={onDotClickHandler(i)}
            />
          )
        })}
      </Box>
    </Box>
  )
}

type StepperTitleProps = {
  color?: TBColor
  glow?: boolean
}

const StepperTitle = ({ children, color, glow }: React.PropsWithChildren<StepperTitleProps>) => {
  function getElement(children: React.ReactNode | string) {
    if (typeof children === 'string') {
      const [firstWord, ...rest] = children.split(' ')
      return (
        <>
          <span>{firstWord}</span> {rest.join(' ')}
        </>
      )
    }
    return children
  }

  return (
    <div className={[`stepper__title`, `color--${color ?? ''}`, glow ? 'stepper__title--glow' : ''].join(' ')}>
      {getElement(children)}
    </div>
  )
}
