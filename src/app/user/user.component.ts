import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private srv: ServiceService ) { }
  user;
  
  ngOnInit() {
  }
  getUser(name){
    this.srv.getData(name)
      .subscribe(
        data=>{
          console.log(data['items'][0]);
          this.user=data['items'][0];
          this.srv.validUser.emit(name);
        },
        error => {
          this.srv.validUser.emit(null);
          console.log(error.message);
        }
      );
    
  }

}
