import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  roles=[
    {id:1,
    libelle:"admin"},
    {id:2,
    libelle:"superUser"},
    {id:3,
    libelle:"user"}
  ]
}
