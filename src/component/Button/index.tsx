import React from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

interface Props {
  _type: 'button' | 'submit'
  _color: '#3B76EF' | '#FFFFFF' | '#EF3C18' | '#01BD44'
  _variant: 'text' | 'outlined' | 'contained'
  _isIcon?: boolean
  _text: string
  _functionOnClick?: any
}

const ButtonComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Button
      fullWidth
      type={props._type}
      onClick={() => props._functionOnClick()}
      startIcon={props._isIcon ? <AddCircleOutlineIcon /> : ''}
      variant={props._variant}
      // color={props._color}
      style={{ backgroundColor: props._color }}
      size="small"
    >
      {props._text}
    </Button>
  )
}

export default ButtonComponent
