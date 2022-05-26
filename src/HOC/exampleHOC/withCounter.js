import React from "react";

//!UpdatedComponent is a HOC, it accepts the OriginalComponent as parameter and return new enhanced component
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
        console.log("props", this.props)
      return (
        <WrappedComponent
          name="demo-hoc"
          count={this.state.count}
          incrementCount={this.incrementCount}
          //!passes down whatever remaining props have been specified in to WrappedComponent
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
