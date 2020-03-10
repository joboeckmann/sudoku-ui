import {NgModule} from '@angular/core';
 import { CommonModule } from '@angular/common';
 import {MatButtonModule} from '@angular/material/button';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule, 
        MatButtonModule,
        MatSidenavModule, 
        MatListModule,
        MatMenuModule,
        MatGridListModule
    ],
    exports: [
        CommonModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatListModule,
        MatMenuModule,
        MatGridListModule
    ],
})
export class MaterialModule {}

