import { MikroORM } from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async() => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'lireddit',
    user: 'postgres',
    password: '28043379',
    type: 'postgresql',
    debug: !__prod__
  });

  const post = orm.em.create(Post, {title: 'My first post'});
  await orm.em.persistAndFlush(post);
  //await orm.em.nativeInsert();
};

main();