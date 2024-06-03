//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// LAY CONDITIONS

router.post('/v1/lay-conditions/lay-q-1', (req, res) => {

 if (req.query.returnURL){
    res.redirect(req.query.returnURL);
  } else {
    res.redirect('lay-q-2');
  }

});

router.post('/v1/lay-conditions/lay-q-2', (req, res) => {

  if (req.query.returnURL) {
    res.redirect('lay-conditions-cya');
  } else {
    res.redirect('lay-q-3');
  }

});

router.post('/v1/lay-conditions/lay-q-3', (req, res) => {

  if (req.query.returnURL) {
    res.redirect(req.query.returnURL);
  } else {
    res.redirect('lay-q-4');
  }

});

router.post('/v1/lay-conditions/lay-q-4', (req, res) => {

  if (req.query.returnURL) {
    res.redirect('lay-conditions-cya');
  } else {
    res.redirect('lay-conditions-cya');
  }

});


// PAYABILITY CHECKS

router.post('/v1/payability-checks/pay-q-1', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('pay-q-2');
   }
 });

 router.post('/v1/payability-checks/pay-q-2', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('pay-q-3');
   }
 });

 router.post('/v1/payability-checks/pay-q-3', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('payability-checks-cya');
   }
 });


 // CIS DATA CHECKS

router.post('/v1/cis-data-checks/cis-q-1', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-2');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-2', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-3');
   }
 });
 
 router.post('/v1/cis-data-checks/cis-q-3', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-4');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-4', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-5');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-5', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-6');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-6', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-7');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-7', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-q-8');
   }
 });

 router.post('/v1/cis-data-checks/cis-q-8', (req, res) => {

  if (req.query.returnURL){
     res.redirect(req.query.returnURL);
   } else {
     res.redirect('cis-data-checks-cya');
   }
 });