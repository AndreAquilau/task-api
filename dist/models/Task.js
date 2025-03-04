"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'descricao', type: 'varchar', nullable: false, length: 255 }),
        __metadata("design:type", String)
    ], Task.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'estado',
            type: 'boolean',
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Task.prototype, "estado", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_At',
            type: 'timestamp',
            default: 'now()',
        }),
        __metadata("design:type", Date)
    ], Task.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()',
        }),
        __metadata("design:type", Date)
    ], Task.prototype, "updatedAt", void 0);
    Task = __decorate([
        typeorm_1.Index('pkey_task', ['id'], { unique: true }),
        typeorm_1.Entity('task', { schema: 'public' })
    ], Task);
    return Task;
}());
exports.default = Task;
//# sourceMappingURL=Task.js.map