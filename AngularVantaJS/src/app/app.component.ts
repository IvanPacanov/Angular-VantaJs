import {AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {ElementRef} from '@angular/core';
import {Component} from '@angular/core';
import NET from 'vanta/dist/vanta.net.min';
import BIRDS from 'vanta/dist/vanta.birds.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('net') net: ElementRef;
  @ViewChild('birds') birds: ElementRef;


  title = 'AngularVantaJS';

  ngAfterViewInit() {
    NET({
      el: this.net.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: "#09719a",
      backgroundColor: "black"
    });

    BIRDS({
      el: this.birds.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: "red",
      backgroundColor: "black"
    });
  }
}
