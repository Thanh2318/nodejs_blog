const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//newsController.index

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.post('/handle-form-actions', courseController.handleFormActions)
router.post('/handle-trash-form-actions', courseController.handleTrashFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:id/edit', courseController.edit);
router.delete('/:id/force', courseController.forceDestroy);
router.delete('/:id', courseController.destroy);

module.exports = router;
