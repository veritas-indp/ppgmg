import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,
    MatCardModule, MatIconModule, MatTableModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatTableModule
    ],
})
export class MaterialModule { }
