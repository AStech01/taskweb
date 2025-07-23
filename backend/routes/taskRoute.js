const express=require("express")
const router=express.Router();
const taskController=require('../controllers/taskController')


router.get('/',taskController.getTasks)
router.post('/',taskController.createTasks)
router.put('/:id',taskController.updateTasks)
router.delete('/:id',taskController.deleteTasks)

module.exports=router