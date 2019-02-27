declare
  -- Departamento
  v_demtno number := 30;
begin
  -- Bucle de extracción
  FOR REC IN (  select * from scott.emp
                where deptno = v_demtno ) LOOP
    -- Mostrar la fila
    dbms_output.put_line(REC.empno || ' - ' || REC.ename);
  END LOOP;
end;