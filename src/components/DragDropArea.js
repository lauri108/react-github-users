import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class DragDropArea extends Component {
  constructor() {
    super();
    this.state = {
      CSVResults: [],
    };
    //this.CSVResults = [];
  }
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
  processUploadResult = (result) => {
    //debugger;
    this.setState({
      CSVResults: [...result.parsedItems],
    });
    console.log(`upload success, here's the data: `, result);
  };
  processUploadError = (error) => {
    console.log(`upload error, here's the data: `, error);
  };
  uploadFile = (file) => {
    const url = "http://localhost:8000/api/import";
    let formData = new FormData();

    formData.append("bom", file);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(async (result) => {
        /* Done. Inform the user */
        this.processUploadResult(await result.json());
      })
      .catch((error) => {
        /* Error. Inform the user */
        this.processUploadError(error);
      });
  };
  render() {
    return (
      <div>
        <Card className="ui-test">
          <CardContent>
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
          </CardContent>
        </Card>
        {this.state.CSVResults.map((item) => (
          <Card className="ui-test">
            <CardContent>
              name: {item.name}, qty: {item.quantity}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}
