import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})
export class DashboardComponent  {
  apps : any[] = [
    {
      "appId": 2,
      "appDetails": "This is Android",
      "version": "1.0v",
      "appName": "FITNESS TRACKER",
      "userTable": []
    },
    {
      "appId": 3,
      "appDetails": "KEEPS TRACK OF WEIGHT, GLUCOSE LEVEL, ETC",
      "version": "1.0v",
      "appName": "FOUR CORNERS OF HEALTH",
      "userTable": []
      },
      {
      "appId": 4,
      "appDetails": "YOU CAN SEARCH FOR ARTICLES FROM ONLINE",
      "version": "1.0v",
      "appName": "HEALTH KNOWLEDGE BASE",
      "userTable": []
      },
      {
      "appId": 5,
      "appDetails": "KEEPS TRACK OF APPOITMENT",
      "version": "1.0v",
      "appName": "CALANDER",
      "userTable": []
      },
      {
      "appId": 6,
      "appDetails": "HELPS TO TRACK INSURANCE DETAILS AND CLAIMS",
      "version": "1.0v",
      "appName": "MY HEART",
      "userTable": []
      },
      
   ]
   mapps : any[] = [
    {
      "appId": 7,
      "appDetails": "SAYS ABOUT THE MEDICATION DETAILS",
      "version": "1.0v",
      "appName": "MY MEDICATIONS",
      "userTable": []
      },
      {
      "appId": 8,
      "appDetails": "SAYS ABOUT THE HEALTH DOCUMENT DETAILS",
      "version": "1.0v",
      "appName": "MY HEALTH DOCUMENTS",
      "userTable": []
      },
      {
      "appId": 9,
      "appDetails": "HELPS YOU FIND THE APPROPRIATE DOCTOR",
      "version": "1.0v",
      "appName": "HEALTH CONNECT",
      "userTable": []
      },
      {
      "appId": 10,
      "appDetails": "HELPS YOU FIND THE APPROPRIATE DOCTOR",
      "version": "1.0v",
      "appName": "INSURANCE CENTRAL",
      "userTable": []
      },
      {
      "appId": 11,
      "appDetails": "MAINTAINS ALL MEDICAL RECORDS",
      "version": "1.0v",
      "appName": "EMR MANAGER",
      "userTable": []
      }
   ]
  

  radioModel: string = 'Month';

  // lineChart1
}
  
