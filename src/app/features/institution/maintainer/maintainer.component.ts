import { IMaintainer } from './maintainer.model';
import { MaintainerService } from './maintainer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.component.html',
  styleUrls: ['./maintainer.component.less']
})
export class MaintainerComponent implements OnInit {

  // maintainer = {
  //   "id": "2",
  //   "name": "Mantida2",
  //   "legalAct": [
  //     {
  //       "name": "Doc1",
  //       "title": "Doc1",
  //       "description": "Doc1",
  //       "link": "",
  //       "type": ""
  //     }
  //   ],
  //   "socialReason": "Mantida2",
  //   "other": "Mantida2",
  //   "contact": {
  //     "email": [
  //       "email@mantida.com"
  //     ],
  //     "phone": [
  //       {
  //         "number": 5563987654321,
  //         "type": "celular"
  //       }
  //     ],
  //     "address": [
  //       {
  //         "country": "Brasil",
  //         "place": "Rua 26 quadra 119"
  //       }
  //     ]
  //   }
  // }
  maintainer: IMaintainer;
  MaintainerService = MaintainerService;

  constructor(
    public maintainerService: MaintainerService
  ) { }

  ngOnInit(): void {
    this.maintainer = MaintainerService.maintainer;
  }

}
