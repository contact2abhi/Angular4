import { Buffer } from 'express';
import * as url from 'url';
import * as Promise from 'promise';

export class Utility{
  static getRequestObject = (req) => {
    return new Promise((resolve, reject) => {
        let body = [];
        let obj:any;
        return req.on('data', function(chunk) {
            body.push(chunk);
           }).on('end', function() {
               obj = Buffer.concat(body).toString();
                 obj = JSON.parse(obj);
      });
    });
  }

  static getQueryString(req):any{
    return new Promise((resolve, reject) =>
    {
      let url_parts = url.parse(req.url, true);
  	  resolve(url_parts.query);
    });
  }
}
