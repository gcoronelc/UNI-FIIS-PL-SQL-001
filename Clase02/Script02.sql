
CREATE OR REPLACE FUNCTION 
scott.BOOLEAN_TO_CHAR(STATUS IN BOOLEAN)
RETURN VARCHAR2 IS
BEGIN
  RETURN
   CASE STATUS
     WHEN TRUE THEN 'TRUE'
     WHEN FALSE THEN 'FALSE'
     ELSE 'NULL'
   END;
END;

SELECT scott.BOOLEAN_TO_CHAR(true) FROM DUAL;

-- Reto 1
-- Una función que me reporte si un
-- número es primo o no.

CREATE OR REPLACE FUNCTION scott.fn_primo
( p_num IN NUMBER ) RETURN number
IS
  v_rpta number;
BEGIN
  -- Punto de partida
  -- Se asume que si es primo
  v_rpta := 1;
  -- Proceso
  FOR i IN 2 .. (p_num - 1) LOOP
    IF MOD(p_num,i) = 0 THEN
      v_rpta := -1;
      exit;
    END IF;
  END LOOP;
  -- Respuesta
  RETURN v_rpta;
END;
/

DECLARE
  v_rpta number;
BEGIN
  v_rpta := scott.fn_primo(1);
  dbms_output.PUT_LINE('Primo: ' || v_rpta);
END;


-- Reto 2
-- Un procedimiento que acepte 2 números 
-- enteros, y retorne el MCD y MCM.


CREATE OR REPLACE PROCEDURE scott.PR_MCD_MCM
( 
  p_num1 IN  NUMBER,
  p_num2 IN  NUMBER,
  p_mcd  OUT NUMBER,
  p_mcm  OUT NUMBER
) 
IS
  V_NUM1 NUMBER;
  V_NUM2 NUMBER;
BEGIN
  -- Datos
  v_num1 := p_num1;
  v_num2 := p_num2;
  -- Calcular MCD
  WHILE v_num1 <> v_num2 LOOP
    IF v_num1 > v_num2 THEN
      v_num1 := v_num1 - v_num2;  
    ELSE
      v_num2 := v_num2 - v_num1;
    END IF;
  END LOOP;
  p_mcd := v_num1;
  -- Calcular MCM
  p_mcm := p_num1 * p_num2 / p_mcd;
END;



BEGIN
  SCOTT.PR_MCD_MCM (15, 20, :p_mcd$NUMBER, :p_mcm$NUMBER);
END;







