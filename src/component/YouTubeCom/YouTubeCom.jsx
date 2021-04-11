import React from "react";
import './YouTubeCom.css';
import '../../assets/bg.jpg';

const YouTubeCom = (props) => {
  return (
    <div className="Youtube-wrapper">
      <div className="img-tumb">
        <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
        </img>
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

// membuat default props, jika nilai propsnya tidak ada
YouTubeCom.defaultProps = {
    time: '00:00',
    title: '-',
    desc: '...'
}

export default YouTubeCom;
