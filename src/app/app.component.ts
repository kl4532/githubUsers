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
  getUser(){
    this.srv.getData()
      .subscribe(data=>this.user=data);
    this.user = this.user;
  }
}
