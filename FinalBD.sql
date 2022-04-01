/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 15.0 		*/
/*  Created On : 28-mar.-2022 11:44:37 				*/
/*  DBMS       : MySql 						*/
/* ---------------------------------------------------- */

SET FOREIGN_KEY_CHECKS=0
; 
/* Drop Tables */

DROP TABLE IF EXISTS `Boleta` CASCADE
;

DROP TABLE IF EXISTS `Cliente` CASCADE
;

DROP TABLE IF EXISTS `Compra` CASCADE
;

DROP TABLE IF EXISTS `Empleado` CASCADE
;

DROP TABLE IF EXISTS `Funcion` CASCADE
;

DROP TABLE IF EXISTS `Multiplex` CASCADE
;

DROP TABLE IF EXISTS `Pelicula` CASCADE
;

DROP TABLE IF EXISTS `Producto` CASCADE
;

DROP TABLE IF EXISTS `PuntoAgil` CASCADE
;

DROP TABLE IF EXISTS `Sala` CASCADE
;

DROP TABLE IF EXISTS `Snack` CASCADE
;

/* Create Tables */

CREATE TABLE `Boleta`
(
	`codigoProducto` VARCHAR(50) NOT NULL,
	`Codigo` VARCHAR(50) NULL,
	`codigoFuncion` VARCHAR(30) NULL,
	CONSTRAINT `PK_Boleta` PRIMARY KEY (`codigoProducto` ASC)
)

;

CREATE TABLE `Cliente`
(
	`cc` INT NOT NULL,
	`puntos` INT NULL,
	`nombre` VARCHAR(50) NOT NULL,
	`correo` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Cliente` PRIMARY KEY (`cc` ASC)
)

;

CREATE TABLE `Compra`
(
	`codigoCo` VARCHAR(50) NOT NULL,
	`codigo` VARCHAR(50) NULL,
	`cc` INT NULL,
	CONSTRAINT `PK_Compra` PRIMARY KEY (`codigoCo` ASC)
)

;

CREATE TABLE `Empleado`
(
	`cc` INT NOT NULL,
	`fechaContrato` DATE NOT NULL,
	`telefono` INT NOT NULL,
	`nombre` VARCHAR(50) NOT NULL,
	`horario` TIME NOT NULL,
	`rol` VARCHAR(50) NOT NULL,
	`salario` INT NOT NULL,
	`codigo` VARCHAR(50) NULL,
	CONSTRAINT `PK_Empleado` PRIMARY KEY (`cc` ASC)
)

;

CREATE TABLE `Funcion`
(
	`codigoFuncion` VARCHAR(30) NOT NULL,
	`horaInicial` TIME NOT NULL,
	`horaFinal` TIME(4) NOT NULL,
	`Fecha` DATE NOT NULL,
	`codigoSala` VARCHAR(50) NULL,
	CONSTRAINT `PK_codigoFuncion` PRIMARY KEY (`codigoFuncion` ASC)
)

;

CREATE TABLE `Multiplex`
(
	`nombre` VARCHAR(50) NOT NULL,
	`direccion` VARCHAR(50) NOT NULL,
	`horario` TIME NOT NULL,
	CONSTRAINT `PK_Multiplex` PRIMARY KEY (`nombre` ASC)
)

;

CREATE TABLE `Pelicula`
(
	`nombre` VARCHAR(50) NOT NULL,
	`duracion` TIME NOT NULL,
	`valoraciones` DOUBLE(5,2) NOT NULL,
	`descripcion` VARCHAR(50) NOT NULL,
	`codigoFuncion` VARCHAR(30) NULL,
	CONSTRAINT `PK_Pelicula` PRIMARY KEY (`nombre` ASC)
)

;

CREATE TABLE `Producto`
(
	`Codigo` VARCHAR(50) NOT NULL,
	`Precio` INT NOT NULL,
	`tipo` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Producto` PRIMARY KEY (`Codigo` ASC)
)

;

