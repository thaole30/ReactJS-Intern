import React, { Component, PureComponent } from "react";

class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor of ChildComponent");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps of ChildComponent");
    return null;
  }

//   shouldComponentUpdate(newProps, newState) {
//     //quyết định xem component có đc render lại hay không
//     console.log("newProps shouldComponentUpdate of ChildComponent", newProps);
//     console.log("this.props shouldComponentUpdate of ChildComponent", this.props);
//     console.log("shouldComponentUpdate of ChildComponent");
   

//     if(this.props.like !== newProps.like) {

//         return true;
//     }
//     return false;
//   }

  render() {
    console.log("render ChildComponent");
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand text-success" href="#">
          {this.props.like} likes
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                Number: {this.props.objectNumber.number}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }


    timeout = null;

    componentDidMount() {
        console.log("componentDidMount of ChildComponent");

        //hàm đếm giờ thực hiện 1s 1 lần
        this.timeout = setInterval(() => {
            console.log("hello");
        }, 1000)

    }


    componentDidUpdate(prevProps,prevState) {
        //hạn chế setState trong lifecycle này, nếu setState thì phải có điều kiện if
        console.log("componentDidUpdate of ChildComponent");
    }


    componentWillUnmount() {
        //clear các hàm chạy ngầm trước khi component mất khỏi giao diện
        clearInterval(this.timeout);
    }


}
  

export default ChildComponent;
