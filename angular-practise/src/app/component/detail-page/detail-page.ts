import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Details {
  name?: String;
  price?: String;
  image?: String;
  description?: String;
  status?: String;
}

@Component({
  selector: 'detail-page',
  templateUrl: 'detail-page.html',
  styleUrls: ['detail-page.css'],
})

export class DetailPage {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Details) {}
}