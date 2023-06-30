import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  sections: any[] = [];

  newSectionHeader: string = '';
  newSectionDetails: string = '';

  onSubmit() {
    if (this.newSectionHeader && this.newSectionDetails) {
      const newSection = {
        header: this.newSectionHeader,
        details: this.newSectionDetails
      };
      this.sections.push(newSection);
      this.resetForm();
    }
  }

  resetForm() {
    this.newSectionHeader = '';
    this.newSectionDetails = '';
  }
}
