import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Collapse } from 'antd'

class Rewards extends Component {

    render() {
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{margin: '25px 5px'}} >NEW! StyleGenie Rewards & Referrals Program</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:900,margin:'0 auto',textAlign:'left'}}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                        <Panel header="How do I participate?" key="1" >
                            <ul>
                                <li>
                                    Joining is easy! Just click the Create An Account button to get started. Once you're registered with our store, you'll have the opportunity to take part in all of the exciting ways we currently offer to earn points!
                                </li>
                            </ul>
                        </Panel> 
                        <Panel header="How can I earn points?"  key="2">
                            <ul>
                                <li>
                                    You can earn points by participating in any of our innovative points-earning promotions! Simply click on the 'Earn Rewards' tab to view and take part in our current opportunities. In addition, make sure to check back often, as we're adding great new ways for you to earn points all the time!
                                </li>
                            </ul>
                            <h6 style={{ color: '#a64d79'}}>
                            11 WAYS TO EARN POINTS
                            </h6>
                            <ol>
                                <li>Create an account = 100 points</li>
                                <li>Refer a friend = 250 points for every referral purchase</li>
                                <li>Reward per purchase = 100 points for every Php 1000 spend</li>
                                <li>Happy Birthday = 500 points</li>
                                <li>Visit our Facebook page = 5 points (once daily)</li>
                                <li>Share On Facebook = 10 points (once daily)</li>
                                <li>Follow us on Twitter = 25 points</li>
                                <li>Tweet about us = 10 points (once daily)</li>
                                <li>Follow us on Instagram = 25 points</li>
                                <h6>In addition, you can also earn through stylish contributions below:</h6>
                                <li>When you contribute a blog = 500 points 
                                    <ul>
                                        <li>Must be approved by SG following these mechanics:</li>
                                        <li>must be a review of StyleGenie Experience on own blog or any topic as a contribution to StyleGenie blog pages</li>
                                        <li>must have a call to action and or link to StyleGenie.ph</li>
                                        <li>must have at least 500 words and is viewable to the public</li>
                                        <li>Photos/GIFs are encouraged</li>
                                        <li>SEO/keywords guide to be given by StyleGenie</li>
                                        <li>For possible topics and other concerns, please email rhijean@stylegenie.ph</li>
                                        <li>Manual crediting of points is done every end of the month.</li>
                                    </ul>
                                </li>
                                <li>When you create a YouTube video about us = 1,000 points
                                    <ul>    
                                        <li>Must be approved by SG following these mechanics:</li>
                                        <li>must be of high-quality resolution and substantial content. </li>
                                        <li>must have a call to action and link to StyleGenie </li>
                                        <li>should be at least 60 seconds brand exposure and is viewable by the public.</li>
                                        <li>For other concerns, please email rhijean@stylegenie.ph</li>
                                        <li>Manual crediting of points is done every end of the month.</li>
                                    </ul> 
                                </li>
                            </ol>
                        </Panel> 
                        <Panel header="Does it cost anything to begin earning rewards points?"  key="3">
                            <ul>
                                <li>
                                    Sign up is 100% FREE. Make sure to visit the 'Earn Rewards' tab to get started. 
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How long will it take for rewards points to be posted on my account?"  key="4">
                            <h6 style={{ color: '#a64d79'}}>
                                You should receive points in your account within minutes once you complete any points-earning activity! Except for manually credited points, these will be reflected every end of the month such as:
                            </h6>
                            <ul>
                                <li>
                                    Points from the usage of special Ambassadress codes
                                </li>
                                <li>
                                    Points from blog and video contributions
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="Do my rewards points expire?"  key="5">
                            <ul>
                                <li>
                                    Nope! Your points will never expire.
                                </li>

                            </ul>
                        </Panel>
                        <Panel header="What can I redeem with my rewards points?"  key="6" >
                            <ul>
                                <li>
                                    Glad you asked! We want to make it as easy and fun to redeem your hard-earned points. Just visit the 'Redeem Points' tab to view all of our exciting reward options.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How do I redeem my rewards points?"  key="7" >
                            <ul>
                                <li>
                                    Exchanging your points for great rewards couldn't be easier! Simply visit the 'Redeem Points' tab to view all of our great reward options and click the 'Redeem' button to redeem your reward.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How do I check my points balance?"  key="8" >
                            <ul>
                                <li>
                                    Your up-to-date points balance is always displayed on the top of the StyleGenie Rewards & Referrals pop-up.
                                </li>
                            </ul>
                        </Panel>
                        <Panel header="How do I contact support if I have questions about my points?"  key="9" >
                            <ul>
                                <li>
                                    Our team is ready and waiting to answer your questions about our Rewards & Referrals program! Just send us an email at partners@stylegenie.ph and we'll be in touch.
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

export default Rewards