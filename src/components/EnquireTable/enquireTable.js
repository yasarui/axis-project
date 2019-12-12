import React, { Component } from 'react';
import './enquireTable.scss';

class EnquireTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: 'standard'
    }
  }

  render() {
    let filterData;
    let selectedFilterData;
    if(this.props.selectedFilter=='2'){
      selectedFilterData = <div>
        <div className="current-filter-action">
          <div className="current-filter-head clearfix">
            <h3>Visible Column <span>15</span></h3>
            <span className="reset-filter-txt">Remove all</span>
            <span className="reset-filter-txt">Reset</span>
          </div>
          <div className="visible-column">
            <p>Drag and arrange the columns you want to see. Drag and drop columns you do not want to see to the bottom.</p>
            <div className="visible-column-list clearfix">
              <span className="left-arrow"><i class="fas fa-angle-left"></i></span>
              <ul>
                <li>Column</li>
                <li>Column</li>
                <li>Column</li>
                <li>Column</li>
                <li>Column</li>
                <li>Column</li>
                <li>Column</li>
              </ul>
              <span className="right-arrow"><i class="fas fa-angle-right"></i></span>
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
        <div className="custom-filter-button clearfix">
          <span className="common-btn">Apply</span>
          <span className="common-btn2">Clear</span>
        </div>
      </div>
    }
    if(this.props.selectedFilter=='3'){
      selectedFilterData = <div>
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
              <table className="fixed-table-header">
                <tbody>
                  <tr>
                    <td className="column-name">Column</td>
                    <td className="column-data form-group">
                      <div className="date-formate">
                        <label>From</label>
                        <input type="text" placeholder="dd-mm-yyyy" />
                      </div>
                      <div className="date-formate form-group">
                        <label>To</label>
                        <input type="text" placeholder="dd-mm-yyyy" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column-name">Column</td>
                    <td className="column-data">
                      <div className="form-group tag-input">
                        <input type="text" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column-name">Column</td>
                    <td className="column-data">
                      <div className="form-group tag-input">
                        <input type="text" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column-name">Column</td>
                    <td className="column-data">
                      <div className="form-group tag-input">
                        <select>
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
                          <input type="radio"  name="radio" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="radio-button-wrap">Unselected
                          <input type="radio"  name="radio" />
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
                          <input type="checkbox"  />
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
        <div className="custom-filter-button clearfix">
          <span className="common-btn">Apply</span>
          <span className="common-btn2">Clear</span>
        </div>
      </div>
    }
    if (this.props.tabType == 'standard') {
      filterData = <div className="custom-filter-wrap clearfix">
        <div className="custom-filter-col1 clearfix">
          <div className="custom-filter-top clearfix">
            <div className="view-type">
              <label>View Yasar</label>
              <select>
                <option>Default</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    }
    if (this.props.tabType == 'custom') {
      filterData = <div className="custom-filter-wrap custom-filter clearfix">
        <div className="custom-filter-lists clearfix">
          <div className="custom-filter-col1 clearfix">
            <div className="custom-filter-top clearfix">
              <div className="view-type">
                <label>View</label>
                <select>
                  <option>Default</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="create-update-action clearfix">
                <span title="Delete"><img src="./images/delete.svg" /> </span>
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
          </div>
          <div className={"custom-filter-col2 " + (this.props.selectedFilter=='2' ? "active" : "")}>
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
          </div>
          <div className={"custom-filter-col3 " + (this.props.selectedFilter=='3' ? "active" : "")}>
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
        </div>
        </div>
        {selectedFilterData}
      </div>
    }
    let checkerHeading;
    let checkerTableData;
    if (this.props.pageType == 'checker') {
      checkerHeading = <td style={{ "width": "120px" }} >Action</td>;
      checkerTableData = <td style={{ "width": "120px" }} >
        <select className="approve-dropdown">
          <option>Accept</option>
          <option>Accept1</option>
        </select>
      </td>;
    }
    return (
      <div className="enquire-table-wrap">
        <ul className="enquire-tab clearfix">
          <li className="active">Standard</li>
          <li>Custom</li>
        </ul>
        <div className="enquire-table-filter">
          {filterData}
        </div>
        <div className="table-wrap">
          <table className="fixed-table-header">
            <tbody>
              <tr className="table-head">
                {checkerHeading}
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
                <td style={{ "width": "120px" }} >Column</td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
              <tr>
                {checkerTableData}
                <td style={{ "width": "120px" }} >XXXXX</td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
                <td style={{ "width": "120px" }} ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default EnquireTable;