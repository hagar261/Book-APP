import React from 'react'

const Loader = () => {
  return (
    <div>
    <div className="spinner-border text-danger m-auto"  role="status">
        <span className="sr-only m-auto " >Loading...</span>
    </div>
    </div>
  )
}

export default Loader