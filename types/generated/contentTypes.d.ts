import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAnnouncementAnnouncement extends Schema.CollectionType {
  collectionName: 'announcements';
  info: {
    singularName: 'announcement';
    pluralName: 'announcements';
    displayName: 'announcement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    post: Attribute.RichText;
    locales: Attribute.Relation<
      'api::announcement.announcement',
      'manyToMany',
      'api::locale.locale'
    >;
    locations: Attribute.Relation<
      'api::announcement.announcement',
      'manyToMany',
      'api::location.location'
    >;
    calendar: Attribute.DateTime;
    sports: Attribute.Relation<
      'api::announcement.announcement',
      'manyToMany',
      'api::sport.sport'
    >;
    slug: Attribute.String;
    hero: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAttributeAttribute extends Schema.CollectionType {
  collectionName: 'attributes';
  info: {
    singularName: 'attribute';
    pluralName: 'attributes';
    displayName: 'attribute';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
    description: Attribute.RichText;
    faqs: Attribute.Relation<
      'api::attribute.attribute',
      'manyToMany',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::attribute.attribute',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::attribute.attribute',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String & Attribute.Unique;
    markdown: Attribute.RichText;
    locales: Attribute.Relation<
      'api::blog.blog',
      'oneToMany',
      'api::locale.locale'
    >;
    tags: Attribute.Text & Attribute.DefaultTo<'- '>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'brand';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    tagline: Attribute.String;
    svg: Attribute.Text;
    retail: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::retail.retail'
    >;
    sports: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::sport.sport'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConditionCondition extends Schema.CollectionType {
  collectionName: 'conditions';
  info: {
    singularName: 'condition';
    pluralName: 'conditions';
    displayName: 'condition';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    closed: Attribute.Boolean;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    excerpt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::condition.condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::condition.condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDemoDemo extends Schema.SingleType {
  collectionName: 'demos';
  info: {
    singularName: 'demo';
    pluralName: 'demos';
    displayName: 'demo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::demo.demo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::demo.demo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    start: Attribute.DateTime;
    finish: Attribute.DateTime;
    date: Attribute.DateTime;
    tour: Attribute.Relation<'api::event.event', 'oneToOne', 'api::tour.tour'>;
    topbar: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExperienceExperience extends Schema.SingleType {
  collectionName: 'experiences';
  info: {
    singularName: 'experience';
    pluralName: 'experiences';
    displayName: 'experience';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.String;
    attributes: Attribute.Relation<
      'api::faq.faq',
      'manyToMany',
      'api::attribute.attribute'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiImagegrabImagegrab extends Schema.CollectionType {
  collectionName: 'imagegrabs';
  info: {
    singularName: 'imagegrab';
    pluralName: 'imagegrabs';
    displayName: 'imagegrab';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::imagegrab.imagegrab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::imagegrab.imagegrab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvasiveInvasive extends Schema.SingleType {
  collectionName: 'invasives';
  info: {
    singularName: 'invasive';
    pluralName: 'invasives';
    displayName: 'invasive';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invasive.invasive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invasive.invasive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobJob extends Schema.CollectionType {
  collectionName: 'jobs';
  info: {
    singularName: 'job';
    pluralName: 'jobs';
    displayName: 'job';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    locales: Attribute.Relation<
      'api::job.job',
      'manyToMany',
      'api::locale.locale'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLocaleLocale extends Schema.CollectionType {
  collectionName: 'locales';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    displayName: 'locale';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String & Attribute.Unique;
    locations: Attribute.Relation<
      'api::locale.locale',
      'oneToMany',
      'api::location.location'
    >;
    season_start: Attribute.Date;
    season_end: Attribute.Date;
    about: Attribute.RichText;
    tours: Attribute.Relation<
      'api::locale.locale',
      'oneToMany',
      'api::tour.tour'
    >;
    testimonials: Attribute.Relation<
      'api::locale.locale',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    blog: Attribute.Relation<
      'api::locale.locale',
      'manyToOne',
      'api::blog.blog'
    >;
    topbar: Attribute.RichText;
    phone: Attribute.BigInteger;
    email: Attribute.String;
    jobs: Attribute.Relation<
      'api::locale.locale',
      'manyToMany',
      'api::job.job'
    >;
    url: Attribute.String;
    announcements: Attribute.Relation<
      'api::locale.locale',
      'manyToMany',
      'api::announcement.announcement'
    >;
    peek_base: Attribute.String;
    peek_tours: Attribute.String;
    peek_rentals: Attribute.String;
    peek_single: Attribute.String;
    peek_double: Attribute.String;
    peek_paddleboard: Attribute.String;
    ogImage: Attribute.String;
    latitude: Attribute.Decimal;
    longitude: Attribute.Decimal;
    geoRadius: Attribute.Integer;
    themeColor: Attribute.String;
    numberOfEmployees: Attribute.String;
    ogImageDescription: Attribute.String;
    instagram: Attribute.String;
    facebook: Attribute.String;
    tripadvisor: Attribute.String;
    teams: Attribute.Relation<
      'api::locale.locale',
      'manyToMany',
      'api::team.team'
    >;
    excerpt: Attribute.String;
    priceRange: Attribute.String;
    paymentAccepted: Attribute.Text;
    slogan: Attribute.String;
    jobEmail: Attribute.String;
    RainCheck: Attribute.DateTime;
    RainCheckReason: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::locale.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::locale.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations';
  info: {
    singularName: 'location';
    pluralName: 'locations';
    displayName: 'location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    svg: Attribute.Text;
    description: Attribute.RichText;
    link: Attribute.Text;
    order: Attribute.Integer;
    address: Attribute.RichText;
    opening_time: Attribute.Time;
    closing_time: Attribute.Time;
    locale: Attribute.Relation<
      'api::location.location',
      'manyToOne',
      'api::locale.locale'
    >;
    announcements: Attribute.Relation<
      'api::location.location',
      'manyToMany',
      'api::announcement.announcement'
    >;
    streetAddress: Attribute.String;
    addressLocality: Attribute.String;
    addressRegion: Attribute.String;
    postalCode: Attribute.String;
    paymentAccepted: Attribute.Text;
    commonName: Attribute.String;
    schemaType: Attribute.String;
    offSeasonDetails: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMoonlightTourDateTimeMoonlightTourDateTime
  extends Schema.CollectionType {
  collectionName: 'moonlight_tour_date_times';
  info: {
    singularName: 'moonlight-tour-date-time';
    pluralName: 'moonlight-tour-date-times';
    displayName: 'moonlight tour date time';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    date: Attribute.Date;
    start: Attribute.Time;
    finish: Attribute.Time;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::moonlight-tour-date-time.moonlight-tour-date-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::moonlight-tour-date-time.moonlight-tour-date-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaddleInfoPaddleInfo extends Schema.CollectionType {
  collectionName: 'paddle_infos';
  info: {
    singularName: 'paddle-info';
    pluralName: 'paddle-infos';
    displayName: 'paddle-info';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    info: Attribute.RichText;
    sports: Attribute.Relation<
      'api::paddle-info.paddle-info',
      'manyToMany',
      'api::sport.sport'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::paddle-info.paddle-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::paddle-info.paddle-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPolicyPolicy extends Schema.CollectionType {
  collectionName: 'policies';
  info: {
    singularName: 'policy';
    pluralName: 'policies';
    displayName: 'policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    markdown: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::policy.policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::policy.policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProtectProtect extends Schema.SingleType {
  collectionName: 'protects';
  info: {
    singularName: 'protect';
    pluralName: 'protects';
    displayName: 'protect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    details: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::protect.protect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::protect.protect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentalRental extends Schema.SingleType {
  collectionName: 'rentals';
  info: {
    singularName: 'rental';
    pluralName: 'rentals';
    displayName: 'rental';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rental.rental',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rental.rental',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentalAddonRentalAddon extends Schema.CollectionType {
  collectionName: 'rental_addons';
  info: {
    singularName: 'rental-addon';
    pluralName: 'rental-addons';
    displayName: 'rental addon';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    single: Attribute.Integer;
    double: Attribute.Integer;
    sup: Attribute.Integer;
    link: Attribute.String;
    attribute: Attribute.Relation<
      'api::rental-addon.rental-addon',
      'oneToOne',
      'api::attribute.attribute'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rental-addon.rental-addon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rental-addon.rental-addon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentalRateRentalRate extends Schema.CollectionType {
  collectionName: 'rental_rates';
  info: {
    singularName: 'rental-rate';
    pluralName: 'rental-rates';
    displayName: 'rental-rate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    oneHour: Attribute.Integer;
    threeHour: Attribute.Integer;
    fullDay: Attribute.Integer;
    retail: Attribute.Relation<
      'api::rental-rate.rental-rate',
      'oneToOne',
      'api::retail.retail'
    >;
    item: Attribute.String;
    favorite: Attribute.Boolean;
    order: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rental-rate.rental-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rental-rate.rental-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRetailRetail extends Schema.CollectionType {
  collectionName: 'retails';
  info: {
    singularName: 'retail';
    pluralName: 'retails';
    displayName: 'retail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    crew: Attribute.Enumeration<['single', 'tandem', 'quad']>;
    capacity: Attribute.Integer;
    length: Attribute.Decimal;
    hullweight: Attribute.Decimal;
    riggedweight: Attribute.Decimal;
    width: Attribute.Decimal;
    description: Attribute.RichText;
    type: Attribute.Enumeration<['sup', 'kayak']>;
    features: Attribute.RichText;
    thickness: Attribute.Decimal;
    volume: Attribute.Decimal;
    series: Attribute.Enumeration<
      [
        'mirage',
        'island',
        'inflatable',
        'performance',
        'recreational',
        'sit-on-top',
        'adventure recreational',
        'light touring'
      ]
    >;
    inflatable: Attribute.Boolean;
    demo: Attribute.Boolean;
    cutout: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    excerpt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 120;
        maxLength: 160;
      }>;
    brand: Attribute.Relation<
      'api::retail.retail',
      'manyToOne',
      'api::brand.brand'
    >;
    price: Attribute.Decimal;
    featured: Attribute.Boolean;
    discount: Attribute.Integer;
    rental_rate: Attribute.Relation<
      'api::retail.retail',
      'oneToOne',
      'api::rental-rate.rental-rate'
    >;
    sport: Attribute.Relation<
      'api::retail.retail',
      'manyToOne',
      'api::sport.sport'
    >;
    link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::retail.retail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::retail.retail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRiverRiver extends Schema.SingleType {
  collectionName: 'rivers';
  info: {
    singularName: 'river';
    pluralName: 'rivers';
    displayName: 'river';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::river.river',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::river.river',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShopShop extends Schema.SingleType {
  collectionName: 'shops';
  info: {
    singularName: 'shop';
    pluralName: 'shops';
    displayName: 'shop';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::shop.shop', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::shop.shop', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSportSport extends Schema.CollectionType {
  collectionName: 'sports';
  info: {
    singularName: 'sport';
    pluralName: 'sports';
    displayName: 'sport';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    description: Attribute.RichText;
    brands: Attribute.Relation<
      'api::sport.sport',
      'manyToMany',
      'api::brand.brand'
    >;
    retails: Attribute.Relation<
      'api::sport.sport',
      'oneToMany',
      'api::retail.retail'
    >;
    paddle_infos: Attribute.Relation<
      'api::sport.sport',
      'manyToMany',
      'api::paddle-info.paddle-info'
    >;
    announcements: Attribute.Relation<
      'api::sport.sport',
      'manyToMany',
      'api::announcement.announcement'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sport.sport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sport.sport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSunsetTourTimeSunsetTourTime extends Schema.CollectionType {
  collectionName: 'sunset_tour_times';
  info: {
    singularName: 'sunset-tour-time';
    pluralName: 'sunset-tour-times';
    displayName: 'Sunset Tour Times';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    startTime: Attribute.Time;
    endTime: Attribute.Time;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sunset-tour-time.sunset-tour-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sunset-tour-time.sunset-tour-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.CollectionType {
  collectionName: 'teams';
  info: {
    singularName: 'team';
    pluralName: 'teams';
    displayName: 'team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    locales: Attribute.Relation<
      'api::team.team',
      'manyToMany',
      'api::locale.locale'
    >;
    order: Attribute.Integer;
    profile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Attribute.RichText;
    testimonials: Attribute.Relation<
      'api::team.team',
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    testimonial: Attribute.Text;
    customer: Attribute.String;
    location: Attribute.String;
    sign: Attribute.String;
    source: Attribute.String;
    stars: Attribute.Integer;
    locale: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToOne',
      'api::locale.locale'
    >;
    teams: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToMany',
      'api::team.team'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTourTour extends Schema.CollectionType {
  collectionName: 'tours';
  info: {
    singularName: 'tour';
    pluralName: 'tours';
    displayName: 'tour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    information: Attribute.RichText;
    start: Attribute.Time;
    finish: Attribute.Time;
    peek: Attribute.String;
    price: Attribute.Integer;
    minimum: Attribute.Integer;
    duration: Attribute.Decimal;
    fitness: Attribute.Enumeration<
      ['easy peasy', 'easy', 'easy / moderate', 'moderate']
    >;
    sport: Attribute.Enumeration<['kayak', 'sup']>;
    excerpt: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 120;
        maxLength: 160;
      }>;
    ogimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    featured: Attribute.Boolean;
    locale: Attribute.Relation<
      'api::tour.tour',
      'manyToOne',
      'api::locale.locale'
    >;
    timeframe: Attribute.String;
    experience: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tour.tour', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tour.tour', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiWeatherDayWeatherDay extends Schema.CollectionType {
  collectionName: 'weather_days';
  info: {
    singularName: 'weather-day';
    pluralName: 'weather-days';
    displayName: 'weather day';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    startDate: Attribute.Date;
    startTime: Attribute.Time;
    link: Attribute.String;
    endDate: Attribute.Date;
    endTime: Attribute.Time;
    closed: Attribute.Boolean;
    condition: Attribute.Relation<
      'api::weather-day.weather-day',
      'oneToOne',
      'api::condition.condition'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::weather-day.weather-day',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::weather-day.weather-day',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::announcement.announcement': ApiAnnouncementAnnouncement;
      'api::attribute.attribute': ApiAttributeAttribute;
      'api::blog.blog': ApiBlogBlog;
      'api::brand.brand': ApiBrandBrand;
      'api::condition.condition': ApiConditionCondition;
      'api::demo.demo': ApiDemoDemo;
      'api::event.event': ApiEventEvent;
      'api::experience.experience': ApiExperienceExperience;
      'api::faq.faq': ApiFaqFaq;
      'api::imagegrab.imagegrab': ApiImagegrabImagegrab;
      'api::invasive.invasive': ApiInvasiveInvasive;
      'api::job.job': ApiJobJob;
      'api::locale.locale': ApiLocaleLocale;
      'api::location.location': ApiLocationLocation;
      'api::moonlight-tour-date-time.moonlight-tour-date-time': ApiMoonlightTourDateTimeMoonlightTourDateTime;
      'api::paddle-info.paddle-info': ApiPaddleInfoPaddleInfo;
      'api::policy.policy': ApiPolicyPolicy;
      'api::protect.protect': ApiProtectProtect;
      'api::rental.rental': ApiRentalRental;
      'api::rental-addon.rental-addon': ApiRentalAddonRentalAddon;
      'api::rental-rate.rental-rate': ApiRentalRateRentalRate;
      'api::retail.retail': ApiRetailRetail;
      'api::river.river': ApiRiverRiver;
      'api::shop.shop': ApiShopShop;
      'api::sport.sport': ApiSportSport;
      'api::sunset-tour-time.sunset-tour-time': ApiSunsetTourTimeSunsetTourTime;
      'api::team.team': ApiTeamTeam;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::tour.tour': ApiTourTour;
      'api::weather-day.weather-day': ApiWeatherDayWeatherDay;
    }
  }
}
