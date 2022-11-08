import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../app/task-list/task-list.module').then((mod) => mod.TaskListModule)
      }
    ]
  },
  {
    path: 'add-edit/:id',
    component: TaskEditComponent,
    loadChildren: () => import('./task-edit/task-edit.module').then((mod) => mod.TaskEditModule)
  },
  {
    path: 'add',
    component: TaskAddComponent,
    loadChildren: () => import('../app/task-add/task-add.module').then((mod) => mod.TaskAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
