import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  BookIcon,
  DocumentIcon,
  TagIcon,
} from "@sanity/icons";
import { schemaTypes } from "./sanity/schemas";
import { StudioLogo } from "./sanity/components/StudioLogo";

const CATEGORIES = [
  "NetSuite",
  "Microsoft Dynamics",
  "Acumatica",
  "SAP",
  "Salesforce",
  "AI & Automation",
  "General ERP",
  "Integrations",
];

export default defineConfig({
  name: "junova-learning-center",
  title: "Junova Learning Center",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  studio: {
    components: {
      logo: StudioLogo,
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // All articles sorted by date
            S.listItem()
              .title("All Articles")
              .icon(DocumentIcon)
              .child(
                S.documentTypeList("article")
                  .title("All Articles")
                  .defaultOrdering([
                    { field: "publishedAt", direction: "desc" },
                  ])
              ),

            S.divider(),

            // Browse by category
            S.listItem()
              .title("By Category")
              .icon(TagIcon)
              .child(
                S.list()
                  .title("Browse by Category")
                  .items(
                    CATEGORIES.map((cat) =>
                      S.listItem()
                        .title(cat)
                        .icon(BookIcon)
                        .child(
                          S.documentList()
                            .title(cat)
                            .filter(
                              '_type == "article" && category == $cat'
                            )
                            .params({ cat })
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        )
                    )
                  )
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
