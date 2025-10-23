import { Component } from '@angular/core';
import {  CommonGrid } from '../common-grid/common-grid'
@Component({
  selector: 'app-user2',
  imports:[CommonGrid],
  templateUrl: './user2.html',
  styleUrl: './user2.css',
})
export class User2 {
constructor(CommonGrid:CommonGrid){

}
}
