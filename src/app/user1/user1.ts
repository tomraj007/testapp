import { Component } from '@angular/core';
import {  CommonGrid } from '../common-grid/common-grid'
@Component({
  selector: 'app-user1',
  imports: [CommonGrid],
  templateUrl: './user1.html',
  styleUrl: './user1.css',
})
export class User1 {
constructor(CommonGrid:CommonGrid){

}
}
