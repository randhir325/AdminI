import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonialform',
  templateUrl: './testimonialform.component.html',
  styleUrls: ['./testimonialform.component.css']
})
export class TestimonialformComponent implements OnInit {
  testimonialForm: any;
  image;
  id: number;
  constructor(private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
    if (_av.snapshot.params["id"]) {
      this.id = parseInt(_av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    if (this.id != 0) {
      this.rest.fetch("Testimonial/GetTestimonialList/"+this.id).
        subscribe(res => {
          this.testimonialForm.patchValue({
            TestimonialId: res[0].TestimonialId,
            TestimonialDetails: res[0].TestimonialDetails,
            TestimonialBy: res[0].TestimonialBy,
            TestimonialDes: res[0].TestimonialDes,
            Status: res[0].Status,
            TestimonialImage: res[0].TestimonialImage,

          })
        })
    }

    this.testimonialForm = this.fb.group({
      TestimonialId:[],
      TestimonialDetails: [],
      TestimonialBy: [],
      TestimonialDes: [],
      Status: [],
      TestimonialImage: []
    })
  }

  SaveTestimonial() {
    this.rest.post("Testimonial/SaveTestimonial", this.testimonialForm.value).
      subscribe(res => {
        this._alertify.success("Added Successfully!");
        this.reset();
      })
  }

  reset() {
    this.testimonialForm.reset();
  }

  fileChange(event) {
    if (event.target.files) {
      debugger;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.testimonialForm.value.Speaker_imgae = this.image;
        console.log(event.target.file);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
