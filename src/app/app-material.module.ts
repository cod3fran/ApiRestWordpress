import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatTabsModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }
