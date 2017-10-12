import React from 'react'

import AtvImg from 'react-img-atv'

export default ({ domain, ...props }) => (
  <AtvImg
    layers={[
      `https://logo.clearbit.com/${domain}?size=128`
    ]}
    style={{ width: 130, height: 162 }}
    {...props}
  />
)
