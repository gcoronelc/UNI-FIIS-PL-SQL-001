declare
  -- Declarar el cursor
  cursor c_demo( p_deptno number) is
    select * from scott.emp
    where deptno = p_deptno;
  -- Departamento
  v_demtno number := 20;
begin
  -- Bucle de extracción
  FOR REC IN C_DEMO( v_demtno ) LOOP
    -- Mostrar la fila
    dbms_output.put_line(REC.empno || ' - ' || REC.ename);
  END LOOP;
end;