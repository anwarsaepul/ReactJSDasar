import React, { Component, Fragment } from "react";
import YouTubeCom from '../../../component/YouTubeCom/YouTubeCom';
class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p>Halaman YoutubeComp</p>
        <hr />
        <YouTubeCom time="6.7" title="ABC" desc="Lorem Abc..." />
        <YouTubeCom time="7.8" desc="Lorem Ipsum..." />
        <YouTubeCom time="8.9" title="CDE" desc="Lorem Cde..." />
        <YouTubeCom time="9.10" title="DEF" />
        <YouTubeCom title="EFG" desc="Lorem Efg..." />
      </Fragment>
    );
  }
}

export default YoutubeCompPage;
