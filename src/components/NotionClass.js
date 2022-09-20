import React, { Component } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-okaidia.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import axios from "axios";

export default class NotionClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
    };
  }
  
  componentDidMount() {
    const baseURL = `https://notion-api.splitbee.io/v1/page/${this.props.page_id}`;
    axios.get(baseURL).then((response) => {
      this.setState(this.state.blog = response.data)
    });
    console.log(baseURL)
  }
  render() {
    return (
      <NotionRenderer
        blockMap={this.state.blog}
        fullPage={true}
        hideHeader={true}
      />
    );
  }
}
