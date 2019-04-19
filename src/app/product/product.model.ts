

export class Product {

  // public id: number;
  // public  name: string;
  // public  image: string;
  // public  price: number;
  // public  description: string;
  // public  star: number;
  // public  category: string[];

  constructor(
    public id: number,
    public name: string,
    public image: string,
    public price: number,
    public description: string,
    public rate: number,
    public category: string[]) {}
}
