import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-nouvelle-tournee',
  standalone: true,
  imports: [CommonModule,FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,MatDatepickerModule,MatFormFieldModule,],
  templateUrl: './nouvelle-tournee.component.html',
  styleUrl: './nouvelle-tournee.component.css'
})
export class NouvelleTourneeComponent {

  constructor() { }

  onSubmit() {
    // Traitement de la soumission du formulaire
    console.log('Formulaire soumis');
  }
}
