INSERT INTO leader (first_name, last_name, job_title) VALUES
                                                          ('Michael', 'Scott', 'Regional Manager'),
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
VALUES
    (3, 'Charismatic but inconsistent. Team morale is high though results are unpredictable.',            NOW(), 1),
    (4, 'Demanding and exacting. Delivers results under pressure but struggles with approachability.',    NOW(), 2),
    (5, 'Exceptional at building team culture and trust. Leads with empathy and gets the best out of people.', NOW(), 3),
    (5, 'Tireless advocate for her team. Brings unmatched energy and genuine care to every initiative.',  NOW(), 4),
    (5, 'Commands respect through integrity and professionalism. Sets an unwavering standard of conduct.', NOW(), 5),
    (3, 'Politically savvy and results-driven, but prioritizes personal agenda over team cohesion.',      NOW(), 6),
    (4, 'Brilliant diagnostician and unconventional thinker. Difficult to manage but delivers when it counts.', NOW(), 7),
    (4, 'Straightforward and no-nonsense. Team knows exactly where they stand and respects his consistency.', NOW(), 8),
    (5, 'Calm under pressure with exceptional crisis instincts. Inspires confidence in high-stakes situations.', NOW(), 9),
    (2, 'Effective at achieving outcomes but methods raise serious ethical concerns.',                    NOW(), 10);