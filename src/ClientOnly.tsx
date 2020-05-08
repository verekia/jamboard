// https://joshwcomeau.com/react/the-perils-of-rehydration/

import React, { Fragment, useState } from 'react'

const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <Fragment {...delegated}>{children}</Fragment>
}

export default ClientOnly
