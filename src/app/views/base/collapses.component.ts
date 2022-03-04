import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Role } from '../../models/role';
import { RoleService } from '../../services/role.service';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {
  roles:any[];
  role=new Role();
  constructor(private appServ:AppService,private roleService:RoleService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.roleService.findAll().subscribe(data=>this.roles=data);
  }

  public save(){
    this.roleService.save(this.role).subscribe(()=>{
      this.findAll();
      this.role=new Role();
    })
  }

  public delete(id:number){
    this.roleService.delete(id).subscribe(()=>this.findAll());
  }

  public authoritiesA(){
    if(this.appServ.isAdmin==true){
      return true;
    }else{
      return false;
    }
  }
}
