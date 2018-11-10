import React, {Component} from 'react';

class EditStudentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newStudent: {
                name: this.props.student.name,
                lastName: this.props.student.lastName,
                index: this.props.student.index,
                direction: this.props.student.direction
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.changeDirection = this.changeDirection.bind(this);
    }

    changeFirstName(event) {
        const student = this.state.newStudent;
        student.name = event.target.value;
        this.setState({
            newStudent: student
        });
    }

    changeLastName(event) {
        const student = this.state.newStudent;
        student.lastName = event.target.value;
        this.setState({
            newStudent: student
        });
    }

    changeIndex(event) {
        const student = this.state.newStudent;
        student.index = event.target.value;
        this.setState({
            newStudent: student
        });
    }

    changeDirection(event) {
        const student = this.state.newStudent;
        student.direction = event.target.value;
        this.setState({
            newStudent: student
        });
    }

    handleSubmit(e) {
        this.props.editStudentDetails(this.state.newStudent);
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4" style={{paddingBottom: 10}}>
                        <form onSubmit={this.handleSubmit}>
                            First name: <input className="form-control" name="name" type="text"
                                               value={this.state.newStudent.name}
                                               onChange={this.changeFirstName}/><br/>
                            Last name: <input className="form-control" name="lasteName" type="text"
                                              value={this.state.newStudent.lastName}
                                              onChange={this.changeLastName}/><br/>
                            Index: <input className="form-control" name="index" type="text"
                                          value={this.state.newStudent.index}
                                          onChange={this.changeIndex}/><br/>
                            Direction: <input className="form-control" name="direction" type="text"
                                              value={this.state.newStudent.direction}
                                              onChange={this.changeDirection}/><br/>
                            <input className="btn btn-primary" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudentDetails;
