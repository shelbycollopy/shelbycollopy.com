import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import PageTitle from "../components/PageTitle";
import {
  ProjectCard,
  ProjectClient,
  ProjectName,
} from "../components/ProjectCard";
import Row from "../components/Row";
import StyledLink from "../components/StyledLink";
import SubTitle from "../components/SubTitle";
import styled from "@emotion/styled";

import client, { imageLoader } from "../lib/contentful";

const TechStackWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const HeroDescription = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  width: 60%;
  margin: 0 auto;
  line-height: 2rem;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SvgIcon = styled.object`
  height: 72px;
  max-width: 100px;
  padding: 10px;
  border: none;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

export default function Home(props) {
  return (
    <>
      <Head title="Shelby Collopy - Software Engineer, Front-End, Web Developer, JavaScript, React, NextJS, AWS" />
      <Nav />

      <Hero>
        {props.pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
        {props.pageMetaDescription && (
          <Row>
            <HeroDescription>{props.pageMetaDescription}</HeroDescription>
          </Row>
        )}

        <Row>
          <StyledLink href="https://www.dropbox.com/s/jb10a5n7ls1n5gs/ShelbyCollopy_Resume_2021.pdf?dl=0">
            View Resume
          </StyledLink>
        </Row>
        {props.featuredProjects && (
          <>
            <SubTitle>Featured Projects</SubTitle>
            <Row>
              {props.featuredProjects.map((project, i) => {
                return (
                  <Link
                    href={`portfolio/${project.fields.slug}?id=${project.sys.id}`}
                    as={`portfolio/${project.fields.slug}`}
                    key={i}
                  >
                    <ProjectCard key={i}>
                      <ProjectName>{project.fields.name}</ProjectName>
                      <Image
                        loader={imageLoader}
                        src={project.fields.screenshot.fields.file.url}
                        layout="responsive"
                        width={800}
                        height={450}
                        quality={100}
                        priority={true}
                      />
                      <ProjectClient>
                        {project.fields.projectClient}
                      </ProjectClient>
                    </ProjectCard>
                  </Link>
                );
              })}
            </Row>
            <Row>
              <Link href="/portfolio" passHref>
                <StyledLink>View Portfolio</StyledLink>
              </Link>
            </Row>
          </>
        )}

        {props.skills && (
          <>
            <SubTitle>Tech Stack</SubTitle>
            <Row>
              <TechStackWrap>
                {props.skills.map((skill, i) => {
                  return (
                    <SvgIcon key={i} data={skill.fields.logo.fields.file.url} />
                  );
                })}
              </TechStackWrap>
            </Row>
          </>
        )}
      </Hero>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const homePage = await client.getEntry(`${process.env.HOME_PAGE_ID}`);
  return {
    props: homePage ? homePage.fields : [],
  };
}
