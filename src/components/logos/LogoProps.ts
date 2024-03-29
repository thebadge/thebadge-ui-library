import * as React from 'react'

export type LogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number // same value for width and height
  width?: number
  height?: number
  color?: string
  solidColor?: string
}
