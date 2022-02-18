import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/model/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  user: any;
  birthDate: any;
  loading: boolean = false;
  userId: string = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  editAddress(){
    console.log('Updated user is',this.user);
    
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
