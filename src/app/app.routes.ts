import { Routes } from '@angular/router';
import { CommonGrid } from './common-grid/common-grid';
import { User1 } from './user1/user1';
import { User2 } from './user2/user2';

export const routes: Routes = [
  { path: '', component: CommonGrid },
  { path: 'user1', component: User1 },
  { path: 'user2', component: User2}
];
