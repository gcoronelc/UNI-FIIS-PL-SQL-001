

create or replace procedure SCOTT.PR_FIND_SALARIO( 
  P_CODIGO  IN  SCOTT.EMP.EMPNO%TYPE,
  P_SALARIO OUT SCOTT.EMP.SAL%TYPE,
  P_MENSAJE OUT VARCHAR2
) is  
Begin  
  Select Sal INTO P_SALARIO   
  From SCOTT.Emp   
  Where EmpNo = P_CODIGO;
  P_MENSAJE := 'OK';
Exception  
  When No_Data_Found Then   
    P_MENSAJE := 'Código no existe.';
End; 
/

DECLARE
  V_CODIGO  SCOTT.EMP.EMPNO%TYPE;
  V_SALARIO SCOTT.EMP.SAL%TYPE;
  V_MENSAJE VARCHAR2(500);
BEGIN
  -- Dato
  v_codigo := 7369;
  -- Proceso
  SCOTT.PR_FIND_SALARIO(v_codigo, v_salario, v_mensaje );
  -- Reporte
  if v_mensaje = 'OK' then
    dbms_output.put_line('Salario: ' || v_salario);
  else
    dbms_output.put_line(v_mensaje);
  end if;
END;

SELECT * FROM SCOTT.EMP;
