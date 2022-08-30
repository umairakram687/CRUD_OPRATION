module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "123456789",
  DB: "new_test",
  dialect: "mysql",
  //   port: 3306,

  pool: {
    max: 5,
    min: 0,
    aquire: "30000",
    idle: "10000",
  },
};
