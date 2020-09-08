export const FETCH_USERS_WITH_PHONE_NUMBERS = `
SELECT
    u.id,
    u.first_name,
    u.last_name,
    u.email,
    u.is_active,
       json_strip_nulls(json_agg(
       json_build_object(
           'id', upn.id,
           'phone_number', upn.phone_number,
           'type', upn.type
        )
    )) AS phone_numbers
FROM users u
LEFT JOIN user_phone_numbers upn on u.id = upn.user_id
WHERE u.is_active = true
GROUP BY u.id
`;
