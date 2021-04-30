import React from 'react'
import Counter from "../sections/Counter"
import {HCDAta} from "../Data/Home_Data"
import FaqDetail from "../sections/FaqDetail"
function Faqs() {
    return (
        <>
            <FaqDetail/>
            <Counter   data={HCDAta} cls="counter-inner" overlay/>
          
        </>
    )
}

export default Faqs
