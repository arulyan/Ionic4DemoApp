import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  obj = {
    name:"Arulyan",
    id:1,
    sub:"CSE"
  }

  constructor(private navCtrl:NavController,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  //Angular Routing//
  AngularNext() {
    let objString = JSON.stringify(this.obj)
    this.router.navigate(['testing1',{objStr:objString}],{replaceUrl:true})
  }

  NavControllerNext() {
    this.navCtrl.navigateForward('/testing1')
  }

}
