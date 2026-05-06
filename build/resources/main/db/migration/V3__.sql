CREATE SEQUENCE IF NOT EXISTS comment_seq START WITH 1 INCREMENT BY 50;

CREATE TABLE comment
(
    id         BIGINT                      NOT NULL,
    review_id  BIGINT,
    comment    TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    CONSTRAINT pk_comment PRIMARY KEY (id)
);

ALTER TABLE comment
    ADD CONSTRAINT FK_COMMENT_ON_REVIEW FOREIGN KEY (review_id) REFERENCES review (id);

ALTER TABLE review
    ALTER COLUMN leader_id DROP NOT NULL;