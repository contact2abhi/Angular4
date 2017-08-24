import { url, Buffer } from 'express';
import { Utility } from './utility';

export module Provider{
  export class Login{
    constructor(){
      // constructor logic here
    }

    static test = (req, res) => {
      res.send("<h1>Welcome to API 2</h1>");
    }

    static onAuthenticate = (req, res) => {
      Utility.getRequestObject(req);
    }
  }
}
