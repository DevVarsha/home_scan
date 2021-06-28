import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrocardiography',
  templateUrl: './electrocardiography.component.html',
  styleUrls: ['./electrocardiography.component.scss']
})
export class ElectrocardiographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  // tslint:disable-next-line: typedef
  coll[i].addEventListener('click', function(this: any) {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
  }

}
}
