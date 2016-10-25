"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
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
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map