
import {environment} from '../environments/environment';

export class Product {

  public sku: string;
  public name: string;
  public imageUrl: string;
  public department: string[];
  public price: number;

  constructor(sku: string, name: string, imageUrl: string, department: string[], price: number) {
    this.sku = sku;
    this.name = name;
    this.imageUrl = imageUrl;
    this.department = department;
    this.price = price;
  }

  getImageUrl(): string {
    return environment.baseUrl + this.imageUrl;
  }
}
