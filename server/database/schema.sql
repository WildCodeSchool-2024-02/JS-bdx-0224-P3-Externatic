CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(80) NOT NULL,
  phone VARCHAR(80),
  password VARCHAR(80) NOT NULL,
  role VARCHAR(80) NOT NULL
);

CREATE TABLE consultant (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
    CONSTRAINT fk_consultant_user
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE admin (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
    CONSTRAINT fk_admin_user
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE candidate (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL,
  picture VARCHAR(255),
  user_id INT NOT NULL,
    CONSTRAINT fk_candidate_user
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE cv (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL,
  path VARCHAR(255),
  name VARCHAR(80),
  candidate_id INT NOT NULL,
    CONSTRAINT fk_cv_candidate
    FOREIGN KEY (candidate_id)
    REFERENCES candidate(id)
);

CREATE TABLE region (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  candidate_id INT NOT NULL,
    CONSTRAINT fk_region_candidate
    FOREIGN KEY (candidate_id)
    REFERENCES candidate(id)
  consultant_id INT NOT NULL,
    CONSTRAINT fk_region_consultant
    FOREIGN KEY (consultant_id)
    REFERENCES consultant(id)
);

CREATE TABLE job (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE job-candidate (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  job_id INT NOT NULL,
    CONSTRAINT fk_job-candidate_job
    FOREIGN KEY (job_id)
    REFERENCES job(id)
  candidate_id INT NOT NULL,
    CONSTRAINT fk_job-candidate_candidate
    FOREIGN KEY (candidate_id)
    REFERENCES candidate(id)
);

CREATE TABLE techno (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE techno-candidate (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  techno_id INT NOT NULL,
    CONSTRAINT fk_techno-candidate_techno
    FOREIGN KEY (techno_id)
    REFERENCES techno(id)
  candidate_id INT NOT NULL,
    CONSTRAINT fk_techno-candidate_candidate
    FOREIGN KEY (candidate_id)
    REFERENCES candidate(id)
);

CREATE TABLE company (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  banner VARCHAR(255),
  logo VARCHAR(255),
  description TEXT
);

CREATE TABLE offer (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(80) NOT NULL,
  details TEXT NOT NULL,
  advantages TEXT,
  salary INT,
  consultant_id INT NOT NULL,
    CONSTRAINT fk_offer_consultant
    FOREIGN KEY (consultant_id)
    REFERENCES consultant(id)
  job_id INT NOT NULL,
    CONSTRAINT fk_offer_job
    FOREIGN KEY (job_id)
    REFERENCES job(id)
  company_id INT NOT NULL,
    CONSTRAINT fk_offer_company
    FOREIGN KEY (company_id)
    REFERENCES company(id)
);

CREATE TABLE techno-offer (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  techno_id INT NOT NULL,
    CONSTRAINT fk_techno-offer_techno
    FOREIGN KEY (techno_id)
    REFERENCES techno(id)
  offer_id INT NOT NULL,
    CONSTRAINT fk_techno-offer_offer
    FOREIGN KEY (offer_id)
    REFERENCES offer(id)
);

CREATE TABLE candidacy (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(50) NOT NULL,
  candidate_id INT NOT NULL,
    CONSTRAINT fk_candidacy_candidate
    FOREIGN KEY (candidate_id)
    REFERENCES candidate(id)
  offer_id INT NOT NULL,
    CONSTRAINT fk_candidacy_offer
    FOREIGN KEY (offer_id)
    REFERENCES offer(id)
);
