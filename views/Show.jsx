const React = require("react")

class Show extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            <>
                <div>
                    <h1> {req.params.id} </h1>
                    
                </div>
            </>
        )
    }
}

module.exports = Show