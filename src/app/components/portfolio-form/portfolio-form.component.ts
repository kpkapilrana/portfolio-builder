import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss'],
})
export class PortfolioFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      personal_info: this.fb.group({
        name: [null, Validators.required],
        contact_no: [null, Validators.required],
        developer: [null],
        user_type:[false]
      }),
      offer: this.fb.group({
        info: [null],
        subpoints: this.fb.array([this.newSubpoint()]),
      }),
      works: this.fb.array([this.newWork()]),
    });
  }

  getOffer(): FormGroup {
    return this.form.get('offer') as FormGroup;
  }

  get subpoints(): FormArray {
    return this.getOffer().get('subpoints') as FormArray;
  }

  get works(): FormArray {
    return this.form.get('works') as FormArray;
  }
  get points(): FormArray {
    return this.form.get('points') as FormArray;
  }

  newSubpoint(): FormGroup {
    return this.fb.group({
      subpoint: [null],
    });
  }

  newWork(): FormGroup {
    return this.fb.group({
      start_date: [null],
      end_date: [null],
      role: [null],
      comp_name: [null, Validators.required],
      points: this.fb.array([this.newPoint()]),
    });
  }

  newPoint(): FormGroup {
    return this.fb.group({
      point: [null],
    });
  }

  addWork(controls) {
    controls.push(this.newWork());
  }

  removeWork(index) {
    this.works.removeAt(index);
  }

  removeSubPoint(index){
    this.subpoints.removeAt(index);
  }

  addSubPoint(controls) {
    controls.push(this.newSubpoint());
  }

  addPoint(controls) {
    controls.push(this.newPoint());
  }

  removePoint(controls, index) {
    controls.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      localStorage.setItem('data', JSON.stringify(this.form.value));
      this.form.reset();
      this.router.navigate(['/about']);
    }
  }
}
