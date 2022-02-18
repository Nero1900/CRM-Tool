import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/model/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User;
  allUsers = [this.user];
  birthday:any;
  userId: string = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
      // {idField: 'customIdName'} in order to put the User Id to the changes--> changes = allUsers
      this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes:any)=>{
      console.log('Changes recieved', changes);
      this.allUsers = changes; 
      
      this.convertToDate();
    })
  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

  convertToDate(){
    
  this.user.birthDate = this.birthday 
  }  

 

}
