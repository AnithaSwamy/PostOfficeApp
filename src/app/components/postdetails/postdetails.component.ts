import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostOfficeDetails } from '../../shared/postoffice';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})

export class PostdetailsComponent implements OnInit {

  @Input() poDetails!: PostOfficeDetails[];
 
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigate(item: any): void {
    this.router.navigate(['/post/single'], { state: { item: item } });
  }

}
