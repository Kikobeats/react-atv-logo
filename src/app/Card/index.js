import React from 'react'

import AtvImg from 'react-atv-img'

export default (props) => {
  const {domain} = props

  return (
    <AtvImg
      layers={[
        `https://logo.clearbit.com/${domain}?size=128`
      ]}
      style={{ width: 130, height: 162 }}
      {...props}
    />
  )
}
