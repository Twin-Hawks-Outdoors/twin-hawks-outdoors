// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './documents/category'
import page from './documents/page'
import cta from './objects/cta'
import figure from './objects/figure'
import hero from './objects/hero'
import textWithImageSection from './objects/textWithImageSection'
import internalLink from './objects/internalLink'
import link from './objects/link'
import simplePortableText from './objects/simplePortableText'
import textSection from './objects/textSection'
import portableText from './objects/portableText'
import route from './documents/route'
import product from './documents/product'
import person from './documents/person'
import popup from './documents/popup'
import openingHours from './objects/openingHours'
import productVariant from './documents/productVariant'
import blockContent from './objects/blockContent'
import siteConfig from './documents/siteConfig'
import socialLink from './objects/socialLink'
import imageGallery from './objects/imageGallery'
import training from './documents/training'
import post from './documents/post'
import gallerySection from './objects/gallerySection'
import cardSection from './objects/cardSection'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    category,
    page,
    product,
    route,
    person,
    popup,
    productVariant,
    siteConfig,
    post,
    training,

    // object types
    cta,
    figure,
    hero,
    textWithImageSection,
    internalLink,
    link,
    simplePortableText,
    portableText,
    textSection,
    openingHours,
    blockContent,
    socialLink,
    imageGallery,
    gallerySection,
    cardSection
  ]),
})
