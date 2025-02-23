﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
  constructor(private router: Router, private accountService: AccountService) {
    // Se redirige a inicio en caso de que se esté conectado
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }
}
