export const PRICING_FAQS = [
  {
    question: 'What is a Resource Unit?',
    answer:
      'Resource Units are the currency of your Fleetbase Cloud plan. Each resource type consumes a set number of units: Orders = 2 units; Users = 5 units; Webhooks = 5 units; Contacts, Places, Vendors, Vehicles, Drivers, Service Rates, Service Areas, Zones, and API Keys = 1 unit each. Most resources reset each billing cycle. Rolling resources — Users, Vehicles, Drivers, Webhooks, and API Keys — do not reset; their count persists into the next billing cycle. You only pay overage for usage beyond your monthly allocation.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes. You can upgrade or downgrade your Cloud plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    question: 'What is the difference between Cloud and Self-Hosted?',
    answer:
      'Fleetbase Cloud is fully managed by us — we handle infrastructure, security patches, and uptime. Self-Hosted means you deploy Fleetbase on your own servers or cloud account. The one-time $2,500 implementation fee covers deployment, CI/CD setup, configuration, and branding.',
  },
  {
    question: 'Do I need a Commercial License?',
    answer:
      'Only if you plan to build proprietary (closed-source) extensions or integrations on top of Fleetbase. The core platform is AGPL-licensed, which requires open-sourcing modifications. A Commercial License waives this obligation and keeps your custom code private. See /licensing/commercial for full details, pricing tiers, and the FAQ.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes — every Cloud plan includes a 7-day free trial capped at 50 resource units. Billing begins when either limit is reached first, so you can evaluate the platform against real operational usage.',
  },
  {
    question: 'What does the Self-Hosted implementation fee include?',
    answer:
      'The $2,500 one-time fee covers: server deployment on your infrastructure, CI/CD pipeline setup, environment configuration, custom branding, and a go-live handover session. Ongoing support is available separately via our support tiers.',
  },
  {
    question: 'Can I add more Resource Units mid-month?',
    answer:
      'Yes. You can purchase Resource Unit Packs at any time: Small (100 units / $90), Medium (300 units / $240), Large (500 units / $375), or Jumbo (1,000 units / $700). These top up your allocation immediately.',
  },
  {
    question: 'What is Professional Services?',
    answer:
      'Professional Services covers custom development work — building bespoke extensions, integrating with your existing ERP/CRM, custom workflow automation, data migration, and training. Pricing is scoped per project. Contact our sales team for a quote.',
  },
];
