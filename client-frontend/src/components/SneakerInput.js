import React from 'react';

class SneakerInput extends React.Component {

    state = {name: "", price: ""}

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    submit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Sneaker Name</label><br/>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.change}/>
                    <br/>
                    <br/>
                    <label>Sneaker Price</label><br/>
                    <input type="text" placeholder="price" name="price" value={this.state.price} onChange={this.change}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SneakerInput;