import React, { Component } from 'react';
import './App.css';
import StudentList from "../StudentsList/StudentsList";
import {listStudents} from "../../repository/StudentRepository";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = listStudents();
    }

    handleEditStudentDetails(student, e){
        let students = this.state;
        students.push(student);
        this.setState({
            students: students
        });
        console.log(student);
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <StudentList handleEditStudentDetails={this.handleEditStudentDetails.bind(this)} students={this.state.students}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
