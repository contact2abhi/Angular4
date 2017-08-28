import * as express from 'express';
import { Provider } from './providers/login';
export class server{
  app:any;
  port:number;
  router:any;

  constructor()
  {
    this.app = express();
    this.port = 3000;
    this.router = express.Router();
    this.app.set('port', this.port);
  }

  public startServer() : void {
    let port = this.port;
    this.app.listen(this.app.get('port'), function(){
          console.log('Application Server started listening at ' + port);
    });
  }

  registerRoutes() : void {
    this.router.get('/login', (req, res) => Provider.Login.onAuthenticate2(req, res));
    this.app.use('/',this.router);
  }
}

let myServer = new server();
myServer.registerRoutes();
myServer.startServer();
