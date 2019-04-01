import React from 'react';
import ReactDOM from "react-dom";
import remark from 'remark';
import remark2react from 'remark-react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Title",
      first_name: "First Name",
      last_name: "Last Name",
      published_at: "0000-00-00",
      body: "Write something"
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePublished_atChange = this.handlePublished_atChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }
  
  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  
  handleFirstNameChange(event) {
    this.setState({
      first_name: event.target.value
    });
  }
  
  handleLastNameChange(event) {
    this.setState({
      last_name: event.target.value
    });
  }
  
  handlePublished_atChange(event) {
    this.setState({
      published_at: event.target.value
    });
  }
  
  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    });
  }
  
  render() {
    return (
      <div className="container-fluid px-5 py-4">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              <label htmlFor="title">Title</label>
              <br />
              <title
                handleTitleChange={this.handleTitleChange}
                className="form-control"
                id="Title"
              />
            </div>
              <div className="mb-4">
                <label htmlFor="firstName">First name</label>
                <br/>
                <firstname
                  handleFirstNameChange={this.handleFirstNameChange}
                  className="form-control"
                  id="FirstName"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName">Last name</label>
                <br/>
                <lastname
                  handleLastNameChange={this.handleLastNameChange}
                  className="form-control"
                  id="LastName"
                />
              </div>
            <div className="mb-4">
              <label htmlFor="date">Published at</label>
              <br/>
              <published_at
                handlePublished_atChange={this.handlePublished_atChange}
                className="form-control"
                id="published_at"
              />
            </div>
            <div>
              <body
                handleBodyChange={this.handleBodyChange}
                id="Body"
              />
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{this.state.title}</h2>
            <div className="d-flex mb-3">
              <span className="mr-2 font-weight-light"> {this.state.name} </span>
              <span className="font-weight-light"> {this.state.last_name} </span>
            </div>
            <span className="font-weight-light font-italic"> {this.state.date} </span>
            <p className="mt-5">{
              remark()
                .use(remark2react)
                .processSync(this.state.post).contents
            }</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
