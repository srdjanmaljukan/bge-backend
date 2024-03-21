const path = require("path");

module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("PGHOST", "bge-db.c7cem0o2iqlt.eu-north-1.rds.amazonaws.com"),
          port: env.int("PGPORT", 5432),
          database: env("PGDATABASE", "bge-db"),
          user: env("PGUSER", "postgres"),
          password: env("PGPASSWORD", "Malabajadera3.-!"),
          ssl: env("DATABASE_SSL", false),
        },
        pool: {
          min: 0,
          max: 6,
        },
        debug: false,
      },
    };
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};