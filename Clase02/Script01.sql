
SELECT * FROM EUREKA.CLIENTE;


-- Habilitar las salidas DBMS

set serveroutput on


-- Ejemplo 01

begin
    dbms_output.put_line('Bienvenidos al mundo de ORACLE.');
end;
/


-- Ejemplo 02

declare
  v_suma   number(8);
  v_num1   number(8);
  v_num2   number(8);
begin
  -- Datos
  v_num1 := 67;
  v_num2 := 80;
  -- Proceso
  v_suma := v_num1 + v_num2;
  -- Reporte
  dbms_output.put_line('Número 1: ' || v_num1);
  dbms_output.put_line('Número 2: ' || v_num2);
  dbms_output.put_line('Suma: ' || v_suma);
end;
/


-- Ejemplo 3

create or replace function scott.fn_suma(
  p_num1 in number,
  p_num2 in number
) return number
is
  v_suma number;
begin
  v_suma := p_num1 + p_num2;
  return v_suma;
end;
/

select scott.fn_suma(43,56) from dual;


-- Ejemplo 4

create or replace procedure scott.pr_suma(
  p_num1 in  number,
  p_num2 in  number,
  p_suma out number
) is
begin
  p_suma := p_num1 + p_num2;
end;
/


DECLARE
  P_NUM1 NUMBER;
  P_NUM2 NUMBER;
  P_SUMA NUMBER;
BEGIN
  -- Datos
  P_NUM1 := 14;
  P_NUM2 := 17;
  -- Proceso
  SCOTT.PR_SUMA(P_NUM1,P_NUM2,P_SUMA);
  -- Reporte
  DBMS_OUTPUT.PUT_LINE('P_SUMA = ' || P_SUMA);
END;
/

-- SOLO EN EL SQLDBX
BEGIN
	SCOTT.PR_SUMA (45, 12, :p_suma$NUMBER);
END;
/


-- Ejemplo 5


create or replace procedure 
scott.pr_lee_salario(
  p_empno   in  number,
  p_salario out number
) is
begin
  select sal into p_salario 
  from scott.emp 
  where empno = p_empno;
end;
/

declare
  v_empno   number(8);
  v_salario number(10,2);
begin
  -- dato
  v_empno := 7499;
  -- Proceso
  scott.pr_lee_salario( v_empno, v_salario );
  -- Reporte
  dbms_output.put_line('Salario: ' || v_salario );
end;
/


-- Ejemplo 6


create or replace procedure 
scott.pr_lee_salario2(
  p_empno   in  scott.emp.empno%type,
  p_salario out scott.emp.sal%type
) is
begin
  select sal into p_salario 
  from scott.emp 
  where empno = p_empno;
end;
/

declare
  v_empno   scott.emp.empno%type;
  v_salario scott.emp.sal%type;
begin
  -- dato
  v_empno := 7499;
  -- Proceso
  scott.pr_lee_salario2( v_empno, v_salario );
  -- Reporte
  dbms_output.put_line('Salario: ' || v_salario );
end;
/


