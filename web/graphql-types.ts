export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockOrFigure = SanityBlock | SanityFigure;

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityCardSection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<SanityPopupOrPostOrProductOrTraining>>>;
  ctas?: Maybe<Array<Maybe<SanityCta>>>;
  tagline?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawTagline?: Maybe<Scalars['JSON']>;
  _rawCards?: Maybe<Scalars['JSON']>;
  _rawCtas?: Maybe<Scalars['JSON']>;
};


export type SanityCardSection_RawTaglineArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCardSection_RawCardsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCardSection_RawCtasArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityCardSectionOrCtaSectionOrGallerySectionOrHeroOrTextSectionOrTextWithImageSectionOrUiComponentRef = SanityCardSection | SanityCtaSection | SanityGallerySection | SanityHero | SanityTextSection | SanityTextWithImageSection | SanityUiComponentRef;

export type SanityCategory = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  description?: Maybe<Scalars['String']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityCategory_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityCategory_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityCategory_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityCta = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  route?: Maybe<SanityPageOrPostOrProductOrRouteOrTraining>;
  link?: Maybe<Scalars['String']>;
  _rawRoute?: Maybe<Scalars['JSON']>;
};


export type SanityCta_RawRouteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityCtaSection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  cta?: Maybe<SanityCta>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
};


export type SanityCtaSection_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaSection_RawCtaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFigure = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  caption?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityFigure_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFigure_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFigure_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFormSubmission = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  isResolved?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFormSubmission_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFormSubmission_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityGallerySection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  imageGallery?: Maybe<SanityImageGallery>;
  _rawImageGallery?: Maybe<Scalars['JSON']>;
};


export type SanityGallerySection_RawImageGalleryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<SanityImage>;
  ctas?: Maybe<Array<Maybe<SanityCta>>>;
  tagline?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawTagline?: Maybe<Scalars['JSON']>;
  _rawBackgroundImage?: Maybe<Scalars['JSON']>;
  _rawCtas?: Maybe<Scalars['JSON']>;
};


export type SanityHero_RawTaglineArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHero_RawBackgroundImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHero_RawCtasArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityHeroOrImageGalleryOrTextSectionOrTextWithImageSection = SanityHero | SanityImageGallery | SanityTextSection | SanityTextWithImageSection;

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageGallery = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<SanityImage>>>;
  _rawGallery?: Maybe<Scalars['JSON']>;
};


export type SanityImageGallery_RawGalleryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type SanityMediaTag = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<SanitySlug>;
  _rawName?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityMediaTag_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityMediaTag_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityMediaTag_RawNameArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityOpeningHours = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};


export type SanityOpeningHoursFromArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityOpeningHoursToArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  content?: Maybe<Array<Maybe<SanityCardSectionOrCtaSectionOrGallerySectionOrHeroOrTextSectionOrTextWithImageSectionOrUiComponentRef>>>;
  description?: Maybe<Scalars['String']>;
  openGraphImage?: Maybe<SanityImage>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawOpenGraphImage?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawOpenGraphImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityPageOrPostOrProductOrRouteOrTraining = SanityPage | SanityPost | SanityProduct | SanityRoute | SanityTraining;

export type SanityPerson = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<SanityFigure>;
  _rawPhoto?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPerson_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPerson_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPerson_RawPhotoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPopup = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  openingHours?: Maybe<SanityOpeningHours>;
  _rawOpeningHours?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPopup_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPopup_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPopup_RawOpeningHoursArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPopupOrPostOrProductOrTraining = SanityPopup | SanityPost | SanityProduct | SanityTraining;

export type SanityPost = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  author?: Maybe<SanityPerson>;
  mainImage?: Maybe<SanityImage>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  publishedAt?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawAuthor?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPost_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPostGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityProduct = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  mainImage?: Maybe<SanityImage>;
  blurb?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultProductVariant?: Maybe<SanityProductVariant>;
  variants?: Maybe<Array<Maybe<SanityProductVariant>>>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  slug?: Maybe<SanitySlug>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawDefaultProductVariant?: Maybe<Scalars['JSON']>;
  _rawVariants?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProduct_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProduct_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProduct_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawDefaultProductVariantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawVariantsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProductGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityProductVariant = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  grams?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  taxable?: Maybe<Scalars['Boolean']>;
  shippingRate?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<SanityImage>>>;
  _rawImages?: Maybe<Scalars['JSON']>;
};


export type SanityProductVariant_RawImagesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityRoute = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  page?: Maybe<SanityPage>;
  includeInSitemap?: Maybe<Scalars['Boolean']>;
  disallowRobots?: Maybe<Scalars['Boolean']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawPage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityRoute_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityRoute_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityRoute_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityRoute_RawPageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & RemoteFile & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<SanityImageFit>;
};


export type SanityImageAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type SanityGatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN';

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanitySiteConfig = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  frontpage?: Maybe<SanityPage>;
  blogpage?: Maybe<SanityPage>;
  logo?: Maybe<SanityFigure>;
  socialLinks?: Maybe<Array<Maybe<SanitySocialLink>>>;
  mainNavigation?: Maybe<Array<Maybe<SanityRoute>>>;
  footerNavigation?: Maybe<Array<Maybe<SanityRoute>>>;
  footerText?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawFrontpage?: Maybe<Scalars['JSON']>;
  _rawBlogpage?: Maybe<Scalars['JSON']>;
  _rawLogo?: Maybe<Scalars['JSON']>;
  _rawSocialLinks?: Maybe<Scalars['JSON']>;
  _rawMainNavigation?: Maybe<Scalars['JSON']>;
  _rawFooterNavigation?: Maybe<Scalars['JSON']>;
  _rawFooterText?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteConfig_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteConfig_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteConfig_RawFrontpageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawBlogpageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawLogoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawSocialLinksArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawMainNavigationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawFooterNavigationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteConfig_RawFooterTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySocialLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityTextSection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  text?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawText?: Maybe<Scalars['JSON']>;
};


export type SanityTextSection_RawTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityTextWithImageSection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  imagePlacement?: Maybe<Scalars['String']>;
  vintageBackground?: Maybe<Scalars['Boolean']>;
  image?: Maybe<SanityFigure>;
  cta?: Maybe<SanityCta>;
  text?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawText?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
};


