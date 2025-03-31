1378. Replace Employee ID With The Unique Identifier : 

SELECT eu.unique_id, e.name
FROM Employees e
LEFT JOIN EmployeeUNI eu ON e.id = eu.id;

197. Rising Temperature :  

SELECT w1.id
FROM Weather w1
JOIN Weather w2 
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w1.temperature > w2.temperature;

SELECT machine_id, 
       process_id, 
       ROUND(AVG(duration), 2) AS average_time
FROM Logs
GROUP BY machine_id, process_id;
