import React from 'react'

export const Fab = ({ toggleDialog, dialogOpen }) => (
  <div className='fab' onClick={toggleDialog}>
    <i className='material-icons'>{ dialogOpen ? 'clear' : 'add' }</i>
  </div>
)
