export class Quotes {
  showDetails:boolean;
  upvotes:number;
  downvotes:number;
  constructor(public id:number,public name:string, public author:string, public personSubmitted:string, public quote:string, public createdDate:Date){
    this.showDetails=false;
    this.upvotes=0;
    this.downvotes=0;
  }
}
