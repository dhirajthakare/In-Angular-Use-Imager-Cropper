import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {

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
