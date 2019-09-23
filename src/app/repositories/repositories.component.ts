import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  constructor(private srv: ServiceService) {
  }
  repos;
  ngOnInit() {
    this.srv.validUser.subscribe(valid=>{
      valid ? this.getRepos(valid) : 0;
    })
  }
  getRepos(name){
    this.srv.getRepos(name)
      .subscribe(
        data=>{
          this.repos = data;
          console.log(data);
        },
        error => console.log(error.message)
      );
  }
}
