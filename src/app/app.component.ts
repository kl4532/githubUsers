import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;
  constructor(private srv: ServiceService ) { }
  ngOnInit(): void {
    
  }
  getUser(name){
    this.srv.getData(name)
      .subscribe(data=>this.user=data['items'][0]);
  }
}
