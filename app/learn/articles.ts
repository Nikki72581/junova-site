export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  content: string;
}

export const CATEGORIES = [
  "All",
  "NetSuite",
  "Microsoft Dynamics",
  "Acumatica",
  "AI & Automation",
  "General ERP",
];

export const articles: Article[] = [
  {
    slug: "netsuite-saved-searches-guide",
    title: "NetSuite Saved Searches: A Complete Guide",
    description:
      "Learn how to build powerful saved searches in NetSuite to surface the data you need — from basic filters to complex formulas.",
    category: "NetSuite",
    tags: ["NetSuite", "Saved Search", "Reporting"],
    publishedAt: "2025-01-15",
    readTime: "8 min read",
    content: `
<h2>What Is a Saved Search?</h2>
<p>A Saved Search in NetSuite is a reusable query that lets you filter, sort, and display records from any record type. They power dashboards, automated alerts, workflow conditions, and custom reports throughout the system.</p>

<h2>Creating Your First Saved Search</h2>
<p>Navigate to <strong>Reports &gt; Saved Searches &gt; All Saved Searches &gt; New</strong>. Select the record type you want to search (e.g., Transaction, Customer, Item).</p>
<p>You'll see three main tabs:</p>
<ul>
  <li><strong>Criteria</strong> – Filter which records are included</li>
  <li><strong>Results</strong> – Choose which fields appear as columns</li>
  <li><strong>Highlighting</strong> – Color-code rows based on conditions</li>
</ul>

<h2>Using Formulas</h2>
<p>NetSuite saved searches support SQL-style formula fields. You can add a formula column in the Results tab to calculate values on the fly.</p>
<p>Common examples:</p>
<ul>
  <li><code>CASE WHEN {status} = 'Open' THEN 'Action Needed' ELSE 'OK' END</code></li>
  <li><code>NVL({custbody_custom_field}, 'Not Set')</code></li>
  <li><code>ROUND({amount} * 0.15, 2)</code> — calculating 15% of a value</li>
</ul>

<h2>Joining Related Records</h2>
<p>Use the "..." (ellipsis) fields in the Results tab to join related records. For example, on a Transaction search you can pull in fields from the Customer record, like <em>Customer: Email</em> or <em>Customer: Sales Rep</em>.</p>

<h2>Saving and Sharing</h2>
<p>Check <strong>Public</strong> if other users should see the search. Use <strong>Available as View</strong> to surface it on list views. You can also add it to dashboard portlets or email it on a schedule via <strong>Email</strong> tab.</p>

<h2>Best Practices</h2>
<ul>
  <li>Name searches descriptively — include the audience and purpose (e.g., "AR: Open Invoices &gt;30 Days — Finance")</li>
  <li>Keep criteria as specific as possible to improve performance</li>
  <li>Use Summary Types (Sum, Count, Max) for aggregate reporting</li>
  <li>Test with a date range filter before setting up scheduled emails</li>
</ul>
    `,
  },
  {
    slug: "netsuite-workflow-basics",
    title: "NetSuite Workflows: Getting Started",
    description:
      "Understand how NetSuite SuiteFlow workflows work, when to use them, and how to build your first approval workflow.",
    category: "NetSuite",
    tags: ["NetSuite", "SuiteFlow", "Automation", "Workflow"],
    publishedAt: "2025-02-03",
    readTime: "10 min read",
    content: `
<h2>What Are NetSuite Workflows?</h2>
<p>NetSuite Workflows (powered by SuiteFlow) let you automate business processes without code. They trigger on record events — create, edit, delete, or view — and can update fields, send emails, create records, and enforce approvals.</p>

<h2>When to Use Workflows vs. Scripts</h2>
<p>Use workflows when:</p>
<ul>
  <li>The logic is approval-based or state-machine driven</li>
  <li>Non-developers need to maintain the logic</li>
  <li>You need visual documentation of a process</li>
</ul>
<p>Use SuiteScript when:</p>
<ul>
  <li>Complex conditional logic or looping is required</li>
  <li>Performance is critical</li>
  <li>You need to call external APIs</li>
</ul>

<h2>Building a Simple Purchase Order Approval</h2>
<p>Go to <strong>Customization &gt; Workflow &gt; Workflows &gt; New</strong>.</p>
<ol>
  <li>Set <strong>Record Type</strong> to Purchase Order</li>
  <li>Set <strong>Trigger On</strong> to Before Record Submit</li>
  <li>Add an initial state: "Pending Approval"</li>
  <li>Add an action in that state: Send Email to the approver</li>
  <li>Add a transition: when the approver clicks Approve, move to "Approved" state</li>
  <li>Add a transition: when the approver clicks Reject, move to "Rejected" state</li>
</ol>

<h2>States, Actions, and Transitions</h2>
<p><strong>States</strong> represent where a record is in a process. <strong>Actions</strong> run when a record enters, exits, or is in a state. <strong>Transitions</strong> move records between states based on conditions or button clicks.</p>

<h2>Debugging Workflows</h2>
<p>Go to <strong>Customization &gt; Workflow &gt; Workflow Action Errors</strong> to see failed actions. You can also add a <em>Set Field Value</em> action that writes a timestamp to a custom field to trace execution flow.</p>
    `,
  },
  {
    slug: "netsuite-roles-permissions",
    title: "NetSuite Roles & Permissions Explained",
    description:
      "A practical guide to understanding NetSuite's role-based access control, how to configure roles, and common pitfalls to avoid.",
    category: "NetSuite",
    tags: ["NetSuite", "Security", "Roles", "Permissions"],
    publishedAt: "2025-03-01",
    readTime: "7 min read",
    content: `
<h2>How NetSuite Access Control Works</h2>
<p>NetSuite uses roles to define what records a user can see, create, edit, or delete. Each role contains a set of permissions tied to record types and features. Users are assigned one or more roles, and they can switch between them.</p>

<h2>Permission Levels</h2>
<p>Each permission has a level:</p>
<ul>
  <li><strong>None</strong> – No access</li>
  <li><strong>View</strong> – Can see but not edit</li>
  <li><strong>Create</strong> – Can create new records</li>
  <li><strong>Edit</strong> – Can modify existing records</li>
  <li><strong>Full</strong> – Can also delete records</li>
</ul>

<h2>Creating a Custom Role</h2>
<p>Go to <strong>Setup &gt; Users/Roles &gt; Manage Roles &gt; New</strong>. Start from scratch or copy an existing role. Then add permissions one by one from the Permissions subtab.</p>
<p>Key permission categories to configure:</p>
<ul>
  <li><strong>Transactions</strong> – Sales orders, invoices, POs, etc.</li>
  <li><strong>Reports</strong> – Financial statements, saved searches</li>
  <li><strong>Lists</strong> – Customers, items, vendors</li>
  <li><strong>Setup</strong> – System configuration access</li>
</ul>

<h2>Subsidiary & Department Restrictions</h2>
<p>On the <strong>Restrictions</strong> tab of a role, you can limit the user to specific subsidiaries, departments, locations, or classes. This is how you ensure a regional manager only sees their region's data.</p>

<h2>Common Mistakes</h2>
<ul>
  <li>Giving "Full" access to transactions when "Edit" is sufficient</li>
  <li>Forgetting to set the <strong>Employee Record Access</strong> level (controls HR data visibility)</li>
  <li>Not testing the role by logging in as a user with that role before go-live</li>
  <li>Overlooking "Override" permissions that bypass record restrictions</li>
</ul>
    `,
  },
  {
    slug: "dynamics-365-business-central-overview",
    title: "Microsoft Dynamics 365 Business Central: Core Concepts",
    description:
      "Key concepts every Business Central user needs to know — dimensions, posting groups, number series, and the general ledger setup.",
    category: "Microsoft Dynamics",
    tags: ["Microsoft Dynamics", "Business Central", "ERP"],
    publishedAt: "2025-02-10",
    readTime: "11 min read",
    content: `
<h2>What Makes Business Central Different</h2>
<p>Microsoft Dynamics 365 Business Central (BC) is a cloud-first ERP. Its design philosophy centers around <strong>dimensions</strong> for reporting segmentation, <strong>posting groups</strong> for accounting automation, and deep integration with the Microsoft 365 ecosystem.</p>

<h2>Dimensions</h2>
<p>Dimensions are tags you attach to transactions for analysis purposes. Instead of creating separate G/L accounts for every cost center, you attach a "Department" dimension to each transaction. This dramatically simplifies your chart of accounts while keeping reporting flexible.</p>
<p>Go to <strong>Setup &gt; Dimensions</strong> to define dimension codes and values. Common dimensions: Department, Project, Region, Cost Center.</p>

<h2>General Posting Groups</h2>
<p>BC automates which G/L accounts get hit during transactions using <strong>General Posting Setup</strong>. It cross-references:</p>
<ul>
  <li><strong>Gen. Bus. Posting Group</strong> – Set on the vendor/customer (e.g., Domestic, EU, Export)</li>
  <li><strong>Gen. Prod. Posting Group</strong> – Set on the item or G/L account (e.g., Retail, Service, Raw Material)</li>
</ul>
<p>The intersection of the two determines which accounts are debited/credited. Get this wrong and you'll have transactions posting to the wrong accounts.</p>

<h2>Number Series</h2>
<p>Every document type in BC has a number series. Go to <strong>No. Series</strong> in the search box to manage them. You can set starting numbers, ending numbers, and warning thresholds. Number series can be shared across companies or kept separate.</p>

<h2>The Chart of Accounts</h2>
<p>BC's chart of accounts uses account categories and subcategories to map to financial statement positions. Totaling accounts (account type = Total or Begin-Total/End-Total) make building subtotals easy without custom reports.</p>

<h2>Key Integrations</h2>
<ul>
  <li><strong>Outlook</strong> – See customer/vendor data from within email</li>
  <li><strong>Excel</strong> – Export and import data directly from list pages</li>
  <li><strong>Power BI</strong> – Built-in connector for live dashboards</li>
  <li><strong>Teams</strong> – Share BC records and collaborate in-context</li>
</ul>
    `,
  },
  {
    slug: "ai-automation-in-erp",
    title: "AI & Automation in ERP: Practical Starting Points",
    description:
      "Where AI actually delivers value in ERP workflows today — from anomaly detection to intelligent data entry — and how to evaluate what's hype vs. real.",
    category: "AI & Automation",
    tags: ["AI", "Automation", "ERP", "Machine Learning"],
    publishedAt: "2025-03-10",
    readTime: "8 min read",
    content: `
<h2>What's Actually Working Today</h2>
<p>AI in ERP gets a lot of hype. But underneath the marketing, a few use cases deliver consistent, measurable value:</p>
<ul>
  <li><strong>AP Automation</strong> – OCR + ML to extract invoice data, match to POs, and route exceptions. Reduces manual data entry by 60-80% in mature implementations.</li>
  <li><strong>Demand Forecasting</strong> – ML models that account for seasonality, promotions, and external signals outperform static reorder points in most industries.</li>
  <li><strong>Anomaly Detection</strong> – Flagging unusual transactions (duplicate invoices, outlier amounts, unexpected vendor activity) before they become audit findings.</li>
  <li><strong>Natural Language Querying</strong> – Asking your ERP data questions in plain English instead of writing SQL or building saved searches.</li>
</ul>

<h2>Where to Start</h2>
<p>The highest-ROI starting points are usually the most repetitive, high-volume, and data-rich processes. AP invoice processing, expense categorization, and order anomaly detection are safe first bets.</p>

<h2>Evaluating Vendor Claims</h2>
<p>Ask vendors these questions to separate real from hype:</p>
<ul>
  <li>What model or algorithm is powering this feature?</li>
  <li>What training data was used? Is it your data or generic?</li>
  <li>How does the system handle exceptions and edge cases?</li>
  <li>What's the measurable KPI improvement in comparable customers?</li>
  <li>Who maintains the model when accuracy degrades?</li>
</ul>

<h2>Build vs. Buy vs. Configure</h2>
<p>Most mid-market companies shouldn't be training custom models. The options in order of practicality:</p>
<ol>
  <li><strong>Configure</strong> existing AI features in your ERP (NetSuite, BC, and SAP B1 all have some)</li>
  <li><strong>Buy</strong> a point solution that integrates to your ERP (e.g., Stampli for AP, Recurrency for demand planning)</li>
  <li><strong>Build</strong> only if you have a truly unique process and an internal data science team</li>
</ol>

<h2>The Human-in-the-Loop Requirement</h2>
<p>Even the best AI makes mistakes. Every AI-driven workflow needs a clear exception path — a queue, an alert, or a dashboard where humans review edge cases. Removing humans entirely from high-stakes processes is where AI projects fail.</p>
    `,
  },
  {
    slug: "acumatica-customization-basics",
    title: "Acumatica Customization Basics",
    description:
      "Learn how Acumatica's customization framework works — from screen modifications in the Customization Editor to business event rules and low-code automation.",
    category: "Acumatica",
    tags: ["Acumatica", "Customization", "Low-Code"],
    publishedAt: "2025-02-20",
    readTime: "9 min read",
    content: `
<h2>Acumatica's Customization Philosophy</h2>
<p>Acumatica is designed for customization at the framework level. Changes are packaged into <strong>Customization Projects</strong> — versioned bundles that can be published, exported, and imported across environments. This makes upgrades much safer compared to direct database or code changes.</p>

<h2>The Customization Editor</h2>
<p>Access it at <strong>System &gt; Customization &gt; Customization Projects</strong>. From there you can:</p>
<ul>
  <li>Add custom fields to existing screens (DAC extensions)</li>
  <li>Modify screen layouts — hide, reorder, or add fields</li>
  <li>Create custom screens from scratch</li>
  <li>Add custom actions (buttons) to toolbars</li>
</ul>

<h2>Business Events</h2>
<p>Business Events (under <strong>System &gt; Automation &gt; Business Events</strong>) are the low-code way to trigger actions when records change. You can:</p>
<ul>
  <li>Send email notifications when a record enters a certain state</li>
  <li>Create follow-on records automatically</li>
  <li>Push data to external systems via generic inquiries</li>
</ul>

<h2>Generic Inquiries</h2>
<p>Acumatica's equivalent of NetSuite Saved Searches. Under <strong>System &gt; Customization &gt; Generic Inquiries</strong>. They power dashboards, data entry screens, and integration endpoints. You can expose a Generic Inquiry as an OData feed for Power BI or Excel connectivity.</p>

<h2>Push Notifications</h2>
<p>Business Events paired with Push Notifications (webhooks) let you trigger external systems in near real-time when Acumatica records change. This is the recommended integration pattern for event-driven architectures connecting to Acumatica.</p>

<h2>Best Practices for Customizations</h2>
<ul>
  <li>Always work in a separate Customization Project per functional area</li>
  <li>Test customizations in a sandbox environment before publishing to production</li>
  <li>Document every customization — field purpose, requester, and date</li>
  <li>Review customizations before each major Acumatica version upgrade</li>
</ul>
    `,
  },
  {
    slug: "choosing-the-right-erp",
    title: "Choosing the Right ERP: A Framework for Mid-Market Companies",
    description:
      "How to evaluate ERP options without getting sold. A practical framework for requirements gathering, vendor assessment, and avoiding common selection mistakes.",
    category: "General ERP",
    tags: ["ERP Selection", "Strategy", "Implementation"],
    publishedAt: "2025-03-05",
    readTime: "13 min read",
    content: `
<h2>Why Most ERP Selections Go Wrong</h2>
<p>The typical ERP selection process is vendor-driven. You issue an RFP, vendors demo their best scenarios, and you pick the one that looked shiniest. Then reality hits during implementation. The demos showed features that require expensive customization. The vendor's reference customers had different processes than yours.</p>

<h2>Start With Process, Not Software</h2>
<p>Before talking to any vendor, document your current processes and your future-state requirements. Focus on:</p>
<ul>
  <li>Where does data currently live, and where does it need to go?</li>
  <li>Which processes are broken today? Which ones work and must be preserved?</li>
  <li>What reporting does each department actually use to run the business?</li>
  <li>What integrations (current and planned) are non-negotiable?</li>
</ul>

<h2>The Requirements Hierarchy</h2>
<p>Not all requirements are equal. Categorize them:</p>
<ul>
  <li><strong>Must-Have</strong> – Non-negotiable. Any ERP that can't support this is disqualified.</li>
  <li><strong>Should-Have</strong> – High value, but you could live without it if the trade-off is worthwhile.</li>
  <li><strong>Nice-to-Have</strong> – Features you'd use if free; not worth paying a premium for.</li>
</ul>

<h2>Evaluating Vendors Honestly</h2>
<p>Run scripted demos. Give every vendor the same 10-15 scenarios — your scenarios, not theirs. Watch how they handle the hard ones. Deductions for "we'd need to customize that" should carry significant weight in your scoring.</p>
<p>Ask every vendor for three reference customers with similar:</p>
<ul>
  <li>Industry and business model</li>
  <li>Transaction volume</li>
  <li>Integration complexity</li>
</ul>

<h2>Total Cost of Ownership</h2>
<p>License/subscription cost is just the start. Estimate:</p>
<ul>
  <li>Implementation services (commonly 2-4x annual license)</li>
  <li>Customization and integration development</li>
  <li>Training and change management</li>
  <li>Ongoing support and administration</li>
  <li>Upgrade costs</li>
</ul>

<h2>Red Flags to Watch For</h2>
<ul>
  <li>Vendor won't provide fixed-price implementation contracts</li>
  <li>No customers in your industry willing to provide references</li>
  <li>Demo environment is noticeably different from production</li>
  <li>Sales rep can't answer basic technical questions</li>
  <li>Pushy timeline pressure ("this deal expires Friday")</li>
</ul>
    `,
  },
];