export type SanityTextWithImageSection_RawTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTextWithImageSection_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTextWithImageSection_RawCtaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityTraining = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  content?: Maybe<Array<Maybe<SanityHeroOrImageGalleryOrTextSectionOrTextWithImageSection>>>;
  description?: Maybe<Scalars['String']>;
  openGraphImage?: Maybe<SanityImage>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawOpenGraphImage?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityTraining_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityTraining_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityTraining_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTraining_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTraining_RawOpenGraphImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTrainingGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityUiComponentRef = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type StaticImage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};


export type StaticImageModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sanityCategory?: Maybe<SanityCategory>;
  allSanityCategory: SanityCategoryConnection;
  sanityFormSubmission?: Maybe<SanityFormSubmission>;
  allSanityFormSubmission: SanityFormSubmissionConnection;
  sanityMediaTag?: Maybe<SanityMediaTag>;
  allSanityMediaTag: SanityMediaTagConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPerson?: Maybe<SanityPerson>;
  allSanityPerson: SanityPersonConnection;
  sanityPopup?: Maybe<SanityPopup>;
  allSanityPopup: SanityPopupConnection;
  sanityPost?: Maybe<SanityPost>;
  allSanityPost: SanityPostConnection;
  sanityProduct?: Maybe<SanityProduct>;
  allSanityProduct: SanityProductConnection;
  sanityRoute?: Maybe<SanityRoute>;
  allSanityRoute: SanityRouteConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanitySiteConfig?: Maybe<SanitySiteConfig>;
  allSanitySiteConfig: SanitySiteConfigConnection;
  sanityTraining?: Maybe<SanityTraining>;
  allSanityTraining: SanityTrainingConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  staticImage?: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityCategoryArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityCategoryArgs = {
  filter?: InputMaybe<SanityCategoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityCategorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityFormSubmissionArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  isResolved?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  phone?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityFormSubmissionArgs = {
  filter?: InputMaybe<SanityFormSubmissionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityFormSubmissionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityMediaTagArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<SanitySlugFilterInput>;
  _rawName?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityMediaTagArgs = {
  filter?: InputMaybe<SanityMediaTagFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityMediaTagSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<SanityImageFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraphImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: InputMaybe<SanityPageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityPageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPersonArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  photo?: InputMaybe<SanityFigureFilterInput>;
  _rawPhoto?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPersonArgs = {
  filter?: InputMaybe<SanityPersonFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityPersonSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPopupArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  streetAddress?: InputMaybe<StringQueryOperatorInput>;
  city?: InputMaybe<StringQueryOperatorInput>;
  state?: InputMaybe<StringQueryOperatorInput>;
  zipcode?: InputMaybe<StringQueryOperatorInput>;
  openingHours?: InputMaybe<SanityOpeningHoursFilterInput>;
  _rawOpeningHours?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPopupArgs = {
  filter?: InputMaybe<SanityPopupFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityPopupSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPostArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityPersonFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityPostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityProductArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  blurb?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  defaultProductVariant?: InputMaybe<SanityProductVariantFilterInput>;
  variants?: InputMaybe<SanityProductVariantFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawDefaultProductVariant?: InputMaybe<JsonQueryOperatorInput>;
  _rawVariants?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityProductArgs = {
  filter?: InputMaybe<SanityProductFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityProductSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityRouteArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  page?: InputMaybe<SanityPageFilterInput>;
  includeInSitemap?: InputMaybe<BooleanQueryOperatorInput>;
  disallowRobots?: InputMaybe<BooleanQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawPage?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityRouteArgs = {
  filter?: InputMaybe<SanityRouteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityRouteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityFileAssetSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityImageAssetSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteConfigArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  frontpage?: InputMaybe<SanityPageFilterInput>;
  blogpage?: InputMaybe<SanityPageFilterInput>;
  logo?: InputMaybe<SanityFigureFilterInput>;
  socialLinks?: InputMaybe<SanitySocialLinkFilterListInput>;
  mainNavigation?: InputMaybe<SanityRouteFilterListInput>;
  footerNavigation?: InputMaybe<SanityRouteFilterListInput>;
  footerText?: InputMaybe<SanityBlockFilterListInput>;
  _rawFrontpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBlogpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawSocialLinks?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainNavigation?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooterNavigation?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooterText?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteConfigArgs = {
  filter?: InputMaybe<SanitySiteConfigFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanitySiteConfigSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityTrainingArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<SanityImageFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraphImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityTrainingArgs = {
  filter?: InputMaybe<SanityTrainingFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SanityTrainingSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStaticImageArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryAllStaticImageArgs = {
  filter?: InputMaybe<StaticImageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<StaticImageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum =
  | 'SELECT';

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  graphqlTypegen?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldSelector;
};

export type SanityCategoryEdge = {
  next?: Maybe<SanityCategory>;
  node: SanityCategory;
  previous?: Maybe<SanityCategory>;
};

export type SanityCategoryFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanitySlugFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  current?: InputMaybe<FieldSelectorEnum>;
};

export type SanityCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldSelector;
};


export type SanityCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldSelector;
};

export type SanityCategoryFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityCategorySortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SanitySlugSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanitySlugSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  current?: InputMaybe<SortOrderEnum>;
};

export type SanityFormSubmissionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFormSubmissionEdge>;
  nodes: Array<SanityFormSubmission>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFormSubmissionGroupConnection>;
};


export type SanityFormSubmissionConnectionDistinctArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionConnectionMaxArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionConnectionMinArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionConnectionSumArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFormSubmissionFieldSelector;
};

export type SanityFormSubmissionEdge = {
  next?: Maybe<SanityFormSubmission>;
  node: SanityFormSubmission;
  previous?: Maybe<SanityFormSubmission>;
};

export type SanityFormSubmissionFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  isResolved?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  phone?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityFormSubmissionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFormSubmissionEdge>;
  nodes: Array<SanityFormSubmission>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFormSubmissionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFormSubmissionGroupConnectionDistinctArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionGroupConnectionMaxArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionGroupConnectionMinArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionGroupConnectionSumArgs = {
  field: SanityFormSubmissionFieldSelector;
};


export type SanityFormSubmissionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFormSubmissionFieldSelector;
};

export type SanityFormSubmissionFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  isResolved?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  phone?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityFormSubmissionSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  isResolved?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  phone?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityMediaTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityMediaTagEdge>;
  nodes: Array<SanityMediaTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityMediaTagGroupConnection>;
};


export type SanityMediaTagConnectionDistinctArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagConnectionMaxArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagConnectionMinArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagConnectionSumArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityMediaTagFieldSelector;
};

