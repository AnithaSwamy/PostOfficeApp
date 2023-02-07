import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  single: any;

  postOffice: any = {
    pinCode: '',
  }

  constructor(private service: PincodeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.postOffice.pinCode);
    this.service.getPostOfcByCode(this.postOffice.pinCode).subscribe(
      (response: any) => {
        this.status = response[0].Status;
        this.postOfficeData = response[0].PostOffice;
        console.log(this.postOfficeData);
      }, (error: any) => {
        console.log(error);
        if (error.status == 0) { this.router.navigate(['/network-error']); }
      });
  }

}
