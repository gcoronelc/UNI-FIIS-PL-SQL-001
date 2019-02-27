
Create Table SCOTT.Sal_History(  
  EmpNo Number(4) not null,  
  SalOld Number(7,2) null,  
  SalNew Number(7,2) null,  
  StartDate Date not null,  
  SetUser Varchar2(30) not null 
); 


Create or Replace Trigger SCOTT.tr_UpdateEmpSal 
After Insert OR Update ON SCOTT.Emp 
For Each Row 
Begin   

  Insert Into SCOTT.Sal_History(EmpNo, SalOld, SalNew, StartDate, SetUser)   
  Values( :New.EmpNo, :Old.Sal, :New.Sal, sysdate, USER ); 

End tr_UpdateEmpSal; 



SELECT * FROM SCOTT.sal_history;

INSERT INTO SCOTT.EMP(EMPNO, ENAME, SAL )
VALUES( 8787, 'PEDRO', 5673);

UPDATE SCOTT.EMP 
SET SAL = 5700
WHERE EMPNO = 8787;


UPDATE SCOTT.EMP 
SET SAL = 5800
WHERE EMPNO = 8787;


