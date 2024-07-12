import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
