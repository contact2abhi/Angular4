import {Component} from '@angular/core'
import {LoginUser} from './login'

@Component({
	moduleId: module.id,
	selector : 'app-login',
	templateUrl : 'login.component.html',
	styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent{
	public user : LoginUser = new LoginUser();
	
	onLogin() {
		if(this.user.UserName == "admin"){
		 console.log('success');
		}		
		else
		{
			console.log('failed');
		}
	}
	
}