export type SanityMediaTagEdge = {
  next?: Maybe<SanityMediaTag>;
  node: SanityMediaTag;
  previous?: Maybe<SanityMediaTag>;
};

export type SanityMediaTagFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<SanitySlugFieldSelector>;
  _rawName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityMediaTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityMediaTagEdge>;
  nodes: Array<SanityMediaTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityMediaTagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityMediaTagGroupConnectionDistinctArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagGroupConnectionMaxArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagGroupConnectionMinArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagGroupConnectionSumArgs = {
  field: SanityMediaTagFieldSelector;
};


export type SanityMediaTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityMediaTagFieldSelector;
};

export type SanityMediaTagFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<SanitySlugFilterInput>;
  _rawName?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityMediaTagSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SanitySlugSortInput>;
  _rawName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  blurHash?: InputMaybe<StringQueryOperatorInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageConnectionMaxArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageConnectionMinArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageConnectionSumArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldSelector;
};

export type SanityPageEdge = {
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export type SanityPageFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  openGraphImage?: InputMaybe<SanityImageFieldSelector>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  _rawContent?: InputMaybe<FieldSelectorEnum>;
  _rawOpenGraphImage?: InputMaybe<FieldSelectorEnum>;
  gatsbyPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityImageFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  asset?: InputMaybe<SanityImageAssetFieldSelector>;
  hotspot?: InputMaybe<SanityImageHotspotFieldSelector>;
  crop?: InputMaybe<SanityImageCropFieldSelector>;
  _rawAsset?: InputMaybe<FieldSelectorEnum>;
  _rawHotspot?: InputMaybe<FieldSelectorEnum>;
  _rawCrop?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImageAssetFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  originalFilename?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  altText?: InputMaybe<FieldSelectorEnum>;
  sha1hash?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  assetId?: InputMaybe<FieldSelectorEnum>;
  uploadId?: InputMaybe<FieldSelectorEnum>;
  path?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  metadata?: InputMaybe<SanityImageMetadataFieldSelector>;
  source?: InputMaybe<SanityAssetSourceDataFieldSelector>;
  _rawMetadata?: InputMaybe<FieldSelectorEnum>;
  _rawSource?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  filename?: InputMaybe<FieldSelectorEnum>;
  filesize?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  publicUrl?: InputMaybe<FieldSelectorEnum>;
  resize?: InputMaybe<RemoteFileResizeFieldSelector>;
  gatsbyImage?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImageMetadataFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  location?: InputMaybe<SanityGeopointFieldSelector>;
  dimensions?: InputMaybe<SanityImageDimensionsFieldSelector>;
  palette?: InputMaybe<SanityImagePaletteFieldSelector>;
  lqip?: InputMaybe<FieldSelectorEnum>;
  blurHash?: InputMaybe<FieldSelectorEnum>;
  hasAlpha?: InputMaybe<FieldSelectorEnum>;
  isOpaque?: InputMaybe<FieldSelectorEnum>;
  _rawLocation?: InputMaybe<FieldSelectorEnum>;
  _rawDimensions?: InputMaybe<FieldSelectorEnum>;
  _rawPalette?: InputMaybe<FieldSelectorEnum>;
};

export type SanityGeopointFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  lat?: InputMaybe<FieldSelectorEnum>;
  lng?: InputMaybe<FieldSelectorEnum>;
  alt?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImageDimensionsFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImagePaletteFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  muted?: InputMaybe<SanityImagePaletteSwatchFieldSelector>;
  _rawDarkMuted?: InputMaybe<FieldSelectorEnum>;
  _rawLightVibrant?: InputMaybe<FieldSelectorEnum>;
  _rawDarkVibrant?: InputMaybe<FieldSelectorEnum>;
  _rawVibrant?: InputMaybe<FieldSelectorEnum>;
  _rawDominant?: InputMaybe<FieldSelectorEnum>;
  _rawLightMuted?: InputMaybe<FieldSelectorEnum>;
  _rawMuted?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImagePaletteSwatchFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  background?: InputMaybe<FieldSelectorEnum>;
  foreground?: InputMaybe<FieldSelectorEnum>;
  population?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type SanityAssetSourceDataFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImageHotspotFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  x?: InputMaybe<FieldSelectorEnum>;
  y?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type SanityImageCropFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  top?: InputMaybe<FieldSelectorEnum>;
  bottom?: InputMaybe<FieldSelectorEnum>;
  left?: InputMaybe<FieldSelectorEnum>;
  right?: InputMaybe<FieldSelectorEnum>;
};

export type SanityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPageGroupConnectionDistinctArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageGroupConnectionMaxArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageGroupConnectionMinArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageGroupConnectionSumArgs = {
  field: SanityPageFieldSelector;
};


export type SanityPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldSelector;
};

export type SanityPageFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<SanityImageFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraphImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPageSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SanitySlugSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  openGraphImage?: InputMaybe<SanityImageSortInput>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  _rawContent?: InputMaybe<SortOrderEnum>;
  _rawOpenGraphImage?: InputMaybe<SortOrderEnum>;
  gatsbyPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityImageSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  asset?: InputMaybe<SanityImageAssetSortInput>;
  hotspot?: InputMaybe<SanityImageHotspotSortInput>;
  crop?: InputMaybe<SanityImageCropSortInput>;
  _rawAsset?: InputMaybe<SortOrderEnum>;
  _rawHotspot?: InputMaybe<SortOrderEnum>;
  _rawCrop?: InputMaybe<SortOrderEnum>;
};

export type SanityImageAssetSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  originalFilename?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  altText?: InputMaybe<SortOrderEnum>;
  sha1hash?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  assetId?: InputMaybe<SortOrderEnum>;
  uploadId?: InputMaybe<SortOrderEnum>;
  path?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  metadata?: InputMaybe<SanityImageMetadataSortInput>;
  source?: InputMaybe<SanityAssetSourceDataSortInput>;
  _rawMetadata?: InputMaybe<SortOrderEnum>;
  _rawSource?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  filename?: InputMaybe<SortOrderEnum>;
  filesize?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  publicUrl?: InputMaybe<SortOrderEnum>;
  resize?: InputMaybe<RemoteFileResizeSortInput>;
  gatsbyImage?: InputMaybe<SortOrderEnum>;
};

