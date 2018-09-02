const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/school');
// const ctrlUsers = require('../controllers/users');

//schools
router
    .route('/schools')
    .get(schoolController.schoolsHome);

router
    .route('/schools/add')
    .get(schoolController.schoolsAdd)
    .post(schoolController.schoolsCreate);

router
    .route('/school/:schoolid')
    .get(schoolController.statisticsList);

router
    .route('/schools/statistics')
    .get(schoolController.statisticsCreate)
    .post(schoolController.statisticsSave);

router
    .route('school/:schoolid/statistics/:statisticid')
    .get(schoolController.statisticsEdit)
    .post(schoolController.statisticsUpdateOne)
    .delete(schoolController.statisticsDeleteOne);

module.exports = router;