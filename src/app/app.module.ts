import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

import { ImageCropperModule }  from 'ngx-image-cropper';
import { SecondPhotoEditorComponent } from './second-photo-editor/second-photo-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoEditorComponent,
    SecondPhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
