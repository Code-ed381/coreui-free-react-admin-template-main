import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Admin
        </a>
        <span className="ms-1">&copy; 2024 School Management App.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          BlueTech Softwares
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
