const express = require("express");
const routes = express.Router();

routes.get("/pelicula/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM pelicula", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/pelicula/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO pelicula set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("pelicula anadida!");
    });
  });
});

routes.delete("/pelicula/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM pelicula WHERE idPelicula = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("pelicula eliminada!");
      }
    );
  });
});

routes.put("/pelicula/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE pelicula set ? WHERE idPelicula = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("pelicula actualizada!");
      }
    );
  });
});

routes.get("/snack/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM snack", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/snack/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO snack set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("snack anadido!");
    });
  });
});

routes.delete("/snack/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM snack WHERE codigoProducto = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("snack eliminado!");
      }
    );
  });
});

routes.put("/snack/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE snack set ? WHERE codigoProducto = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("snack actualizado!");
      }
    );
  });
});

routes.get("/empleado", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM empleado", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/login", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM empleado WHERE cc = ? AND telefono = ?",
      [req.body.cc, req.body.telefono],
      (err, rows) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          if (rows.length > 0) {
            return res.status(200).send(rows[0]);
          } else {
            return res.status(404).send("No se encontro el usuario");
          }
        }
      }
    );
  });
});

module.exports = routes;
