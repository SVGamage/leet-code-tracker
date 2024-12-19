SELECT 
    c.id AS category_id,
    c.name AS category_name,
    c.description AS category_description,
    c.created_at AS category_created_at,
    COUNT(q.id)::integer AS total_questions,
    COUNT(uq.is_done) FILTER (WHERE uq.is_done = TRUE)::integer AS done_questions

FROM 
    "Category" c
LEFT JOIN 
    "Question" q ON c.id = q.category_id
LEFT JOIN 
    "UserQuestion" uq ON q.id = uq.question_id AND uq.user_id = $1
GROUP BY 
    c.id
ORDER BY 
    c.id;
