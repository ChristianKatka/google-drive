import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { components } from '.';
import { GoogleDriveService } from './google-drive.service';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../Auth/state.service';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule, ...components],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [GoogleDriveService],
})
export class HomeComponent implements OnInit {
  filesFromGoogleDrive = [];
  constructor(
    private googleDriveService: GoogleDriveService,
    public state: StateService
  ) {}

  ngOnInit(): void {
    this.googleDriveService.listFiles().subscribe(
      (response) => {
        console.log('GET FILES RESPONSE');
        console.log(response);
        this.filesFromGoogleDrive = response.files;
      },
      (error) => {
        console.error('Error fetching files from Google Drive:', error);
      }
    );
  }
}
