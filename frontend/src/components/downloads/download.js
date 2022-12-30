import React, { Component } from "react";
import { Link } from "react-router-dom";
import './download.css'; 
import './../../App.css'; 


class download extends Component {
  render() {
    return (
    <div>
      <div className="fixed">
        <div className="row">
          <div className="col s12 center-align">
          <br></br>
          <br></br>
          <br></br>
            <div className="divcenter"><h4 className="PageTitles">Downloads</h4>

            <hr class="style2"></hr>
            </div>
            <br></br>
            <br></br>

          <table id="DownloadsTable">
              
            <tr>
                <th >Templates</th>
                <th >Type</th>
                <th ></th>
            </tr>
            <tr>
                <td>Research paper template</td>
                <td className="tablecenter">Word (docx)</td>
                <td className="tablecenter"><a href="https://codevish.com/download/IEEE_conference_template.docx" target="_blank" className="btn btn-large waves-effect waves-light hoverable blue accent-3">Download</a> </td>
            </tr>
            <tr>
                <td>Workshop PowerPoint 
templates</td>
                <td className="tablecenter">Power Point (.ppt)</td>
                <td className="tablecenter" ><a href="https://codevish.com/download/Workshop_Presentation.pptx" target="_blank" className="btn btn-large waves-effect waves-light hoverable blue accent-3">Download</a></td>
               
            </tr>
            <tr>
                <td>Guideline</td>
                <td className="tablecenter">PDF</td>
                <td className="tablecenter">
                <a href="https://codevish.com/download/Guidlines.pdf" target="_blank" className="btn btn-large waves-effect waves-light hoverable blue accent-3">Download</a>
              </td>
            </tr>
           
          
            </table>

        
          </div>
        </div>

        
 
      </div>


      </div>
    );
  }
}

export default download;
