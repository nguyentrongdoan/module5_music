import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'},
    {id: 'ZYZULKeeMWY', song: 'bongda'}
  ];

  constructor() { }
  // tslint:disable-next-line:typedef
  find(id: string) {
    // // tslint:disable-next-line:only-arrow-functions typedef
    // return this.playlist.find(function(item) {
    //   return item.id === id;
    // });
    return this.playlist.find(item => item.id === id);
  }
}
