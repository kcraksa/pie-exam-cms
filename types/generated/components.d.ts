import type { Schema, Struct } from '@strapi/strapi';

export interface SharedExpertize extends Struct.ComponentSchema {
  collectionName: 'components_shared_expertizes';
  info: {
    description: '';
    displayName: 'Expertize';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    illustration: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title_of_expertize: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedExpertizePoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_expertize_points';
  info: {
    description: '';
    displayName: 'Expertize Points';
  };
  attributes: {
    point: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeoProperties extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_properties';
  info: {
    displayName: 'SEO Properties';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.expertize': SharedExpertize;
      'shared.expertize-points': SharedExpertizePoints;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seo-properties': SharedSeoProperties;
      'shared.slider': SharedSlider;
    }
  }
}
