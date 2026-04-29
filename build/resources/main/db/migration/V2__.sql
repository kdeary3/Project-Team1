CREATE SEQUENCE IF NOT EXISTS review_id_seq;
ALTER TABLE review
    ALTER COLUMN id SET NOT NULL;
ALTER TABLE review
    ALTER COLUMN id SET DEFAULT nextval('review_id_seq');

ALTER SEQUENCE review_id_seq OWNED BY review.id;