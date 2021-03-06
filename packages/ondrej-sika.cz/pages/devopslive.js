import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import events from "@app/data/devopslive.yml";
import Markdown from "@app/common/components/Markdown";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import ondrej_chair from "@app/data/pictures/landing-page/tinipng/ondrej_chair.png";
import Button from "@app/ondrejsika-theme/components/Button";

import devops from "@app/data/pictures/devops.svg";
// import ondrej_table from "@app/data/pictures/landing-page/tinipng/ondrej_table.png";
import slack from "@app/data/pictures/social-networks/slack.svg";
import newsletter from "@app/data/pictures/newsletter.svg";
import SocialBox from "@app/ondrejsika-theme/components/devopslive/SocialBox";
import Sessions from "@app/ondrejsika-theme/components/devopslive/Sessions";
import ColorBox from "@app/ondrejsika-theme/components/devopslive/ColorBox";
import TechnologyIcons from "@app/ondrejsika-theme/components/devopslive/TechnologyIcons";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

const MainTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0px;
  opacity: 1;
  color: white;
  font-size: 3.3rem;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;
const Header = styled.h1`
  font-size: 5rem;
  font-weight: bold;
`;

const Section = styled.div`
  margin: 3em 0;
`;
const TextBeige = styled.span`
  color: #c8bfb0 !important;
`;
const Center = styled.div`
  text-align: center;
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
const Underline = styled.span`
  border-bottom: 5px solid #c8bfb0;
  padding-right: 50px;
`;
const Margin = styled.div`
  padding: 2em 0;
`;
const B = styled.span`
  font-weight: bold !important;
`;
const Text = styled.p`
  color: white;
`;
const Page = () => {
  return (
    <>
      <Head>
        <title>DevOps Live by Ondřej Šika</title>
      </Head>
      <div className="d-block d-lg-none">
        <MainBar header="DevOps Live" />
      </div>
      <Background blue paddingBottom="0" className="d-none d-lg-block">
        <Container>
          <Row>
            <Col md={2}>
              <img
                src={devops}
                className="pt-md-5 img-fluid"
                style={{ height: "280px" }}
              />
            </Col>
            <Col lg={6} style={{ marginLeft: "-50px" }}>
              <MainTitle className="pt-md-5">
                <Header>DevOps </Header>
                <TextBeige>live</TextBeige>
                <br />
                by <Underline>Ondřej Šika</Underline>
              </MainTitle>
            </Col>
            <Col lg={4}>
              <Img src={ondrej_chair} />
            </Col>
          </Row>
        </Container>
      </Background>
      <Background light_grey style={{ paddingBottom: "2em" }}>
        <Container>
          <SectionHeader tight>Co je DevOps live</SectionHeader>
          <ColorBox white>
            DevOps live jsou streamy live codingu zajímavých témat z DevOps, kde
            ukážu jak si ušetřit práci a že to není tak složité. Za cca hodinu a
            půl si ukážeme jak nasadit nějakou technologii nebo zlepšit
            konkrétní workflow.
            <br />
            <br />
            Livestreamy probíhají podobně jako mé školení, budu živě ukazovat
            jak to dělám a zároveň komentovat. Každý stream bude nahrávaný a z
            některých vznikne i blogpost.
            <br />
            <br />
            To co budu ukazovat jsem nasazoval u firem jako je o2, LandisGyr
            nebo Průša3d. Připojte se k nim a rozvíjejme společně Vaše znalosti
            a Vaše DevOps.
          </ColorBox>
          <SectionHeader tight>příští TERMÍN</SectionHeader>
          <ColorBox blue>
            <div style={{ maxWidth: "500px" }}>
              <TextBeige className="pt-4">
                {events[0].date} od {events[0].time}
              </TextBeige>
              <h3 className="pt-1 bold">{events[0].title}</h3>
              <Text className="">{events[0].about}</Text>
            </div>
            <Row>
              <Col md={6} className="pt-3">
                <p className="pb-4">
                  <Markdown
                    source={events[0].points}
                    styled={{ paddingLeft: "40px", marginTop: "20px" }}
                  />
                </p>
              </Col>
              <Col md={6}>
                <Center>
                  {events[0].technologies.map((technology, i) => (
                    <TechnologyIcons white key={i} icon={technology} />
                  ))}
                </Center>
              </Col>
              <Col md={6}>
                <Center>
                  <Margin>
                    <Button
                      type="landing-page"
                      size="huge"
                      href={events[0].eventbrite}
                    >
                      <B>Přihlásit</B>
                    </Button>
                  </Margin>
                </Center>
              </Col>
              <Col md={6} className="pt-3">
                <Center>
                  <h3
                    className="pt-3"
                    style={{
                      color: "#c8bfb0"
                    }}
                  >
                    200 Kč
                  </h3>
                </Center>
              </Col>
            </Row>
          </ColorBox>
          <SectionHeader tight>Nadcházející témata</SectionHeader>

          {events.map((event, i) => {
            if (i == 0 && i < 3) return;
            return (
              <div key={i}>
                <Sessions event={event} />
              </div>
            );
          })}
          {/* <Section>
            <RoomyRow style={{ marginRight: "0" }}>
              <Col md={5} sm={12}>
                <Img src={ondrej_table} />
              </Col>
              <Col md={7} sm={12}>
                <ColorBox white>
                  <div className="pl-5">
                    <SectionHeader>Archiv</SectionHeader>
                    <Point fullBlue point="DevOps v praxi" datum="33.3.2020" />
                    <Point fullBlue point="Základy Proxmox" datum="33.3.2020" />
                    <Point
                      fullBlue
                      point="Rozdíly mezi jednotlivými programy"
                      datum="33.3.2020"
                    />
                    <Text></Text>
                    <Button huge href="/">
                      ZOBRAZIT VŠE
                    </Button>
                  </div>
                </ColorBox>
              </Col>
            </RoomyRow>
          </Section> */}
          <Section className="d-none d-lg-block">
            <Row>
              <SocialBox
                icon={slack}
                href="https://sikapublic.slack.com/archives/C018ULJEJMD"
                header="DevOps live community"
                text="Zapojte se do online komunity programátorů, přes veřejný Slack kanál."
                button="https://sikapublic.slack.com/archives/C018ULJEJMD"
              />

              <SocialBox
                icon={newsletter}
                href="http://eepurl.com/dwRHHP"
                header="DevOps live newsletter"
                text="Zapojte se do života naší komunity prostřednictvím DevOps live newsletteru."
                button="http://eepurl.com/dwRHHP"
              />
            </Row>
          </Section>
        </Container>
      </Background>
    </>
  );
};

export default Page;
