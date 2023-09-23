import React from 'react'

const Button = ({buttonText, resourceType, setResourceType}) => {
  return (
    <button className={buttonText === resourceType ? "selected" : null } type='button' onClick={() => setResourceType(buttonText)}>
        {buttonText}

    </button>
  )
}

export default Button
