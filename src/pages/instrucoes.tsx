import React from 'react'
import { useRouter } from 'next/router'
import LayoutMultiStep from '../components/Layout/steppedLayout'
import MultiStep from '../components/MultiStep/multiStep'

import StepOne from '../components/MultiStep/steps/StepOne/stepOne'
import StepTwo from '../components/MultiStep/steps/Steptwo/stepTwo'
import StepThree from '../components/MultiStep/steps/StepThree/stepThree'
import StepFour from '../components/MultiStep/steps/StepFour/stepFour'
import StepFive from '../components/MultiStep/steps/StepFive/stepFive'

function Instrucoes() {
    const router: any = useRouter()?.query?.parte  || 1
    const parte:number = router !== undefined ? parseInt(router) : 1

  return (
    <LayoutMultiStep>
        {parte === 1 && <StepOne/> }
        {parte === 2 && <StepTwo/> }
        {parte === 3 && <StepThree/> }
        {parte === 4 && <StepFour/> }
        {parte === 5 && <StepFive/> }

    </LayoutMultiStep>
  )
}

export default Instrucoes