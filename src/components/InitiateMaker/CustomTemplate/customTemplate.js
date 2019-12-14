import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from '../../Upload';
import './customTemplate.scss';
import DraggableLi from './draggable_li';
import DroppableTd from './droppable_td';

const mandatoryList = [
  {
    id:1,
    text:"Mandatory field 1",
    type:"Mandatory",
    added:false,
    format:"default"
  },
  {
    id:2,
    text:"Mandatory field 2",
    type:"Mandatory",
    added:false,
    format:"default"  
  },
  {
    id:3,
    text:"Mandatory field 3",
    type:"Mandatory",
    added:false,
    format:"default"   
  },
  {
    id:4,
    text:"Mandatory field 4",
    type:"Mandatory",
    added:false,
    format:"default"
  },
  {
    id:5,
    text:"Mandatory field 5",
    type:"Mandatory",
    added:false,
    format:"default"
  }
]

const optionalList = [
  {
    id:6,
    text:"Create Your Own",
    type:"Optional",
    added:false,
    format:"custom"     
  },
  {
    id:7,
    text:"Optional Field 6",
    type:"Optional",
    added:false,
    format:"default"       
  },
  {
   id:8,
   text:"Optional Field 7",
   type:"Optional",
   added:false,
   format:"default"    
  },
  {
   id:9,
   text:"Optional Field 8",
   type:"Optional",
   added:false,
   format:"default"      
  },
  {
   id:10,
   text:"Optional Field 9",
   type:"Optional",
   added:false,
   format:"default"        
  },
  {
   id:11,
   text:"Optional Field 10",
   type:"Optional",
   added:false,
   format:"default"        
  }
]


class CustomTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      uploadSuccess: false,
      showDesc: true,
      templateName: 'Template',
      mandatoryList:mandatoryList,
      optionalList:optionalList,
      finalFormList:[],
      sampleArr:[1,2,3,4,5,6]
    };
  }

  addMandatoryList = (index) => {
     if(this.state.finalFormList.length >= 6)  return;
     let temp = [...this.state.mandatoryList];
     let final = [...this.state.finalFormList];
     temp.forEach((item)=>{
        if(item.id == index &&item.added == false){
          item.added = true;
          final.push(item);
        }
     });
     this.setState({
       mandatoryList:temp,
       finalFormList:final
     })
  }

  addOptionalList = (index) => {
    if(this.state.finalFormList.length >= 6)  return;
    let temp = [...this.state.optionalList];
    let final = [...this.state.finalFormList];
    temp.forEach((item)=>{
       if(item.id == index && item.added == false){
          item.added = true;
          final.push(item);
       }
    });
    this.setState({
      optionalList:temp,
      finalFormList:final  
    })
  }
  
  removeItemFromList = (removeItem) => {
    if(removeItem.type === "Mandatory"){
        let temp = [...this.state.mandatoryList];
        temp.forEach((item)=>{
            if(item.id ===removeItem.id && item.added == true){
              item.added = false;
            }
        });

        this.setState({
          mandatoryList:temp
        });
    }else if(removeItem.type === "Optional"){
      let temp = [...this.state.optionalList];
      temp.forEach((item)=>{
          if(item.id ===removeItem.id && item.added == true){
            item.added = false;
          }
      });
      this.setState({
        optionalList:temp
      });
    }

    let temp2 = [...this.state.finalFormList];
    var index = temp2.indexOf(removeItem);
    temp2.splice(index,1);
    this.setState({
       finalFormList:temp2
    })
  }

  callbackFunction = (dataFromChild) => {
    if (dataFromChild) {
      this.setState(state => ({
        currentStep: 2
      }));
    }
  }

  nextStep = () => {
    this.setState(state => ({
      currentStep: this.state.currentStep + 1
    }));
  }

  previousStep = () => {
    this.setState(state => ({
      currentStep: this.state.currentStep - 1
    }));
  }

  paymentPage = () => {
    this.props.callbackFromParent('payment');
  }

  createTemplate = () => {
    this.setSessionStorage();
    this.props.callbackFromParent('payment');
  }

  setSessionStorage = () => {
    var sessionLocalData = JSON.parse(sessionStorage.getItem('custom_template'));
    var sessionData = [];
    if(sessionLocalData){
      sessionData = sessionLocalData;
    }
    var data = {
      name: this.state.templateName,
      isFavorite: false
    }
    sessionData.push(data);
    sessionStorage.setItem('custom_template', JSON.stringify(sessionData));
  }

  showHideDesc = () => {
    this.setState(state => ({
      showDesc: !this.state.showDesc
    }));
  }

  templateName = (event) => {
    this.setState({
      templateName: event.target.value
    });
  }
  returnTableData = (index) => {
    if(!this.state.finalFormList[index]){
      return 
    }else{
      return(
        (this.state.finalFormList[index].format == "custom") ?
        (
        <Fragment>
           <span onClick={()=>this.removeItemFromList(this.state.finalFormList[index])} className="td-text" >
                <i className="fas fa-minus"></i>&nbsp;&nbsp;
          </span>
          <input type="text" defaultValue="Custom field 1" />
          <span className="input-type"> {this.state.finalFormList[index].type} </span>
          <span className="input-length"> VARCHAR-128 </span>
          {<span className="edit-icon-wrapper"> 
              <i class="fas fa-check-square"></i> &nbsp;&nbsp;
              <i class="fas fa-times"></i> 
          </span>}
        </Fragment>
        ):
        (<Fragment>
           <span onClick={()=>this.removeItemFromList(this.state.finalFormList[index])} className="td-text" >
                <i className="fas fa-minus"></i>&nbsp;&nbsp;{this.state.finalFormList[index].text}
          </span>
          <span className="input-type"> {this.state.finalFormList[index].type} </span>
          <span className="input-length"> VARCHAR-128 </span>

          {this.state.finalFormList[index].type === "Optional" && <span className="edit-icon-wrapper"> <img src="/images/edit.svg" /> </span>}
        </Fragment>)
     )
    }
  }

  renderCustomFormat = () => {
     return;
  }

  render() {
    let currentStep;
    let configData;
    if (this.state.currentStep == 1) {
      currentStep =
        <div className="new-upload">
          <h3>Upload sample file</h3>
          <Upload pageType='customTemplate' callbackFromParent={this.callbackFunction} />
        </div>
    }
    if (this.state.currentStep == 2) {
      currentStep =
        <div className="new-upload data-fields">
          <h3>Identify Data-Fileds</h3>
          <div className="data-fields-wrap clearfix">
            <div className="data-fields custom-drag-drop-table-scroll">
              <DroppableTd 
               handleMandatory={(index)=>this.addMandatoryList(index)} 
               handleOptional={(index)=>this.addOptionalList(index)} >
              <table class="custom-field-tabel custom-drag-drop-table">
                <thead>
                  <tr>
                    <th>Your Data</th>
                    <th>Set Format</th>
                  </tr>
                </thead>
                <tbody>
                   {this.state.sampleArr.map((item,index)=>{
                     return(<tr>
                       <td><span className="custom-data-count">{item}</span> Custom data {item}</td>
                       {this.state.finalFormList.length === index ? (
                       <td className="no-padding-td"> 
                         <span className="drop-here"> Drag and Drop Here </span>
                       </td>                         
                       ) : (
                       <td> 
                          {this.returnTableData(index)}
                       </td>
                       )}

                     </tr>)                     
                   })}
                </tbody>
              </table>
              </DroppableTd>
            </div>
            <div className="data-fields-lists custom-drag-drop-table-scroll">
              <p>Choose format (Drag and drop or click on "+")</p>
              <h3>Mandatory</h3>
              <ul>
                {this.state.mandatoryList.map((item,index)=>{
                  return(
                    <DraggableLi id={item.id} type="mandatory"  >
                      <span onClick={()=>this.addMandatoryList(item.id)} className="plus-btn">
                        <i className="fas fa-plus"></i>
                      </span>
                      {item.text}
                      {item.added ? (
                       <span className="added-icon">
                           <i class="fas fa-check"></i>
                       </span>) : 
                       (<span className="status-icon">
                       <i className="fas fa-bars"></i>
                       </span>)}
                    </DraggableLi>                    
                  )
                })}
              </ul>
              <h3>Optional</h3>
              <ul>
                 {this.state.optionalList.map((item,index)=>{
                  return(
                    <DraggableLi id={item.id} type="optional">
                        <span onClick={()=>this.addOptionalList(item.id)} className="plus-btn">
                           <i className="fas fa-plus"></i>
                        </span>
                        {item.text}
                        {item.added ? (
                       <span className="added-icon">
                           <i class="fas fa-check"></i>
                       </span>) : 
                       (<span className="status-icon">
                       <i className="fas fa-bars"></i>
                       </span>)}
                    </DraggableLi>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="data-field-btn">
            <span className="common-btn3" onClick={this.nextStep}>Proceed</span>
            <span className="common-btn2" onClick={this.previousStep}>Back</span>
          </div>
        </div>
    }
    if (this.state.currentStep == 3) {
      currentStep =
        <div className="new-upload finalise-detail">
          <h3>Finalise Details</h3>
          <div className="finalise-detail-data">
            <form class="finalise-detail-form">
              <div class="form-group clearfix">
                <label>Template Name</label>
                <input value={this.state.text} onChange={this.templateName} />
              </div>
              <div class="form-group input-footer clearfix">
                <label>No. of footers</label>
                <input type="text" />
              </div>
              <div class="form-group input-header clearfix">
                <label>No. of headers</label>
                <input type="text" />
              </div>
              <div class="form-group option-file clearfix">
                <label>File extension</label>
                <div className="select-wrap">
                  <select>
                    <option>Choose</option>
                    <option>Choose 1</option>
                    <option>Choose 2</option>
                  </select>
                </div>
              </div>
              <div class="form-group option-delimiter clearfix">
                <label>Delimiter</label>
                <div className="select-wrap">
                  <select>
                    <option></option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
              <div class="form-group option-date clearfix">
                <label>Date format</label>
                <div className="select-wrap">
                  <select>
                    <option>dd-mm-yyyy</option>
                    <option>mm-dd-yyyy</option>
                    <option>yyyy-mm-dd</option>
                  </select>
                </div>
              </div>
              <div className="data-field-btn">
                <span className="common-btn" onClick={this.createTemplate}>Create</span>
                <span className="common-btn2" onClick={this.previousStep}>Back</span>
              </div>
            </form>
          </div>
        </div>
    }
    if (this.state.currentStep == 1 || this.state.currentStep == 2) {
      configData =
        <div className={"config-custom-format " + (this.state.showDesc ? "open" : "")}>
          <h3>How to configure a custom format
          <span onClick={this.showHideDesc} class="slide-arrow">
              <i class={(this.state.showDesc ? "fas fa-chevron-up" : "fas fa-chevron-down")}></i>
            </span>
          </h3>
          <div className="config-custom-text clearfix">
            <p>You can use your own format to upload salary transactions. For us process this, we need to understand what each of your column contain.</p>
            <h4>Next steps</h4>
            <ul>
              <li>Column for your sample file are shown on the left under "Your data"</li>
              <li>Match one of the mandatory or optional from the extreme right under "Choose format" to "Your Data" by dragging-and-dropping or clicking on "+"</li>
              <li>If one of the optional fields match the meaning of your data, you can click "Create your own"</li>
              <li>You can edit the name of any optional fields</li>
              <li>You can only proceed when you have assigned all the mandatory fields under Choose Format to your data</li>
            </ul>
            <span onClick={this.showHideDesc} className="common-btn2">Ok, Got It </span>
          </div>
        </div>
    }

    return (
      <div className="custom-template">
        <div className="custom-template-head clearfix">
          <h2>Create custom upload format</h2>
          <span className="common-btn2" onClick={this.paymentPage}>Cancel</span>
        </div>
        <div className="template-steps clearfix">
          <div className={"template-steps-col " + (this.state.currentStep == 1 ? "active" : "") + (this.state.currentStep > 1 ? "completed" : "")}>
            <span className="step-count">
              <span className="count">1</span>
              <span className="comp-tick"><img src="./images/tick.svg" /></span>
            </span>
            Upload Sample File
        </div>
          <div className={"template-steps-col " + (this.state.currentStep == 2 ? "active" : "") + (this.state.currentStep > 2 ? "completed" : "")}>
            <span className="step-count">
              <span className="count">2</span>
              <span className="comp-tick"><img src="./images/tick.svg" /></span>
            </span>
            Identify Data-fields
        </div>
          <div className={"template-steps-col " + (this.state.currentStep == 3 ? "active" : "")}>
            <span className="step-count">3</span>
            Finalise Details
        </div>
        </div>
        {configData}
        {currentStep}
      </div>
    )
  }
}
export default CustomTemplate;