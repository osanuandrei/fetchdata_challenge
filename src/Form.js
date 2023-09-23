import React from 'react'
import Button from './Button'
const Form = ({resourceType, setResourceType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault}>
        <Button 
        buttonText='users'
        resourceType={resourceType}
        setResourceType={setResourceType}
        />
        <Button
        buttonText='posts'
        resourceType={resourceType}
        setResourceType={setResourceType}
        />
        <Button
        buttonText='comments'
        resourceType={resourceType}
        setResourceType={setResourceType}
        />

    </form>
  )
}

export default Form
