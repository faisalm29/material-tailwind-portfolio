import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

// const Details = defineNestedType(() => ({
//   name: "Details",
//   fields: {
//     label: { type: "string", required: true },
//     description: { type: "string", required: true },
//   },
// }));

const Images = defineNestedType(() => ({
  name: "Images",
  fields: {
    url: { type: "string", required: true },
    alt: { type: "string", required: true },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    thumbnail: { type: "string", required: true },
  },
  computedFields,
}));

const Campaign = defineDocumentType(() => ({
  name: "Campaign",
  filePathPattern: "campaigns/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    thumbnail: { type: "string", required: true },
    url: { type: "string", required: true },
  },
  computedFields,
}));

// const SocialMedia = defineDocumentType(() => ({
//   name: "SocialMedia",
//   filePathPattern: "social-media/*.mdx",
//   contentType: "mdx",
//   fields: {
//     title: { type: "string", required: true },
//     images: { type: "list", of: Images, required: true },
//     description: { type: "string", required: true },
//     thumbnail: { type: "string", required: true },
//   },
//   computedFields,
// }));

const SocialMedia = defineDocumentType(() => ({
  name: "SocialMedia",
  filePathPattern: "social-media/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    company: { type: "string", required: true },
    companyLogo: { type: "string", required: true },
    publishedOn: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    url: { type: "string", required: true },
  },
  computedFields,
}));

const contentlayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Campaign, SocialMedia],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});

export default contentlayerConfig;
