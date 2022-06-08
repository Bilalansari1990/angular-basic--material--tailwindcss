import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class UserFormModule {}
