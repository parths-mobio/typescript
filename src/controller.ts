import { Request, Response } from 'express'
import { connect } from './dbconnection'
import { Test } from './product'

export async function getData(req: Request, res: Response) {

  try {
    const conn = await connect();

    let query =
      "SELECT * FROM test_tbl";
    conn.query(query, (error, response) => {
      console.log(error || response);
      if (error) {
        res.json({
          Status: "Error",
          statuscode: 400,
          message: "Not Successfull",
        });
      } else {
        res.json({
          Status: "Success",
          statuscode: 200,
          message: "Data Get Successfully",
          Data: response
        });
      }
    });

  }
  catch (e) {
    console.log(e)
  }
}

export async function createData(req: Request, res: Response) {

  try {
    const conn = await connect();

    const newTest: Test = req.body;
    let query =
      "INSERT INTO test_tbl SET ?";
    conn.query(query, [newTest], (error, response) => {
     
      if (error) {
        res.json({
          Status: "Error",
          statuscode: 400,
          message: "Not Successfull",
          Error:error
        });
      } else {
        res.json({
          Status: "Success",
          statuscode: 200,
          message: "Record Created Successfully",
          Data: newTest
        });
      }
    });
  }
  catch (e) {
    console.log(e)
  }
}

// export async function getDataById(req: Request, res: Response) {

//   try {
//     const conn = await connect();

//     const id = req.params.testId;
//     let query =
//     'SELECT * FROM test_tbl WHERE id = ?';
//     conn.query(query, [id],(error, response) => {
     
//       if (error) {
//         res.json({
//           Status: "Error",
//           statuscode: 400,
//           message: "Not Successfull",
//           Error:error
//         });
//       } else {
//         res.json({
//           Status: "Success",
//           statuscode: 200,
//           message: "Record Find Successfully",
//           Data: response
//         });
//       }
//     });
//   }
//   catch (e) {
//     console.log(e)
//   }
// }

export async function removeData(req: Request, res: Response) {

  try {
    const id = req.body.testid;
    const conn = await connect();

    
    // let query =
    // 'DELETE FROM test_tbl WHERE id = ?';
    conn.query('DELETE FROM test_tbl WHERE id = ?', [id],(error, response) => {
     
      if (error) {
        res.json({
          Status: "Error",
          statuscode: 400,
          message: "Not Successfull",
          Error:error
        });
      } else {
        res.json({
          Status: "Success",
          statuscode: 200,
          message: "Record Deleted Successfully",
          Data: response
        });
      }
    });
  }
  catch (e) {
    console.log(e)
  }
}

export async function updateData(req: Request, res: Response) {

  try {
    const conn = await connect();
    const updatedTest: Test = req.body;

    const id = req.body.id;
    let query =
    'UPDATE test_tbl SET ? WHERE id = ?';
    conn.query(query, [updatedTest, id],(error, response) => {
     
      if (error) {
        res.json({
          Status: "Error",
          statuscode: 400,
          message: "Not Successfull",
          Error:error
        });
      } else {
        res.json({
          Status: "Success",
          statuscode: 200,
          message: "Record updated Successfully",
          Data: updatedTest
        });
      }
    });
  }
  catch (e) {
    console.log(e)
  }
}