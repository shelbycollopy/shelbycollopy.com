/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";

import Column from "../../components/Column";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Row from "../../components/Row";

import client, { imageLoader } from "../../lib/contentful";

export default function Project(props) {
  const { project } = props;

  if (!project) {
    return;
  }

  const { fields } = project[0];

  const { description, name, projectClient, projectUrl, screenshot } = fields;

  return (
    <div>
      <Head title="Project Detail" />
      <Nav />

      <Hero>
        <Row>
          <h1>{name}</h1>
        </Row>
        <Row
          css={css`
            align-items: flex-start;
          `}
        >
          <Column>
            <Image
              height={340}
              loader={imageLoader}
              priority={true}
              quality={75}
              src={screenshot.fields.file.url}
              width={600}
              layout="intrinsic"
            />
          </Column>
          <Column>
            {description && <p>{description.content[0].content[0].value}</p>}
            <p>{projectClient}</p>
            <a href={`${projectUrl}`}>{projectUrl}</a>
          </Column>
        </Row>

        <Row></Row>
      </Hero>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const projects = await client.getEntries({ content_type: "project" });

  // Get the paths we want to pre-render based on posts
  const paths = projects.items.map((project) => ({
    params: { slug: `${project.fields.slug}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectReq = await client.getEntries({
    content_type: "project",
    limit: 1,
    "fields.slug[in]": `${params.slug}`,
  });

  const project = projectReq.items;

  return {
    props: { project },
  };
}
