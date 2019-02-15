import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Speakers } from '../../models/speakers';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SpeakerdetailsComponent } from '../speakerdetails/speakerdetails.component';



@Component({
  selector: 'app-speakerlist',
  templateUrl: './speakerlist.component.html',
  styleUrls: ['./speakerlist.component.css']
})
export class SpeakerlistComponent implements OnInit {
  // SpeakersData: Array<Speakers> = [];
 public speakers: Speakers[];
  SpeakersData1: Array<any> = [];
  bsModalRef: BsModalRef;
  constructor(private rest: RestService,
    private _router: Router,
    private modalService: BsModalService) {
    
  }

  ngOnInit() {
    this.getSpeakerList();
  }

  getSpeakerList() {
    let speakerData1 = this.rest.fetch('Speaker/Get');
   // let speakerData2 = this.rest.fetch('KeySpeaker/GetKeySpeakerList');
    forkJoin([speakerData1]).subscribe(result => {
      debugger;
      this.speakers=result[0];
     // this.SpeakersData1 = result[1];
      console.log(this.speakers[0].Speaker_name);
     // console.log(this.SpeakersData1);
    
     
    })

    // this.rest.fetch('Speaker/Get').
    //   subscribe(res => {
    //     this.SpeakersData = res;
    //     console.log(this.SpeakersData);
    //   })
  }

  edit(id) {
    this._router.navigate(['/admin/speakerform' + id]);
  }

  delete(id) { }

  ShowModel(spekares:Speakers)
  {
    const initialState ={
      speakers:spekares
    };
    this.bsModalRef = this.modalService.show(SpeakerdetailsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

    console.log(initialState);
  }

}