export type SanityImageMetadataSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  location?: InputMaybe<SanityGeopointSortInput>;
  dimensions?: InputMaybe<SanityImageDimensionsSortInput>;
  palette?: InputMaybe<SanityImagePaletteSortInput>;
  lqip?: InputMaybe<SortOrderEnum>;
  blurHash?: InputMaybe<SortOrderEnum>;
  hasAlpha?: InputMaybe<SortOrderEnum>;
  isOpaque?: InputMaybe<SortOrderEnum>;
  _rawLocation?: InputMaybe<SortOrderEnum>;
  _rawDimensions?: InputMaybe<SortOrderEnum>;
  _rawPalette?: InputMaybe<SortOrderEnum>;
};

export type SanityGeopointSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  lat?: InputMaybe<SortOrderEnum>;
  lng?: InputMaybe<SortOrderEnum>;
  alt?: InputMaybe<SortOrderEnum>;
};

export type SanityImageDimensionsSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
};

export type SanityImagePaletteSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchSortInput>;
  _rawDarkMuted?: InputMaybe<SortOrderEnum>;
  _rawLightVibrant?: InputMaybe<SortOrderEnum>;
  _rawDarkVibrant?: InputMaybe<SortOrderEnum>;
  _rawVibrant?: InputMaybe<SortOrderEnum>;
  _rawDominant?: InputMaybe<SortOrderEnum>;
  _rawLightMuted?: InputMaybe<SortOrderEnum>;
  _rawMuted?: InputMaybe<SortOrderEnum>;
};

export type SanityImagePaletteSwatchSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  background?: InputMaybe<SortOrderEnum>;
  foreground?: InputMaybe<SortOrderEnum>;
  population?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type SanityAssetSourceDataSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type RemoteFileResizeSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type SanityImageHotspotSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  x?: InputMaybe<SortOrderEnum>;
  y?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type SanityImageCropSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  top?: InputMaybe<SortOrderEnum>;
  bottom?: InputMaybe<SortOrderEnum>;
  left?: InputMaybe<SortOrderEnum>;
  right?: InputMaybe<SortOrderEnum>;
};

export type SanityFigureFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPersonEdge>;
  nodes: Array<SanityPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPersonGroupConnection>;
};


export type SanityPersonConnectionDistinctArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonConnectionMaxArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonConnectionMinArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonConnectionSumArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPersonFieldSelector;
};

export type SanityPersonEdge = {
  next?: Maybe<SanityPerson>;
  node: SanityPerson;
  previous?: Maybe<SanityPerson>;
};

export type SanityPersonFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  photo?: InputMaybe<SanityFigureFieldSelector>;
  _rawPhoto?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityFigureFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  asset?: InputMaybe<SanityImageAssetFieldSelector>;
  hotspot?: InputMaybe<SanityImageHotspotFieldSelector>;
  crop?: InputMaybe<SanityImageCropFieldSelector>;
  caption?: InputMaybe<FieldSelectorEnum>;
  alt?: InputMaybe<FieldSelectorEnum>;
  _rawAsset?: InputMaybe<FieldSelectorEnum>;
  _rawHotspot?: InputMaybe<FieldSelectorEnum>;
  _rawCrop?: InputMaybe<FieldSelectorEnum>;
};

export type SanityPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPersonEdge>;
  nodes: Array<SanityPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPersonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPersonGroupConnectionDistinctArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonGroupConnectionMaxArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonGroupConnectionMinArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonGroupConnectionSumArgs = {
  field: SanityPersonFieldSelector;
};


export type SanityPersonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPersonFieldSelector;
};

export type SanityPersonFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  photo?: InputMaybe<SanityFigureFilterInput>;
  _rawPhoto?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPersonSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  photo?: InputMaybe<SanityFigureSortInput>;
  _rawPhoto?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityFigureSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  asset?: InputMaybe<SanityImageAssetSortInput>;
  hotspot?: InputMaybe<SanityImageHotspotSortInput>;
  crop?: InputMaybe<SanityImageCropSortInput>;
  caption?: InputMaybe<SortOrderEnum>;
  alt?: InputMaybe<SortOrderEnum>;
  _rawAsset?: InputMaybe<SortOrderEnum>;
  _rawHotspot?: InputMaybe<SortOrderEnum>;
  _rawCrop?: InputMaybe<SortOrderEnum>;
};

export type SanityOpeningHoursFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  from?: InputMaybe<DateQueryOperatorInput>;
  to?: InputMaybe<DateQueryOperatorInput>;
};

export type SanityPopupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPopupEdge>;
  nodes: Array<SanityPopup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPopupGroupConnection>;
};


export type SanityPopupConnectionDistinctArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupConnectionMaxArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupConnectionMinArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupConnectionSumArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPopupFieldSelector;
};

export type SanityPopupEdge = {
  next?: Maybe<SanityPopup>;
  node: SanityPopup;
  previous?: Maybe<SanityPopup>;
};

export type SanityPopupFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  streetAddress?: InputMaybe<FieldSelectorEnum>;
  city?: InputMaybe<FieldSelectorEnum>;
  state?: InputMaybe<FieldSelectorEnum>;
  zipcode?: InputMaybe<FieldSelectorEnum>;
  openingHours?: InputMaybe<SanityOpeningHoursFieldSelector>;
  _rawOpeningHours?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityOpeningHoursFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  from?: InputMaybe<FieldSelectorEnum>;
  to?: InputMaybe<FieldSelectorEnum>;
};

export type SanityPopupGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPopupEdge>;
  nodes: Array<SanityPopup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPopupGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPopupGroupConnectionDistinctArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupGroupConnectionMaxArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupGroupConnectionMinArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupGroupConnectionSumArgs = {
  field: SanityPopupFieldSelector;
};


export type SanityPopupGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPopupFieldSelector;
};

