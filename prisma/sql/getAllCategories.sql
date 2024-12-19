SELECT 
    c.id AS category_id,
    c.name AS category_name,
    c.description AS category_description,
    c.created_at AS category_created_at,
    COUNT(q.id)::integer AS total_questions,
    COUNT(uq.is_done) FILTER (WHERE uq.is_done = TRUE)::integer AS done_questions,
    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'id', q.id,
                'title', q.title,
                'url', q.url,
                'difficulty', q.difficulty,
                'created_at', q.created_at,
                'is_done', COALESCE(uq.is_done, FALSE)
            )
        ) FILTER (WHERE q.id IS NOT NULL),
        '[]'
    ) AS questions
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
