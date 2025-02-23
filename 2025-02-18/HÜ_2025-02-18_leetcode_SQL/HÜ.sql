47. Second Highest Salary:

SELECT (
    SELECT DISTINCT salary FROM Employee  ORDER BY salary DESC  LIMIT 1 OFFSET 1
) 
AS SecondHighestSalary;

1. Recyclable and Low Fat Products:

SELECT product_id
FROM Products 
WHERE low_fats = 'Y' AND recyclable = 'Y';

2. Find Customer Referee:

SELECT name 
FROM Customer 
WHERE NOT referee_id = '2' OR referee_id IS NULL;

3. Big Countries: 

SELECT name, population, area
FROM World 
WHERE area >= 3000000 OR population >= 25000000;