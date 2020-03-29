import React from "react";
import EmpListHeader from "./EmpListHeader";
import EmpListBody from "./EmpListBody";

export default class EmpList extends React.Component{

    render(){
        return (<table><EmpListHeader/><EmpListBody/></table>)
    }
}
