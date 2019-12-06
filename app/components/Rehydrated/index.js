/**
 *
 * Rehydrated
 *
 */

import React, { useContext, useEffect, useState } from 'react'
import { getApolloContext } from 'react-apollo'
import AWSAppSyncClient from 'aws-appsync'
import PropTypes from 'prop-types'

const Rehydrated = ({ children }) => {
  const { client } = useContext(getApolloContext())
  const [rehydrated, setState] = useState(false)

  useEffect(() => {
    if (client instanceof AWSAppSyncClient) {
      ;(async () => {
        await client.hydrated()
        setState(true)
      })()
    }
  }, [client])
  return rehydrated ? <>{children}</> : null
}

Rehydrated.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Rehydrated
