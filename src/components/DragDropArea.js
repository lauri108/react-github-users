import React, { Component } from "react";

export default class DragDropArea extends Component {
  onDragOver = (event) => {
    event.preventDefault();
    // TODO: toggle background colour of container
    //console.log("drag over: ", event);
  };
  onDrop = (event) => {
    event.preventDefault();
    // TODO: toggle background colour of container
    console.log("drop: ", event);
  };
  onDragEnter = (event, message) => {
    event.preventDefault();
    console.log("drag enter: ", event);
    console.log("message: ", message);
    // for (item of event.dataTransfer.items) {
    //   const theFile = item.getAsFile();
    //   console.log("file: ", theFile);
    // }

    // for (item of event.dataTransfer.items) {
    //   const theFile = item.getAsFile();
    //   console.log(`file: ${theFile}`);
    // }
  };
  render() {
    return (
      <div
        className="droppable w-full max-w-sm mx-auto pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900"
        id="dropArea"
        onDragOver={(e) => this.onDragOver(e)}
        onDragEnter={(e) => this.onDragEnter(e, "complete")}
        onDrop={(e) => this.onDrop(e, "complete")}
      >
        {" "}
        Drop here
      </div>
    );
  }
}
