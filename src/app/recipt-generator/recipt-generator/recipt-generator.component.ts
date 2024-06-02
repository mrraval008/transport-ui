import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recipt-generator',
  templateUrl: './recipt-generator.component.html',
  styleUrls: ['./recipt-generator.component.css']
})
export class ReciptGeneratorComponent implements OnInit{
  reciptGeneratorForm: any;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService) {}

  ngOnInit(): void {
    this.reciptGeneratorForm = this.formBuilder.group(
      {
        areaName: ['', Validators.required],
        shopName: ['', Validators.required],
        location: ['', Validators.required],

      })
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    if (this.reciptGeneratorForm.invalid) {
      alert("Please add Area Name and Shop name")
      return;
    }
    this.apiService.addShops(this.reciptGeneratorForm.value).subscribe((res)=>{
      if(res && res.status == "success"){
        alert("Shop addedd");
        this.reciptGeneratorForm.reset()
      }else{
        alert("Error in adding shops")
      }
    },(err)=>{
      alert("Error in adding shops")
    })
    console.log(JSON.stringify(this.reciptGeneratorForm.value, null, 2));
  }
  onReset(): void {
    this.reciptGeneratorForm.reset();
  }

}
