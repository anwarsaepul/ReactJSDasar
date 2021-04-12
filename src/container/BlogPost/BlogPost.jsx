import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  // methode pemanggilan API
  getPostAPI = () => {
    // Pemanggilan API menggunakan axios
    axios
      .get("http://localhost:3004/posts")
      // ambil data dan simpan dalam variable res
      .then((res) => {
        // console.log(res.data)
        // ubah data
        this.setState({
          // data yg ingin di ubah: dari data
          post: res.data,
        });
      });
  };

  handleRemove = (data) => {
    // menghapus data menggunakan axios dengan mengirim parameter id data
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      // ambil data dan simpan dalam variable res
      .then((res) => {
        // kemudian panggil method getPostAPI
        this.getPostAPI();
      });
  };

  // ketika komponent telah selah di mounting lakukan
  componentDidMount() {
    // Pemanggilan API menggunakan fetch
    // ambil data menggunakan API
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // rubah ke json
    //     .then(response => response.json())
    //     // rubah lagi
    //     .then(json => {
    //         // ubah data
    //         this.setState({
    //             // data yg ingin di ubah
    //             post: json
    //         })
    //     })
    // Panggil method getPostAPI
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        {
          // melakukan maping/melooping data post
          this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} />
            );
          })
        }
      </Fragment>
    );
  }
}

export default BlogPost;
