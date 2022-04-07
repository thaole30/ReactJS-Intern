import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        console.log("constructor of ParentComponent");
        this.state = {
            like: 1,
            cmt:1,
            objectNumber: {number: 1,}
        }
    }


    static getDerivedStateFromProps(newProps,currentState) {
        console.log("getDerivedStateFromProps of ParentComponent");
        return null;
    }



    shouldComponentUpdate(newProps,newState) {
        //quyết định xem component có đc render lại hay không
        console.log("shouldComponentUpdate of ParentComponent");
        return true;
    }




    render() {
        console.log("render ParentComponent");
        return (
            <div className="text-center">

                {this.state.like > 3 ? '' : <ChildComponent like = {this.state.like} objectNumber = {this.state.objectNumber}/> }

                
                <h3 className="text-success mt-5">{this.state.like} like</h3>
                <h4 className = "text-info">{this.state.cmt} comments</h4>
                <h3 className = "text-warning">Number: {this.state.objectNumber.number}</h3>

                <button className = "btn btn-success"
                    onClick={() => {
                        this.setState({
                            like: this.state.like +1,
                        })
                    }}
                >Thả like</button>

                <button className = "btn btn-info" onClick = {() => {
                    this.setState({
                        cmt: this.state.cmt +1,
                    })
                }}>Thả cmt</button>

                <button className = "btn btn-warning" onClick = {() => {
                    //đối với kiểu dữ liệu là array hoặc object thì khi setState phải clone ra object cũ hoặc array cũ
                    //để khi truyền object này cho component con thì Pure component sẽ nhận biết đc đây là object mới ===> render lại component con
                    //nếu k clone ra thì ở component ChildComponent khi nhận đc prop là object objectNumber sẽ hiểu đây là prop cũ ==> không render lại đc component Childcomponent 
                    let newNumber = {...this.state.objectNumber};
                    newNumber.number +=1;
                    this.setState({
                        objectNumber: newNumber,
                    })
                }}>Increase Number</button>

            </div>
        );
    }


    componentDidMount() {
        console.log("componentDidMount of ParentComponent");
    }


    componentDidUpdate(prevProps,prevState) {
        console.log("componentDidUpdate of ParentComponent");
    }



}

export default ParentComponent;
