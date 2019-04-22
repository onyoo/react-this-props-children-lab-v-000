// Code ThemedDecoration Component Here
import React from 'react'


class Invitation extends React.Component {

    render() {
        const classyChildren = React.Children.map(this.props.children, child => React.cloneElement(child, {
            className: this.props.theme,
        }))

        return(
            <div>
                {classyChildren}
            </div>
        )
    }
}

export default Invitation