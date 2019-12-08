import React,{Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "react-slick";

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
                            <div className="custom-filter-col2" onClick={()=>props.toggleOverlay(true)} >
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
                            <div className="custom-filter-col3" onClick={()=>props.toggleOverlay(true)}>
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
                            <span className="reset-filter-txt">Remove all</span>
                            <span className="reset-filter-txt">Reset</span>
                        </div>
                        <div className="visible-column">
                            <p>Drag and arrange the columns you want to see. Drag and drop columns you do not want to see to the bottom.</p>
                            <div className="visible-column-list clearfix">
                               <div className="slider-wrapper">
                                    <Slider {...settings}>
                                        <span className="column-tags"> Column 1 </span>
                                        <span className="column-tags"> Column 2 </span>
                                        <span className="column-tags"> Column 3 </span>
                                        <span className="column-tags"> Column 4 </span>
                                        <span className="column-tags"> Column 5 </span>
                                        <span className="column-tags"> Column 6 </span>
                                        <span className="column-tags"> Column 7 </span>
                                        <span className="column-tags"> Column 8 </span>
                                        <span className="column-tags"> Column 9 </span>
                                        <span className="column-tags"> Column 10 </span>
                                        <span className="column-tags"> Column 11 </span>
                                        <span className="column-tags"> Column 12 </span>
                                        <span className="column-tags"> Column 13 </span>
                                        <span className="column-tags"> Column 14 </span>
                                        <span className="column-tags"> Column 15 </span>
                                    </Slider>
                               </div>
                            </div>
                        </div>
                        <div className="current-filter-head clearfix">
                            <h3>Avliable Column <span>25</span></h3>
                            <p>Drag abd drop column you want to view to the top.</p>
                        </div>
                        <div className="avliable-column-list clearfix">
                            <ul>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li className="even-row">Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li className="even-row">Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                                <li>Column</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{"backgroundColor":"white"}}  className="custom-filter-button clearfix">
                        <span className="common-btn">Apply</span>
                        <span className="common-btn2">Clear</span>
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