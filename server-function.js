//import 'ignore-styles';

import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/App'

const PORT = 8080
const app = express()

const html = require('./dist/browser/index.html');

const serverRenderer = (req, res, next) => {
  //This part is used to mesure memory usage
  res.header('performero-memoryusage-rss' , process.memoryUsage().rss );
  res.header('performero-memoryusage-heaptotal' , process.memoryUsage().heapTotal );
  res.header('performero-memoryusage-heapused' , process.memoryUsage().heapUsed );
  res.header('performero-memoryusage-external' , process.memoryUsage().external );

  return res.send(
    html.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
    )
  )

}
app.get('*', serverRenderer)

export  { app };