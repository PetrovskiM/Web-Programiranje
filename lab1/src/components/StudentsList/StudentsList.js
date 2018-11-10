import React, { Component } from 'react';
import StudentItem from "../StudentItem/StudentItem";

class StudentList extends Component {

    handleEditStudentDetailsList(student, e){
        console.log(student + " list");
        e.preventDefault();
    }

    render() {
        let studentItems;
        if(this.props.students) {
            studentItems = this.props.students.map(student => {
                return(
                    <StudentItem handleEditStudentDetails={this.handleEditStudentDetailsList.bind(this)} key={student.index} student={student}/>
                )
            });
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {studentItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentList;
