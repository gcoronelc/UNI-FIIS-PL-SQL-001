-- ============================================
-- SENTENCIAS BASICAS DEL LENGUANE SQL
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

UPDATE ESQUEMA.TABLA
SET
  <COLUMNA1> = <VALOR1>,
  <COLUMNA2> = <VALOR2>,
  . . . 
  . . .
WHERE <FILTRO>;

*/
