import React,{Fragment,useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "react-slick";
import DraggableItem from './draggable_item';
import Droppable from '../Utils/Droppable';
import EnquirePopup from '../EnquirePopup';

const LeftArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className="nav-icons left"> 
             <i class="fas fa-chevron-left"></i> 
        </span>
    )
}

const RightArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className="nav-icons right"> 
            <i class="fas fa-chevron-right"></i> 
        </span>
    )
}

const settings = {
    infinite: false,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 5,
    variableWidth:true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />
};

const CustomFilter = (props) => {
   const list1 = [1,2,3,4,5,6,7,8,9,10];
   const list2 = [11,12,13,14,15,16,17,18,19,20];
   const list3 = ['Value1', 'Value2'];
   const list4 = ['Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2','Value1', 'Value2'];
   const [firstList,setFirstList] = useState(list1)
   const [secondList,setSecondList] = useState(list2);
   const [popupList,setpopupList] = useState('');
   const [columnList,setColumnList] = useState(list3);
   const [columnList1,setColumnList1] = useState(list4);
   const textInput = React.createRef();
   const textInput1 = React.createRef();
   function renderDraggableListOne(){
       return firstList.map((item)=>{
            return (<DraggableItem key={item} data={item} >  
                  <span> Column {item} </span>
             </DraggableItem>)
       });
   }
   function renderDraggableListTwo(){
       return secondList.map((item)=>{
            return (<DraggableItem key={item} data={item} >  
                <span> Column {item} </span>
            </DraggableItem>)
       });
   }

   function removeAll(){
       let newArr = [...list1,...list2];
       setFirstList([]);
       setSecondList(newArr);       
   }
   
   function resetAll(){
      setFirstList(list1);
      setSecondList(list2);
   }


   function modifyListOne(item){
       let data1 = []
       if(firstList.length > 0){
         data1 = [...firstList];          
       }
       data1.push(item);
       data1.sort();
       setFirstList(data1);

       var temp = [...secondList];
       temp = temp.filter(e => e != item);
       setSecondList(temp)

   }

   function modifyListTwo(item){
      let data2 = [...secondList];
      data2.push(item);
      setSecondList(data2);
      
      var temp = [...firstList];
      temp = temp.filter(e => e != item);
      temp.sort();
      setFirstList(temp);

   }

   const popupData = '';
   function showPopup(data) {
    setpopupList(data);
   }

   function callbackFunction() {
    setpopupList('');
   }

   function addColumn(e) {
    if (e.key === 'Enter') {
      let dataList = [...columnList];
      dataList.push(e.target.value)
      setColumnList(dataList);
      e.target.value = '';
    }
  }

  function focusProps(){
    textInput.current.focus();
  }

  function focusProps1(){
    textInput1.current.focus();
  }

  function addColumn1(e) {
    if (e.key === 'Enter') {
      let dataList = [...columnList1];
      dataList.push(e.target.value)
      setColumnList1(dataList);
      e.target.value = '';
    }
  }

  function clearPills(){
    setColumnList([]);
    setColumnList1([]);
  }

  function removePillList1(index){
      let temp = [...columnList];
      temp.splice(index,1);
      setColumnList(temp);
  }

  function removePillList2(index){
    let temp = [...columnList1];
    temp.splice(index,1);
    setColumnList1(temp);
}

   return(
        <Tabs selectedIndex={props.selectedIndex} >
            <TabList>
                <div className="custom-filter-wrap custom-filter clearfix">
                    <div className="custom-filter-lists clearfix">
                        <Tab>
                            <div className="custom-filter-col1 clearfix" onClick={()=>props.toggleOverlay(false,0)} >
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type">
                                        <label>View</label>
                                        <div className="select-wrap">
                                          <select>
                                            <option>Default</option>
                                            <option>Custom</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div className="create-update-action clearfix">
                                        <span title="Delete"><img src="./images/delete.svg" /></span>
                                        <span title="Update" onClick={()=>showPopup('update')}>Update</span>
                                        <span title="Create New" onClick={()=>showPopup('create')}>Create New</span>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <div className="file-icons">
                                        <span title=""><img src="./images/pdf-file.svg" /></span>
                                        <span title=""><img src="./images/xlsx-file.svg" /></span>
                                        <span title=""><img src="./images/text-file.svg" /></span>
                                        <span title="" onClick={()=>showPopup('mail')}><img src="./images/mail.svg" /></span>
                                    </div>
                                </div>
                            </div> {/* End of First Tab Link Section */}
                        </Tab>
                        <Tab>
                            <div className="custom-filter-col2" style={{"cursor":"pointer"}} onClick={()=>props.toggleOverlay(true,1)} >
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type column drop-column-btn">
                                        <label>Column</label>
                                        <div className="select-wrap">
                                          <span>14/40</span>
                                        </div>
                                    </div>
                                    <div className="view-type row">
                                        <label>Rows</label>
                                        <div className="select-wrap">
                                          <select>
                                              <option>5</option>
                                          </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <span className="reset-filter-txt">Reset</span>
                                </div>
                            </div> {/* End of Second Tab Link Section */}
                        </Tab>
                        <Tab>
                            <div className="custom-filter-col3" style={{"cursor":"pointer"}} onClick={()=>props.toggleOverlay(true,2)}>
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type column">
                                        <label>Active Filters</label>
                                        <div className="select-wrap">
                                          <select>
                                              <option>7/40</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div class="text-toggle ">
                                        <input id="c" type="checkbox" />
                                        <label for="c">
                                            <div class="can-toggle__switch" data-checked="Don't Apply" data-unchecked="Apply"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <span onClick={()=>clearPills()} className="reset-filter-txt">Clear</span>
                                </div>
                            </div> {/* End of Third Link Section */}
                        </Tab>
                    </div>
                </div>
            </TabList>
            <TabPanel>
            </TabPanel>
            <TabPanel>
                <div>
                    <div className="current-filter-action">
                        <div className="current-filter-head clearfix">
                            <h3>Visible Column <span>15</span></h3>
                            <span onClick={()=>removeAll()} className="reset-filter-txt">Remove all</span>
                            <span onClick={()=>resetAll()} className="reset-filter-txt">Reset</span>
                        </div>
                        <div className="visible-column dropsection-wrapper">
                            <p>Drag and arrange the columns you want to see. Drag and drop columns you do not want to see to the bottom.</p>
                              <div className="slider-wrapper">                               
                              <Droppable addScroll={true} handleDrop={modifyListOne}>
                                   <Slider {...settings} > {renderDraggableListOne()} </Slider>
                              </Droppable>
                              </div>
                        </div>
                        <div className="current-filter-head clearfix">
                            <h3>Available Column <span>25</span></h3>
                            <p>Drag and drop column you want to view to the top.</p>
                        </div>
                        <div className="avliable-column-list clearfix">
                           <Droppable handleDrop={modifyListTwo} >
                              {renderDraggableListTwo()}
                           </Droppable>
                        </div>
                    </div>
                    <div style={{"backgroundColor":"white"}}  className="custom-filter-button clearfix">
                        <span onClick={()=>props.toggleOverlay(false,0)} className="common-btn">Apply</span>
                        <span onClick={()=>props.toggleOverlay(false,0)} className="common-btn2">Clear</span>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <div className="current-filter-action clearfix">
                        <div className="find-column form-group">
                            <label>Find Column</label>
                            <input type="text" placeholder="Enter column name" />
                        </div>
                        <div className="all-column">
                            <label>Show</label>
                            <div className="select-wrap">
                              <select>
                                  <option>All</option>
                              </select>
                            </div>
                            <span>Columns</span>
                        </div>
                    </div>
                    <div className="custom-filter-table-wrap">
                        <div className="custom-filter-table">
                            <div className="table-wrap">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data form-group">
                                                <div className="date-formate">
                                                    <label>From</label>
                                                    <input  type="text" placeholder="dd-mm-yyyy" />
                                                </div>
                                                <div className="date-formate form-group">
                                                    <label>To</label>
                                                    <input  type="text" placeholder="dd-mm-yyyy" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="axis-tags-wrapper" onClick={()=>focusProps()}>
                                                  <div className="axis-tag-wrap">
                                                    {columnList.map((data, i) => {
                                                      return <span className="axis-tags" > 
                                                                 {data} 
                                                                 <i style={{"cursor":"pointer"}} onClick={()=>removePillList1(i)} class="fa fa-times" aria-hidden="true"></i> 
                                                             </span>
                                                    })}
                                                    <input type="text" onKeyDown={(e)=>addColumn(e)}  ref={textInput} />
                                                  </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="axis-tags-wrapper" onClick={()=>focusProps1()}>
                                                  <div className="axis-tag-wrap">
                                                    {columnList1.map((data, i) => {
                                                      return <span className="axis-tags" > {data} 
                                                             <i style={{"cursor":"pointer"}} onClick={()=>removePillList2(i)} class="fa fa-times" aria-hidden="true"></i> </span>
                                                    })}
                                                    <input type="text" onKeyDown={(e)=>addColumn1(e)}  ref={textInput1} />
                                                  </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="form-group tag-input">
                                                  <div className="select-wrap">
                                                    <select style={{"width":"167px"}} >
                                                        <option>Select</option>
                                                    </select>
                                                  </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="custom-radio-btn clearfix">
                                                    <label class="radio-button-wrap">Selected
                                                        <input type="radio" name="radio" checked="checked" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-button-wrap">Unselected
                                                        <input type="radio" name="radio" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-button-wrap">Unselected
                                                        <input type="radio" name="radio" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-button-wrap">Unselected
                                                        <input type="radio" name="radio" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="custom-checkbox clearfix">
                                                    <label class="checkbox-wrap">Selected
                                                        <input type="checkbox" checked="checked" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-wrap">Unselected
                                                        <input type="checkbox" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-wrap">Unselected
                                                        <input type="checkbox" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-wrap">Unselected
                                                        <input type="checkbox" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div style={{"backgroundColor":"white"}} className="custom-filter-button clearfix">
                        <span onClick={()=>props.toggleOverlay(false,0)} className="common-btn">Apply</span>
                        <span onClick={()=>props.toggleOverlay(false,0)} className="common-btn2">Clear</span>
                    </div>
                </div>                
            </TabPanel>
            <EnquirePopup type={popupList} callbackFromParent={()=>callbackFunction()} />
        </Tabs>
   )
}

export default CustomFilter