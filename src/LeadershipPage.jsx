import { Link } from 'react-router-dom';
import arunKumar from './assets/arun-kumar.jpg';
import ramamohanReddy from './assets/ramamohan-reddy.jpg';
import shajiKunju from './assets/shaji-kunju.jpg';
import './leadership.css';

const leaders = [
  {
    name: 'Mr. Arun Kumar',
    role: 'Chairman & Managing Director',
    image: arunKumar,
    alt: 'Portrait of Mr. Arun Kumar',
    theme: 'Visionary Leadership. Engineering Excellence. Enduring Value.',
    paragraphs: [
      'With over three decades of experience in the Pre-Engineered Building (PEB), structural, and construction industry, Mr. Arun Kumar brings extensive professional insight and strategic perspective to Mass Infra Projects & Services.',
      'His experience includes project execution across challenging environments in Muscat and Dubai, spanning telecommunications, civil construction, structural works, and interiors. This international exposure informs a practical approach to complex delivery requirements, coordination, and quality-focused execution.',
      'His vision is to strengthen Mass Infra as a dependable engineering and construction partner through innovative methods, strong client relationships, and a consistent commitment to quality, safety, and operational efficiency.',
    ],
    strengths: ['PEB & Structures', 'International Projects', 'Strategic Direction', 'Client Partnerships'],
    quote: 'We strive to build more than structures—we build trust, enduring partnerships, and lasting value through engineering excellence.',
  },
  {
    name: 'Mr. Ramamohan Reddy',
    role: 'Director – Projects',
    image: ramamohanReddy,
    alt: 'Portrait of Mr. Ramamohan Reddy',
    theme: 'Precision in Planning. Excellence in Execution.',
    paragraphs: [
      'Successful project delivery begins with a clear vision, meticulous planning, and a disciplined approach to execution. As Director – Projects, Mr. Ramamohan Reddy represents Mass Infra’s focus on translating project requirements into coordinated, high-quality outcomes.',
      'Project leadership calls for close attention to schedules, resources, quality expectations, and stakeholder coordination. By emphasizing accountability, practical problem-solving, and collaboration, the project function aims to keep delivery aligned with client objectives.',
      'At Mass Infra, the goal is to foster a project culture built on technical diligence, transparent communication, and continuous improvement—from initial planning through execution and handover.',
    ],
    strengths: ['Project Coordination', 'Quality Standards', 'Schedule Discipline', 'Execution Excellence'],
    quote: 'Every successful project is shaped by thoughtful planning, precise execution, and a shared commitment to quality.',
  },
  {
    name: 'Mr. Shaji Kunju',
    role: 'Director',
    image: shajiKunju,
    alt: 'Portrait of Mr. Shaji Kunju',
    theme: 'Trust-Led Leadership. Strategic Growth. Lasting Partnerships.',
    paragraphs: [
      'Strong business relationships are built on integrity, customer confidence, professional accountability, and a commitment to long-term value. As Director, Mr. Shaji Kunju represents Mass Infra’s emphasis on dependable service and collaborative leadership.',
      'In a dynamic construction and infrastructure sector, sustainable progress depends on understanding client priorities, communicating transparently, and building partnerships that create mutual value. These principles underpin the company’s relationship-oriented approach.',
      'Mass Infra aims to strengthen engagement with clients, associates, and project stakeholders while pursuing new opportunities across its construction and engineering capabilities.',
    ],
    strengths: ['Client Relationships', 'Strategic Partnerships', 'Business Growth', 'Professional Integrity'],
    quote: 'Trust is the foundation of every successful partnership. We create value through integrity, collaboration, and dependable service.',
  },
];

function LeadershipPage() {
  return (
    <div className="leadership-page">
      <header className="leadership-hero">
        <div className="leadership-wrap">
          <div className="leadership-eyebrow">Our Leadership</div>
          <h1>Leadership That Builds Confidence.<br />Expertise That Delivers.</h1>
          <p>
            Meet the leadership team behind Mass Infra Projects &amp; Services. Our approach is grounded in
            engineering excellence, disciplined execution, customer commitment, and partnerships built to last.
          </p>
          <div className="leadership-tagline">
            ENGINEERED FOR EXCELLENCE <span>·</span> BUILT ON TRUST <span>·</span> DELIVERED WITH PRECISION
          </div>
        </div>
      </header>

      <section className="leadership-intro" aria-labelledby="leadership-heading">
        <div className="leadership-wrap">
          <h2 id="leadership-heading">Experience. Integrity. Execution.</h2>
          <p>
            From structural and PEB solutions to civil construction and interiors, we bring a practical,
            client-focused mindset to every engagement—helping turn project vision into meaningful outcomes.
          </p>
        </div>
      </section>

      <section className="leadership-grid" aria-label="Mass Infra leadership profiles">
        {leaders.map((leader) => (
          <article className="leader-card" key={leader.name}>
            <div className="leader-photo">
              <img src={leader.image} alt={leader.alt} loading="lazy" />
            </div>
            <div className="leader-body">
              <div className="leader-role">{leader.role}</div>
              <h3>{leader.name}</h3>
              <div className="leader-theme">{leader.theme}</div>
              {leader.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="leader-strengths">
                <strong>Leadership focus</strong>
                <div className="leader-chips">
                  {leader.strengths.map((strength) => <span key={strength}>{strength}</span>)}
                </div>
              </div>
              <p className="leader-quote">“{leader.quote}”</p>
            </div>
          </article>
        ))}
      </section>

      <section className="leadership-cta">
        <div className="leadership-wrap">
          <h2>Let’s Build What’s Next.</h2>
          <p>
            Planning a PEB, structural, civil construction, mezzanine, or interior project? Connect with Mass Infra
            Projects &amp; Services to discuss your requirements and explore a solution built around quality,
            efficiency, and reliability.
          </p>
          <Link className="leadership-button" to="/contact">Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
}

export default LeadershipPage;
