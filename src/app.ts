import express, { Request, Response, Application, NextFunction } from 'express';
import { Product } from './product';
import router from './routes';
import bodyparser from 'body-parser';
import cors from 'cors';


const app: Application = express();
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

function getProduct() {
  let p = new Product();
  p.Id = "1";
  p.Price = 100;
  p.Title = "Cricket Bat";
  p.inStock = true;
  return p;

}
app.get('/products', (req: Request, res: Response) => {
  res.send(getProduct());
});

app.use("/api", router);

app.post('/data', (req: Request, res: Response) => {

  const name: string = req.body.name;
  const email: string = req.body.email;
  const age: number = req.body.age;

  res.json({
    Status: "Success",
    Code: 200,
    Data: {
      Name: name,
      Email: email,
      Age: age
    }
  })
});

const add = (a: number, b: number): number => a + b;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5));
  res.send("Hello");

});
app.listen(5000, () => console.log('Server running on 5000'));