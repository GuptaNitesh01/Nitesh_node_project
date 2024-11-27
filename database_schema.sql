create table email_stats
(
    mail_from varchar(255),
    mail_to varchar(255),
    subject varchar(255),
	message varchar(255),
    body varchar(255),
	timestamp TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
	email_response_id varchar(255)
	
);