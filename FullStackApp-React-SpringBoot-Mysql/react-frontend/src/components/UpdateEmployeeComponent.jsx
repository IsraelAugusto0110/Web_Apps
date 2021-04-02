import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            email: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
        .then( (res) => {
            let employee = res.data;
            this.setState({name: employee.name, email: employee.name});
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    
    updateEmployee = (event) => {
        event.preventDefault();
        let employee = {name: this.state.name, email: this.state.email};
        console.log('funcionario: ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id)
        .then( res => {
            this.props.history.push('/employees');
        });
    }

    cancel = (event) => {
        this.props.history.push('/employees');
    }

    render () {
        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className = 'text-center'>Atualizar cadastro do funcionario</h3>
                            <div className = 'card-body'>
                                <form action="Post">
                                    <div className = 'form-group'>
                                        <label>Nome:</label>
                                        <input placeholder = 'Nome' name = 'nome' className = 'form-control'
                                         value = {this.state.name} onChange = {this.changeNameHandler} />
                                    </div>

                                    <div className = 'form-group'>
                                        <label>Email:</label>
                                        <input placeholder = 'seu@email' name = 'email' className = 'form-control'
                                         value = {this.state.email} onChange = {this.changeEmailHandler} />
                                    </div>

                                    <button className = 'btn btn-success' onClick = {this.updateEmployee}>Salvar</button>
                                    <button className = 'btn btn-danger' onClick = {this.cancel.bind(this)} style = {{marginLeft : '10px'}}>
                                        Cancelar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent