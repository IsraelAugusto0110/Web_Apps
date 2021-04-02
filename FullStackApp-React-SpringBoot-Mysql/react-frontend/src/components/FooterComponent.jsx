import React, { PureComponent } from 'react'

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>Todos os direitos resevados 2021 @github.com/IsraelAugusto0110</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent