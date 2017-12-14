export class OrderRow {
    ht:number;
    constructor(
        public title?:string,
        public author?:string,
        public price?:number,
        public quantity?:number
    ){
       /* ht(){
            return (this.price*this.quantity);
        }*/
    }
}