import React, {Component} from 'react';
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";

class StudentItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editVisible: false,
            currentStudent: {
                name: this.props.student.name,
                lastName: this.props.student.lastName,
                index: this.props.student.index,
                direction: this.props.student.direction
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            editVisible: !state.editVisible
        }));
    }

    handleEditStudentDetails(student, e){
        this.setState(state => ({
            editVisible: !state.editVisible,
            currentStudent: student
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <li onClick={this.handleClick}>
                            {this.state.currentStudent.name} - {this.state.currentStudent.lastName}
                        </li>
                        {this.state.editVisible ?
                            <EditStudentDetails editStudentDetails={this.handleEditStudentDetails.bind(this)}
                                                student={this.state.currentStudent}/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentItem;
