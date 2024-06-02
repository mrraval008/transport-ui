import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Validation from '../utils/validation';

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.css']
})
export class StoreLocationComponent  implements OnInit{
  addShopFormGroup:any;
  submitted = false;
  lat:any
  lng:any
  constructor(private formBuilder: FormBuilder,private apiService:ApiService) {}

  ngOnInit(): void {
    this.addShopFormGroup = this.formBuilder.group(
      {
        areaName: ['', Validators.required],
        shopName: ['', Validators.required],
        location: ['', Validators.required],

      })
      this.getLocation()
      this.saveShopLocationData()
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addShopFormGroup.controls;
  }

  onSubmit(): void {
    if (this.addShopFormGroup.invalid) {
      alert("Please add Area Name and Shop name")
      return;
    }
    this.apiService.addShops(this.addShopFormGroup.value).subscribe((res)=>{
      if(res && res.status == "success"){
        alert("Shop addedd");
        this.addShopFormGroup.reset()
      }else{
        alert("Error in adding shops")
      }
    },(err)=>{
      alert("Error in adding shops")
    })
    console.log(JSON.stringify(this.addShopFormGroup.value, null, 2));
  }
  onReset(): void {
    this.addShopFormGroup.reset();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.addShopFormGroup.controls['location'].setValue(this.lat + "," + this.lng);
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  saveShopLocationData(){
    this.apiService.getUsers().subscribe(response => {
      console.log(response)
  });
  }
}
