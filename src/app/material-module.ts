import {NgModule} from '@angular/core';
 import { CommonModule } from '@angular/common';
 import {MatButtonModule} from '@angular/material/button';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
 import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        CommonModule, 
        MatButtonModule,
        MatSidenavModule, 
        MatListModule,
        MatMenuModule
    ],
    exports: [
        CommonModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatListModule,
        MatMenuModule
    ],
})
export class MaterialModule {}

