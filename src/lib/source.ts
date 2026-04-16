import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';
import * as docs_0 from '@/../content/docs/apps/index.mdx';
import * as docs_1 from '@/../content/docs/apps/navigator-app/customization.mdx';
import * as docs_2 from '@/../content/docs/apps/navigator-app/index.mdx';
import * as docs_3 from '@/../content/docs/apps/navigator-app/overview.mdx';
import * as docs_4 from '@/../content/docs/apps/navigator-app/setup.mdx';
import * as docs_5 from '@/../content/docs/apps/storefront-app/customization.mdx';
import * as docs_6 from '@/../content/docs/apps/storefront-app/index.mdx';
import * as docs_7 from '@/../content/docs/apps/storefront-app/overview.mdx';
import * as docs_8 from '@/../content/docs/apps/storefront-app/setup.mdx';
import * as docs_9 from '@/../content/docs/community/changelog.mdx';
import * as docs_10 from '@/../content/docs/community/contributing.mdx';
import * as docs_11 from '@/../content/docs/community/discord.mdx';
import * as docs_12 from '@/../content/docs/community/faq.mdx';
import * as docs_13 from '@/../content/docs/community/index.mdx';
import * as docs_14 from '@/../content/docs/community/licensing.mdx';
import * as docs_15 from '@/../content/docs/extending-fleetbase/backend-development.mdx';
import * as docs_16 from '@/../content/docs/extending-fleetbase/dashboard-widgets.mdx';
import * as docs_17 from '@/../content/docs/extending-fleetbase/extension-architecture.mdx';
import * as docs_18 from '@/../content/docs/extending-fleetbase/frontend-development.mdx';
import * as docs_19 from '@/../content/docs/extending-fleetbase/hooks-and-lifecycle.mdx';
import * as docs_20 from '@/../content/docs/extending-fleetbase/index.mdx';
import * as docs_21 from '@/../content/docs/extending-fleetbase/menus-and-navigation.mdx';
import * as docs_22 from '@/../content/docs/extending-fleetbase/overview.mdx';
import * as docs_23 from '@/../content/docs/extending-fleetbase/publishing-to-marketplace.mdx';
import * as docs_24 from '@/../content/docs/extending-fleetbase/registering-components.mdx';
import * as docs_25 from '@/../content/docs/extending-fleetbase/scaffolding-your-extension.mdx';
import * as docs_26 from '@/../content/docs/extending-fleetbase/virtual-routes.mdx';
import * as docs_27 from '@/../content/docs/fleetops/analytics/index.mdx';
import * as docs_28 from '@/../content/docs/fleetops/analytics/reports.mdx';
import * as docs_29 from '@/../content/docs/fleetops/connectivity/devices.mdx';
import * as docs_30 from '@/../content/docs/fleetops/connectivity/index.mdx';
import * as docs_31 from '@/../content/docs/fleetops/connectivity/real-time-tracking.mdx';
import * as docs_32 from '@/../content/docs/fleetops/connectivity/sensors.mdx';
import * as docs_33 from '@/../content/docs/fleetops/connectivity/telematics.mdx';
import * as docs_34 from '@/../content/docs/fleetops/index.mdx';
import * as docs_35 from '@/../content/docs/fleetops/maintenance/equipment.mdx';
import * as docs_36 from '@/../content/docs/fleetops/maintenance/index.mdx';
import * as docs_37 from '@/../content/docs/fleetops/maintenance/maintenance-schedules.mdx';
import * as docs_38 from '@/../content/docs/fleetops/maintenance/parts.mdx';
import * as docs_39 from '@/../content/docs/fleetops/maintenance/work-orders.mdx';
import * as docs_40 from '@/../content/docs/fleetops/management/contacts.mdx';
import * as docs_41 from '@/../content/docs/fleetops/management/drivers.mdx';
import * as docs_42 from '@/../content/docs/fleetops/management/fleets.mdx';
import * as docs_43 from '@/../content/docs/fleetops/management/fuel-reports.mdx';
import * as docs_44 from '@/../content/docs/fleetops/management/index.mdx';
import * as docs_45 from '@/../content/docs/fleetops/management/issues.mdx';
import * as docs_46 from '@/../content/docs/fleetops/management/places.mdx';
import * as docs_47 from '@/../content/docs/fleetops/management/vehicles.mdx';
import * as docs_48 from '@/../content/docs/fleetops/management/vendors.mdx';
import * as docs_49 from '@/../content/docs/fleetops/operations/index.mdx';
import * as docs_50 from '@/../content/docs/fleetops/operations/orchestrator.mdx';
import * as docs_51 from '@/../content/docs/fleetops/operations/order-configurations.mdx';
import * as docs_52 from '@/../content/docs/fleetops/operations/orders.mdx';
import * as docs_53 from '@/../content/docs/fleetops/operations/routing-and-dispatching.mdx';
import * as docs_54 from '@/../content/docs/fleetops/operations/scheduler.mdx';
import * as docs_55 from '@/../content/docs/fleetops/operations/service-quotes.mdx';
import * as docs_56 from '@/../content/docs/fleetops/operations/service-rates.mdx';
import * as docs_57 from '@/../content/docs/fleetops/overview.mdx';
import * as docs_58 from '@/../content/docs/fleetops/settings/custom-fields.mdx';
import * as docs_59 from '@/../content/docs/fleetops/settings/index.mdx';
import * as docs_60 from '@/../content/docs/fleetops/settings/navigator-app.mdx';
import * as docs_61 from '@/../content/docs/fleetops/settings/notifications.mdx';
import * as docs_62 from '@/../content/docs/fleetops/settings/orchestrator.mdx';
import * as docs_63 from '@/../content/docs/fleetops/settings/payments.mdx';
import * as docs_64 from '@/../content/docs/fleetops/settings/routing.mdx';
import * as docs_65 from '@/../content/docs/fleetops/settings/scheduling.mdx';
import * as docs_66 from '@/../content/docs/getting-started/architecture-overview.mdx';
import * as docs_67 from '@/../content/docs/getting-started/core-concepts.mdx';
import * as docs_68 from '@/../content/docs/getting-started/deployment-options.mdx';
import * as docs_69 from '@/../content/docs/getting-started/index.mdx';
import * as docs_70 from '@/../content/docs/getting-started/quickstart-cloud.mdx';
import * as docs_71 from '@/../content/docs/getting-started/quickstart-self-hosted.mdx';
import * as docs_72 from '@/../content/docs/getting-started/what-is-fleetbase.mdx';
import * as docs_73 from '@/../content/docs/guides/build-a-custom-extension.mdx';
import * as docs_74 from '@/../content/docs/guides/build-a-last-mile-delivery-app.mdx';
import * as docs_75 from '@/../content/docs/guides/build-an-on-demand-marketplace.mdx';
import * as docs_76 from '@/../content/docs/guides/configure-automated-order-routing.mdx';
import * as docs_77 from '@/../content/docs/guides/index.mdx';
import * as docs_78 from '@/../content/docs/guides/integrate-with-your-erp.mdx';
import * as docs_79 from '@/../content/docs/guides/set-up-multi-tenant-organizations.mdx';
import * as docs_80 from '@/../content/docs/guides/track-a-fleet-in-real-time.mdx';
import * as docs_81 from '@/../content/docs/guides/white-label-the-navigator-app.mdx';
import * as docs_82 from '@/../content/docs/index.mdx';
import * as docs_83 from '@/../content/docs/ledger/accounting/chart-of-accounts.mdx';
import * as docs_84 from '@/../content/docs/ledger/accounting/general-ledger.mdx';
import * as docs_85 from '@/../content/docs/ledger/accounting/index.mdx';
import * as docs_86 from '@/../content/docs/ledger/accounting/journal-entries.mdx';
import * as docs_87 from '@/../content/docs/ledger/billing/index.mdx';
import * as docs_88 from '@/../content/docs/ledger/billing/invoice-templates.mdx';
import * as docs_89 from '@/../content/docs/ledger/billing/invoices.mdx';
import * as docs_90 from '@/../content/docs/ledger/index.mdx';
import * as docs_91 from '@/../content/docs/ledger/overview.mdx';
import * as docs_92 from '@/../content/docs/ledger/payments/gateways.mdx';
import * as docs_93 from '@/../content/docs/ledger/payments/index.mdx';
import * as docs_94 from '@/../content/docs/ledger/payments/transactions.mdx';
import * as docs_95 from '@/../content/docs/ledger/payments/wallets.mdx';
import * as docs_96 from '@/../content/docs/ledger/reports/ar-aging.mdx';
import * as docs_97 from '@/../content/docs/ledger/reports/balance-sheet.mdx';
import * as docs_98 from '@/../content/docs/ledger/reports/cash-flow.mdx';
import * as docs_99 from '@/../content/docs/ledger/reports/income-statement.mdx';
import * as docs_100 from '@/../content/docs/ledger/reports/index.mdx';
import * as docs_101 from '@/../content/docs/ledger/reports/trial-balance.mdx';
import * as docs_102 from '@/../content/docs/ledger/reports/wallet-summary.mdx';
import * as docs_103 from '@/../content/docs/pallet/audits/cycle-counts.mdx';
import * as docs_104 from '@/../content/docs/pallet/audits/index.mdx';
import * as docs_105 from '@/../content/docs/pallet/fulfillment/index.mdx';
import * as docs_106 from '@/../content/docs/pallet/fulfillment/pick-lists.mdx';
import * as docs_107 from '@/../content/docs/pallet/fulfillment/purchase-orders.mdx';
import * as docs_108 from '@/../content/docs/pallet/fulfillment/sales-orders.mdx';
import * as docs_109 from '@/../content/docs/pallet/fulfillment/waves-and-batches.mdx';
import * as docs_110 from '@/../content/docs/pallet/index.mdx';
import * as docs_111 from '@/../content/docs/pallet/inventory/expired-stock.mdx';
import * as docs_112 from '@/../content/docs/pallet/inventory/index.mdx';
import * as docs_113 from '@/../content/docs/pallet/inventory/low-stock.mdx';
import * as docs_114 from '@/../content/docs/pallet/inventory/products.mdx';
import * as docs_115 from '@/../content/docs/pallet/inventory/stock-adjustments.mdx';
import * as docs_116 from '@/../content/docs/pallet/inventory/stock-levels.mdx';
import * as docs_117 from '@/../content/docs/pallet/inventory/stock-transfers.mdx';
import * as docs_118 from '@/../content/docs/pallet/overview.mdx';
import * as docs_119 from '@/../content/docs/pallet/reports/index.mdx';
import * as docs_120 from '@/../content/docs/pallet/suppliers.mdx';
import * as docs_121 from '@/../content/docs/pallet/warehouses/index.mdx';
import * as docs_122 from '@/../content/docs/pallet/warehouses/warehouses.mdx';
import * as docs_123 from '@/../content/docs/pallet/warehouses/zones-aisles-racks-bins.mdx';
import * as docs_124 from '@/../content/docs/platform/developer-console/api-keys.mdx';
import * as docs_125 from '@/../content/docs/platform/developer-console/index.mdx';
import * as docs_126 from '@/../content/docs/platform/developer-console/request-logs.mdx';
import * as docs_127 from '@/../content/docs/platform/developer-console/socket-events.mdx';
import * as docs_128 from '@/../content/docs/platform/developer-console/webhooks.mdx';
import * as docs_129 from '@/../content/docs/platform/extensions/browsing-and-installing.mdx';
import * as docs_130 from '@/../content/docs/platform/extensions/index.mdx';
import * as docs_131 from '@/../content/docs/platform/extensions/managing-extensions.mdx';
import * as docs_132 from '@/../content/docs/platform/features/chat-and-collaboration.mdx';
import * as docs_133 from '@/../content/docs/platform/features/custom-fields.mdx';
import * as docs_134 from '@/../content/docs/platform/features/dashboards-and-widgets.mdx';
import * as docs_135 from '@/../content/docs/platform/features/index.mdx';
import * as docs_136 from '@/../content/docs/platform/features/notifications.mdx';
import * as docs_137 from '@/../content/docs/platform/features/scheduling.mdx';
import * as docs_138 from '@/../content/docs/platform/iam/index.mdx';
import * as docs_139 from '@/../content/docs/platform/iam/organizations-and-groups.mdx';
import * as docs_140 from '@/../content/docs/platform/iam/policies-and-security.mdx';
import * as docs_141 from '@/../content/docs/platform/iam/users-roles-permissions.mdx';
import * as docs_142 from '@/../content/docs/platform/index.mdx';
import * as docs_143 from '@/../content/docs/storefront/catalog/categories.mdx';
import * as docs_144 from '@/../content/docs/storefront/catalog/index.mdx';
import * as docs_145 from '@/../content/docs/storefront/catalog/pricing.mdx';
import * as docs_146 from '@/../content/docs/storefront/catalog/products.mdx';
import * as docs_147 from '@/../content/docs/storefront/catalog/variants-and-addons.mdx';
import * as docs_148 from '@/../content/docs/storefront/customers/authentication.mdx';
import * as docs_149 from '@/../content/docs/storefront/customers/index.mdx';
import * as docs_150 from '@/../content/docs/storefront/customers/overview.mdx';
import * as docs_151 from '@/../content/docs/storefront/index.mdx';
import * as docs_152 from '@/../content/docs/storefront/orders/cart.mdx';
import * as docs_153 from '@/../content/docs/storefront/orders/checkout.mdx';
import * as docs_154 from '@/../content/docs/storefront/orders/index.mdx';
import * as docs_155 from '@/../content/docs/storefront/orders/payment-gateways.mdx';
import * as docs_156 from '@/../content/docs/storefront/overview.mdx';
import * as docs_157 from '@/../content/docs/storefront/promotions/index.mdx';
import * as docs_158 from '@/../content/docs/storefront/promotions/push-notifications.mdx';
import * as docs_159 from '@/../content/docs/storefront/reviews.mdx';
import * as docs_160 from '@/../content/docs/storefront/settings/api.mdx';
import * as docs_161 from '@/../content/docs/storefront/settings/gateways.mdx';
import * as docs_162 from '@/../content/docs/storefront/settings/index.mdx';
import * as docs_163 from '@/../content/docs/storefront/settings/locations.mdx';
import * as docs_164 from '@/../content/docs/storefront/settings/notifications.mdx';
import * as docs_165 from '@/../content/docs/storefront/stores/food-trucks.mdx';
import * as docs_166 from '@/../content/docs/storefront/stores/index.mdx';
import * as docs_167 from '@/../content/docs/storefront/stores/operating-hours.mdx';
import * as docs_168 from '@/../content/docs/storefront/stores/store-locations.mdx';
import * as docs_169 from '@/../content/docs/storefront/stores/stores-and-networks.mdx';
import meta_170 from '@/../content/docs/apps/meta.json';
import meta_171 from '@/../content/docs/apps/navigator-app/meta.json';
import meta_172 from '@/../content/docs/apps/storefront-app/meta.json';
import meta_173 from '@/../content/docs/community/meta.json';
import meta_174 from '@/../content/docs/extending-fleetbase/meta.json';
import meta_175 from '@/../content/docs/fleetops/analytics/meta.json';
import meta_176 from '@/../content/docs/fleetops/connectivity/meta.json';
import meta_177 from '@/../content/docs/fleetops/maintenance/meta.json';
import meta_178 from '@/../content/docs/fleetops/management/meta.json';
import meta_179 from '@/../content/docs/fleetops/meta.json';
import meta_180 from '@/../content/docs/fleetops/operations/meta.json';
import meta_181 from '@/../content/docs/fleetops/settings/meta.json';
import meta_182 from '@/../content/docs/getting-started/meta.json';
import meta_183 from '@/../content/docs/guides/meta.json';
import meta_184 from '@/../content/docs/ledger/accounting/meta.json';
import meta_185 from '@/../content/docs/ledger/billing/meta.json';
import meta_186 from '@/../content/docs/ledger/meta.json';
import meta_187 from '@/../content/docs/ledger/payments/meta.json';
import meta_188 from '@/../content/docs/ledger/reports/meta.json';
import meta_189 from '@/../content/docs/meta.json';
import meta_190 from '@/../content/docs/pallet/audits/meta.json';
import meta_191 from '@/../content/docs/pallet/fulfillment/meta.json';
import meta_192 from '@/../content/docs/pallet/inventory/meta.json';
import meta_193 from '@/../content/docs/pallet/meta.json';
import meta_194 from '@/../content/docs/pallet/reports/meta.json';
import meta_195 from '@/../content/docs/pallet/warehouses/meta.json';
import meta_196 from '@/../content/docs/platform/developer-console/meta.json';
import meta_197 from '@/../content/docs/platform/extensions/meta.json';
import meta_198 from '@/../content/docs/platform/features/meta.json';
import meta_199 from '@/../content/docs/platform/iam/meta.json';
import meta_200 from '@/../content/docs/platform/meta.json';
import meta_201 from '@/../content/docs/storefront/catalog/meta.json';
import meta_202 from '@/../content/docs/storefront/customers/meta.json';
import meta_203 from '@/../content/docs/storefront/meta.json';
import meta_204 from '@/../content/docs/storefront/orders/meta.json';
import meta_205 from '@/../content/docs/storefront/promotions/meta.json';
import meta_206 from '@/../content/docs/storefront/settings/meta.json';
import meta_207 from '@/../content/docs/storefront/stores/meta.json';

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: [
  { type: 'page' as const, path: 'apps/index', data: { ...docs_0, ...docs_0.frontmatter, body: docs_0.default, structuredData: docs_0.structuredData || docs_0.toc } },
  { type: 'page' as const, path: 'apps/navigator-app/customization', data: { ...docs_1, ...docs_1.frontmatter, body: docs_1.default, structuredData: docs_1.structuredData || docs_1.toc } },
  { type: 'page' as const, path: 'apps/navigator-app/index', data: { ...docs_2, ...docs_2.frontmatter, body: docs_2.default, structuredData: docs_2.structuredData || docs_2.toc } },
  { type: 'page' as const, path: 'apps/navigator-app/overview', data: { ...docs_3, ...docs_3.frontmatter, body: docs_3.default, structuredData: docs_3.structuredData || docs_3.toc } },
  { type: 'page' as const, path: 'apps/navigator-app/setup', data: { ...docs_4, ...docs_4.frontmatter, body: docs_4.default, structuredData: docs_4.structuredData || docs_4.toc } },
  { type: 'page' as const, path: 'apps/storefront-app/customization', data: { ...docs_5, ...docs_5.frontmatter, body: docs_5.default, structuredData: docs_5.structuredData || docs_5.toc } },
  { type: 'page' as const, path: 'apps/storefront-app/index', data: { ...docs_6, ...docs_6.frontmatter, body: docs_6.default, structuredData: docs_6.structuredData || docs_6.toc } },
  { type: 'page' as const, path: 'apps/storefront-app/overview', data: { ...docs_7, ...docs_7.frontmatter, body: docs_7.default, structuredData: docs_7.structuredData || docs_7.toc } },
  { type: 'page' as const, path: 'apps/storefront-app/setup', data: { ...docs_8, ...docs_8.frontmatter, body: docs_8.default, structuredData: docs_8.structuredData || docs_8.toc } },
  { type: 'page' as const, path: 'community/changelog', data: { ...docs_9, ...docs_9.frontmatter, body: docs_9.default, structuredData: docs_9.structuredData || docs_9.toc } },
  { type: 'page' as const, path: 'community/contributing', data: { ...docs_10, ...docs_10.frontmatter, body: docs_10.default, structuredData: docs_10.structuredData || docs_10.toc } },
  { type: 'page' as const, path: 'community/discord', data: { ...docs_11, ...docs_11.frontmatter, body: docs_11.default, structuredData: docs_11.structuredData || docs_11.toc } },
  { type: 'page' as const, path: 'community/faq', data: { ...docs_12, ...docs_12.frontmatter, body: docs_12.default, structuredData: docs_12.structuredData || docs_12.toc } },
  { type: 'page' as const, path: 'community/index', data: { ...docs_13, ...docs_13.frontmatter, body: docs_13.default, structuredData: docs_13.structuredData || docs_13.toc } },
  { type: 'page' as const, path: 'community/licensing', data: { ...docs_14, ...docs_14.frontmatter, body: docs_14.default, structuredData: docs_14.structuredData || docs_14.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/backend-development', data: { ...docs_15, ...docs_15.frontmatter, body: docs_15.default, structuredData: docs_15.structuredData || docs_15.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/dashboard-widgets', data: { ...docs_16, ...docs_16.frontmatter, body: docs_16.default, structuredData: docs_16.structuredData || docs_16.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/extension-architecture', data: { ...docs_17, ...docs_17.frontmatter, body: docs_17.default, structuredData: docs_17.structuredData || docs_17.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/frontend-development', data: { ...docs_18, ...docs_18.frontmatter, body: docs_18.default, structuredData: docs_18.structuredData || docs_18.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/hooks-and-lifecycle', data: { ...docs_19, ...docs_19.frontmatter, body: docs_19.default, structuredData: docs_19.structuredData || docs_19.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/index', data: { ...docs_20, ...docs_20.frontmatter, body: docs_20.default, structuredData: docs_20.structuredData || docs_20.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/menus-and-navigation', data: { ...docs_21, ...docs_21.frontmatter, body: docs_21.default, structuredData: docs_21.structuredData || docs_21.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/overview', data: { ...docs_22, ...docs_22.frontmatter, body: docs_22.default, structuredData: docs_22.structuredData || docs_22.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/publishing-to-marketplace', data: { ...docs_23, ...docs_23.frontmatter, body: docs_23.default, structuredData: docs_23.structuredData || docs_23.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/registering-components', data: { ...docs_24, ...docs_24.frontmatter, body: docs_24.default, structuredData: docs_24.structuredData || docs_24.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/scaffolding-your-extension', data: { ...docs_25, ...docs_25.frontmatter, body: docs_25.default, structuredData: docs_25.structuredData || docs_25.toc } },
  { type: 'page' as const, path: 'extending-fleetbase/virtual-routes', data: { ...docs_26, ...docs_26.frontmatter, body: docs_26.default, structuredData: docs_26.structuredData || docs_26.toc } },
  { type: 'page' as const, path: 'fleetops/analytics/index', data: { ...docs_27, ...docs_27.frontmatter, body: docs_27.default, structuredData: docs_27.structuredData || docs_27.toc } },
  { type: 'page' as const, path: 'fleetops/analytics/reports', data: { ...docs_28, ...docs_28.frontmatter, body: docs_28.default, structuredData: docs_28.structuredData || docs_28.toc } },
  { type: 'page' as const, path: 'fleetops/connectivity/devices', data: { ...docs_29, ...docs_29.frontmatter, body: docs_29.default, structuredData: docs_29.structuredData || docs_29.toc } },
  { type: 'page' as const, path: 'fleetops/connectivity/index', data: { ...docs_30, ...docs_30.frontmatter, body: docs_30.default, structuredData: docs_30.structuredData || docs_30.toc } },
  { type: 'page' as const, path: 'fleetops/connectivity/real-time-tracking', data: { ...docs_31, ...docs_31.frontmatter, body: docs_31.default, structuredData: docs_31.structuredData || docs_31.toc } },
  { type: 'page' as const, path: 'fleetops/connectivity/sensors', data: { ...docs_32, ...docs_32.frontmatter, body: docs_32.default, structuredData: docs_32.structuredData || docs_32.toc } },
  { type: 'page' as const, path: 'fleetops/connectivity/telematics', data: { ...docs_33, ...docs_33.frontmatter, body: docs_33.default, structuredData: docs_33.structuredData || docs_33.toc } },
  { type: 'page' as const, path: 'fleetops/index', data: { ...docs_34, ...docs_34.frontmatter, body: docs_34.default, structuredData: docs_34.structuredData || docs_34.toc } },
  { type: 'page' as const, path: 'fleetops/maintenance/equipment', data: { ...docs_35, ...docs_35.frontmatter, body: docs_35.default, structuredData: docs_35.structuredData || docs_35.toc } },
  { type: 'page' as const, path: 'fleetops/maintenance/index', data: { ...docs_36, ...docs_36.frontmatter, body: docs_36.default, structuredData: docs_36.structuredData || docs_36.toc } },
  { type: 'page' as const, path: 'fleetops/maintenance/maintenance-schedules', data: { ...docs_37, ...docs_37.frontmatter, body: docs_37.default, structuredData: docs_37.structuredData || docs_37.toc } },
  { type: 'page' as const, path: 'fleetops/maintenance/parts', data: { ...docs_38, ...docs_38.frontmatter, body: docs_38.default, structuredData: docs_38.structuredData || docs_38.toc } },
  { type: 'page' as const, path: 'fleetops/maintenance/work-orders', data: { ...docs_39, ...docs_39.frontmatter, body: docs_39.default, structuredData: docs_39.structuredData || docs_39.toc } },
  { type: 'page' as const, path: 'fleetops/management/contacts', data: { ...docs_40, ...docs_40.frontmatter, body: docs_40.default, structuredData: docs_40.structuredData || docs_40.toc } },
  { type: 'page' as const, path: 'fleetops/management/drivers', data: { ...docs_41, ...docs_41.frontmatter, body: docs_41.default, structuredData: docs_41.structuredData || docs_41.toc } },
  { type: 'page' as const, path: 'fleetops/management/fleets', data: { ...docs_42, ...docs_42.frontmatter, body: docs_42.default, structuredData: docs_42.structuredData || docs_42.toc } },
  { type: 'page' as const, path: 'fleetops/management/fuel-reports', data: { ...docs_43, ...docs_43.frontmatter, body: docs_43.default, structuredData: docs_43.structuredData || docs_43.toc } },
  { type: 'page' as const, path: 'fleetops/management/index', data: { ...docs_44, ...docs_44.frontmatter, body: docs_44.default, structuredData: docs_44.structuredData || docs_44.toc } },
  { type: 'page' as const, path: 'fleetops/management/issues', data: { ...docs_45, ...docs_45.frontmatter, body: docs_45.default, structuredData: docs_45.structuredData || docs_45.toc } },
  { type: 'page' as const, path: 'fleetops/management/places', data: { ...docs_46, ...docs_46.frontmatter, body: docs_46.default, structuredData: docs_46.structuredData || docs_46.toc } },
  { type: 'page' as const, path: 'fleetops/management/vehicles', data: { ...docs_47, ...docs_47.frontmatter, body: docs_47.default, structuredData: docs_47.structuredData || docs_47.toc } },
  { type: 'page' as const, path: 'fleetops/management/vendors', data: { ...docs_48, ...docs_48.frontmatter, body: docs_48.default, structuredData: docs_48.structuredData || docs_48.toc } },
  { type: 'page' as const, path: 'fleetops/operations/index', data: { ...docs_49, ...docs_49.frontmatter, body: docs_49.default, structuredData: docs_49.structuredData || docs_49.toc } },
  { type: 'page' as const, path: 'fleetops/operations/orchestrator', data: { ...docs_50, ...docs_50.frontmatter, body: docs_50.default, structuredData: docs_50.structuredData || docs_50.toc } },
  { type: 'page' as const, path: 'fleetops/operations/order-configurations', data: { ...docs_51, ...docs_51.frontmatter, body: docs_51.default, structuredData: docs_51.structuredData || docs_51.toc } },
  { type: 'page' as const, path: 'fleetops/operations/orders', data: { ...docs_52, ...docs_52.frontmatter, body: docs_52.default, structuredData: docs_52.structuredData || docs_52.toc } },
  { type: 'page' as const, path: 'fleetops/operations/routing-and-dispatching', data: { ...docs_53, ...docs_53.frontmatter, body: docs_53.default, structuredData: docs_53.structuredData || docs_53.toc } },
  { type: 'page' as const, path: 'fleetops/operations/scheduler', data: { ...docs_54, ...docs_54.frontmatter, body: docs_54.default, structuredData: docs_54.structuredData || docs_54.toc } },
  { type: 'page' as const, path: 'fleetops/operations/service-quotes', data: { ...docs_55, ...docs_55.frontmatter, body: docs_55.default, structuredData: docs_55.structuredData || docs_55.toc } },
  { type: 'page' as const, path: 'fleetops/operations/service-rates', data: { ...docs_56, ...docs_56.frontmatter, body: docs_56.default, structuredData: docs_56.structuredData || docs_56.toc } },
  { type: 'page' as const, path: 'fleetops/overview', data: { ...docs_57, ...docs_57.frontmatter, body: docs_57.default, structuredData: docs_57.structuredData || docs_57.toc } },
  { type: 'page' as const, path: 'fleetops/settings/custom-fields', data: { ...docs_58, ...docs_58.frontmatter, body: docs_58.default, structuredData: docs_58.structuredData || docs_58.toc } },
  { type: 'page' as const, path: 'fleetops/settings/index', data: { ...docs_59, ...docs_59.frontmatter, body: docs_59.default, structuredData: docs_59.structuredData || docs_59.toc } },
  { type: 'page' as const, path: 'fleetops/settings/navigator-app', data: { ...docs_60, ...docs_60.frontmatter, body: docs_60.default, structuredData: docs_60.structuredData || docs_60.toc } },
  { type: 'page' as const, path: 'fleetops/settings/notifications', data: { ...docs_61, ...docs_61.frontmatter, body: docs_61.default, structuredData: docs_61.structuredData || docs_61.toc } },
  { type: 'page' as const, path: 'fleetops/settings/orchestrator', data: { ...docs_62, ...docs_62.frontmatter, body: docs_62.default, structuredData: docs_62.structuredData || docs_62.toc } },
  { type: 'page' as const, path: 'fleetops/settings/payments', data: { ...docs_63, ...docs_63.frontmatter, body: docs_63.default, structuredData: docs_63.structuredData || docs_63.toc } },
  { type: 'page' as const, path: 'fleetops/settings/routing', data: { ...docs_64, ...docs_64.frontmatter, body: docs_64.default, structuredData: docs_64.structuredData || docs_64.toc } },
  { type: 'page' as const, path: 'fleetops/settings/scheduling', data: { ...docs_65, ...docs_65.frontmatter, body: docs_65.default, structuredData: docs_65.structuredData || docs_65.toc } },
  { type: 'page' as const, path: 'getting-started/architecture-overview', data: { ...docs_66, ...docs_66.frontmatter, body: docs_66.default, structuredData: docs_66.structuredData || docs_66.toc } },
  { type: 'page' as const, path: 'getting-started/core-concepts', data: { ...docs_67, ...docs_67.frontmatter, body: docs_67.default, structuredData: docs_67.structuredData || docs_67.toc } },
  { type: 'page' as const, path: 'getting-started/deployment-options', data: { ...docs_68, ...docs_68.frontmatter, body: docs_68.default, structuredData: docs_68.structuredData || docs_68.toc } },
  { type: 'page' as const, path: 'getting-started/index', data: { ...docs_69, ...docs_69.frontmatter, body: docs_69.default, structuredData: docs_69.structuredData || docs_69.toc } },
  { type: 'page' as const, path: 'getting-started/quickstart-cloud', data: { ...docs_70, ...docs_70.frontmatter, body: docs_70.default, structuredData: docs_70.structuredData || docs_70.toc } },
  { type: 'page' as const, path: 'getting-started/quickstart-self-hosted', data: { ...docs_71, ...docs_71.frontmatter, body: docs_71.default, structuredData: docs_71.structuredData || docs_71.toc } },
  { type: 'page' as const, path: 'getting-started/what-is-fleetbase', data: { ...docs_72, ...docs_72.frontmatter, body: docs_72.default, structuredData: docs_72.structuredData || docs_72.toc } },
  { type: 'page' as const, path: 'guides/build-a-custom-extension', data: { ...docs_73, ...docs_73.frontmatter, body: docs_73.default, structuredData: docs_73.structuredData || docs_73.toc } },
  { type: 'page' as const, path: 'guides/build-a-last-mile-delivery-app', data: { ...docs_74, ...docs_74.frontmatter, body: docs_74.default, structuredData: docs_74.structuredData || docs_74.toc } },
  { type: 'page' as const, path: 'guides/build-an-on-demand-marketplace', data: { ...docs_75, ...docs_75.frontmatter, body: docs_75.default, structuredData: docs_75.structuredData || docs_75.toc } },
  { type: 'page' as const, path: 'guides/configure-automated-order-routing', data: { ...docs_76, ...docs_76.frontmatter, body: docs_76.default, structuredData: docs_76.structuredData || docs_76.toc } },
  { type: 'page' as const, path: 'guides/index', data: { ...docs_77, ...docs_77.frontmatter, body: docs_77.default, structuredData: docs_77.structuredData || docs_77.toc } },
  { type: 'page' as const, path: 'guides/integrate-with-your-erp', data: { ...docs_78, ...docs_78.frontmatter, body: docs_78.default, structuredData: docs_78.structuredData || docs_78.toc } },
  { type: 'page' as const, path: 'guides/set-up-multi-tenant-organizations', data: { ...docs_79, ...docs_79.frontmatter, body: docs_79.default, structuredData: docs_79.structuredData || docs_79.toc } },
  { type: 'page' as const, path: 'guides/track-a-fleet-in-real-time', data: { ...docs_80, ...docs_80.frontmatter, body: docs_80.default, structuredData: docs_80.structuredData || docs_80.toc } },
  { type: 'page' as const, path: 'guides/white-label-the-navigator-app', data: { ...docs_81, ...docs_81.frontmatter, body: docs_81.default, structuredData: docs_81.structuredData || docs_81.toc } },
  { type: 'page' as const, path: 'index', data: { ...docs_82, ...docs_82.frontmatter, body: docs_82.default, structuredData: docs_82.structuredData || docs_82.toc } },
  { type: 'page' as const, path: 'ledger/accounting/chart-of-accounts', data: { ...docs_83, ...docs_83.frontmatter, body: docs_83.default, structuredData: docs_83.structuredData || docs_83.toc } },
  { type: 'page' as const, path: 'ledger/accounting/general-ledger', data: { ...docs_84, ...docs_84.frontmatter, body: docs_84.default, structuredData: docs_84.structuredData || docs_84.toc } },
  { type: 'page' as const, path: 'ledger/accounting/index', data: { ...docs_85, ...docs_85.frontmatter, body: docs_85.default, structuredData: docs_85.structuredData || docs_85.toc } },
  { type: 'page' as const, path: 'ledger/accounting/journal-entries', data: { ...docs_86, ...docs_86.frontmatter, body: docs_86.default, structuredData: docs_86.structuredData || docs_86.toc } },
  { type: 'page' as const, path: 'ledger/billing/index', data: { ...docs_87, ...docs_87.frontmatter, body: docs_87.default, structuredData: docs_87.structuredData || docs_87.toc } },
  { type: 'page' as const, path: 'ledger/billing/invoice-templates', data: { ...docs_88, ...docs_88.frontmatter, body: docs_88.default, structuredData: docs_88.structuredData || docs_88.toc } },
  { type: 'page' as const, path: 'ledger/billing/invoices', data: { ...docs_89, ...docs_89.frontmatter, body: docs_89.default, structuredData: docs_89.structuredData || docs_89.toc } },
  { type: 'page' as const, path: 'ledger/index', data: { ...docs_90, ...docs_90.frontmatter, body: docs_90.default, structuredData: docs_90.structuredData || docs_90.toc } },
  { type: 'page' as const, path: 'ledger/overview', data: { ...docs_91, ...docs_91.frontmatter, body: docs_91.default, structuredData: docs_91.structuredData || docs_91.toc } },
  { type: 'page' as const, path: 'ledger/payments/gateways', data: { ...docs_92, ...docs_92.frontmatter, body: docs_92.default, structuredData: docs_92.structuredData || docs_92.toc } },
  { type: 'page' as const, path: 'ledger/payments/index', data: { ...docs_93, ...docs_93.frontmatter, body: docs_93.default, structuredData: docs_93.structuredData || docs_93.toc } },
  { type: 'page' as const, path: 'ledger/payments/transactions', data: { ...docs_94, ...docs_94.frontmatter, body: docs_94.default, structuredData: docs_94.structuredData || docs_94.toc } },
  { type: 'page' as const, path: 'ledger/payments/wallets', data: { ...docs_95, ...docs_95.frontmatter, body: docs_95.default, structuredData: docs_95.structuredData || docs_95.toc } },
  { type: 'page' as const, path: 'ledger/reports/ar-aging', data: { ...docs_96, ...docs_96.frontmatter, body: docs_96.default, structuredData: docs_96.structuredData || docs_96.toc } },
  { type: 'page' as const, path: 'ledger/reports/balance-sheet', data: { ...docs_97, ...docs_97.frontmatter, body: docs_97.default, structuredData: docs_97.structuredData || docs_97.toc } },
  { type: 'page' as const, path: 'ledger/reports/cash-flow', data: { ...docs_98, ...docs_98.frontmatter, body: docs_98.default, structuredData: docs_98.structuredData || docs_98.toc } },
  { type: 'page' as const, path: 'ledger/reports/income-statement', data: { ...docs_99, ...docs_99.frontmatter, body: docs_99.default, structuredData: docs_99.structuredData || docs_99.toc } },
  { type: 'page' as const, path: 'ledger/reports/index', data: { ...docs_100, ...docs_100.frontmatter, body: docs_100.default, structuredData: docs_100.structuredData || docs_100.toc } },
  { type: 'page' as const, path: 'ledger/reports/trial-balance', data: { ...docs_101, ...docs_101.frontmatter, body: docs_101.default, structuredData: docs_101.structuredData || docs_101.toc } },
  { type: 'page' as const, path: 'ledger/reports/wallet-summary', data: { ...docs_102, ...docs_102.frontmatter, body: docs_102.default, structuredData: docs_102.structuredData || docs_102.toc } },
  { type: 'page' as const, path: 'pallet/audits/cycle-counts', data: { ...docs_103, ...docs_103.frontmatter, body: docs_103.default, structuredData: docs_103.structuredData || docs_103.toc } },
  { type: 'page' as const, path: 'pallet/audits/index', data: { ...docs_104, ...docs_104.frontmatter, body: docs_104.default, structuredData: docs_104.structuredData || docs_104.toc } },
  { type: 'page' as const, path: 'pallet/fulfillment/index', data: { ...docs_105, ...docs_105.frontmatter, body: docs_105.default, structuredData: docs_105.structuredData || docs_105.toc } },
  { type: 'page' as const, path: 'pallet/fulfillment/pick-lists', data: { ...docs_106, ...docs_106.frontmatter, body: docs_106.default, structuredData: docs_106.structuredData || docs_106.toc } },
  { type: 'page' as const, path: 'pallet/fulfillment/purchase-orders', data: { ...docs_107, ...docs_107.frontmatter, body: docs_107.default, structuredData: docs_107.structuredData || docs_107.toc } },
  { type: 'page' as const, path: 'pallet/fulfillment/sales-orders', data: { ...docs_108, ...docs_108.frontmatter, body: docs_108.default, structuredData: docs_108.structuredData || docs_108.toc } },
  { type: 'page' as const, path: 'pallet/fulfillment/waves-and-batches', data: { ...docs_109, ...docs_109.frontmatter, body: docs_109.default, structuredData: docs_109.structuredData || docs_109.toc } },
  { type: 'page' as const, path: 'pallet/index', data: { ...docs_110, ...docs_110.frontmatter, body: docs_110.default, structuredData: docs_110.structuredData || docs_110.toc } },
  { type: 'page' as const, path: 'pallet/inventory/expired-stock', data: { ...docs_111, ...docs_111.frontmatter, body: docs_111.default, structuredData: docs_111.structuredData || docs_111.toc } },
  { type: 'page' as const, path: 'pallet/inventory/index', data: { ...docs_112, ...docs_112.frontmatter, body: docs_112.default, structuredData: docs_112.structuredData || docs_112.toc } },
  { type: 'page' as const, path: 'pallet/inventory/low-stock', data: { ...docs_113, ...docs_113.frontmatter, body: docs_113.default, structuredData: docs_113.structuredData || docs_113.toc } },
  { type: 'page' as const, path: 'pallet/inventory/products', data: { ...docs_114, ...docs_114.frontmatter, body: docs_114.default, structuredData: docs_114.structuredData || docs_114.toc } },
  { type: 'page' as const, path: 'pallet/inventory/stock-adjustments', data: { ...docs_115, ...docs_115.frontmatter, body: docs_115.default, structuredData: docs_115.structuredData || docs_115.toc } },
  { type: 'page' as const, path: 'pallet/inventory/stock-levels', data: { ...docs_116, ...docs_116.frontmatter, body: docs_116.default, structuredData: docs_116.structuredData || docs_116.toc } },
  { type: 'page' as const, path: 'pallet/inventory/stock-transfers', data: { ...docs_117, ...docs_117.frontmatter, body: docs_117.default, structuredData: docs_117.structuredData || docs_117.toc } },
  { type: 'page' as const, path: 'pallet/overview', data: { ...docs_118, ...docs_118.frontmatter, body: docs_118.default, structuredData: docs_118.structuredData || docs_118.toc } },
  { type: 'page' as const, path: 'pallet/reports/index', data: { ...docs_119, ...docs_119.frontmatter, body: docs_119.default, structuredData: docs_119.structuredData || docs_119.toc } },
  { type: 'page' as const, path: 'pallet/suppliers', data: { ...docs_120, ...docs_120.frontmatter, body: docs_120.default, structuredData: docs_120.structuredData || docs_120.toc } },
  { type: 'page' as const, path: 'pallet/warehouses/index', data: { ...docs_121, ...docs_121.frontmatter, body: docs_121.default, structuredData: docs_121.structuredData || docs_121.toc } },
  { type: 'page' as const, path: 'pallet/warehouses/warehouses', data: { ...docs_122, ...docs_122.frontmatter, body: docs_122.default, structuredData: docs_122.structuredData || docs_122.toc } },
  { type: 'page' as const, path: 'pallet/warehouses/zones-aisles-racks-bins', data: { ...docs_123, ...docs_123.frontmatter, body: docs_123.default, structuredData: docs_123.structuredData || docs_123.toc } },
  { type: 'page' as const, path: 'platform/developer-console/api-keys', data: { ...docs_124, ...docs_124.frontmatter, body: docs_124.default, structuredData: docs_124.structuredData || docs_124.toc } },
  { type: 'page' as const, path: 'platform/developer-console/index', data: { ...docs_125, ...docs_125.frontmatter, body: docs_125.default, structuredData: docs_125.structuredData || docs_125.toc } },
  { type: 'page' as const, path: 'platform/developer-console/request-logs', data: { ...docs_126, ...docs_126.frontmatter, body: docs_126.default, structuredData: docs_126.structuredData || docs_126.toc } },
  { type: 'page' as const, path: 'platform/developer-console/socket-events', data: { ...docs_127, ...docs_127.frontmatter, body: docs_127.default, structuredData: docs_127.structuredData || docs_127.toc } },
  { type: 'page' as const, path: 'platform/developer-console/webhooks', data: { ...docs_128, ...docs_128.frontmatter, body: docs_128.default, structuredData: docs_128.structuredData || docs_128.toc } },
  { type: 'page' as const, path: 'platform/extensions/browsing-and-installing', data: { ...docs_129, ...docs_129.frontmatter, body: docs_129.default, structuredData: docs_129.structuredData || docs_129.toc } },
  { type: 'page' as const, path: 'platform/extensions/index', data: { ...docs_130, ...docs_130.frontmatter, body: docs_130.default, structuredData: docs_130.structuredData || docs_130.toc } },
  { type: 'page' as const, path: 'platform/extensions/managing-extensions', data: { ...docs_131, ...docs_131.frontmatter, body: docs_131.default, structuredData: docs_131.structuredData || docs_131.toc } },
  { type: 'page' as const, path: 'platform/features/chat-and-collaboration', data: { ...docs_132, ...docs_132.frontmatter, body: docs_132.default, structuredData: docs_132.structuredData || docs_132.toc } },
  { type: 'page' as const, path: 'platform/features/custom-fields', data: { ...docs_133, ...docs_133.frontmatter, body: docs_133.default, structuredData: docs_133.structuredData || docs_133.toc } },
  { type: 'page' as const, path: 'platform/features/dashboards-and-widgets', data: { ...docs_134, ...docs_134.frontmatter, body: docs_134.default, structuredData: docs_134.structuredData || docs_134.toc } },
  { type: 'page' as const, path: 'platform/features/index', data: { ...docs_135, ...docs_135.frontmatter, body: docs_135.default, structuredData: docs_135.structuredData || docs_135.toc } },
  { type: 'page' as const, path: 'platform/features/notifications', data: { ...docs_136, ...docs_136.frontmatter, body: docs_136.default, structuredData: docs_136.structuredData || docs_136.toc } },
  { type: 'page' as const, path: 'platform/features/scheduling', data: { ...docs_137, ...docs_137.frontmatter, body: docs_137.default, structuredData: docs_137.structuredData || docs_137.toc } },
  { type: 'page' as const, path: 'platform/iam/index', data: { ...docs_138, ...docs_138.frontmatter, body: docs_138.default, structuredData: docs_138.structuredData || docs_138.toc } },
  { type: 'page' as const, path: 'platform/iam/organizations-and-groups', data: { ...docs_139, ...docs_139.frontmatter, body: docs_139.default, structuredData: docs_139.structuredData || docs_139.toc } },
  { type: 'page' as const, path: 'platform/iam/policies-and-security', data: { ...docs_140, ...docs_140.frontmatter, body: docs_140.default, structuredData: docs_140.structuredData || docs_140.toc } },
  { type: 'page' as const, path: 'platform/iam/users-roles-permissions', data: { ...docs_141, ...docs_141.frontmatter, body: docs_141.default, structuredData: docs_141.structuredData || docs_141.toc } },
  { type: 'page' as const, path: 'platform/index', data: { ...docs_142, ...docs_142.frontmatter, body: docs_142.default, structuredData: docs_142.structuredData || docs_142.toc } },
  { type: 'page' as const, path: 'storefront/catalog/categories', data: { ...docs_143, ...docs_143.frontmatter, body: docs_143.default, structuredData: docs_143.structuredData || docs_143.toc } },
  { type: 'page' as const, path: 'storefront/catalog/index', data: { ...docs_144, ...docs_144.frontmatter, body: docs_144.default, structuredData: docs_144.structuredData || docs_144.toc } },
  { type: 'page' as const, path: 'storefront/catalog/pricing', data: { ...docs_145, ...docs_145.frontmatter, body: docs_145.default, structuredData: docs_145.structuredData || docs_145.toc } },
  { type: 'page' as const, path: 'storefront/catalog/products', data: { ...docs_146, ...docs_146.frontmatter, body: docs_146.default, structuredData: docs_146.structuredData || docs_146.toc } },
  { type: 'page' as const, path: 'storefront/catalog/variants-and-addons', data: { ...docs_147, ...docs_147.frontmatter, body: docs_147.default, structuredData: docs_147.structuredData || docs_147.toc } },
  { type: 'page' as const, path: 'storefront/customers/authentication', data: { ...docs_148, ...docs_148.frontmatter, body: docs_148.default, structuredData: docs_148.structuredData || docs_148.toc } },
  { type: 'page' as const, path: 'storefront/customers/index', data: { ...docs_149, ...docs_149.frontmatter, body: docs_149.default, structuredData: docs_149.structuredData || docs_149.toc } },
  { type: 'page' as const, path: 'storefront/customers/overview', data: { ...docs_150, ...docs_150.frontmatter, body: docs_150.default, structuredData: docs_150.structuredData || docs_150.toc } },
  { type: 'page' as const, path: 'storefront/index', data: { ...docs_151, ...docs_151.frontmatter, body: docs_151.default, structuredData: docs_151.structuredData || docs_151.toc } },
  { type: 'page' as const, path: 'storefront/orders/cart', data: { ...docs_152, ...docs_152.frontmatter, body: docs_152.default, structuredData: docs_152.structuredData || docs_152.toc } },
  { type: 'page' as const, path: 'storefront/orders/checkout', data: { ...docs_153, ...docs_153.frontmatter, body: docs_153.default, structuredData: docs_153.structuredData || docs_153.toc } },
  { type: 'page' as const, path: 'storefront/orders/index', data: { ...docs_154, ...docs_154.frontmatter, body: docs_154.default, structuredData: docs_154.structuredData || docs_154.toc } },
  { type: 'page' as const, path: 'storefront/orders/payment-gateways', data: { ...docs_155, ...docs_155.frontmatter, body: docs_155.default, structuredData: docs_155.structuredData || docs_155.toc } },
  { type: 'page' as const, path: 'storefront/overview', data: { ...docs_156, ...docs_156.frontmatter, body: docs_156.default, structuredData: docs_156.structuredData || docs_156.toc } },
  { type: 'page' as const, path: 'storefront/promotions/index', data: { ...docs_157, ...docs_157.frontmatter, body: docs_157.default, structuredData: docs_157.structuredData || docs_157.toc } },
  { type: 'page' as const, path: 'storefront/promotions/push-notifications', data: { ...docs_158, ...docs_158.frontmatter, body: docs_158.default, structuredData: docs_158.structuredData || docs_158.toc } },
  { type: 'page' as const, path: 'storefront/reviews', data: { ...docs_159, ...docs_159.frontmatter, body: docs_159.default, structuredData: docs_159.structuredData || docs_159.toc } },
  { type: 'page' as const, path: 'storefront/settings/api', data: { ...docs_160, ...docs_160.frontmatter, body: docs_160.default, structuredData: docs_160.structuredData || docs_160.toc } },
  { type: 'page' as const, path: 'storefront/settings/gateways', data: { ...docs_161, ...docs_161.frontmatter, body: docs_161.default, structuredData: docs_161.structuredData || docs_161.toc } },
  { type: 'page' as const, path: 'storefront/settings/index', data: { ...docs_162, ...docs_162.frontmatter, body: docs_162.default, structuredData: docs_162.structuredData || docs_162.toc } },
  { type: 'page' as const, path: 'storefront/settings/locations', data: { ...docs_163, ...docs_163.frontmatter, body: docs_163.default, structuredData: docs_163.structuredData || docs_163.toc } },
  { type: 'page' as const, path: 'storefront/settings/notifications', data: { ...docs_164, ...docs_164.frontmatter, body: docs_164.default, structuredData: docs_164.structuredData || docs_164.toc } },
  { type: 'page' as const, path: 'storefront/stores/food-trucks', data: { ...docs_165, ...docs_165.frontmatter, body: docs_165.default, structuredData: docs_165.structuredData || docs_165.toc } },
  { type: 'page' as const, path: 'storefront/stores/index', data: { ...docs_166, ...docs_166.frontmatter, body: docs_166.default, structuredData: docs_166.structuredData || docs_166.toc } },
  { type: 'page' as const, path: 'storefront/stores/operating-hours', data: { ...docs_167, ...docs_167.frontmatter, body: docs_167.default, structuredData: docs_167.structuredData || docs_167.toc } },
  { type: 'page' as const, path: 'storefront/stores/store-locations', data: { ...docs_168, ...docs_168.frontmatter, body: docs_168.default, structuredData: docs_168.structuredData || docs_168.toc } },
  { type: 'page' as const, path: 'storefront/stores/stores-and-networks', data: { ...docs_169, ...docs_169.frontmatter, body: docs_169.default, structuredData: docs_169.structuredData || docs_169.toc } },
  { type: 'meta' as const, path: 'apps/meta.json', data: meta_170 },
  { type: 'meta' as const, path: 'apps/navigator-app/meta.json', data: meta_171 },
  { type: 'meta' as const, path: 'apps/storefront-app/meta.json', data: meta_172 },
  { type: 'meta' as const, path: 'community/meta.json', data: meta_173 },
  { type: 'meta' as const, path: 'extending-fleetbase/meta.json', data: meta_174 },
  { type: 'meta' as const, path: 'fleetops/analytics/meta.json', data: meta_175 },
  { type: 'meta' as const, path: 'fleetops/connectivity/meta.json', data: meta_176 },
  { type: 'meta' as const, path: 'fleetops/maintenance/meta.json', data: meta_177 },
  { type: 'meta' as const, path: 'fleetops/management/meta.json', data: meta_178 },
  { type: 'meta' as const, path: 'fleetops/meta.json', data: meta_179 },
  { type: 'meta' as const, path: 'fleetops/operations/meta.json', data: meta_180 },
  { type: 'meta' as const, path: 'fleetops/settings/meta.json', data: meta_181 },
  { type: 'meta' as const, path: 'getting-started/meta.json', data: meta_182 },
  { type: 'meta' as const, path: 'guides/meta.json', data: meta_183 },
  { type: 'meta' as const, path: 'ledger/accounting/meta.json', data: meta_184 },
  { type: 'meta' as const, path: 'ledger/billing/meta.json', data: meta_185 },
  { type: 'meta' as const, path: 'ledger/meta.json', data: meta_186 },
  { type: 'meta' as const, path: 'ledger/payments/meta.json', data: meta_187 },
  { type: 'meta' as const, path: 'ledger/reports/meta.json', data: meta_188 },
  { type: 'meta' as const, path: 'meta.json', data: meta_189 },
  { type: 'meta' as const, path: 'pallet/audits/meta.json', data: meta_190 },
  { type: 'meta' as const, path: 'pallet/fulfillment/meta.json', data: meta_191 },
  { type: 'meta' as const, path: 'pallet/inventory/meta.json', data: meta_192 },
  { type: 'meta' as const, path: 'pallet/meta.json', data: meta_193 },
  { type: 'meta' as const, path: 'pallet/reports/meta.json', data: meta_194 },
  { type: 'meta' as const, path: 'pallet/warehouses/meta.json', data: meta_195 },
  { type: 'meta' as const, path: 'platform/developer-console/meta.json', data: meta_196 },
  { type: 'meta' as const, path: 'platform/extensions/meta.json', data: meta_197 },
  { type: 'meta' as const, path: 'platform/features/meta.json', data: meta_198 },
  { type: 'meta' as const, path: 'platform/iam/meta.json', data: meta_199 },
  { type: 'meta' as const, path: 'platform/meta.json', data: meta_200 },
  { type: 'meta' as const, path: 'storefront/catalog/meta.json', data: meta_201 },
  { type: 'meta' as const, path: 'storefront/customers/meta.json', data: meta_202 },
  { type: 'meta' as const, path: 'storefront/meta.json', data: meta_203 },
  { type: 'meta' as const, path: 'storefront/orders/meta.json', data: meta_204 },
  { type: 'meta' as const, path: 'storefront/promotions/meta.json', data: meta_205 },
  { type: 'meta' as const, path: 'storefront/settings/meta.json', data: meta_206 },
  { type: 'meta' as const, path: 'storefront/stores/meta.json', data: meta_207 },
    ],
  },
});

export type Page = InferPageType<typeof source>;
