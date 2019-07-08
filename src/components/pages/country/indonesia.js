import React, { Component } from 'react'
import Banner from '../../section-1/banner'
import HowItWorks from '../../section-2/how-it-works'
import About from '../../section-3/about-us'
import FAQS from '../faqs/faqs'
class Indonesia extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <HowItWorks/>
                <About/>
                <FAQS/>    
            </div>
        )
    }
}
export default Indonesia