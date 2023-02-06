import { Component, OnInit } from '@angular/core';
import { PincodeService } from '../../services/pincode.service';
import { PostOfficeDetails } from '../../shared/postoffice';

@Component({
  selector: 'app-postbyid',
  templateUrl: './postbyid.component.html',
  styleUrls: ['./postbyid.component.css']
})

export class PostbyidComponent implements OnInit {

  postOfficeData!: PostOfficeDetails[];
  status!: any;

  postOffice: any = {
    pinCode: '',
  }

  constructor(private service: PincodeService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.postOffice.pinCode);
    this.service.getPostOfcByCode(this.postOffice.pinCode).subscribe(
      (response: any) => {
        this.status = response[0].Status;
        this.postOfficeData = response[0].PostOffice;
        console.log(this.postOfficeData);
        console.log(this.status);
      }, (error: any) => {
        console.log(error);
      });
  }

}
