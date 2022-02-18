import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/model/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: any;
  birthDate: any;
  loading: boolean = false;
  userId: string = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  editUser(){
    console.log('Updated user is',this.user);
    
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });}

    DELETE(){
      this.firestore.collection('users').doc(this.userId).delete();  
    }

}
