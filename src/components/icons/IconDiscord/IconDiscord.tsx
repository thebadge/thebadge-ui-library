import * as React from 'react'
import { IconProps } from '../IconProps'

export const IconDiscord = (props: IconProps) => (
  <a className={'icon ' + (!props.link ? 'icon--disabled' : '')} href={props.link} target={'_blank'} rel="noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      className={`fill--${props.color}`}
      fill={props.color}
    >
      <path d="M25.12 6.946c-2.424-1.948-6.257-2.278-6.419-2.292a.608.608 0 0 0-.604.357c-.004.008-.218.629-.425 1.228 2.817.493 4.731 1.587 4.833 1.647A.999.999 0 0 1 22 9.75a.99.99 0 0 1-.501-.135C21.471 9.598 18.663 8 15.002 8 11.34 8 8.531 9.599 8.503 9.615a1 1 0 0 1-1.006-1.729c.102-.06 2.023-1.158 4.848-1.65-.218-.606-.438-1.217-.442-1.225a.6.6 0 0 0-.604-.357c-.162.013-3.995.343-6.451 2.318C3.564 8.158 1 15.092 1 21.087a.6.6 0 0 0 .08.301c1.771 3.11 6.599 3.924 7.699 3.959a.61.61 0 0 0 .511-.249l1.19-1.612c-2.61-.629-3.99-1.618-4.073-1.679a1 1 0 0 1 1.181-1.614C7.625 20.217 10.172 22 15 22c4.847 0 7.387-1.79 7.412-1.808a1.001 1.001 0 0 1 1.183 1.613c-.083.061-1.456 1.048-4.06 1.677l1.175 1.615c.115.158.298.25.492.25l.019-.001c1.101-.035 5.929-.849 7.699-3.959a.6.6 0 0 0 .08-.301c0-5.994-2.564-12.928-3.88-14.14zM11 19c-1.105 0-2-1.119-2-2.5s.895-2.5 2-2.5 2 1.119 2 2.5-.895 2.5-2 2.5zm8 0c-1.105 0-2-1.119-2-2.5s.895-2.5 2-2.5 2 1.119 2 2.5-.895 2.5-2 2.5z" />
    </svg>
  </a>
)