export type SanityPopupFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  streetAddress?: InputMaybe<StringQueryOperatorInput>;
  city?: InputMaybe<StringQueryOperatorInput>;
  state?: InputMaybe<StringQueryOperatorInput>;
  zipcode?: InputMaybe<StringQueryOperatorInput>;
  openingHours?: InputMaybe<SanityOpeningHoursFilterInput>;
  _rawOpeningHours?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPopupSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  streetAddress?: InputMaybe<SortOrderEnum>;
  city?: InputMaybe<SortOrderEnum>;
  state?: InputMaybe<SortOrderEnum>;
  zipcode?: InputMaybe<SortOrderEnum>;
  openingHours?: InputMaybe<SanityOpeningHoursSortInput>;
  _rawOpeningHours?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityOpeningHoursSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  from?: InputMaybe<SortOrderEnum>;
  to?: InputMaybe<SortOrderEnum>;
};

export type SanityCategoryFilterListInput = {
  elemMatch?: InputMaybe<SanityCategoryFilterInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldSelector;
};

export type SanityPostEdge = {
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export type SanityPostFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  author?: InputMaybe<SanityPersonFieldSelector>;
  mainImage?: InputMaybe<SanityImageFieldSelector>;
  categories?: InputMaybe<SanityCategoryFieldSelector>;
  publishedAt?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  body?: InputMaybe<SanityBlockFieldSelector>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  _rawAuthor?: InputMaybe<FieldSelectorEnum>;
  _rawMainImage?: InputMaybe<FieldSelectorEnum>;
  _rawCategories?: InputMaybe<FieldSelectorEnum>;
  _rawBody?: InputMaybe<FieldSelectorEnum>;
  gatsbyPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityBlockFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<SanitySpanFieldSelector>;
  style?: InputMaybe<FieldSelectorEnum>;
  list?: InputMaybe<FieldSelectorEnum>;
  _rawChildren?: InputMaybe<FieldSelectorEnum>;
};

export type SanitySpanFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  marks?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<FieldSelectorEnum>;
};

export type SanityPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldSelector;
};


export type SanityPostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldSelector;
};

export type SanityPostFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityPersonFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPostSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SanitySlugSortInput>;
  author?: InputMaybe<SanityPersonSortInput>;
  mainImage?: InputMaybe<SanityImageSortInput>;
  categories?: InputMaybe<SanityCategorySortInput>;
  publishedAt?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  body?: InputMaybe<SanityBlockSortInput>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  _rawAuthor?: InputMaybe<SortOrderEnum>;
  _rawMainImage?: InputMaybe<SortOrderEnum>;
  _rawCategories?: InputMaybe<SortOrderEnum>;
  _rawBody?: InputMaybe<SortOrderEnum>;
  gatsbyPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityBlockSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<SanitySpanSortInput>;
  style?: InputMaybe<SortOrderEnum>;
  list?: InputMaybe<SortOrderEnum>;
  _rawChildren?: InputMaybe<SortOrderEnum>;
};

export type SanitySpanSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  marks?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<SortOrderEnum>;
};

export type SanityProductVariantFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  isAvailable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  grams?: InputMaybe<FloatQueryOperatorInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  shippingRate?: InputMaybe<FloatQueryOperatorInput>;
  images?: InputMaybe<SanityImageFilterListInput>;
  _rawImages?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageFilterListInput = {
  elemMatch?: InputMaybe<SanityImageFilterInput>;
};

export type SanityProductVariantFilterListInput = {
  elemMatch?: InputMaybe<SanityProductVariantFilterInput>;
};

export type SanityProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
};


export type SanityProductConnectionDistinctArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductConnectionMaxArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductConnectionMinArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductConnectionSumArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldSelector;
};

export type SanityProductEdge = {
  next?: Maybe<SanityProduct>;
  node: SanityProduct;
  previous?: Maybe<SanityProduct>;
};

export type SanityProductFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  mainImage?: InputMaybe<SanityImageFieldSelector>;
  blurb?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  defaultProductVariant?: InputMaybe<SanityProductVariantFieldSelector>;
  variants?: InputMaybe<SanityProductVariantFieldSelector>;
  categories?: InputMaybe<SanityCategoryFieldSelector>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  body?: InputMaybe<SanityBlockFieldSelector>;
  _rawMainImage?: InputMaybe<FieldSelectorEnum>;
  _rawBody?: InputMaybe<FieldSelectorEnum>;
  _rawDefaultProductVariant?: InputMaybe<FieldSelectorEnum>;
  _rawVariants?: InputMaybe<FieldSelectorEnum>;
  _rawCategories?: InputMaybe<FieldSelectorEnum>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  gatsbyPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityProductVariantFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  isAvailable?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  grams?: InputMaybe<FieldSelectorEnum>;
  price?: InputMaybe<FieldSelectorEnum>;
  sku?: InputMaybe<FieldSelectorEnum>;
  taxable?: InputMaybe<FieldSelectorEnum>;
  shippingRate?: InputMaybe<FieldSelectorEnum>;
  images?: InputMaybe<SanityImageFieldSelector>;
  _rawImages?: InputMaybe<FieldSelectorEnum>;
};

export type SanityProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityProductGroupConnectionDistinctArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductGroupConnectionMaxArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductGroupConnectionMinArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductGroupConnectionSumArgs = {
  field: SanityProductFieldSelector;
};


export type SanityProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldSelector;
};

export type SanityProductFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  blurb?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  defaultProductVariant?: InputMaybe<SanityProductVariantFilterInput>;
  variants?: InputMaybe<SanityProductVariantFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawDefaultProductVariant?: InputMaybe<JsonQueryOperatorInput>;
  _rawVariants?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityProductSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  mainImage?: InputMaybe<SanityImageSortInput>;
  blurb?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  defaultProductVariant?: InputMaybe<SanityProductVariantSortInput>;
  variants?: InputMaybe<SanityProductVariantSortInput>;
  categories?: InputMaybe<SanityCategorySortInput>;
  slug?: InputMaybe<SanitySlugSortInput>;
  body?: InputMaybe<SanityBlockSortInput>;
  _rawMainImage?: InputMaybe<SortOrderEnum>;
  _rawBody?: InputMaybe<SortOrderEnum>;
  _rawDefaultProductVariant?: InputMaybe<SortOrderEnum>;
  _rawVariants?: InputMaybe<SortOrderEnum>;
  _rawCategories?: InputMaybe<SortOrderEnum>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  gatsbyPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityProductVariantSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  isAvailable?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  grams?: InputMaybe<SortOrderEnum>;
  price?: InputMaybe<SortOrderEnum>;
  sku?: InputMaybe<SortOrderEnum>;
  taxable?: InputMaybe<SortOrderEnum>;
  shippingRate?: InputMaybe<SortOrderEnum>;
  images?: InputMaybe<SanityImageSortInput>;
  _rawImages?: InputMaybe<SortOrderEnum>;
};

