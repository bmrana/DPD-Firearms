import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-selection',
  templateUrl: './new-selection.component.html',
  styleUrls: ['./new-selection.component.css']
})
export class NewSelectionComponent {

  constructor(
    public dialogRef: MatDialogRef<NewSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancel(): void {
    this.dialogRef.close();
  }

}
