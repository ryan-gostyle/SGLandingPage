import React, { Component } from 'react'
import { Row, Col } from 'antd'

class FAQS extends Component {
    render() {
        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{margin: '25px 5px'}} >FREQUENTLY ASKED QUESTIONS</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:900,margin:'0 auto',textAlign:'left'}}>
                        <h6 style={{ color: '#a64d79'}}>
                            Where are all these clothes coming from?
                        </h6>
                        <ul>
                            <li>
                            We consign fashion pieces from over 100+ trusted local independent shops and your fave global brands!
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            How many pieces do I expect inside my box?
                        </h6>
                        <ul>
                            <li>
                                We have indicated the number of fashion pieces you shall receive per plan. Each box will contain a mix of clothing and accessories.
                            </li>
                             <li>  
                                Jackets, dresses, and overalls are counted as 2 pieces.
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            Can I order a box for someone else?
                        </h6>
                        <ul>
                            <li>
                                Yes. We have <b>e-Gift cards</b> available for the special ones in your life.
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            Do you accept Cash on Delivery as payment?
                        </h6>
                        <ul>
                            <li>
                                <b>No</b> Since our stylists curate each box specifically for your Style Profile. 
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            What are your available payment options?
                        </h6>
                        <ul>
                            <li>
                                <b>STYLEBOXES</b> for debit or credit cardholders.
                            </li>
                            <li>
                                <b>E-GIFT CARDS</b> gives you more than 35 payment centers.
                            </li>
                            <li>
                                <b>Chinabank or BPI </b> for online transfers or over-the-counter deposits.
                            </li>
                            <li>
                                <b>GCash and PayMaya via 711,</b>payment kiosks or mobile apps.                                
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            How long will it take you to ship my order?   
                        </h6>
                        <ul>
                            <li>
                                <b>STYLEBOXES</b> are shipped every 15th of the following month.
                            </li>
                            <li>
                                <b>E-GIFT CARDS</b> are automatically sent via email..
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            What is the delivery lead time? 
                        </h6>
                        <ul>
                            <li>
                            <b>Metro Manila:</b> 48 hours upon shipment
                            </li>
                            <li>
                            <b>outside Metro Manila:</b> 5 to 7 business days upon shipment
                            </li>
                            <li>
                            <b>outside the Philippines:</b> 14 to 21 business days upon shipment
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            Do you ship outside Metro Manila?
                        </h6>
                        <ul>
                            <li>
                            <b>Yes</b> - we ship nationwide!
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            Do you ship outside the Philippines?
                        </h6>
                        <ul>
                            <li>
                            <b>Yes</b> - additional freight costs will be emailed after order confirmation. We ship worldwide via FEDEX, DHL, UPS or EMS.
                            </li>
                        </ul>
                        <h6 style={{ color: '#a64d79'}}>
                            What is Shazuums?  
                        </h6>
                        <ul>
                            <li>
                            <b>Shazuums</b> is how magical people say hello or bye, or simply the expression you give whenever your wish has been granted!
                            </li>
                        </ul>
                    </Col>
                </Row>

            </div> 
        )
    }
}

export default FAQS