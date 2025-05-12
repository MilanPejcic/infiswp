1683. Invalid Tweets:

SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15;

1045. Customers Who Bought All Products: 

SELECT customer_id
FROM Customer
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (
    SELECT COUNT(*) FROM Product
);