import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
export class MyClass {
    public myPublicVariable: number;
  
    constructor(publicVariable: number) {
      this.myPublicVariable = publicVariable;
    }
  
    public myPublicMethod() {
      console.log(`Public variable value: ${this.myPublicVariable}`);
    }
  }