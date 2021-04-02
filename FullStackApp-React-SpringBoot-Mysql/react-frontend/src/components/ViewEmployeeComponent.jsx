import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {

            }
        }
    }

    componentDidMount () {
        EmployeeService.getEmployeeById(this.state.id)
            .then( res => {
                this.setState({employee: res.data});
            });
    }

    render() {
        return (
            <div>
                <br/>
                <div className = 'card col-md-6 offset-md-3'>
                    <h3 className = 'text-center'>Mostrar Detalhes do Funcionaario</h3>
                    <div className = 'card-body'>
                        <div className = 'row'>
                            <label>Nome Funcionario</label>
                            <div style = {{marginLeft: '10px'}}>{this.state.employee.name}</div>
                        </div>
                        <div className = 'row'>
                            <label>Email Funcionario</label>
                            <div style = {{marginLeft: '10px'}}>{this.state.employee.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent