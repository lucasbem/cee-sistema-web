import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form-modal',
  templateUrl: './profile-form-modal.component.html',
  styleUrls: ['./profile-form-modal.component.less']
})
export class ProfileFormModalComponent implements OnInit {

  constructor(
    public profileService: ProfileService
    ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.profileService.create(this.profileService.profile).subscribe(() => {
      this.profileService.index();
    });
  }

  update(): void {
    this.profileService.update(this.profileService.profile).subscribe(() => {
      this.profileService.index();
    });
  }


}
