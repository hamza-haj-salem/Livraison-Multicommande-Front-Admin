import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  listeLivreurs:boolean=false;
  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }
  getListeLivreurs(){
    //this.listeLivreurs=!this.listeLivreurs
    this.route.navigate(["/listeLivreurs"])
  }

}
