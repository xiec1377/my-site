import React from 'react'
import Footer from '../Footer/Footer'
import './ExperienceCard.css'

export default function ExperienceCard() {
  return (
    <div className="cards-container">
      <div className="card-container">
        <span className="icon">
          <img
            src={require('./empire_life_logo.png')}
            alt="empire-life-logo"
            className="empire-life-logo"
          />
        </span>
        <div className="desc">
          <h2>full-stack developer</h2>
          <h3 className="date">sept - dec 2022</h3>
          <h3>empire life insurance</h3>
          <p>
            <ul>
              <li>
                Updated and maintained company portal used by <b>4,000+</b>{' '}
                users a week with ReactJS and Django back-end API
              </li>{' '}
              <li>
                Improved sprint capacity by average <b>10%</b> per sprint
              </li>{' '}
              <li>
                {' '}
                Ensured quality of portal by testing user functionality and
                rendering of component elements in DOM{' '}
              </li>{' '}
              <li>
                Supported the migration of the testing framework from Enzyme to
                React Testing Library{' '}
              </li>{' '}
              <li>
                Produced process maps, journey maps, variety of designs,
                wireframing and POC for customer portal Glossary feature based
                on problem statement and business requirements{' '}
              </li>{' '}
              <li>
                Led the development and production of Glossary feature used by
                <b> 1,500+</b> customers a week{' '}
              </li>{' '}
              <li>
                Collaborated on research and documentation of integrating
                digitally innovative improvements to the consumers’ and
                advisors’ insurance experience and relationship with the company
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" /> */}

      <div className="card-container">
        <span className="icon">
          <img
            src={require('./bofa_logo.png')}
            alt="bofa-logo"
            className="bofa-logo"
          />
        </span>
        <div className="desc">
          <h2>application developer</h2>
          <h3 className="date">jan - apr 2022</h3>
          <h3>bank of america merrill lynch</h3>
          <p>
            <ul>
              <li>
                Utilized Horizon Enterprise SDLC Platform to participate in
                fortnight sprints and complete Jira stories using Agile scrum
                methodologies
              </li>
              <li>
                Updated and maintained an Angular application that displays
                clients’ financial and transactional data with corresponding API
                and elements such as mat-card, ag-grid, navigation with routing
              </li>
              <li>
                Integrated dialog boxes when API had console errors displaying
                data
              </li>
              <li>
                Executed automated unit test suites and specs with
                JavaScript-based framework Jasmine and test runner Karma
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="card-container">
        <span className="icon">
          <img
            src={require('./darwynn_logo.jpg')}
            alt="darwynn-logo"
            className="darwynn-logo"
          />
        </span>
        <div className="desc">
          <h2>software tester and business analyst</h2>
          <h3 className="date">may - aug 2021</h3>
          <h3>darwynn ltd</h3>
          <p>
            <ul>
              <li>
                Executed collaboration and project management skills as the
                liaison between website development and marketing departments
              </li>
              <li>
                Designed web pages to optimize UX/UI using Figma, HTML and CSS
              </li>
              <li>
                Enhanced the company’s e-commerce understanding by analyzing the
                company and its competitors’ business models
              </li>
              <li>
                Performed <b>700+</b> regression and functional tests in an
                iterative Software Development Life Cycle
              </li>
              <li>
                Optimized the UX/UI of the website and reduced test case count
                by <b>70%</b>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="card-container">
        <span className="icon">
          <img
            src={require('./absolute_logo.png')}
            alt="absolute-logo"
            className="absolute-logo"
          />
        </span>
        <div className="desc">
          <h2>web developer and administrator</h2>
          <h3 className="date">aug - sept 2020</h3>
          <h3>absolute indoor air</h3>
          <p>
            <ul>
              <li>Developed front-end web page using HTML, CSS, Velo API</li>
              <li>
                Managed the environment design, maintenance, and quality
                assurance of the web application
              </li>
              <li>
                Improved customer satisfaction by maximizing UX/UI effectiveness
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
