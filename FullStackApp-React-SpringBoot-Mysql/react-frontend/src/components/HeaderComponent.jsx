import React, { PureComponent } from 'react'

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className = 'navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href="https://github.com/IsraelAugusto0110" className='navbar-brand'>
                                Sistema de gerenciamento
                            </a>
                            </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent