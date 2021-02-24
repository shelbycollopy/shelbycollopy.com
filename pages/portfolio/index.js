import Image from "next/image";
import Link from "next/link";

import ButtonLink from "../../components/StyledLink";
import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageTitle from "../../components/PageTitle";
import {
  ProjectCard,
  ProjectClient,
  ProjectName,
} from "../../components/ProjectCard";
import Row from "../../components/Row";

import client, { imageLoader } from "../../lib/contentful";

export default function Portfolio(props) {
  return (
    <>
      <Head title="Shelby Collopy - Portfolio of Work" />
      <Nav />

      <Hero>
        <PageTitle>{props.pageTitle}</PageTitle>

        <Row>
          <ButtonLink href="https://www.dropbox.com/s/489bwk60sily689/ShelbyCollopy_Resume_2020.pdf?dl=0">
            View Resume
          </ButtonLink>
        </Row>
      </Hero>

      <Row>
        {props.projects.map((project, i) => {
          return (
            <Link
              as={`portfolio/${project.fields.slug}`}
              href={`portfolio/${project.fields.slug}?id=${project.sys.id}`}
              key={i}
            >
              <ProjectCard>
                <ProjectName>{project.fields.name}</ProjectName>
                <Image
                  height={225}
                  layout="intrinsic"
                  loader={imageLoader}
                  priority={i < 8 ? true : false}
                  quality={70}
                  src={project.fields.screenshot.fields.file.url}
                  width={400}
                />
                <ProjectClient>{project.fields.projectClient}</ProjectClient>
              </ProjectCard>
            </Link>
          );
        })}
      </Row>

      <Footer />

      <style jsx>
        {`
          @media (prefers-color-scheme: dark) {
            background: black;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  const portfolioPage = await client.getEntry(
    `${process.env.PORTFOLIO_PAGE_ID}`
  );
  return {
    props: portfolioPage ? portfolioPage.fields : [],
  };
}