export type SanityRouteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityRouteEdge>;
  nodes: Array<SanityRoute>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityRouteGroupConnection>;
};


export type SanityRouteConnectionDistinctArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteConnectionMaxArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteConnectionMinArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteConnectionSumArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityRouteFieldSelector;
};

export type SanityRouteEdge = {
  next?: Maybe<SanityRoute>;
  node: SanityRoute;
  previous?: Maybe<SanityRoute>;
};

export type SanityRouteFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  page?: InputMaybe<SanityPageFieldSelector>;
  includeInSitemap?: InputMaybe<FieldSelectorEnum>;
  disallowRobots?: InputMaybe<FieldSelectorEnum>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  _rawPage?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityRouteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityRouteEdge>;
  nodes: Array<SanityRoute>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityRouteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityRouteGroupConnectionDistinctArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteGroupConnectionMaxArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteGroupConnectionMinArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteGroupConnectionSumArgs = {
  field: SanityRouteFieldSelector;
};


export type SanityRouteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityRouteFieldSelector;
};

export type SanityRouteFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  page?: InputMaybe<SanityPageFilterInput>;
  includeInSitemap?: InputMaybe<BooleanQueryOperatorInput>;
  disallowRobots?: InputMaybe<BooleanQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawPage?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityRouteSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SanitySlugSortInput>;
  page?: InputMaybe<SanityPageSortInput>;
  includeInSitemap?: InputMaybe<SortOrderEnum>;
  disallowRobots?: InputMaybe<SortOrderEnum>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  _rawPage?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldSelector;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  originalFilename?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  altText?: InputMaybe<FieldSelectorEnum>;
  sha1hash?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  assetId?: InputMaybe<FieldSelectorEnum>;
  path?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  source?: InputMaybe<SanityAssetSourceDataFieldSelector>;
  _rawSource?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldSelector;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldSelector;
};

export type SanityFileAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityFileAssetSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  originalFilename?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  altText?: InputMaybe<SortOrderEnum>;
  sha1hash?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  assetId?: InputMaybe<SortOrderEnum>;
  path?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  source?: InputMaybe<SanityAssetSourceDataSortInput>;
  _rawSource?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldSelector;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldSelector;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldSelector;
};

export type SanitySocialLinkFilterListInput = {
  elemMatch?: InputMaybe<SanitySocialLinkFilterInput>;
};

export type SanitySocialLinkFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  platform?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityRouteFilterListInput = {
  elemMatch?: InputMaybe<SanityRouteFilterInput>;
};

export type SanitySiteConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteConfigEdge>;
  nodes: Array<SanitySiteConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteConfigGroupConnection>;
};


export type SanitySiteConfigConnectionDistinctArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigConnectionMaxArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigConnectionMinArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigConnectionSumArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteConfigFieldSelector;
};

export type SanitySiteConfigEdge = {
  next?: Maybe<SanitySiteConfig>;
  node: SanitySiteConfig;
  previous?: Maybe<SanitySiteConfig>;
};

export type SanitySiteConfigFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  frontpage?: InputMaybe<SanityPageFieldSelector>;
  blogpage?: InputMaybe<SanityPageFieldSelector>;
  logo?: InputMaybe<SanityFigureFieldSelector>;
  socialLinks?: InputMaybe<SanitySocialLinkFieldSelector>;
  mainNavigation?: InputMaybe<SanityRouteFieldSelector>;
  footerNavigation?: InputMaybe<SanityRouteFieldSelector>;
  footerText?: InputMaybe<SanityBlockFieldSelector>;
  _rawFrontpage?: InputMaybe<FieldSelectorEnum>;
  _rawBlogpage?: InputMaybe<FieldSelectorEnum>;
  _rawLogo?: InputMaybe<FieldSelectorEnum>;
  _rawSocialLinks?: InputMaybe<FieldSelectorEnum>;
  _rawMainNavigation?: InputMaybe<FieldSelectorEnum>;
  _rawFooterNavigation?: InputMaybe<FieldSelectorEnum>;
  _rawFooterText?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanitySocialLinkFieldSelector = {
  _key?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  platform?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type SanitySiteConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteConfigEdge>;
  nodes: Array<SanitySiteConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteConfigGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteConfigGroupConnectionDistinctArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigGroupConnectionMaxArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigGroupConnectionMinArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigGroupConnectionSumArgs = {
  field: SanitySiteConfigFieldSelector;
};


export type SanitySiteConfigGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteConfigFieldSelector;
};

export type SanitySiteConfigFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  frontpage?: InputMaybe<SanityPageFilterInput>;
  blogpage?: InputMaybe<SanityPageFilterInput>;
  logo?: InputMaybe<SanityFigureFilterInput>;
  socialLinks?: InputMaybe<SanitySocialLinkFilterListInput>;
  mainNavigation?: InputMaybe<SanityRouteFilterListInput>;
  footerNavigation?: InputMaybe<SanityRouteFilterListInput>;
  footerText?: InputMaybe<SanityBlockFilterListInput>;
  _rawFrontpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBlogpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawSocialLinks?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainNavigation?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooterNavigation?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooterText?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteConfigSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  frontpage?: InputMaybe<SanityPageSortInput>;
  blogpage?: InputMaybe<SanityPageSortInput>;
  logo?: InputMaybe<SanityFigureSortInput>;
  socialLinks?: InputMaybe<SanitySocialLinkSortInput>;
  mainNavigation?: InputMaybe<SanityRouteSortInput>;
  footerNavigation?: InputMaybe<SanityRouteSortInput>;
  footerText?: InputMaybe<SanityBlockSortInput>;
  _rawFrontpage?: InputMaybe<SortOrderEnum>;
  _rawBlogpage?: InputMaybe<SortOrderEnum>;
  _rawLogo?: InputMaybe<SortOrderEnum>;
  _rawSocialLinks?: InputMaybe<SortOrderEnum>;
  _rawMainNavigation?: InputMaybe<SortOrderEnum>;
  _rawFooterNavigation?: InputMaybe<SortOrderEnum>;
  _rawFooterText?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SanitySocialLinkSortInput = {
  _key?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  platform?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type SanityTrainingConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTrainingEdge>;
  nodes: Array<SanityTraining>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityTrainingGroupConnection>;
};


export type SanityTrainingConnectionDistinctArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingConnectionMaxArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingConnectionMinArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingConnectionSumArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityTrainingFieldSelector;
};

export type SanityTrainingEdge = {
  next?: Maybe<SanityTraining>;
  node: SanityTraining;
  previous?: Maybe<SanityTraining>;
};

export type SanityTrainingFieldSelector = {
  _id?: InputMaybe<FieldSelectorEnum>;
  _type?: InputMaybe<FieldSelectorEnum>;
  _createdAt?: InputMaybe<FieldSelectorEnum>;
  _updatedAt?: InputMaybe<FieldSelectorEnum>;
  _rev?: InputMaybe<FieldSelectorEnum>;
  _key?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<SanitySlugFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  openGraphImage?: InputMaybe<SanityImageFieldSelector>;
  _rawSlug?: InputMaybe<FieldSelectorEnum>;
  _rawContent?: InputMaybe<FieldSelectorEnum>;
  _rawOpenGraphImage?: InputMaybe<FieldSelectorEnum>;
  gatsbyPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SanityTrainingGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTrainingEdge>;
  nodes: Array<SanityTraining>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityTrainingGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityTrainingGroupConnectionDistinctArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingGroupConnectionMaxArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingGroupConnectionMinArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingGroupConnectionSumArgs = {
  field: SanityTrainingFieldSelector;
};


export type SanityTrainingGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityTrainingFieldSelector;
};

export type SanityTrainingFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<SanityImageFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraphImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityTrainingSortInput = {
  _id?: InputMaybe<SortOrderEnum>;
  _type?: InputMaybe<SortOrderEnum>;
  _createdAt?: InputMaybe<SortOrderEnum>;
  _updatedAt?: InputMaybe<SortOrderEnum>;
  _rev?: InputMaybe<SortOrderEnum>;
  _key?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SanitySlugSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  openGraphImage?: InputMaybe<SanityImageSortInput>;
  _rawSlug?: InputMaybe<SortOrderEnum>;
  _rawContent?: InputMaybe<SortOrderEnum>;
  _rawOpenGraphImage?: InputMaybe<SortOrderEnum>;
  gatsbyPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type StaticImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldSelector;
};

export type StaticImageEdge = {
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export type StaticImageFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
};

export type StaticImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldSelector;
};

export type StaticImageFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};

export type StaticImageSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
};

export type BlogListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogListingsQuery = { allSanityPost: { totalCount: number, edges: Array<{ node: { id: string, title?: string | null, publishedAt?: any | null, _createdAt?: any | null, excerpt?: string | null, slug?: { current?: string | null } | null } }> } };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { sanitySiteConfig?: { _rawFooterText?: any | null, socialLinks?: Array<{ platform?: string | null, _key?: string | null, url?: string | null } | null> | null, footerNavigation?: Array<{ id: string, slug?: { current?: string | null } | null, page?: { title?: string | null } | null } | null> | null } | null };

export type SiteConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteConfigQuery = { sanitySiteConfig?: { _id?: string | null, _type?: string | null, url?: string | null, logo?: { alt?: string | null, asset?: { gatsbyImageData: any } | null } | null, socialLinks?: Array<{ url?: string | null, platform?: string | null } | null> | null, mainNavigation?: Array<{ disallowRobots?: boolean | null, includeInSitemap?: boolean | null, slug?: { current?: string | null } | null, page?: { title?: string | null } | null } | null> | null } | null };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { allSanityProduct: { totalCount: number } };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { sanitySiteConfig?: { url?: string | null, title?: string | null, frontpage?: { description?: string | null, openGraphImage?: { asset?: { url?: string | null } | null } | null } | null } | null };

