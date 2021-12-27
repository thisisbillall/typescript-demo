import { Component } from "react";

type PropType={
    message:string
}

type StateType={
    count:number
};

export class Counter extends Component<PropType,StateType>{
    state={
        count:0,
    }

    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render(){
        return(
            <>
                <button onClick={this.handleClick}>Increament</button>
                <h2>{this.props.message} - {this.state.count}</h2>
            </>
        );
    }
};