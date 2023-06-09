import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFacade } from '@angular-architects/miles/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'miles-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  ticketList$ = this.manageFacade.ticketList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
