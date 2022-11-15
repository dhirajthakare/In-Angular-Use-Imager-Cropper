import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { SecondPhotoEditorComponent } from './second-photo-editor/second-photo-editor.component';

const routes: Routes = [
  {path:'' , redirectTo:'Photoedit', pathMatch:'full'},
  {path:'Photoedit' , component:PhotoEditorComponent},
  {path:'secondedit' , component:SecondPhotoEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
