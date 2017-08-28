// for inject this service as dependency
import {Injectable} from '@angular/core'; 

@Injectable()
export class LoginService{
	public validateUser(userName: string, password: string) : boolean {
		return userName == "admin" && password == "password";
	}

}