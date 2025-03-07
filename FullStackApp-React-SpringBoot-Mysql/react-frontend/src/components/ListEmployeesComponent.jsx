import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeesComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        });
    }

    addEmployee () {
        this.props.history.push('/add-employee/_add');
    }

    editEmployee (id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee (id) {
        // rest api call
        EmployeeService.deleteEmployee(id)
        .then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
        });
    }

    viewEmployee (id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    render() {
        return (
            <div>

                <h2 className='text-center'>Lista de empregados</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addEmployee}>Novo funcionário</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key='employee.id'>
                                        <td> {employee.name} </td>
                                        <td> {employee.email} </td>
                                        <td>
                                            <button onClick = {() => this.editEmployee(employee.id)} className = 'btn btn-info'>
                                                Update
                                            </button>
                                            <button style = {{marginLeft: '10px'}} onClick = {() => this.deleteEmployee(employee.id)} className = 'btn btn-danger'>
                                                Delete
                                            </button>
                                            <button style = {{marginLeft: '10px', backgroundColor: 'green'}} onClick = {() => this.viewEmployee(employee.id)} className = 'btn btn-info'>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}

export default ListEmployeesComponent