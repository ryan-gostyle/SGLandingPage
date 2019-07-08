import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Collapse } from 'antd'

class FAQS extends Component {

    render() {
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{margin: '25px 5px'}} >FREQUENTLY ASKED QUESTIONS</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:900,margin:'0 auto',textAlign:'left'}}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                        <Panel header="How would you know what style to give me?" key="1" >
                            <ul>
                                <li>
                                Our genies carefully review your <b>Style Profile</b> before mixing-and-matching fashion pieces for your box. So be sure to create your own, or our genies will be left guessing.
                                </li>
                            </ul>
                        </Panel> 
                        <Panel header="What if it doesn't fit me?"  key="2">
                            <h6 style={{ color: '#a64d79'}}>
                                 
                            </h6>
                            <ul>
                                <li>
                                We have a <b>One-Time Replacement Guarantee!</b> (for Philippine orders only). Instructions will be emailed upon submission of your <b>Returns Form.</b>
                                </li>
                            </ul>
                        </Panel> 
                        <Panel header="Who will be styling me?"  key="3">
                            <ul>
                                <li>
                                    We have a pool of expert stylists scheduled on a daily basis. Although the genies do not accept specific stylists on-request at the moment.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="Where are all these clothes coming from?"  key="4">
                            <ul>
                                <li>
                                    We consign fashion pieces from over 100+ trusted local independent shops and your fave global brands!
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How many pieces do I expect inside my box?"  key="5">
                            <ul>
                                <li>
                                    We have indicated the number of fashion pieces you shall receive per plan. Each box will contain a mix of clothing and accessories.
                                </li>
                                <li>  
                                    Jackets, dresses, and overalls are counted as 2 pieces.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="Can I order a box for someone else?"  key="6" >
                            <ul>
                                <li>
                                    Yes. We have <b>e-Gift cards</b> available for the special ones in your life.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="Do you accept Cash on Delivery as payment?"  key="7" >
                            <ul>
                                <li>
                                    <b>No.</b> Since our stylists curate each box specifically for your Style Profile.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="What are your available payment options?"  key="8" >
                            <ul>
                                <li>
                                    <b>PayPal</b> for debit or credit cardholders.
                                </li>
                                <li>
                                    <b>Dragonpay</b> gives you more than 35 payment centers.
                                </li>
                                <li>
                                    <b>Chinabank or BPI </b> for online transfers or over-the-counter deposits.
                                </li>
                                <li>
                                    <b>GCash and PayMaya</b> via 711, payment kiosks or mobile apps.                                
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How long will it take you to ship my order?"  key="9" >
                            <ul>
                                <li>
                                    <b>STYLEBOXES</b> are shipped every 15th of the following month.
                                </li>
                                <li>
                                    <b>E-GIFT CARDS</b> are automatically sent via email..
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="What is the delivery lead time? "  key="10" >
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
                        </Panel>
                        <Panel header="Do you ship outside Metro Manila?"  key="11" >
                            <ul>
                                <li>
                                    <b>Yes</b> - we ship nationwide!
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="Do you ship outside the Philippines?"  key="12" >                        
                            <ul>
                                <li>
                                    <b>Yes</b> - additional freight costs will be emailed after order confirmation. We ship worldwide via FEDEX, DHL, UPS or EMS.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="What is Shazuums?"  key="13" >                        
                            <ul>
                                <li>
                                    <b>Shazuums</b> is how magical people say hello or bye, or simply the expression you give whenever your wish has been granted!
                                </li>
                            </ul>
                        </Panel>
                        </Collapse>
                    </Col>
                </Row>

            </div> 
        )
    }
}

export default FAQS