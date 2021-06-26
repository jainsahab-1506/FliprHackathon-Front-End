import React from 'react'
import axios from '../utils/axios';
import {requests} from '../utils/requests';

export default class ChainForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            chainName : "",
            emailGroupId : "",
            frequency : {
                period : "",
                date : "",
                day : "",
                time : ""
            },
            messageBody : {
                messageText : "",
                prevFiles : []
            }
        }
    }
    
    return(){
        <div className="inner">
            <h1>Create Chain</h1>
            <div className="form-container">
                <form id="chain-form">
                    <div className="form-group">
                        <label>Chain Name</label>
                        <input type="text" className="text-input" value=""/>
                    </div>
                    <div className="form-group">
                        <label>Email Group</label>
                        <select className="freq-drop email-group-drop">
                            <option>Group 1</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Frequency</label>
                        <div className="drop-downs">
                            <select className="freq-drop">
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                                <option>Recurring</option>
                            </select>
                            <select className="freq-drop">
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                                <option>Recurring</option>
                            </select>
                        </div>
                        {/* add time */}
                    </div>
                    <div className="form-group">
                        <label>Email Body</label>
                        <div className="textarea-cont">
                            <textarea rows="15" cols="75" className="textarea-input"></textarea>
                            <div className="attachments">
                                <div className="attach-file"><h5>Attachment File</h5><a className="remove-file" href=""><span className="material-icons">close</span></a></div>
                            </div>
                            <a href="" className="attach-pin"><span className="material-icons">attach_file</span></a>
                        </div>
                    </div>

                    <div className="submit-sec">
                        <div className="submit-cont">
                            <a href="" className="save-btn">Save</a>
                        </div>
                        <div className="submit-run-cont">
                            <a href="" className="save-btn">Save & Run</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}