CREATE TABLE `PuntoAgil`
(
	`codigo` VARCHAR(50) NOT NULL,
	`horario` TIME NOT NULL,
	`direccion` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_PuntoAgil` PRIMARY KEY (`codigo` ASC)
)

;

CREATE TABLE `Sala`
(
	`estado` VARCHAR(10) NOT NULL,
	`codigoSala` VARCHAR(50) NOT NULL,
	`nombre` VARCHAR(50) NULL,
	CONSTRAINT `PK_codigoSala` PRIMARY KEY (`codigoSala` ASC)
)

;

CREATE TABLE `Snack`
(
	`codigoProducto` VARCHAR(50) NOT NULL,
	`stock` INT NOT NULL,
	`nombre` VARCHAR(50) NOT NULL,
	`descripcion` VARCHAR(50) NOT NULL,
	`valoracion` VARCHAR(50) NOT NULL,
	`Codigo` VARCHAR(50) NULL,
	CONSTRAINT `PK_Snack` PRIMARY KEY (`codigoProducto` ASC)
)

;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE `Boleta` 
 ADD INDEX `IXFK_Boleta_Funcion` (`codigoFuncion` ASC)
;

ALTER TABLE `Boleta` 
 ADD INDEX `IXFK_Boleta_Producto` (`Codigo` ASC)
;

ALTER TABLE `Compra` 
 ADD INDEX `IXFK_Compra_Cliente` (`cc` ASC)
;

ALTER TABLE `Compra` 
 ADD INDEX `IXFK_Compra_Producto` (`codigo` ASC)
;

ALTER TABLE `Compra` 
 ADD INDEX `IXFK_Compra_PuntoAgil` (`codigo` ASC)
;

ALTER TABLE `Empleado` 
 ADD INDEX `IXFK_Empleado_Multiplex` (`nombre` ASC)
;

ALTER TABLE `Empleado` 
 ADD INDEX `IXFK_Empleado_PuntoAgil` (`codigo` ASC)
;

ALTER TABLE `Funcion` 
 ADD INDEX `IXFK_Funcion_Sala` (`codigoSala` ASC)
;

ALTER TABLE `Pelicula` 
 ADD INDEX `IXFK_Pelicula_Funcion` (`codigoFuncion` ASC)
;

ALTER TABLE `Sala` 
 ADD INDEX `IXFK_Sala_Multiplex` (`nombre` ASC)
;

ALTER TABLE `Snack` 
 ADD INDEX `IXFK_Snack_Producto` (`Codigo` ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE `Boleta` 
 ADD CONSTRAINT `FK_codigoFuncion`
	FOREIGN KEY (`codigoFuncion`) REFERENCES `Funcion` (`codigoFuncion`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Boleta` 
 ADD CONSTRAINT `FK_codigoProducto`
	FOREIGN KEY (`Codigo`) REFERENCES `Producto` (`Codigo`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Compra` 
 ADD CONSTRAINT `FK_CcCliente`
	FOREIGN KEY (`cc`) REFERENCES `Cliente` (`cc`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Compra` 
 ADD CONSTRAINT `FK_CodigoProduc`
	FOREIGN KEY (`codigo`) REFERENCES `Producto` (`Codigo`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Compra` 
 ADD CONSTRAINT `FK_CodigoPuntoAgil`
	FOREIGN KEY (`codigo`) REFERENCES `PuntoAgil` (`codigo`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Empleado` 
 ADD CONSTRAINT `FK_codigoPunto`
	FOREIGN KEY (`codigo`) REFERENCES `PuntoAgil` (`codigo`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Empleado` 
 ADD CONSTRAINT `FK_nombreMultiplex`
	FOREIGN KEY (`nombre`) REFERENCES `Multiplex` (`nombre`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Funcion` 
 ADD CONSTRAINT `FK_codigoSala`
	FOREIGN KEY (`codigoSala`) REFERENCES `Sala` (`codigoSala`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Pelicula` 
 ADD CONSTRAINT `FK_codigoFun`
	FOREIGN KEY (`codigoFuncion`) REFERENCES `Funcion` (`codigoFuncion`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Sala` 
 ADD CONSTRAINT `FK_nombreMult`
	FOREIGN KEY (`nombre`) REFERENCES `Multiplex` (`nombre`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Snack` 
 ADD CONSTRAINT `FK_codigoPro`
	FOREIGN KEY (`Codigo`) REFERENCES `Producto` (`Codigo`) ON DELETE Restrict ON UPDATE Restrict
;

SET FOREIGN_KEY_CHECKS=1
; 
INSERT INTO `bd_finalfis` . `multiplex` (`nombre`, `direccion` , `horario`) VALUES ('Jg1' , 'Kr 6 N 8B', '3:00:00');
INSERT INTO `bd_finalfis` . `sala` (`estado` , `codigoSala` , `nombre`) VALUES ('Activa' , '1S' , 'Jg1');
INSERT INTO `bd_finalfis` . `funcion` (`codigoFuncion` , `horaInicial` , `horaFinal`, `Fecha`, `codigoSala`) VALUES ('1','1:00:00', '3:00:00', '202funcionfuncionfuncioncodigoFuncionhoraInicialhoraFinalcodigoFuncion2-06-15', '1S');
INSERT INTO `bd_finalfis`.`pelicula` (`nombre`, `duracion`, `valoraciones`, `descripcion`, `codigoFuncion`) VALUES ('Batman', '2:56:00', '4.0', 'Batman 2022', '1');
