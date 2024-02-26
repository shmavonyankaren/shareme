import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9p0ch9ya",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token:
    "skWivvZMF1QIFIWlcrTDJatxWFWodreAKiJSbj5m6u91WTKsQ2QNQPEstwWo3Eok7RCt7a0zYOgcsFjdnLQe3wMqvDshDIpCK1TckmJqs3w3MPYLnSUOgLJ0R0Nl8SLxO13bnDS0SKRSv6KBrehagXOJL5b2mSDR8TimEme7Qca2hFCDLRKc",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
