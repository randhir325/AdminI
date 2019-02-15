import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-testimoniallist',
  templateUrl: './testimoniallist.component.html',
  styleUrls: ['./testimoniallist.component.css']
})
export class TestimoniallistComponent implements OnInit {
  testimonialData: Array<any> = [];
  constructor(private rest: RestService,
    private _router: Router) { }

  ngOnInit() {
    this.getTestimonialList();
  }

  getTestimonialList() {
    this.rest.fetch("Testimonial/GetTestimonialList").
      subscribe(res => {
        this.testimonialData = res;
      })
  }
}
