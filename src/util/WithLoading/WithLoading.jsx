import React, { useState } from 'react'
import Loading from '../../components/Loading/Loading'

const WithLoading = ( WrappedComponent ) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true)

    const setLoading = (isLoading ) => {
      setIsLoading(isLoading)
    }

    return (
      <>
        {isLoading && <Loading />}
        <WrappedComponent {...props} setLoading={setLoading} />
      </>
    )
  }
}

export default WithLoading
