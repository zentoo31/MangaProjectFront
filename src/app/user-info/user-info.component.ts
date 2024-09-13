import { Component, inject } from '@angular/core';
import { UserInfoService } from '../service/user-info.service';
import { User } from './user';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user: User | undefined;
  isDisabled: boolean = true;
  userInfoService = inject(UserInfoService);
  
  ngOnInit(){
    this.loadUser();
  }

  loadUser(){
    this.userInfoService.getInfoUser().then(
      user => this.user = user
    ).catch(error => {
      console.error('Error fetching user:', error);
    });;
  }

  onClickEdit(){
    this.isDisabled = !this.isDisabled;
  }

  

}
