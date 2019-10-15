import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule } from '@angular/material';

const material = [MatToolbarModule, MatTabsModule];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
