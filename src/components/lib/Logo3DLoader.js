import { forwardRef } from "react"

import LoaderStyles from '../../styles/components/loader.module.scss';

export const LogoSpinner = () => (
    <div className={LoaderStyles.spinner}>
      <div className={LoaderStyles.spinner__object}>
        
      </div>
    </div>
)

export const LogoContainer = forwardRef(({children}, ref) => (
    <div className={LoaderStyles.box} ref={ref}>
        {children}
    </div>
))
LogoContainer.displayName = 'LogoContainer';

const Logo3DLoader = () => {
  return (
    <LogoContainer>
        <LogoSpinner/>
    </LogoContainer>
  )
}

export default Logo3DLoader