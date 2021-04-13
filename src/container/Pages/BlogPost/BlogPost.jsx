import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 2,
      id: "",
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  dataKosong = () => {
    //   ubah data
    this.setState({
      formBlogPost: {
        userId: 2,
        id: "",
        title: "",
        body: "",
      },
    isUpdate: false,
    });
  };

  // methode pemanggilan API
  getPostAPI = () => {
    // Pemanggilan API menggunakan axios
    axios
      // mengurutkan data terbaru/terbesar yg muncul
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
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

  postDataToAPI = () => {
    // melakukan Post API menggunakan axios
    axios
      // post ke.. & kirim data object
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      // ketika berhasil melakukan post
      .then(
        (res) => {
          // tampilkan kembali data terbaru yg ada di db
          this.getPostAPI();
          this.dataKosong();
          // jika error lakukan
        },
        (err) => {
          console.log("Error : ", err);
        }
      );
  };

  // melakukan Put data ke API
  putDataToAPI = () => {
    // menggunakan axios
    axios
      // ubah data & kirim data object
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      // ketika berhasil melakukan method
      .then(
        (res) => {
          // tampilkan kembali data terbaru yg ada di db
          this.getPostAPI();
          //   ubah data
          this.dataKosong();
          // jika error lakukan
        },
        (err) => {
          console.log("Error : ", err);
        }
      );
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

  // menangkap data
  handleupdate = (data) => {
    // mengubah data
    this.setState({
      // data yg ingin diubah menjadi data yg sudah ditangkap
      formBlogPost: data,
      // merubah status menjadi true
      isUpdate: true,
    });
  };

  //   methode ketika data berubah
  handleFormChange = (e) => {
    // copy formBlogPostNew dari formBlogPost sebelumnya
    let formBlogPostNew = { ...this.state.formBlogPost };
    // menjadikan waktu timeStamp sebagai id
    let timeStamp = new Date().getTime();
    // ketika isUpdate statusnya false
    if (!this.state.isUpdate) {
      // idnyavberdasarkan timeStamp
      formBlogPostNew["id"] = timeStamp;
    }
    // sasar namanya dan samakan berdasarkan value yg diinput
    formBlogPostNew[e.target.name] = e.target.value;
    // lalu ubah nilainya
    this.setState({
      // formBlogPost yg ingin di ubah menjadi nilai formBlogPostNew yg sudah diinput
      formBlogPost: formBlogPostNew,
    });
  };

  // method ketika button diklik
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
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
        <p>Halaman Blog Post</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={this.state.formBlogPost.title}
            name="title"
            placeholder="Add Title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            value={this.state.formBlogPost.body}
            id="body"
            cols="30"
            rows="10"
            placeholder="Add Blog Content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {
          // melakukan maping/melooping data post
          this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleupdate}
              />
            );
          })
        }
      </Fragment>
    );
  }
}

export default BlogPost;
