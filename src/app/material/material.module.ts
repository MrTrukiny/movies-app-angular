import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule
];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
