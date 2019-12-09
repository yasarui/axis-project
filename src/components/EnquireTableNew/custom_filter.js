import React,{Fragment,useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "react-slick";
import DraggableItem from './draggable_item';
import Droppable from '../Utils/Droppable';

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
    infinite: true,
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
   const [firstList,setFirstList] = useState(list1)
   const [secondList,setSecondList] = useState(list2);
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
   return(
        <Tabs>
            <TabList>
                <div className="custom-filter-wrap custom-filter clearfix">
                    <div className="custom-filter-lists clearfix">
                        <Tab>
                            <div className="custom-filter-col1 clearfix" onClick={()=>props.toggleOverlay(false)} >
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type">
                                        <label>View</label>
                                        <select>
                                            <option>Default</option>
                                            <option>Custom</option>
                                        </select>
                                    </div>
                                    <div className="create-update-action clearfix">
                                        <span title="Delete"><i class="far fa-trash-alt"></i></span>
                                        <span title="Update">Update</span>
                                        <span title="Create New">Create New</span>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <div className="file-icons">
                                        <span title=""><i class="far fa-file-pdf"></i></span>
                                        <span title=""><i class="far fa-file-excel"></i></span>
                                        <span title=""><i class="far fa-file"></i></span>
                                        <span title=""><i class="far fa-envelope"></i></span>
                                    </div>
                                </div>
                            </div> {/* End of First Tab Link Section */}
                        </Tab>
                        <Tab>
                            <div className="custom-filter-col2" style={{"cursor":"pointer"}} onClick={()=>props.toggleOverlay(true)} >
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type column">
                                        <label>Column</label>
                                        <select>
                                            <option>14/40</option>
                                        </select>
                                    </div>
                                    <div className="view-type row">
                                        <label>Rows</label>
                                        <select>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <span className="reset-filter-txt">Reset</span>
                                </div>
                            </div> {/* End of Second Tab Link Section */}
                        </Tab>
                        <Tab>
                            <div className="custom-filter-col3" style={{"cursor":"pointer"}} onClick={()=>props.toggleOverlay(true)}>
                                <div className="custom-filter-top clearfix">
                                    <div className="view-type column">
                                        <label>Active Filters</label>
                                        <select>
                                            <option>7/40</option>
                                        </select>
                                    </div>
                                    <div class="text-toggle ">
                                        <input id="c" type="checkbox" />
                                        <label for="c">
                                            <div class="can-toggle__switch" data-checked="Don't Apply" data-unchecked="Apply"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <span className="reset-filter-txt">Clear</span>
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
                              <Droppable addScroll={true} handleDrop={modifyListOne}>
                                    {renderDraggableListOne()}
                              </Droppable>
                        </div>
                        <div className="current-filter-head clearfix">
                            <h3>Avliable Column <span>25</span></h3>
                            <p>Drag abd drop column you want to view to the top.</p>
                        </div>
                        <div className="avliable-column-list clearfix">
                           <Droppable handleDrop={modifyListTwo} >
                              {renderDraggableListTwo()}
                           </Droppable>
                        </div>
                    </div>
                    <div style={{"backgroundColor":"white"}}  className="custom-filter-button clearfix">
                        <span onClick={()=>props.toggleOverlay(false)} className="common-btn">Apply</span>
                        <span onClick={()=>props.toggleOverlay(false)} className="common-btn2">Clear</span>
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
                            <select>
                                <option>All</option>
                            </select>
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
                                                <div className="axis-tags-wrapper">
                                                  <span className="axis-tags" > Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i>  </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="axis-tags-wrapper">
                                                  <span className="axis-tags" > Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>  
                                                  <span className="axis-tags" > Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>  
                                                  <span className="axis-tags" > Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>
                                                  <span className="axis-tags"> Value 1 <i class="fa fa-times" aria-hidden="true"></i> </span>                       
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="column-name">Column</td>
                                            <td className="column-data">
                                                <div className="form-group tag-input">
                                                    <select style={{"width":"167px"}} >
                                                        <option>Select</option>
                                                    </select>
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
                        <span className="common-btn">Apply</span>
                        <span className="common-btn2">Clear</span>
                    </div>
                </div>                
            </TabPanel>
        </Tabs>
   )
}

export default CustomFilter