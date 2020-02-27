import React,{Component} from "react";
import styled from "styled-components";
import axios from "axios";



class AddMovie extends Component{
    constructor() {
        super();
        this.image ={
            url:''
        };
        this.state = {
            title:'',
            genre:'',
            year:'',
            imageUrl:'',
            description:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    uploadImage = e => {
        const files = e.target.files[0];
        const imageData = new FormData();
        imageData.append("upload_preset","moviesurfer");
        imageData.append("file",files);
        axios.post('https://api.cloudinary.com/v1_1/moviesurfer/image/upload', imageData)
            .then(res => {
                console.log(res);
                this.image.url= res.data.secure_url;
            }).catch(error => console.log(error));
    };


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newMovie = {
            title: this.state.title,
            genre: this.state.genre,
            description: this.state.description,
            year: this.state.year,
            imageUrl: this.image.url
        };

        console.log(newMovie);
    }
    render() {
        return (
            <Styles>
                <div className="component-container">
                    <div className="container">
                        <div className="form-container">
                            <h1 className="text-center">Add Movie</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h5>Title</h5>
                                    <input
                                        type="text"
                                        className="form-control  form-control-lg"
                                        placeholder="Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <h5>Genre</h5>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Genre"
                                        name="genre"
                                        value={this.state.genre}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <h5>Year</h5>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Year"
                                        name="year"
                                        value={this.state.year}
                                        onChange={this.onChange}
                                    />
                                </div>
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
                                <div className="form-group">
                                    <h5>Image</h5>
                                    <input id="imageInput"
                                           type="file"
                                           accept="image/*"
                                           name="image"
                                           onChange={this.uploadImage}
                                    />
                                </div>


                                <input
                                    type="submit" value="Add"
                                    className="btn btn-success p-2  mt-4"
                                />

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
*{
background-color:white;
color:black;
}
input,textarea,btn{
 width:100%;
}
#imageInput{
border:none;
}
.form-group{
display:block;
width:100%;
}
.container{
    margin:6rem auto;
    padding: 2rem 1rem 2rem 1rem;
    /*border: 3px blue solid;*/
    display: block;
}
`;