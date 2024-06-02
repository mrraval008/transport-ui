import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';

// <div class="container">

//   <select class="form-select" aria-label="Default select example" [(ngModel)]="selectedArea">
//     <option *ngFor="let lData of locationData" [ngValue]="lData">{{lData.areaName}}</option>
//   </select>
//   <select class="form-select" aria-label="Default select example" [(ngModel)]="selectedShop" (change)="onShopChange()">
//     <option disabled selected value> -- select an option -- </option>
//     <option *ngFor="let sData of selectedArea?.shopData;let i = index" [ngValue]="sData">{{sData.shopName}}</option>
//   </select>
//   <a  *ngIf="locationURL" target="_blank" [href]="locationURL | safe: 'resourceUrl'"> Redirct To
//     Map</a>

//     <!-- <iframe  *ngIf="locationURL"  src="locationURL | safe: 'resourceUrl'" height="500px" width="100%" title="Iframe Example"></iframe> -->

// </div>


@Component({
  selector: 'app-fetch-location',
  templateUrl: './fetch-location.component.html',
  styleUrls: ['./fetch-location.component.css'],
})
export class FetchLocationComponent implements OnInit{
  locationData:any = []
  selectedArea:any = {};
  selectedShop:any = {}
  locationURL:string = "/";
  constructor(private apiService:ApiService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    // this.locationURL = this.sanitizer.bypassSecurityTrustUrl(`/`)
    this.apiService.getAllShops().subscribe((res:any)=>{
      if(res && res.status === "success" && res.data && res.data.length > 0){
        this.locationData = res.data;
        this.formatArea(this.locationData)

      }else{
        alert("Issue in fetching stores")
      }
    })
    // this.locationData = [
    //   {
    //     areaName:"Bellandur",
    //     shopName:"Balaji Dress",
    //     location:"12.9337127,77.6621937"
    //   },
    //   {
    //     areaName:"Bellandur",
    //     shopName:"Ramdev Dress",
    //     location:"12.9337127,77.6621937"
    //   },
    //   {
    //     areaName:"Bellandur",
    //     shopName:"Chennai Dress",
    //     location:"12.9337127,77.6621937"
    //   },
    //   {
    //     areaName:"MahadevPura",
    //     shopName:"Ramdev Dress",
    //     location:"12.990432,77.684158"
    //   },
    //   {
    //     areaName:"MahadevPura",
    //     shopName:"Milk Shoap",
    //     location:"12.990432,77.684158"
    //   },
    //   {
    //     areaName:"Marathalli",
    //     shopName:"Balaji Dress",
    //     location:"12.951845,77.699577"
    //   },
    //   {
    //     areaName:"SilkBoard",
    //     shopName:"Balaji Dress",
    //     location:"12.917331,77.621248"
    //   }
    // ]
    // getLocationData()
  }
  onShopChange(){
    this.locationURL = (this.sanitizer.bypassSecurityTrustUrl(`https://www.google.com/maps/search/?api=1&query='+ ${this.selectedShop.location}}}`)).toString()
  }
  formatArea(areaData:any){
    let formattedData:any = []
    areaData.forEach((value:any) => {
      const areaFoundIndex = formattedData.findIndex((elem:any)=>elem.areaName == value.areaName)
      if(areaFoundIndex <= -1){
        let formmatedObj =  {
          areaName:value.areaName,
          shopData:[{
            shopName:value.shopName,
            location:value.location
          }]
        }
        formattedData.push(formmatedObj)
      }else{
        formattedData[areaFoundIndex].shopData.push({
          shopName:value.shopName,
          location:value.location
        })
      }
    });
    this.locationData = formattedData;
  }
}
