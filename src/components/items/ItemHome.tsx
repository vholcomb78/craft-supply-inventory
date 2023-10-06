/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import Button from '@material-ui/core/MenuItem'

const ItemHome = () => {
  const [showAdd, setShowAdd] = useState(false)

  const handleAddClick = () => {
    setShowAdd(true)
  }

  return (
    <div>
      {!showAdd && <Button onClick={handleAddClick}><span aria-hidden={true}>+</span>Add Item</Button>}
      {showAdd && <div>Show Add Stuff Here</div>}
    </div>
  )
}

export default ItemHome
