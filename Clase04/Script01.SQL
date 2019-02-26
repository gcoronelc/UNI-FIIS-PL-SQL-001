

-- ============================================
-- SENTENCIAS BASICAS DEL LENGUANE SQL
--    - DDL (CREATE, ALTER, DROP)
--    - DML (SELECT, INSERT, UPDATE, DELETE)
--    - CONTROL DE TRANSACCIONES (COMMIT, ROLLBACK)
--    - CONTROL DE SESIONES (ALTER SESSION)
--    - CONTROL DEL SISTEMA (ALTER SYSTEM)
-- ============================================


-- ============================================
-- SENTENCIAS DML
-- SELECT, INSERT, UPDATE y DELETE
-- ============================================

-- SELECT 
-- Para consultar datos
/*

SELECT <COLUMNAS>
FROM ESQUEMA.TABLA
WHERE <FILTRO>;

*/


SELECT * 
FROM SCOTT.EMP;


SELECT * 
FROM SCOTT.EMP;


SELECT * 
FROM SCOTT.EMP
WHERE SAL > 2000 AND SAL < 5000;


SELECT * 
FROM RECURSOS.EMPLEADO
WHERE SUELDO > 2000 AND SUELDO < 5000;


-- INSERT 
-- Insertar nuevos registros
/*

INSERT INTO ESQUEMA.TABLA( <COLUMNAS> )
VALUES( <VALORES> );

*/


INSERT INTO SCOTT.EMP( EMPNO, ENAME, SAL )
VALUES( 7777, 'GUSTAVO', 9999 );

SELECT * FROM SCOTT.EMP;

COMMIT;


-- UPDATE 
-- Actualizar datos de los registros de una tabla
/*

UPDATE ESQUEMA.TABLA
SET
  <COLUMNA1> = <VALOR1>,
  <COLUMNA2> = <VALOR2>,
  . . . 
  . . .
WHERE <FILTRO>;

*/

UPDATE SCOTT.EMP 
SET DEPTNO = 40
WHERE EMPNO = 7777;

SELECT * FROM SCOTT.DEPT;

SELECT * FROM SCOTT.EMP;

COMMIT;


-- DELETE 
-- Eliminar registros de una tabla
/*

DELETE FROM ESQUEMA.TABLA
WHERE <FILTRO>;

*/

DELETE FROM SCOTT.EMP 
WHERE EMPNO = 7777;

SELECT * FROM SCOTT.EMP;

ROLLBACK;

SELECT * FROM SCOTT.EMP;



-- ============================================
-- CONTROL DE TRANSACCIONES
-- COMMIT y ROLLBACK
-- ============================================

/*

La transacción se activa con la primera sentencia
INSERT, UPDATE, DELETE o SELECT - FOR UPDATE

Se confirma con COMMIT.

Se cancela con ROLLBACK.

*/

SELECT * FROM SCOTT.EMP
FOR UPDATE;

ROLLBACK;


