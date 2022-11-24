import React, { PropsWithChildren } from 'react'

import HeaderMain from './header/main'
import FooterMain from './footer/main'
import useWindowSize from '../../../hooks/window-size'

const LayoutMain: React.FC<PropsWithChildren> = ({ children }) => {
  const windowSize = useWindowSize()
  return (
    <>
      <HeaderMain isDesktop={!!windowSize?.width && windowSize?.width > 768} />
      <main style={{ margin: '20px 30px', minHeight: 'calc(100vh - 68px)' }}>{children}</main>
      <FooterMain />
    </>
  )
}

export default LayoutMain
