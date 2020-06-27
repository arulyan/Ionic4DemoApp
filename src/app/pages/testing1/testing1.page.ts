import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.page.html',
  styleUrls: ['./testing1.page.scss'],
})
export class Testing1Page implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let dataString
    dataString = this.activatedRoute.snapshot.paramMap.get('objStr')
    let dataJson = JSON.parse(dataString)
    console.log(dataJson)
  }

}
