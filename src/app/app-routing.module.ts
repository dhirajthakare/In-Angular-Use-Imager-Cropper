import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

const routes: Routes = [
  {path:'' , redirectTo:'Photoedit', pathMatch:'full'},
  {path:'Photoedit' , component:PhotoEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
