import './Box.scss'

interface BoxProps {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps) => {
  return <div className='box'>{children}</div>
}
