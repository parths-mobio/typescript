import  { getData,createData,removeData,updateData }  from './controller'
import { Router } from 'express'

const router = Router();

router.get("/testdata/getAllData", getData);

router.post("/testdata/create", createData);

//router.get("/testdata", getDataById);

router.post("/testdata/delete", removeData);

router.post("/testdata/updatedata", updateData);


export = router;