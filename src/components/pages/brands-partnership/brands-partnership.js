import React, { Component } from 'react'
import { Row, Col } from 'antd'
class BrandPartnerships extends Component {
    render() {
        return (
            <div className="col-24 sections section-4">
                <h1 className='title'>Brand Partnerships</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:600,margin:'0 auto'}}>
                        <h3>
                        Our mission is to grant as many closet wishes as we can. Through our subscription boxes, you can also reach the stylish, modern Filipina squad.
                        </h3>
                        <br/>
                        <h3>
                        Partnering with us gives your brand direct exposure to fashion enthusiasts who can potentially help your business grow. If you wish to have your brand featured on our site or inside our subscription boxes, please email us at <b>partners@stylegenie.ph</b>
                        </h3>
                        <br/>
                        <h3>
                        We look forward to hearing from you!
                        </h3>
                    </Col>
                </Row>
            </div> 
        )
    }
}

export default BrandPartnerships