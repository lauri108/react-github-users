import React, { Component } from "react";

export default class DragDropArea extends Component {
  onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // TODO: toggle background colour of container
  };
  onDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let dt = event.dataTransfer;
    let files = dt.files;

    console.log(`Processing file ${JSON.stringify(files[0].name)}`);

    this.handleFiles(files);
  };
  onDragEnter = (event, message) => {
    event.preventDefault();
    event.stopPropagation();
  };
  handleFiles = (files) => {
    [...files].forEach(this.uploadFile);
  };
  uploadFile = (file) => {
    let url = "http://localhost:6000/files";
    let formData = new FormData();

    formData.append("file", file);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        /* Done. Inform the user */
        console.log("done");
      })
      .catch(() => {
        console.log("a problem with saving file.");
        /* Error. Inform the user */
      });
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
