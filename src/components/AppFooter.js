import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="w-100 text-center">
        Sayyam Investments Private Limited
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)