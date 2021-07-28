import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';

class Application extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count !== state.count  && !this.state.overTen){
            console.log("Updating over 10");
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render() {
        let {count} = this.state;
        let name = "Luis";
        return ( 
            <div>
                <h1>{name} clicked the button {count} times</h1>
                <HighScore 
                    overTen = {this.state.overTen}
                    onReset = {this.resetCount} 
                />
                <span>
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;