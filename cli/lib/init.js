"use strict";
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// init.js - Create a new project
// Usage: hashtar init <project-name>
// Example: hashtar init my-project

function init(programName) {
  if(programName === "."){
    fs.mkdir(`${__dirname}/-project`, { recursive: true }, (err) => {
        if (err) throw err;
      });
  }else{
    fs.mkdir(`${__dirname}/${programName}`, { recursive: true }, (err) => {
        if (err) throw err;
      });
  }
  // console.log(__dirname)
}

init("lalu");
