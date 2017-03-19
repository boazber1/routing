/**
 * Created by Boaz on 19/03/2017.
 */

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
