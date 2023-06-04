import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div className="alert alert-primary container fs-5" role="alert">
    {props.alert}
  </div>

  )
}

export default Alert
