"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (request, response) => {
    response.json({
        _id: '1',
        name: 'Yan Santana',
        age: 32
    });
});
exports.default = router;
//# sourceMappingURL=Router.js.map