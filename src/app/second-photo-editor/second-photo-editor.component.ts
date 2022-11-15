import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-second-photo-editor',
  templateUrl: './second-photo-editor.component.html',
  styleUrls: ['./second-photo-editor.component.scss']
})
export class SecondPhotoEditorComponent implements OnInit {

 
  constructor() { }
  imageChangeEvt:any='';
  croppImgPriview:any='';

  ngOnInit(): void {
  }
  
  onFileChange(event:any){
    this.imageChangeEvt = event;
  }

  cropImg(event:ImageCroppedEvent){
    this.croppImgPriview = event.base64;

  }

  imgLoad(){

  }

  imgCropperReady(){

  }

  imgLoadFaill(){

    alert("image failed to show");

  }

}
