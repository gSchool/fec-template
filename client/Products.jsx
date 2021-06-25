import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state.
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, isLoading: false });
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <section>
        <div>I am products</div>
        <div>{JSON.stringify(this.state.data)}</div>
      </section>
    );
  }
}
