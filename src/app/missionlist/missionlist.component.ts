import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AppService } from '../app.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionYear = ['2006','2007','2008','2009', '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  missionDataArray =[];
  isLoading= false;
  missionYearSelectedIndex: number | undefined;
  showFilter = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllMissions();
  }

  getAllMissions(): any {
    this.isLoading =true;
    this.appService.getAllMissions()
    .subscribe((response: any)=> {
      console.log(response);
      this.missionDataArray = response;
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    })
  }
  filterMissionPrograms(index:number,year:string): any {
    console.log(index,year);
    this.getFilterMission(year);
    this.missionYearSelectedIndex = index;
    this.showFilter = true;
  }
  getFilterMission(year:string): any {
    this.appService.getMissionByYear(year).subscribe((response: any) =>
    {
      console.log(response);
      this.missionDataArray = response;
    }, (err: any) => {
      console.log(err);
    })
  }
 clearFilter():void{
   this.getAllMissions();
   this.missionYearSelectedIndex = 0;
 }
}