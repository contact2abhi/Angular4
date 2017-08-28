import { url, Buffer } from 'express';
import * as Promise from 'promise';
import * as  mongojs from 'mongojs';

import { Utility } from './utility';
import {User} from '../entities/User';

export module Provider{
  export class Login{
    static db:any = mongojs('mongodb://portal:password@ds161823.mlab.com:61823/portal', ['users']);
    constructor(){
      // constructor logic here
    }

    static test = (req, res) => {
      res.send("<h1>Welcome to API 2</h1>");
    }

    static onAuthenticate = (req, res) => {
      Utility.getRequestObject(req);
    }

    static onAuthenticate2 = (req, res) => {
      Utility.getQueryString(req)
        .then((data) => { return Login.validateUser(data); })
        .then((user) => {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(user));
        })
        .catch((err) => {
          console.log(err);
          res.send({
                'error': err
            });
      });
    }

    static validateUser = (user:User) => {
      return new Promise((resolve, reject) => {
        Login.db.users.findOne({ username: user.userName, password: user.password }, function (err, dbuser) {
            if (err){
                reject(err);
            }
            if(dbuser){
              resolve(dbuser);
            }
            else{
              reject('user not found');
            }
        });
      });
    }
  }
}
