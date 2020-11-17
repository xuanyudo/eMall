export class Product{
    constructor(public _id: string,
        public pname: string, 
        public price: number,
        public description: string,
        public imageUrl:String,
        public brand: string,
        public releaseDate: Date) { }
}