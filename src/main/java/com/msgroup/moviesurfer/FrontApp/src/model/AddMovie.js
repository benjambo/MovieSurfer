import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.image = {
      url: ""
    };
    this.state = {
      title: "",
      genre: "",
      image: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  uploadImage = e => {
    const files = e.target.files[0];
    const imageData = new FormData();
    imageData.append("upload_preset", "moviesurfer");
    imageData.append("file", files);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/moviesurfer/image/upload",
        imageData
      )
      .then(res => {
        console.log(res);
        this.image.url = res.data.secure_url;
      })
      .catch(error => console.log(error));
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: this.state.title,
      genre: this.state.genre,
      image: this.image.url
    };

    console.log("NEW MOVIE OBJECT: ", newMovie);
    axios
      .post("http://localhost:8080/api/addmovie", newMovie)
      .then(res => {
        console.log("#### Add movie response ", res);

        if (res.status === 200) {
          window.location = "/";
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }
  render() {
    return (
      <Styles>
        <div className="wrapper">
          <div className="form-wrapper">
            <div className="form-container">
              <h3 className="text-center">Add Movie</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Genre</label>
                  <input
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={this.uploadImage}
                  />
                </div>

                <input type="submit" value="Add" className="btn p-2  mt-4" />
              </form>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}
export default AddMovie;

const Styles = styled.div`
  input,
  textarea,
  btn {
    width: 100%;
  }
  #imageInput {
    border: none;
  }
  .form-group {
    display: block;
    width: 100%;
  }
  * {
    background-color: white;
  }
  .wrapper {
    height: 78.2vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #4b0e1d;
  }
  .form-wrapper {
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px #555;
    background-color: #ffffff;
  }
  .errorMsg {
    color: #cc0000;
    margin-bottom: 12px;
  }
  .btn {
    background-color: #519e8a;
    color: #fff;
    border: 2px solid #fff;
    width: 100%;
    margin-top: 1em;
    padding: 8px 0px;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
  }

  .btn:hover {
    color: #519e8a;
    background-color: #fff;
    border: 2px solid #519e8a;
  }
`;

/*

                <div className="form-group">
                  <h5>Description</h5>
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>



 */