export type SanityHeroFragment = { __typename: 'SanityHero', _key?: string | null, _type?: string | null, heading?: string | null, _rawTagline?: any | null, backgroundImage?: { asset?: { altText?: string | null, gatsbyImageData: any } | null } | null, ctas?: Array<{ _type?: string | null, _key?: string | null, link?: string | null, title?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null> | null };

export type SanityCardSectionFragment = { _key?: string | null, _type?: string | null, heading?: string | null, cards?: Array<{ __typename: 'SanityPopup', _id?: string | null, _key?: string | null, streetAddress?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, name?: string | null, openingHours?: { from?: any | null, to?: any | null } | null } | { __typename: 'SanityPost', id: string, title?: string | null, publishedAt?: any | null, _createdAt?: any | null, excerpt?: string | null, slug?: { current?: string | null } | null } | { __typename: 'SanityProduct', id: string, title?: string | null, tags?: Array<string | null> | null, blurb?: string | null, slug?: { current?: string | null } | null, mainImage?: { asset?: { gatsbyImageData: any } | null } | null } | { __typename: 'SanityTraining', _id?: string | null, _key?: string | null, title?: string | null, description?: string | null, slug?: { current?: string | null } | null } | null> | null };

export type SanityUiComponentRefFragment = { _key?: string | null, name?: string | null };

export type SanityGallerySectionFragment = { _key?: string | null };

export type SanityCtaSectionFragment = { _key?: string | null, _rawBody?: any | null, cta?: { title?: string | null, link?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null };

export type SanityTextWithImageSectionFragment = { _key?: string | null, _type?: string | null, heading?: string | null, vintageBackground?: boolean | null, imagePlacement?: string | null, label?: string | null, _rawText?: any | null, image?: { alt?: string | null, asset?: { gatsbyImageData: any } | null } | null, cta?: { title?: string | null, link?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null };

export type SanityTextSectionFragment = { _key?: string | null, _type?: string | null, heading?: string | null, label?: string | null, _rawText?: any | null };

export type CtaRouteFragmentFragment = { route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null };

export type SanityTrainingFragment = { _id?: string | null, _key?: string | null, title?: string | null, description?: string | null, slug?: { current?: string | null } | null };

export type SanityPopupFragment = { _id?: string | null, _key?: string | null, streetAddress?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, name?: string | null, openingHours?: { from?: any | null, to?: any | null } | null };

export type SanityPostFragment = { id: string, title?: string | null, publishedAt?: any | null, _createdAt?: any | null, excerpt?: string | null, slug?: { current?: string | null } | null };

export type SanityProductFragment = { id: string, title?: string | null, tags?: Array<string | null> | null, blurb?: string | null, slug?: { current?: string | null } | null, mainImage?: { asset?: { gatsbyImageData: any } | null } | null };

export type SanityImageGalleryFragment = { _type?: string | null, gallery?: Array<{ __typename: 'SanityImage', _type?: string | null, asset?: { _id?: string | null, title?: string | null, altText?: string | null, gatsbyImageData: any } | null } | null> | null };

export type SanityPageQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type SanityPageQueryQuery = { sanitySiteConfig?: { blogpage?: { id: string } | null } | null, sanityPage?: { title?: string | null, description?: string | null, openGraphImage?: { asset?: { url?: string | null } | null } | null, slug?: { current?: string | null } | null, content?: Array<{ __typename: 'SanityCardSection', _key?: string | null, _type?: string | null, heading?: string | null, cards?: Array<{ __typename: 'SanityPopup', _id?: string | null, _key?: string | null, streetAddress?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, name?: string | null, openingHours?: { from?: any | null, to?: any | null } | null } | { __typename: 'SanityPost', id: string, title?: string | null, publishedAt?: any | null, _createdAt?: any | null, excerpt?: string | null, slug?: { current?: string | null } | null } | { __typename: 'SanityProduct', id: string, title?: string | null, tags?: Array<string | null> | null, blurb?: string | null, slug?: { current?: string | null } | null, mainImage?: { asset?: { gatsbyImageData: any } | null } | null } | { __typename: 'SanityTraining', _id?: string | null, _key?: string | null, title?: string | null, description?: string | null, slug?: { current?: string | null } | null } | null> | null } | { __typename: 'SanityCtaSection', _key?: string | null, _rawBody?: any | null, cta?: { title?: string | null, link?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null } | { __typename: 'SanityGallerySection', _key?: string | null } | { __typename: 'SanityHero', _key?: string | null, _type?: string | null, heading?: string | null, _rawTagline?: any | null, backgroundImage?: { asset?: { altText?: string | null, gatsbyImageData: any } | null } | null, ctas?: Array<{ _type?: string | null, _key?: string | null, link?: string | null, title?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null> | null } | { __typename: 'SanityTextSection', _key?: string | null, _type?: string | null, heading?: string | null, label?: string | null, _rawText?: any | null } | { __typename: 'SanityTextWithImageSection', _key?: string | null, _type?: string | null, heading?: string | null, vintageBackground?: boolean | null, imagePlacement?: string | null, label?: string | null, _rawText?: any | null, image?: { alt?: string | null, asset?: { gatsbyImageData: any } | null } | null, cta?: { title?: string | null, link?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null } | { __typename: 'SanityUiComponentRef', _key?: string | null, name?: string | null } | null> | null } | null };

export type SinglePostQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type SinglePostQuery = { sanityPost?: { excerpt?: string | null, _createdAt?: any | null, publishedAt?: any | null, _updatedAt?: any | null, title?: string | null, _rawBody?: any | null, author?: { name?: string | null, photo?: { alt?: string | null, asset?: { altText?: string | null, gatsbyImageData: any } | null } | null } | null, mainImage?: { asset?: { url?: string | null, altText?: string | null, gatsbyImageData: any } | null } | null, slug?: { current?: string | null } | null } | null };

export type ProductVariantFragment = { title?: string | null, _key?: string | null, grams?: number | null, isAvailable?: boolean | null, price?: number | null, sku?: string | null, taxable?: boolean | null, shippingRate?: number | null, _type?: string | null, images?: Array<{ asset?: { altText?: string | null, gatsbyImageData: any, thumbnail: any } | null } | null> | null };

export type SanityProductQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type SanityProductQueryQuery = { sanityProduct?: { title?: string | null, id: string, blurb?: string | null, _rawBody?: any | null, mainImage?: { asset?: { url?: string | null, altText?: string | null, gatsbyImageData: any } | null } | null, variants?: Array<{ title?: string | null, _key?: string | null, grams?: number | null, isAvailable?: boolean | null, price?: number | null, sku?: string | null, taxable?: boolean | null, shippingRate?: number | null, _type?: string | null, images?: Array<{ asset?: { altText?: string | null, gatsbyImageData: any, thumbnail: any } | null } | null> | null } | null> | null, categories?: Array<{ title?: string | null, slug?: { current?: string | null } | null } | null> | null, defaultProductVariant?: { title?: string | null, _key?: string | null, grams?: number | null, isAvailable?: boolean | null, price?: number | null, sku?: string | null, taxable?: boolean | null, shippingRate?: number | null, _type?: string | null, images?: Array<{ asset?: { altText?: string | null, gatsbyImageData: any, thumbnail: any } | null } | null> | null } | null } | null };

export type SanityTrainingQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type SanityTrainingQueryQuery = { sanityTraining?: { title?: string | null, description?: string | null, openGraphImage?: { asset?: { url?: string | null } | null } | null, slug?: { current?: string | null } | null, content?: Array<{ __typename: 'SanityHero', _key?: string | null, _type?: string | null, heading?: string | null, _rawTagline?: any | null, backgroundImage?: { asset?: { altText?: string | null, gatsbyImageData: any } | null } | null, ctas?: Array<{ _type?: string | null, _key?: string | null, link?: string | null, title?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null> | null } | { __typename: 'SanityImageGallery', _type?: string | null, gallery?: Array<{ __typename: 'SanityImage', _type?: string | null, asset?: { _id?: string | null, title?: string | null, altText?: string | null, gatsbyImageData: any } | null } | null> | null } | { __typename: 'SanityTextSection', _key?: string | null, _type?: string | null, heading?: string | null, label?: string | null, _rawText?: any | null } | { __typename: 'SanityTextWithImageSection', _key?: string | null, _type?: string | null, heading?: string | null, vintageBackground?: boolean | null, imagePlacement?: string | null, label?: string | null, _rawText?: any | null, image?: { alt?: string | null, asset?: { gatsbyImageData: any } | null } | null, cta?: { title?: string | null, link?: string | null, route?: { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | { id: string, slug?: { current?: string | null } | null } | null } | null } | null> | null } | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
