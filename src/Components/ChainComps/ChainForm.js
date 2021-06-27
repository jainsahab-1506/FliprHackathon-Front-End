import React from 'react'
import axios from '../utils/axios';
import {requests} from '../utils/requests';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker,
  DatePicker
} from '@material-ui/pickers';
import { isThisSecond } from 'date-fns';
import { Link } from 'react-router-dom';

export default class ChainForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            _id : "",
            chainname : "",
            emailgroupid : {
                _id : "",
                groupName : ""
            },
            frequency : {
                period: "Weekly",
                date: "01/01",
                day: "Monday",
                dateOfMonth: 1,
                time: "",
                repeat: "",
            },
            messageid : {
                _id : "",
                text : "",
                attachments : []
            },
            emailGroups : [],
            status : false,
            currDate : new Date(),
            attachedNewFiles : []
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.getDateTime = this.getDateTime.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.submitChainData = this.submitChainData.bind(this);
    }

    componentDidMount(){
        async function fetchChainData(chainId){
            const request = await axios.get(requests['fetchChainById']+"/"+chainId);
            return request;
        }

        async function fetchEmailGroups(){
            const request = await axios.get(requests['fetchEmailGroups']);
            return request;
        }
        console.log(this.props.chainId);
        if(this.props.chainId){
            fetchChainData(this.props.chainId).then((res) => {
                const data = res.data.chaindata;
                this.setState(data
                , ()=>{console.log(this.state)})
            }).catch((e)=>{
                console.log(e);
                this.setState({
                }, ()=>{console.log(this.state)})
            });
        }

        fetchEmailGroups().then((res)=>{
            const data = res.data;
                this.setState({emailGroups:data}
                , ()=>{console.log(this.state.emailGroups)})
            }).catch((e)=>{
                console.log(e);
                this.setState({emailGroups:[]
                }, ()=>{console.log(this.state.emailGroups)})
            });
    }

    submitChainData(futureStatus){
        var fd = new FormData();
        const chainData = this.state;
        fd.append("files", chainData.attachedNewFiles);
        var payload = {
            _id: chainData._id,
            chainname : chainData.chainname,
            userid : chainData.userid,
            emailgroupid : chainData.emailgroupid._id,
            messageid : {
                _id : chainData.messageid._id,
                text : chainData.messageid.text
            },
            frequency: chainData.frequency,
            status: false
        }
        
        console.log(JSON.stringify(payload));
        if(futureStatus) payload["status"] = true;
        fd.append("body", JSON.stringify(payload));

        // console.log(payload, fd);

        var requrl;
        var reqmethod
        // CALL PUT REQUEST IS ID EXISTS
        if(chainData._id){
            requrl = requests["updateChain"]+"/"+chainData._id;
            reqmethod = "put";
        }
        else{
            requrl = requests["createNewChain"];
            reqmethod = "post";
        }
        console.log(requrl);

        async function submitChainData(){
            const request = await axios({
                method: reqmethod,
                url:requrl, 
                data:fd,
                headers:{
                    "Content-Type": "multipart/form-data"
                }});
            return request;
        }

        submitChainData().then((res)=>{
            const data = res.data.chaindata;
            this.setState(data
            , ()=>{console.log(this.state)})
        }).catch((e)=>{
            console.log(e);
            this.setState({
            }, ()=>{console.log(this.state)})
        });
    }

    handleChainNameChange(event){
        this.setState({
            chainname:event.target.value
        });
    }

    handleMessageTextChange(event){
        this.setState({
            messageid : {...this.state.messageid, text:event.target.value}
        });
        var textarea = event.target;
        textarea.scrollTop = textarea.scrollHeight;
    }

    handleDateChange(newDate){
        this.setState({
            frequency : {...this.state.frequency, date:newDate}
        }, ()=>{
            console.log(this.state);
        });
    };

    handleTimeChange(newTime){
        var stringTime =  newTime.getHours() + ":" + newTime.getMinutes();
        this.setState({
            frequency : {...this.state.frequency, time:stringTime},
            currDate: newTime
        });
        console.log(stringTime);
    };

    handleOptionChange(event){
        console.log(event);
        const newData = this.state.frequency;
        newData[event.target.name] = event.target.value;
        this.setState({
            frequency : newData
        }, ()=>{
            console.log(this.state);
        });
    }

    handleGroupChange(event){
        this.setState({
            emailgroupid : {...this.state.emailgroupid, _id: event.target.value}
        }, ()=>{
            console.log(this.state);
        }); 
    }

    handleFileChange(event){
        const files = event.target.files;
        if(files.length>3){
            alert("Cannot upload more than 3 files");
            return;
        }
        this.setState({
            attachedNewFiles : files
        }, ()=>{
            console.log(this.state);
        });
    }

    getDateTime(){
        console.log(this.state.frequency.time);
        // var hm = time.split(":");
        // console.log(hm);
        // return new Date().setHours(hm[0], hm[1], 0);
        return "";
    }

    truncate(str) {
        return str.length > 15 ? str.substring(0, 15) + "..." : str;
    }
    
    render(){

        const periodOptions = [
            {key:0, period: "Weekly"},
            {key:1, period: "Monthly"},
            {key:2, period: "Yearly"},
            {key:3, period: "Recurring"}
        ]

        const dayOptions = [
            {key:0, day: "Monday"},
            {key:1, day: "Tuesday"},
            {key:2, day: "Wednesday"},
            {key:3, day: "Thursday"},
            {key:4, day: "Friday"},
            {key:5, day: "Saturday"},
            {key:6, day: "Sunday"}
        ]

        const recurringOptions = [
            {key:0, repeat: "30"},
            {key:1, repeat: "20"}
        ]

        const dayOfMonth = [];
        for(var dateOfMonth=1; dateOfMonth<=28; dateOfMonth++){
            dayOfMonth.push(dateOfMonth);
        }

        return <div className="inner">
            <h1>Create Chain</h1>
            <div className="form-container">
                <form id="chain-form">
                    <div className="form-group">
                        <label>Chain Name</label>
                        <input type="text" className="text-input" value={this.state.chainname} onChange={this.handleChainNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label>Email Group</label>
                        <select className="freq-drop email-group-drop" value={this.state.emailgroupid._id} onChange={this.handleGroupChange.bind(this)}>
                            {this.state.emailGroups.map((emailGroup, index)=><option key={index} value={emailGroup._id}>{emailGroup.groupName}</option>)}
                        </select>
                        <div className="add-icon">
                            <Link to="/emails/add"><i className="material-icons">
                                add_circle
                            </i>
                            </Link>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Frequency</label>
                        <div className="drop-downs">
                            <select className="freq-drop" name="period" value={this.state.frequency.period} onChange={this.handleOptionChange}>
                                {periodOptions.map((periodOption, index)=>{
                                    return <option value={periodOption.period}>{periodOption.period}</option>
                                })}
                            </select>
                            {this.state.frequency.period=="Weekly" && 
                                <select className="freq-drop" name="day" value={this.state.frequency.day} onChange={this.handleOptionChange}>
                                    {dayOptions.map((dayOption, index)=>{
                                        return <option value={dayOption.day}>{dayOption.day}</option>
                                    })}
                                </select>
                            }
                            {this.state.frequency.period=="Recurring" && 
                                <select className="freq-drop" name="repeat" value={this.state.frequency.repeat} onChange={this.handleOptionChange}>
                                    {recurringOptions.map((recurringOption, index)=>{
                                        return <option value={recurringOption.repeat}>{recurringOption.repeat}</option>
                                    })}
                                </select>
                            }
                            {this.state.frequency.period=="Monthly" && 
                                <select className="freq-drop" name="dateOfMonth" value={this.state.frequency.dateOfMonth} onChange={this.handleOptionChange}>
                                    {dayOfMonth.map((dateOfMonth, index)=>{
                                        return <option value={dateOfMonth}>{dateOfMonth}</option>
                                    })}
                                </select>
                            }
                            {this.state.frequency.period=="Yearly" &&
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        label="Date"
                                        value={this.state.frequency.date}
                                        onChange={this.handleDateChange}
                                        animateYearScrolling
                                    />
                                </MuiPickersUtilsProvider>
                            }
                            {this.state.frequency.period!="Recurring" && 
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <TimePicker
                                    clearable
                                    ampm={false}
                                    label="24 hours"
                                    value={this.state.currDate}
                                    onChange={this.handleTimeChange}
                                />
                            </MuiPickersUtilsProvider>
                            }
                        </div>
                        {/* add time */}
                    </div>
                    <div className="form-group">
                        <label>Email Body</label>
                        <div className="textarea-cont">
                            <textarea rows="15" cols="75" className="textarea-input" value={this.state.messageid.text} onChange={this.handleMessageTextChange.bind(this)}></textarea>
                            <div className="attachments">
                                {this.state.attachedNewFiles.length==0 && this.state.messageid.attachments.map((attachment, index) => {
                                    return <div className="attach-file" key={index}>
                                                <h5>{this.truncate(attachment.originalname)}</h5>
                                            </div>
                                })}
                                {this.state.attachedNewFiles.length>0 && Array.from(this.state.attachedNewFiles).map((attachment, index)=>{
                                    console.log(attachment.name);
                                    return <div className="attach-file">
                                                <h5>{this.truncate(attachment.name)}</h5>
                                                {/* <a className="remove-file" onClick={this.removeFile.bind(this, index)}>
                                                    <span className="material-icons">close</span>
                                                </a> */}
                                            </div>
                                })}
                            </div>
                            <div className="attach-pin">
                                <input type="file" name="attachment" id="attachment" onChange={this.handleFileChange} multiple/>
                                <label for="attachment">
                                    <span className="material-icons">attach_file</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="submit-sec">
                        <div className="submit-cont">
                            <a className="save-btn" onClick={()=>this.submitChainData(false)}>Save</a>
                        </div>
                        <div className="submit-run-cont">
                            <a className="save-btn" onClick={()=>this.submitChainData(true)}>Save & Run</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

// {
//     "_id": "60d6f1a753c1325a2c01e523",
//     "chainname": "Test Chain 1",
//     "userid": "60d6c141db2fbb2c4c3e0256",
//     "emailgroupid": {
//         "to": [
//             "user1@gmail,com"
//         ],
//         "cc": [
//             "user3@gmail,com",
//             "user4@gmail.com"
//         ],
//         "bcc": [
//             "user5@gmail,com"
//         ],
//         "_id": "60d6cadfd0bbb7331fa23564",
//         "owner": "60d6c141db2fbb2c4c3e0256",
//         "groupName": "Test Group Beta",
//         "__v": 0
//     },
//     "messageid": {
//         "attachments": [],
//         "_id": "60d6f1a753c1325a2c01e522",
//         "text": "Hello",
//         "__v": 0
//     },
//     "frequency": "Weekly",
//     "status": false,
//     "__v": 0
// }

// [
//     {
//       fieldname: 'files',
//       originalname: 'Dekisugi.jpg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'uploads/',
//       filename: '4eaaa5ae4aa4f211713f34f35117630f',
//       path: 'uploads/4eaaa5ae4aa4f211713f34f35117630f',
//       size: 32796
//     }
//   ]


    // '{
    //     "_id": "60d6f1a753c1325a2c01e523",
    //     "chainname": "Test Chain 1",
    //     "userid": "60d6a55233a1d24e8c984df5",
    //     "emailgroupid": "60d6cadfd0bbb7331fa23564",
    //     "messageid": {
    //         "_id":"60d6f1a753c1325a2c01e522",
    //         "text":"Helooooooooo"
    //     }
    //     "frequency": {
    //         "period": "Weekly",
    //         "day": "Monday",
    //         "date": "01/01",
    //         "time": "23:59",
    //         "dateofMonth": "1",
    //         "repeat": ""
    //     },
    //     "status": false,
    // }'