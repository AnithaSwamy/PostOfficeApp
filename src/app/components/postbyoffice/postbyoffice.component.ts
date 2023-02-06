import { Component, Input, OnInit } from '@angular/core';
import { PincodeService } from '../../services/pincode.service';
import { PostOfficeDetails } from '../../shared/postoffice';

@Component({
  selector: 'app-postbyoffice',
  templateUrl: './postbyoffice.component.html',
  styleUrls: ['./postbyoffice.component.css']
})

export class PostbyofficeComponent implements OnInit {

  postOfficeData!: PostOfficeDetails[];
  status!: any;

  postOffice: any = {
    pinLocation: '',
  }

  constructor(private service: PincodeService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.postOffice.pinLocation);
    this.service.getPostOfcByLocation(this.postOffice.pinLocation).subscribe(
      (response: any) => {
        this.status = response[0].Status;
        this.postOfficeData = response[0].PostOffice;
        console.log(this.postOfficeData);
      }, (error: any) => {
        console.log(error);
      });
  }

}
