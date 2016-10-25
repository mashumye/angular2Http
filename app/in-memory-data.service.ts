import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Product} from "./Product";
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products: Product[] = [
            { id: 11, name: 'Apple TV' },
            { id: 12, name: 'IPhone' },
            { id: 13, name: 'Apple Watch' },
            { id: 14, name: 'Asus Laptop' },
            { id: 15, name: 'Backpack' },
            { id: 16, name: 'Samsun TV' },
            { id: 17, name: 'Samsun galaxi' },
            { id: 18, name: 'Sony TV' },
            { id: 19, name: 'Toshiba Labtop' },
            { id: 20, name: 'LG TV' }
        ];
        return {products};
    }
}