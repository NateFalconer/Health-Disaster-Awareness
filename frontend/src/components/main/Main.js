import React, { Component } from "react";
// import axios from "axios";

class Main extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { title: "", description: "" };
  //   }

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     const title = this.state.title;
  //     const description = this.state.description;
  //     axios
  //       .post("http://localhost:5000/api/projects", { title, description })
  //       .then(() => {
  //         // this.props.getData();
  //         this.setState({ title: "", description: "" });
  //       })
  //       .catch(error => console.log(error));
  //   };

  //   handleChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({ [name]: value });
  //   };

  showArticles = () => {
      return this.props.newsEvents.articles.map((eachArticle, index) => {
          return (
              <div key={index}>
            <div className="newsFeed">
            <h1>{eachArticle.title}</h1>
          </div>
          <div className="coronaTracker">
            <h1>Corona Tracker here</h1>
          </div>
          <div className="topHeadlines">
            <h1>Top Headlines here</h1>
            </div>
            </div>
          )
      })
  }

  render() {
      console.log(this.props.newsEvents)
    return (
        <div>
    {this.props.ready ? this.showArticles() : " "}
        </div>
    );
  }
}

export default Main;
