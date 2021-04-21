"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./product");
const app = express_1.default();
function getProduct() {
    let p = new product_1.Product();
    p.Id = "1";
    p.Price = 100;
    p.Title = "Cricket Bat";
    p.inStock = true;
    return p;
}
app.get('/products', (req, res) => {
    res.send(getProduct());
});
app.post('/data', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    res.json({
        Status: "Success",
        Code: 200,
        Data: {
            Name: name,
            Email: email,
            Age: age
        }
    });
});
//   class Product {
//    public Title;
// }
// let  p = new Product();
// p.Title = "Pen";
// console.log(p);
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    console.log(add(5, 5));
    res.send("Hello");
});
app.listen(5000, () => console.log('Server running on 5000'));
//# sourceMappingURL=app.js.map