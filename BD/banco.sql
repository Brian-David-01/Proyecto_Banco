CREATE DATABASE banco;
USE banco;
CREATE TABLE cliente ( 
    codigoCliente int primary key,
    nombre varchar(50),
    apellidoPaterno varchar(50),
    apellidoMaterno varchar(50),
    fotoCliente varchar(1000));
CREATE TABLE operacion (
    codigoOperacion int primary key,
    descripcion varchar(200)) ;
CREATE TABLE tipoCuenta (
    codigoCuenta int primary key,
    descripcion varchar(200)) ;
CREATE TABLE tarjeta (
    numTarjeta int primary key,
    codigoCliente int,
    codigoCuenta int,
    fechaAfiliacion date,
    fechaCaducidad date,
    saldo double,
    fotoTarjeta varchar(1000), 
    FOREIGN key (codigoCliente)references cliente(codigoCliente),
    FOREIGN key (codigoCuenta)references tipoCuenta(codigoCuenta)) ;
CREATE TABLE transacciones (
    codigoTransaccion int primary key,
    numTarjeta int,
    codigoCliente int,
    codigoCuenta int,
    codigoOperacion int,
    fechaTransaccion date,
    cuentaDestino int,
    monto double,
    fotoTransaccion varchar(1000),
    FOREIGN key (numTarjeta)references tarjeta(numTarjeta),
    FOREIGN key (codigoCliente)references cliente(codigoCliente),
    FOREIGN key (codigoCuenta)references tipoCuenta(codigoCuenta));

ALTER TABLE transacciones
    ADD CONSTRAINT fk_codigoOperacion
FOREIGN KEY (codigoOperacion) REFERENCES operacion(codigoOperacion);
