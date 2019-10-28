export class Quotes {
  showDetails:boolean;
  upvotes:number;
  downvotes:number;
  showDescription: boolean;
  constructor(public id:number,public name:string, public personSubmitted:string, public author:string, public dateCreated:Date){
    this.showDetails=false;
    this.upvotes=0;
    this.downvotes=0;
  }
}
