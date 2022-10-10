import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
// import { MatCarouselModule } from 'ng-mat-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {'image': '../assets/images/classroom_daycare_center_children_teacher_95753695.jpg'}, 
    {'image': '../assets/images/daycare-playground-equipment-2182572.jpg'},
    {'image': '../assets/images/cute-little-girl-drawing-colorful-paints-daycare-creative-kid-painting-school-doing-homework-home-95157042.jpg'}, 

  ];

  image ="../assets/images/classroom_daycare_center_children_teacher_95753695.jpg"

  cards = [
    {'title': 'yyy'},
    {'title': 'yyy'},
    {'title': 'yyy'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
