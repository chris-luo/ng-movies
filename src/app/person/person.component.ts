import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  person;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.apiService.getPerson(+params['id'])
        .subscribe(res => {
          console.log(res);
          this.person = res;
        });
    });
  }
}
