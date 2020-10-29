module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "pg1123581321",
  database: "debtsmanager",
  define: {
    timestamps: true,
    underscored: true, //coloca as tabelas como snake case
    //habilita o created_at e o updated_at
  },
};
