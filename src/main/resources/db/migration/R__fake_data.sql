INSERT INTO leader (first_name, last_name, job_title)
VALUES ('Michael', 'Scott', 'Regional Manager'),
       ('Miranda', 'Priestley', 'Editor in Chief'),
       ('Ted', 'Lasso', 'Head Coach'),
       ('Leslie', 'Knope', 'Deputy Director of Parks and Rec'),
       ('Captain', 'Raymond Holt', 'Police Captain'),
       ('Shiv', 'Roy', 'President of Domestic Operations'),
       ('Gregory', 'House', 'Head of Diagnostic Medicine'),
       ('Ron', 'Swanson', 'Director of Parks and Rec'),
       ('Olivia', 'Pope', 'Crisis Manager'),
       ('Tony', 'Soprano', 'Waste Management Consultant');


INSERT INTO review (rating, description, created_at, leader_id)
VALUES (3, 'Charismatic but inconsistent. Team morale is high though results are unpredictable.', NOW(), 1),
       (4, 'Demanding and exacting. Delivers results under pressure but struggles with approachability.', NOW(), 2),
       (5, 'Exceptional at building team culture and trust. Leads with empathy and gets the best out of people.', NOW(),
        3),
       (5, 'Tireless advocate for her team. Brings unmatched energy and genuine care to every initiative.', NOW(), 4),
       (5, 'Commands respect through integrity and professionalism. Sets an unwavering standard of conduct.', NOW(), 5),
       (3, 'Politically savvy and results-driven, but prioritizes personal agenda over team cohesion.', NOW(), 6),
       (4, 'Brilliant diagnostician and unconventional thinker. Difficult to manage but delivers when it counts.',
        NOW(), 7),
       (4, 'Straightforward and no-nonsense. Team knows exactly where they stand and respects his consistency.', NOW(),
        8),
       (5, 'Calm under pressure with exceptional crisis instincts. Inspires confidence in high-stakes situations.',
        NOW(), 9),
       (2, 'Effective at achieving outcomes but methods raise serious ethical concerns.', NOW(), 10);

INSERT INTO comment (id, review_id, comment, created_at)
VALUES
    (1, 1, 'Morale is great, but we need more focus on actual KPIs during office hours.', NOW()),
    (51, 2, 'The high standards are appreciated, but the "trial by fire" culture is causing burnout.', NOW()),
    (101, 3, 'The belief he has in the team is infectious; never felt more supported.', NOW()),
    (151, 4, 'Her dedication is inspiring, though sometimes her optimism overlooks logistical hurdles.', NOW()),
    (201, 5, 'A pillar of discipline. The department has never been more organized.', NOW()),
    (251, 6, 'Strategic brilliance is clear, but the lack of transparency is creating a rift in the team.', NOW()),
    (301, 7, 'The results justify the attitude, but better communication would save us all a lot of stress.', NOW()),
    (351, 8, 'Refreshing to have a boss who says exactly what he means. No time wasted.', NOW()),
    (401, 9, 'Invaluable during the last PR disaster; she truly is the best in the business.', NOW()),
    (451, 10, 'We are hitting targets, but the "how" is becoming increasingly difficult to justify.', NOW());
