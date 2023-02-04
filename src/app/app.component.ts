import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

const USER_DATA = [
  {"id":1, "Name": "John Smith", "JobTitle": "Advisor", "Age": 36, "StartDate": "1984-05-05", "EndDate": "2000-05-05", },
  {"id":2, "Name": "Muhi Masri", "JobTitle": "Developer", "Age": 28, "StartDate": "1992-02-02", "EndDate": "2000-05-05",},
  {"id":3, "Name": "Peter Adams", "JobTitle": "HR", "Age": 20, "StartDate": "2000-01-01", "EndDate": "2010-05-05",},
  {"id":4, "Name": "Lora Bay", "JobTitle": "Marketing", "Age": 43, "StartDate": "1977-03-03", "EndDate": "1984-05-05",},
]
const COLUMNS_SCHEMA = [
  {
    key: "id",
    type: "number",
    label: "#"
  },
  {
      key: "Name",
      type: "text",
      label: "Full Name"
  },
  {
      key: "JobTitle",
      type: "text",
      label: "Job Title"
  },
  {
    key: "Age",
    type: "number",
    label: "Age"
},
  {
    key: "StartDate",
    type: "date",
    label: "Start Date"
}, 
{
  key: "EndDate",
  type: "date",
  label: "End Date"
},  
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTest';
  selectedPath: string = '';
  searchText= '';
  displayedColumns: string[] = COLUMNS_SCHEMA.map(col => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(public dialog: MatDialog) {}

  addRow() {
    const newRow = {"id":0, "Name": "", "JobTitle": "", "Age": 0, "StartDate": "", "EndDate": "",   isEdit: true}
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id: number) {
  console.log(id,"hello");
  if (id > -1) {
    this.dataSource.splice(id, 1);
    this.dataSource = [...this.dataSource]; // new ref!
  }
  }

  openDialog(element: any): void {
    console.log(element,"element")
    this.dialog.open(ModalPopupComponent, {
      width: '500px',
      data: {
        selectedRow: element,
        id: element.id,
      },
    });
  }

}
