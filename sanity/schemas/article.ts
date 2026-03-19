import { defineField, defineType } from "sanity";
import { ComposeIcon } from "@sanity/icons";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: ComposeIcon,
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) return true;
          return /^[a-z0-9-]+$/.test(slug.current)
            ? true
            : "Slug must be lowercase letters, numbers, and hyphens only";
        }),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Shown on article cards. Keep under 200 characters.",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "NetSuite", value: "NetSuite" },
          { title: "SAP", value: "SAP" },
          { title: "Microsoft Dynamics", value: "Microsoft Dynamics" },
          { title: "Acumatica", value: "Acumatica" },
          { title: "Salesforce", value: "Salesforce" },
          { title: "AI & Automation", value: "AI & Automation" },
          { title: "Integrations", value: "Integrations" },
          { title: "General ERP", value: "General ERP" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Status & Visibility ───────────────────────────────────────────────
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "draft",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Article",
      description: "Pin this article to the hero slot on the Learn hub.",
      type: "boolean",
      initialValue: false,
    }),

    // ── Dates ─────────────────────────────────────────────────────────────
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      description: "Set this when you significantly revise an existing article.",
      type: "date",
    }),

    // ── Taxonomy ──────────────────────────────────────────────────────────
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule) =>
        Rule.max(8).warning("Consider limiting tags to 8 for consistency"),
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTimeOverride",
      title: "Read Time (minutes)",
      description:
        "Override the auto-estimated read time. Leave blank to calculate automatically.",
      type: "number",
      validation: (Rule) =>
        Rule.min(1).max(120).integer().warning("Must be between 1 and 120 minutes"),
    }),

    // ── Media ─────────────────────────────────────────────────────────────
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) =>
            Rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset && !alt) {
                return "Alt text is required when a cover image is set";
              }
              return true;
            }),
        }),
      ],
    }),

    // ── SEO ───────────────────────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          description: "Overrides the article title in search results. Max 60 characters.",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          description: "Search result snippet. Max 155 characters.",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.max(155),
        }),
        defineField({
          name: "ogImage",
          title: "Social Share Image",
          description: "Used for LinkedIn/Twitter cards. Defaults to cover image if not set.",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // ── Body ──────────────────────────────────────────────────────────────
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      validation: (Rule) => Rule.required().min(1).error("Article body cannot be empty"),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true,
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal Article Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Article",
                    to: [{ type: "article" }],
                  },
                ],
              },
            ],
          },
        },
        // ── Custom block types ─────────────────────────────────────────
        {
          type: "object",
          name: "codeBlock",
          title: "Code Block",
          fields: [
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "JavaScript", value: "javascript" },
                  { title: "TypeScript", value: "typescript" },
                  { title: "SQL", value: "sql" },
                  { title: "XML", value: "xml" },
                  { title: "JSON", value: "json" },
                  { title: "Bash / Shell", value: "bash" },
                  { title: "SuiteScript (JS)", value: "suitescript" },
                  { title: "Groovy", value: "groovy" },
                  { title: "Plain Text", value: "text" },
                ],
              },
              initialValue: "javascript",
            },
            {
              name: "filename",
              title: "Filename",
              description: 'Optional label shown above the code block, e.g. "customizeGL.js"',
              type: "string",
            },
            {
              name: "code",
              title: "Code",
              type: "text",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: { language: "language", filename: "filename", code: "code" },
            prepare({ language, filename, code }: any) {
              return {
                title: filename ?? `Code (${language ?? "text"})`,
                subtitle: (code ?? "").slice(0, 60),
              };
            },
          },
        },
        {
          type: "object",
          name: "callout",
          title: "Callout Box",
          fields: [
            {
              name: "tone",
              title: "Tone",
              type: "string",
              options: {
                list: [
                  { title: "Info", value: "info" },
                  { title: "Tip", value: "tip" },
                  { title: "Warning", value: "warning" },
                  { title: "Important", value: "important" },
                ],
                layout: "radio",
              },
              initialValue: "info",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "body",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Code", value: "code" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          { name: "href", type: "url", title: "URL" },
                          {
                            name: "blank",
                            type: "boolean",
                            title: "Open in new tab",
                            initialValue: true,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              validation: (Rule: any) => Rule.required().min(1),
            },
          ],
          preview: {
            select: { tone: "tone" },
            prepare({ tone }: any) {
              const icons: Record<string, string> = {
                info: "ℹ️",
                tip: "💡",
                warning: "⚠️",
                important: "🔴",
              };
              return {
                title: `${icons[tone] ?? ""} Callout (${tone ?? "info"})`,
              };
            },
          },
        },
        {
          type: "object",
          name: "figure",
          title: "Image with Caption",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          preview: {
            select: { media: "image", caption: "caption", alt: "alt" },
            prepare({ media, caption, alt }: any) {
              return {
                title: caption ?? alt ?? "Image",
                media,
              };
            },
          },
        },
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              title: "Video URL",
              description: "YouTube or Loom URL",
              type: "url",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          preview: {
            select: { url: "url", caption: "caption" },
            prepare({ url, caption }: any) {
              return {
                title: caption ?? "Video",
                subtitle: url,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      publishedAt: "publishedAt",
      status: "status",
      media: "coverImage",
    },
    prepare({ title, category, publishedAt, status, media }) {
      const statusPrefix =
        status && status !== "published" ? `[${status.toUpperCase()}] ` : "";
      return {
        title,
        subtitle: `${statusPrefix}${category ?? ""} · ${publishedAt ?? "Unpublished"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, Newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Status then Date",
      name: "statusFirst",
      by: [
        { field: "status", direction: "asc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
});
