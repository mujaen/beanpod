import React from 'react'

import { StyledIcon } from './style'
import { IconStyleProps } from './type'

interface IconProps extends IconStyleProps {
  icon?: string
}

function Icon({ icon, ...props }: IconProps) {
  const svg = require(`!raw-loader!./icons/${icon}.svg`).default
  return <StyledIcon {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Icon
