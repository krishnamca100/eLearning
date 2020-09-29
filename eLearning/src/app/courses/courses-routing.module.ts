import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcoursesComponent} from './allcourses/allcourses.component';
import { SearchComponent} from './search/search.component';
import { SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [
  {path: 'allcourses', component: AllcoursesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search-result', component: SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
