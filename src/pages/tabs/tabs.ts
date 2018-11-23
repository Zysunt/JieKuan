import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import {IdentificationPage} from '../identification/identification';
import {FindPage} from '../find/find';
import {MinePage} from '../mine/mine'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {



  tab1Root = HomePage;
  tab2Root = IdentificationPage;
  tab3Root = FindPage;
  tab4Root = MinePage;

  constructor() {

  }
}
