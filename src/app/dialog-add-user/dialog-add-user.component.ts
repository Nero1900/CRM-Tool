import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/model/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User();
  birthDate: any;
 
  loading: boolean = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  saveUser(){
    
 
    this.user.birthDate = this.birthDate.getTime().toString();
    this.loading = true;
    console.log('user is', this.user);

    this.firestore.collection('users').add(this.user.toJSON()).then((result)=>{
      console.log('user update finished',result);
      this.loading = false;
      this.dialogRef.close();
      
    })
    
  }

  

}
