import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Collapse } from 'antd'

class Careers extends Component {

    render() {
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{margin: '25px 5px'}} >Careers</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:900,margin:'0 auto',textAlign:'left'}}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                        <Panel header="EXECUTIVE ASSISTANT" key="1" >
                            <h6 style={{ color: '#a64d79'}}>
                                Full Time Position     
                            </h6>
                            <ul>
                                <h6 style={{ color: '#a64d79'}}>
                                    Job Description:    
                                </h6>
                                <li>
                                    Point of contact among executives, employees, clients, and partners
                                </li>
                                <li>
                                    Manage information flow, executive calendars and set up meetings
                                </li>
                                <li>
                                    Make travel and accommodation arrangements
                                </li>
                                <li>
                                    Rack daily expenses and prepare weekly, monthly and quarterly reports
                                </li>
                                <li>
                                    Oversee clerical staff performance
                                </li>
                                <li>
                                    Keep up with office supply inventory
                                </li>
                                <li>
                                    Format information for internal and external communication
                                </li>
                                <li>
                                    Take minutes during meetings
                                </li>
                                <li>
                                    Organize & maintain office filing system 
                                </li>
                                <h6 style={{ color: '#a64d79'}}>
                                    Requirements:   
                                </h6>
                                <li>
                                    At least 1 year experience as Admin / Events management
                                </li>
                                <li>
                                    Knowledge in MS Office and Google apps 
                                </li>
                                <li>
                                    Organizational and time management skills
                                </li>
                                <li>
                                    Verbal and communication skills
                                </li>
                                <li>
                                    Discretion & confidentiality  
                                </li>
                                <button className="careers"> <a href="mailto:partners@stylegenie.ph">APPLY</a> </button>
                            </ul>
                        </Panel> 
                        <Panel header="COMMUNITY MANAGER"  key="2">
                        <h6 style={{ color: '#a64d79'}}>
                                Full Time / Part Time positions open    
                            </h6>
                            <ul>
                                <h6 style={{ color: '#a64d79'}}>
                                    Job Description:    
                                </h6>
                                <li>
                                    Set and implement social media and communication campaigns to align with marketing strategies
                                </li>
                                <li>
                                   Provide content for social media accounts
                                </li>
                                <li>
                                    Respond to comments and customer queries
                                </li>
                                <li>
                                    Monitor and report on feedback and online reviews
                                </li>
                                <li>
                                    Organize and participate in events to build community and boost brand awareness
                                </li>
                                <li>
                                    Ensure brand consistency                                
                                </li>
                                <li>
                                    Build relationships with customers and industry professionals
                                </li>
                                <h6 style={{ color: '#a64d79'}}>
                                    Requirements:   
                                </h6>
                                <li>
                                    At least 1 year experience in PR / Events / Marketing
                                </li>
                                <li>
                                    Ability to identify and track relevant community metrics
                                </li>
                                <li>
                                    Verbal communication and writing skills  
                                </li>
                                <li>
                                    Ability to interpret website traffic and online customer engagement metrics
                                </li>
                                <li>
                                    Knowledge of online marketing and marketing channels  
                                </li>
                                <li>
                                    Attention to detail and ability to multitask  
                                </li>
                                <button className="careers"> <a href="mailto:partners@stylegenie.ph">APPLY</a> </button>
                            </ul>
                        </Panel> 
                        <Panel header="FASHION BUYERS"  key="3">
                            <h6 style={{ color: '#a64d79'}}>
                                Full Time / Part Time positions open    
                            </h6>
                            <ul>
                                <h6 style={{ color: '#a64d79'}}>
                                    Job Description:    
                                </h6>
                                <li>
                                    Liaise with existing suppliers and negotiating contracts
                                </li>
                                <li>
                                    Source and build relations with new suppliers
                                </li>
                                <li>
                                    Source and select new products
                                </li>
                                <li>
                                    Monitor market changes, competitor prices and products
                                </li>
                                <li>
                                    Analyze past sales patterns  
                                </li>
                                <h6 style={{ color: '#a64d79'}}>
                                    Requirements:   
                                </h6>
                                <li>
                                    Fresh graduates are welcome to apply (Fashion / Marketing / Business)
                                </li>
                                <li>
                                    Confidence with negotiating and networking
                                </li>
                                <li>
                                    Attention to detail
                                </li>
                                <li>
                                    Analytical skills   
                                </li>
                                <button className="careers"> <a href="mailto:partners@stylegenie.ph">APPLY</a> </button>
                            </ul>
                        </Panel>
                        <Panel header="MULTIMEDIA INTERNS"  key="4">
                            <h6 style={{ color: '#a64d79'}}>
                                Minimum 3 months   
                            </h6>
                            <ul>
                                <h6 style={{ color: '#a64d79'}}>
                                    Job Description:    
                                </h6>
                                <li>
                                    Support product design and development team
                                </li>
                                <li>
                                    Maintain and update existing materials
                                </li>
                                <li>
                                    Support marketing team in creating online and offline collaterals
                                </li>
                                <h6 style={{ color: '#a64d79'}}>
                                    Requirements:   
                                </h6>
                                <li>
                                    a student or a graduate of any Multimedia / Design course
                                </li>
                                <li>
                                    Skilled in Adobe Creative Suite Applications and Microsoft Office Suite
                                </li>
                                <button className="careers"> <a href="mailto:partners@stylegenie.ph">APPLY</a> </button>
                            </ul>
                        </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div> 
        )
    }
}

export default Careers
