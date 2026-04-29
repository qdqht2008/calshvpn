const { Client } = require('pg');

const client = new Client({
  host: 'nozomi.proxy.rlwy.net',
  port: 31535,
  database: 'railway',
  user: 'postgres',
  password: 'xLgevWSBMBYODHijCsbtZuqGXiQLoqST',
  ssl: { rejectUnauthorized: false },
});

async function init() {
  await client.connect();
  console.log('Connected to PostgreSQL');

  // Drop existing tables
  await client.query(`DROP TABLE IF EXISTS wl_comment CASCADE`);
  await client.query(`DROP TABLE IF EXISTS wl_counter CASCADE`);
  await client.query(`DROP TABLE IF EXISTS wl_users CASCADE`);
  console.log('Dropped existing tables');

  // Drop sequences
  await client.query(`DROP SEQUENCE IF EXISTS wl_comment_seq`);
  await client.query(`DROP SEQUENCE IF EXISTS wl_counter_seq`);
  await client.query(`DROP SEQUENCE IF EXISTS wl_users_seq`);
  console.log('Dropped existing sequences');

  // Create wl_comment table
  await client.query(`
    CREATE SEQUENCE wl_comment_seq;

    CREATE TABLE wl_comment (
      id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_comment_seq'),
      user_id int DEFAULT NULL,
      comment text,
      insertedAt timestamp(0) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
      ip varchar(100) DEFAULT '',
      link varchar(255) DEFAULT NULL,
      mail varchar(255) DEFAULT NULL,
      nick varchar(255) DEFAULT NULL,
      pid int DEFAULT NULL,
      rid int DEFAULT NULL,
      sticky numeric DEFAULT NULL,
      status varchar(50) NOT NULL DEFAULT '',
      "like" int DEFAULT NULL,
      ua text,
      url varchar(255) DEFAULT NULL,
      createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `);
  console.log('Table wl_comment created');

  // Create wl_counter table
  await client.query(`
    CREATE SEQUENCE wl_counter_seq;

    CREATE TABLE wl_counter (
      id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_counter_seq'),
      time int DEFAULT NULL,
      reaction0 int DEFAULT NULL,
      reaction1 int DEFAULT NULL,
      reaction2 int DEFAULT NULL,
      reaction3 int DEFAULT NULL,
      reaction4 int DEFAULT NULL,
      reaction5 int DEFAULT NULL,
      reaction6 int DEFAULT NULL,
      reaction7 int DEFAULT NULL,
      reaction8 int DEFAULT NULL,
      url varchar(255) NOT NULL DEFAULT '',
      createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `);
  console.log('Table wl_counter created');

  // Create wl_users table
  await client.query(`
    CREATE SEQUENCE wl_users_seq;

    CREATE TABLE wl_users (
      id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_users_seq'),
      display_name varchar(255) NOT NULL DEFAULT '',
      email varchar(255) NOT NULL DEFAULT '',
      password varchar(255) NOT NULL DEFAULT '',
      type varchar(50) NOT NULL DEFAULT '',
      label varchar(255) DEFAULT NULL,
      url varchar(255) DEFAULT NULL,
      avatar varchar(255) DEFAULT NULL,
      github varchar(255) DEFAULT NULL,
      twitter varchar(255) DEFAULT NULL,
      facebook varchar(255) DEFAULT NULL,
      google varchar(255) DEFAULT NULL,
      weibo varchar(255) DEFAULT NULL,
      qq varchar(255) DEFAULT NULL,
      oidc varchar(255) DEFAULT NULL,
      huawei varchar(255) DEFAULT NULL,
      "2fa" varchar(32) DEFAULT NULL,
      createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `);
  console.log('Table wl_users created');

  await client.end();
  console.log('All tables created successfully!');
}

init().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
