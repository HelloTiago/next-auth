"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = _interopRequireDefault(require("./typeorm"));

var _prisma = _interopRequireDefault(require("./prisma"));

var _fauna = _interopRequireDefault(require("./fauna"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Default: _typeorm.default.Adapter,
  TypeORM: _typeorm.default,
  Prisma: _prisma.default,
  Fauna: _fauna.default
};
exports.default = _default;