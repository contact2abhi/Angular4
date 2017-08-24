import { url, Buffer } from 'express';

export class Utility{
  static getRequestObject = (req) => {
    let body = [];
    let obj:any;
    return req.on('data', function(chunk) {
        body.push(chunk);
       }).on('end', function() {
           obj = Buffer.concat(body).toString();
             obj = JSON.parse(obj);
    });
  }

  static getQueryString(req):any{
    var url_parts = url.parse(req.url, true);
	  return url_parts.query;
  }

}
