import { Component, Fragment} from 'react'

class ClassAndProps extends Component{
    render(){
        return(
            <Fragment>{this.props.message}</Fragment>
        )
    }
}

export default ClassAndProps
