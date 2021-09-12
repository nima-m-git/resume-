import {
  ContactLink,
  EducationCard,
  ProfessionalExperienceCard,
  SampleProjectCard,
} from 'components';

import {
  education,
  professionalExperience,
  sampleProjects,
  skillsGroup,
  summary,
} from './data';

import styles from './Resume.module.scss';

export const Resume = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.who}>
        <div className={styles.fullName}>Nima Mirzaei</div>
        <div className={styles.title}>Full Stack Developer</div>
      </div>
      <div className={styles.contactInfo}>
        <ContactLink
          link="http://nima-m.me/"
          className={styles.portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          www.nima-m.me
        </ContactLink>

        <ContactLink
          link="mailto:nima.nm.mirzaei@gmail.com"
          className={styles.contactLink}
          icon="fa-at"
        >
          nima.nm.mirzaei@gmail.com
        </ContactLink>

        <ContactLink
          link="https://linkedin.com/in/nima-mirzaei"
          className={styles.contactLink}
          icon="fa-linkedin-in"
          iconPrefix="fab"
        >
          linkedin.com/in/nima-mirzaei
        </ContactLink>

        <ContactLink
          link="tel:4167359086"
          className={styles.phoneNumber}
          icon="fa-phone"
          iconPrefix="fas"
        >
          416-735-9086
        </ContactLink>
      </div>
    </header>

    <div className={styles.thingy}>
      <div className={styles.thingyLeft}>
        <section className={styles.section}>
          <div className={styles.heading}>Personal Summary</div>
          <p>{summary}</p>
        </section>
        <section className={styles.workExperience}>
          <div className={styles.heading}>Professional Experience</div>

          {professionalExperience.map((experience, i) => (
            <ProfessionalExperienceCard
              {...experience}
              timeRange={experience.timeRange}
              key={i}
            />
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.heading}>Education</div>

          {education.map((education, i) => (
            <EducationCard
              {...education}
              completedOn={education.completedOn}
              key={i}
              timeRange={education.timeRange}
            />
          ))}
        </section>
      </div>

      <div className={styles.thingyRight}>
        <div className={styles.heading}>Technologies</div>

        <div className={styles.skillsContainer}>
          {skillsGroup.map((group, i) => (
            <div className={styles.skillsGroup} key={i}>
              {group.map((skill, i) => (
                <div className={styles.skill} key={i}>
                  <label>{skill}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.samples}>
      <div className={styles.secondaryBar}>
        <div className={styles.heading}>Sample Projects</div>
        <div className={styles.moreSamples}>
          {' '}
          More sample projects available on my
          <a href="http://www.nima-m.me" className={styles.moreSamplesLink}>
            <u> Portfolio</u>
          </a>
          {', '}
          <a
            href="https://codesandbox.io/u/nima-m-git"
            className={styles.moreSamplesLink}
          >
            <u>Codesandbox</u>
          </a>
          {', '}
          <a
            href="https://github.com/nima-m-git"
            className={styles.moreSamplesLink}
          >
            <u>Github</u>
          </a>
        </div>
      </div>

      <div className={styles.sampleProjects}>
        {sampleProjects.map((sampleProject, index) => (
          <SampleProjectCard
            {...sampleProject}
            className={styles.sampleProject}
            key={index}
          />
        ))}
      </div>
      <div className={styles.samples}>
        <a
          href="https://github.com/nima-m-git"
          className={styles.moreSamplesLink}
        >
          <u>Github</u>
        </a>
      </div>
    </div>
  </div>
);

export default Resume;
