const roomController= require('../controllers/roomController.js')

const router =require('express').Router()

router.post('/createRoom',roomController.createRoom)
router.get('/getAllRooms',roomController.getAllRooms)
router.post('/getRoomById',roomController.getRoomById)
router.put('/updateRoomById/:id',roomController.updateRoomById)
router.delete('/deleteRoomById/:id',roomController.deleteRoomById)

module.exports=router