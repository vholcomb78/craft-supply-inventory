import React from 'react'
import { Menu as SimpleMenu } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

const Menu = () => {
  // const [isOpen, setIsOpen] = React.useState<null | HTMLElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  // const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget)
  // }
  const handleOpen = () => {
      setIsOpen(true)
  }

  const handleClose = () => {
      // setAnchorEl(null)
      setIsOpen(false)
  }

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
  //     if (event.key === 'ArrowDown') {
  //         setAnchorEl(event.currentTarget)
  //     }
  // }

  // const handleOnClick = (onClick: React.MouseEvent<HTMLElement>) => {
  //     handleClose()

  //     // TODO if (onClick) onClick()
  // }

  // TODO need to look at more examples.  I don't think the open calc
  // really makes sense either
  return (
    <SimpleMenu
      id="test"
      open={isOpen}
      onClose={handleClose}
    >
      <MenuItem>Some text</MenuItem>
    </SimpleMenu>
  )
}

export default Menu
