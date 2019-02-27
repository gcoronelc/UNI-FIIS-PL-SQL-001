
create or replace procedure scott.sp_get_emps
(
  p_deptno in  scott.dept.deptno%type,
  p_cursor out nocopy SYS_REFCURSOR
)
is
begin
  open p_cursor for
    select * from scott.emp
    where deptno = p_deptno;
end;




declare
  v_cursor SYS_REFCURSOR;
  v_deptno number := 10;
  v_rec    scott.emp%rowtype;
begin
  scott.sp_get_emps( v_deptno, v_cursor );
  loop
    fetch v_cursor into v_rec;
    exit when v_cursor%notfound;
    dbms_output.put_line(v_rec.empno || ' - ' || v_rec.ename);
  end loop;
  close v_cursor;
end;
/

