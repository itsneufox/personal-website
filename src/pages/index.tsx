import { useRef } from "react";
import SocialsContainer from "../containers/SocialsContainer";
import EducationContainer from "../containers/EducationContainer";
import SkillsContainer from "../containers/SkillsContainer";
import JobsContainer from "../containers/JobsContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import AboutMeContainer from "../containers/AboutMeContainer";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Col, Row, Container } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../locales/translations";

const Home = () => {
  const { language } = useLanguage();

  return (
    <Container>
      <Row style={titleMargin}>
        <Col style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 280, lineHeight: 1.2 }}>João Leandro Lopes Frias</h1>
        </Col>
      </Row>
      <Row style={socialsMargin}>
        <Col style={{ textAlign: 'center' }}>
          <SocialsContainer />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
          <a
            style={{ marginRight: '1rem' }} // Add some spacing between the links
            href="javascript:window.print()"
          >
            {getTranslation(language, 'print')}
          </a>
          <a
            href={language === 'pt' ? "/files/joao-frias-cv-pt.pdf" : "/files/joao-frias-cv-en.pdf"}
          >
            {getTranslation(language, 'download')}
          </a>
        </Col>

        <Col style={{ textAlign: 'right' }}>
          <LanguageSwitcher />
        </Col>
      </Row>
      <hr style={separatorStyle} />
      <Row style={topMargin}>
        <Col>
          <h2>{getTranslation(language, 'aboutMe')}</h2>
        </Col>
      </Row>
      <Row style={bottomMargin}>
        <Col>
          <AboutMeContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>{getTranslation(language, 'skills')}</h2>
        </Col>
      </Row>
      <Row style={bottomMargin}>
        <Col>
          <SkillsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>{getTranslation(language, 'experience')}</h2>
        </Col>
      </Row>
      <Row style={bottomMargin}>
        <Col>
          <JobsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>{getTranslation(language, 'projects')}</h2>
        </Col>
      </Row>
      <Row style={bottomMargin}>
        <Col>
          <ProjectsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>{getTranslation(language, 'education')}</h2>
        </Col>
      </Row>
      <Row style={bottomMargin}>
        <Col>
          <EducationContainer />
        </Col>
      </Row>

      <hr style={separatorStyle} />
      <Row style={footerMargin}>
        <Col style={{ textAlign: 'center' }}>
          <span style={{ display: "inline-block !important", marginRight: '1rem !important' }}>
            <a
              style={linkStyle}
              href="https://joaolopes.xyz/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              © João &apos;itsneufox&apos; Lopes
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a
              style={linkStyle}
              href="https://github.com/itsneufox/personal-website"
              rel="nofollow noreferrer"
              target="_blank"
            >
              {getTranslation(language, 'viewSource')}
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

const separatorStyle: React.CSSProperties = {
  color: "black",
  backgroundColor: "black",
  height: "1px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#3173bb",
  margin: "0px",
  padding: "0px",
};

const topMargin: React.CSSProperties = {
  margin: '20px 0 5px 0',
}

const rowMargin: React.CSSProperties = {
  margin: '5px 0 0px 0',
}

const bottomMargin: React.CSSProperties = {
  margin: '0px 0 20px 0',
}

const titleMargin: React.CSSProperties = {
  margin: '30px 0 10px 0',
}

const socialsMargin: React.CSSProperties = {
  margin: '10px 0 20px 0',
}

const footerMargin: React.CSSProperties = {
  margin: '20px 0 20px 0',
}

export default Home;
