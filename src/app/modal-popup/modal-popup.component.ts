import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalPopupComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.data,"data")
  }

  addRow() {
    const newRow = {"id":0, "Name": "", "Job Title": "", "Age": 0, "Start Date": "", "End Date": "",   isEdit: true, isDelete:true}
    // this.dataSource = [newRow, ...this.dataSource];
  }

}
