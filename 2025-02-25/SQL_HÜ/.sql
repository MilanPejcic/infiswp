4.  Article Views I: 

SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id;

5. Invalid Tweets:

select tweet_id from Tweets
where length(content)>15;