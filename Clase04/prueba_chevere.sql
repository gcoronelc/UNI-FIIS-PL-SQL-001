
conn system/oracle@10.11.7.18:1521/XE

set serveroutput on

call EUREKA.usp_egcc_retiro('00100002', 3000, '0002', '123456' );

