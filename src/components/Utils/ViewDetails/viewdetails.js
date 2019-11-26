import React,{Fragment} from 'react';
import Button from '../../Buttons';

export default function ViewDetails(){
   return (
    <div className="view-details-popup">
        <h1 className="popup-title"> 
            Errors Found 
            <span className="count"> 20 </span> 
        </h1>
        <table>
            <thead>
                <tr>
                    <th> Batch ID </th>
                    <th> Success </th>
                    <th> Errors </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> XXXXXX </td>
                    <td> 440/460 </td>
                    <td> 20/460 </td>
                </tr>
            </tbody>
        </table>
        <p className="grey-text"> 
            You can proceed with successfull transactions or reject the whole branch 
        </p>
        <Button variant="axis-multi-line-text">
            CREATE BATCH
            <small> with 440/460 transactions </small>
        </Button>
        <Button variant="outline-full"> REJECT BATCH </Button>
    </div>
   )
}