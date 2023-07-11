"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield postgresql_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: 'lireddit',
        user: 'postgres',
        password: '28043379',
        type: 'postgresql',
        debug: !constants_1.__prod__
    });
    const post = orm.em.create(Post_1.Post, { title: 'My first post' });
    yield orm.em.persistAndFlush(post);
    //await orm.em.nativeInsert();
});
main();
