import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

export interface ImageFilter {
  name: string;
  className: string;
}

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})

export class ShareComponent {
  selectedFilter = '';
  imagePreviewUrl!: string;
  currentFilter = 'no-filter';
  imageAspectRatio = 0;
  filters: ImageFilter[] = [{name: 'Rise', className: 'rise'}, {
    name: 'Mayfair',
    className: 'mayfair'
  }, {name: 'Nashville', className: 'nashville'}];

  constructor(public dialogRef: MatDialogRef<ShareComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  shareInstagram(): void {
    const url = 'https://www.instagram.com/';
    window.open(url, '_blank');
  }

  shareFacebook(): void {
    const url =
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com%2F';
    window.open(url, '_blank');
  }

  shareLinkedIn(): void {
    const url =
      'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fexample.com%2F';
    window.open(url, '_blank');
  }

  selectedFilePath!: string;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.selectedFilePath = file.name;

      this.selectedFilter = '';
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewUrl = reader.result as string;
        this.getImageAspect(this.imagePreviewUrl).then((aspectRatio) => {
          this.imageAspectRatio = aspectRatio;
        });
      };
      reader.readAsDataURL(file);
    }
  }

  resetImage(): void {
    this.selectedFilePath = '';
    this.imagePreviewUrl = '';
  }

  applyFilter(event: MatButtonToggleChange) {
    const selectedFilter = event.value;

    if (selectedFilter != this.currentFilter) {
      this.currentFilter = selectedFilter;
    }
  }

  getImageAspect(imageUrl: string): Promise<number> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        resolve(aspectRatio);
      };
      img.src = imageUrl;
    });
  }
}
