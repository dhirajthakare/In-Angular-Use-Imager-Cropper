import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-photo-editor',
  templateUrl: './second-photo-editor.component.html',
  styleUrls: ['./second-photo-editor.component.scss'],
})
export class SecondPhotoEditorComponent implements OnInit {
  constructor(private http: HttpClient) {}
  imageChangeEvt: any = '';
  croppImgPriview: any = '';
  file: any;


  ngOnInit(): void {}

  onFileChange(e: any) {
    this.file = e.target.files[0];
    this.imageChangeEvt = e;
  }

  cropImg(event: ImageCroppedEvent) {
    this.croppImgPriview = event.base64;
    let File = base64ToFile(this.croppImgPriview);

    let newfile = this.blobToFile(File, this.file.name);

    // let id:any="62f3627f8a129d7ae2589123";
    // let formdata = new FormData();
    // formdata.append('status', "this is new status");
    // formdata.append('user_id', id);
    // formdata.append('postUrl', newfile);

    // console.log(formdata);
    // this.http.post('http://localhost:2000/api'+'/createpost',formdata).subscribe(res=>{
    //   console.log(res);
    // })
  }

  public blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File(
      [theBlob as any], // cast as any
      fileName,
      {
        lastModified: new Date().getTime(),
        type: theBlob.type,
      }
    );
  };

  imgLoad() {}

  imgCropperReady() {}

  imgLoadFaill() {
    alert('image failed to show');
  }
}
