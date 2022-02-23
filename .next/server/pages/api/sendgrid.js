"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendEmail)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/sendgrid.js

mail_default().setApiKey("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");
async function sendEmail(req, res) {
    try {
        await mail_default().send({
            to: "business.jamesromero@gmail.com",
            from: "haymeemotoh22@gmail.com",
            subject: `Contact Form Subject : ${req.body.subject}`,
            html: `
        <h3>
          Email From : <span>${req.body.email}</span>
        </h3>
        <h3>
          FullName : <span>${req.body.fullname}</span>
        </h3>
        <p>
          ${req.body.message}
        </p>
      `
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            error: error.message
        });
    }
    return res.status(200).json({
        error: ""
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(748));
module.exports = __webpack_exports__;

})();