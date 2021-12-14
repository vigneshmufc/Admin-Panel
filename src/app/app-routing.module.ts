import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'tasks',
  pathMatch: 'full'
},
{
  path: 'tasks',
  component: TasksComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
