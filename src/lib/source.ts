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

const docsArray = [
  { info: { path: 'apps/index.mdx' }, data: docs_0 },
  { info: { path: 'apps/navigator-app/customization.mdx' }, data: docs_1 },
  { info: { path: 'apps/navigator-app/index.mdx' }, data: docs_2 },
  { info: { path: 'apps/navigator-app/overview.mdx' }, data: docs_3 },
  { info: { path: 'apps/navigator-app/setup.mdx' }, data: docs_4 },
  { info: { path: 'apps/storefront-app/customization.mdx' }, data: docs_5 },
  { info: { path: 'apps/storefront-app/index.mdx' }, data: docs_6 },
  { info: { path: 'apps/storefront-app/overview.mdx' }, data: docs_7 },
  { info: { path: 'apps/storefront-app/setup.mdx' }, data: docs_8 },
  { info: { path: 'community/changelog.mdx' }, data: docs_9 },
  { info: { path: 'community/contributing.mdx' }, data: docs_10 },
  { info: { path: 'community/discord.mdx' }, data: docs_11 },
  { info: { path: 'community/faq.mdx' }, data: docs_12 },
  { info: { path: 'community/index.mdx' }, data: docs_13 },
  { info: { path: 'community/licensing.mdx' }, data: docs_14 },
  { info: { path: 'extending-fleetbase/backend-development.mdx' }, data: docs_15 },
  { info: { path: 'extending-fleetbase/dashboard-widgets.mdx' }, data: docs_16 },
  { info: { path: 'extending-fleetbase/extension-architecture.mdx' }, data: docs_17 },
  { info: { path: 'extending-fleetbase/frontend-development.mdx' }, data: docs_18 },
  { info: { path: 'extending-fleetbase/hooks-and-lifecycle.mdx' }, data: docs_19 },
  { info: { path: 'extending-fleetbase/index.mdx' }, data: docs_20 },
  { info: { path: 'extending-fleetbase/menus-and-navigation.mdx' }, data: docs_21 },
  { info: { path: 'extending-fleetbase/overview.mdx' }, data: docs_22 },
  { info: { path: 'extending-fleetbase/publishing-to-marketplace.mdx' }, data: docs_23 },
  { info: { path: 'extending-fleetbase/registering-components.mdx' }, data: docs_24 },
  { info: { path: 'extending-fleetbase/scaffolding-your-extension.mdx' }, data: docs_25 },
  { info: { path: 'extending-fleetbase/virtual-routes.mdx' }, data: docs_26 },
  { info: { path: 'fleetops/analytics/index.mdx' }, data: docs_27 },
  { info: { path: 'fleetops/analytics/reports.mdx' }, data: docs_28 },
  { info: { path: 'fleetops/connectivity/devices.mdx' }, data: docs_29 },
  { info: { path: 'fleetops/connectivity/index.mdx' }, data: docs_30 },
  { info: { path: 'fleetops/connectivity/real-time-tracking.mdx' }, data: docs_31 },
  { info: { path: 'fleetops/connectivity/sensors.mdx' }, data: docs_32 },
  { info: { path: 'fleetops/connectivity/telematics.mdx' }, data: docs_33 },
  { info: { path: 'fleetops/index.mdx' }, data: docs_34 },
  { info: { path: 'fleetops/maintenance/equipment.mdx' }, data: docs_35 },
  { info: { path: 'fleetops/maintenance/index.mdx' }, data: docs_36 },
  { info: { path: 'fleetops/maintenance/maintenance-schedules.mdx' }, data: docs_37 },
  { info: { path: 'fleetops/maintenance/parts.mdx' }, data: docs_38 },
  { info: { path: 'fleetops/maintenance/work-orders.mdx' }, data: docs_39 },
  { info: { path: 'fleetops/management/contacts.mdx' }, data: docs_40 },
  { info: { path: 'fleetops/management/drivers.mdx' }, data: docs_41 },
  { info: { path: 'fleetops/management/fleets.mdx' }, data: docs_42 },
  { info: { path: 'fleetops/management/fuel-reports.mdx' }, data: docs_43 },
  { info: { path: 'fleetops/management/index.mdx' }, data: docs_44 },
  { info: { path: 'fleetops/management/issues.mdx' }, data: docs_45 },
  { info: { path: 'fleetops/management/places.mdx' }, data: docs_46 },
  { info: { path: 'fleetops/management/vehicles.mdx' }, data: docs_47 },
  { info: { path: 'fleetops/management/vendors.mdx' }, data: docs_48 },
  { info: { path: 'fleetops/operations/index.mdx' }, data: docs_49 },
  { info: { path: 'fleetops/operations/orchestrator.mdx' }, data: docs_50 },
  { info: { path: 'fleetops/operations/order-configurations.mdx' }, data: docs_51 },
  { info: { path: 'fleetops/operations/orders.mdx' }, data: docs_52 },
  { info: { path: 'fleetops/operations/routing-and-dispatching.mdx' }, data: docs_53 },
  { info: { path: 'fleetops/operations/scheduler.mdx' }, data: docs_54 },
  { info: { path: 'fleetops/operations/service-quotes.mdx' }, data: docs_55 },
  { info: { path: 'fleetops/operations/service-rates.mdx' }, data: docs_56 },
  { info: { path: 'fleetops/overview.mdx' }, data: docs_57 },
  { info: { path: 'fleetops/settings/custom-fields.mdx' }, data: docs_58 },
  { info: { path: 'fleetops/settings/index.mdx' }, data: docs_59 },
  { info: { path: 'fleetops/settings/navigator-app.mdx' }, data: docs_60 },
  { info: { path: 'fleetops/settings/notifications.mdx' }, data: docs_61 },
  { info: { path: 'fleetops/settings/orchestrator.mdx' }, data: docs_62 },
  { info: { path: 'fleetops/settings/payments.mdx' }, data: docs_63 },
  { info: { path: 'fleetops/settings/routing.mdx' }, data: docs_64 },
  { info: { path: 'fleetops/settings/scheduling.mdx' }, data: docs_65 },
  { info: { path: 'getting-started/architecture-overview.mdx' }, data: docs_66 },
  { info: { path: 'getting-started/core-concepts.mdx' }, data: docs_67 },
  { info: { path: 'getting-started/deployment-options.mdx' }, data: docs_68 },
  { info: { path: 'getting-started/index.mdx' }, data: docs_69 },
  { info: { path: 'getting-started/quickstart-cloud.mdx' }, data: docs_70 },
  { info: { path: 'getting-started/quickstart-self-hosted.mdx' }, data: docs_71 },
  { info: { path: 'getting-started/what-is-fleetbase.mdx' }, data: docs_72 },
  { info: { path: 'guides/build-a-custom-extension.mdx' }, data: docs_73 },
  { info: { path: 'guides/build-a-last-mile-delivery-app.mdx' }, data: docs_74 },
  { info: { path: 'guides/build-an-on-demand-marketplace.mdx' }, data: docs_75 },
  { info: { path: 'guides/configure-automated-order-routing.mdx' }, data: docs_76 },
  { info: { path: 'guides/index.mdx' }, data: docs_77 },
  { info: { path: 'guides/integrate-with-your-erp.mdx' }, data: docs_78 },
  { info: { path: 'guides/set-up-multi-tenant-organizations.mdx' }, data: docs_79 },
  { info: { path: 'guides/track-a-fleet-in-real-time.mdx' }, data: docs_80 },
  { info: { path: 'guides/white-label-the-navigator-app.mdx' }, data: docs_81 },
  { info: { path: 'index.mdx' }, data: docs_82 },
  { info: { path: 'ledger/accounting/chart-of-accounts.mdx' }, data: docs_83 },
  { info: { path: 'ledger/accounting/general-ledger.mdx' }, data: docs_84 },
  { info: { path: 'ledger/accounting/index.mdx' }, data: docs_85 },
  { info: { path: 'ledger/accounting/journal-entries.mdx' }, data: docs_86 },
  { info: { path: 'ledger/billing/index.mdx' }, data: docs_87 },
  { info: { path: 'ledger/billing/invoice-templates.mdx' }, data: docs_88 },
  { info: { path: 'ledger/billing/invoices.mdx' }, data: docs_89 },
  { info: { path: 'ledger/index.mdx' }, data: docs_90 },
  { info: { path: 'ledger/overview.mdx' }, data: docs_91 },
  { info: { path: 'ledger/payments/gateways.mdx' }, data: docs_92 },
  { info: { path: 'ledger/payments/index.mdx' }, data: docs_93 },
  { info: { path: 'ledger/payments/transactions.mdx' }, data: docs_94 },
  { info: { path: 'ledger/payments/wallets.mdx' }, data: docs_95 },
  { info: { path: 'ledger/reports/ar-aging.mdx' }, data: docs_96 },
  { info: { path: 'ledger/reports/balance-sheet.mdx' }, data: docs_97 },
  { info: { path: 'ledger/reports/cash-flow.mdx' }, data: docs_98 },
  { info: { path: 'ledger/reports/income-statement.mdx' }, data: docs_99 },
  { info: { path: 'ledger/reports/index.mdx' }, data: docs_100 },
  { info: { path: 'ledger/reports/trial-balance.mdx' }, data: docs_101 },
  { info: { path: 'ledger/reports/wallet-summary.mdx' }, data: docs_102 },
  { info: { path: 'pallet/audits/cycle-counts.mdx' }, data: docs_103 },
  { info: { path: 'pallet/audits/index.mdx' }, data: docs_104 },
  { info: { path: 'pallet/fulfillment/index.mdx' }, data: docs_105 },
  { info: { path: 'pallet/fulfillment/pick-lists.mdx' }, data: docs_106 },
  { info: { path: 'pallet/fulfillment/purchase-orders.mdx' }, data: docs_107 },
  { info: { path: 'pallet/fulfillment/sales-orders.mdx' }, data: docs_108 },
  { info: { path: 'pallet/fulfillment/waves-and-batches.mdx' }, data: docs_109 },
  { info: { path: 'pallet/index.mdx' }, data: docs_110 },
  { info: { path: 'pallet/inventory/expired-stock.mdx' }, data: docs_111 },
  { info: { path: 'pallet/inventory/index.mdx' }, data: docs_112 },
  { info: { path: 'pallet/inventory/low-stock.mdx' }, data: docs_113 },
  { info: { path: 'pallet/inventory/products.mdx' }, data: docs_114 },
  { info: { path: 'pallet/inventory/stock-adjustments.mdx' }, data: docs_115 },
  { info: { path: 'pallet/inventory/stock-levels.mdx' }, data: docs_116 },
  { info: { path: 'pallet/inventory/stock-transfers.mdx' }, data: docs_117 },
  { info: { path: 'pallet/overview.mdx' }, data: docs_118 },
  { info: { path: 'pallet/reports/index.mdx' }, data: docs_119 },
  { info: { path: 'pallet/suppliers.mdx' }, data: docs_120 },
  { info: { path: 'pallet/warehouses/index.mdx' }, data: docs_121 },
  { info: { path: 'pallet/warehouses/warehouses.mdx' }, data: docs_122 },
  { info: { path: 'pallet/warehouses/zones-aisles-racks-bins.mdx' }, data: docs_123 },
  { info: { path: 'platform/developer-console/api-keys.mdx' }, data: docs_124 },
  { info: { path: 'platform/developer-console/index.mdx' }, data: docs_125 },
  { info: { path: 'platform/developer-console/request-logs.mdx' }, data: docs_126 },
  { info: { path: 'platform/developer-console/socket-events.mdx' }, data: docs_127 },
  { info: { path: 'platform/developer-console/webhooks.mdx' }, data: docs_128 },
  { info: { path: 'platform/extensions/browsing-and-installing.mdx' }, data: docs_129 },
  { info: { path: 'platform/extensions/index.mdx' }, data: docs_130 },
  { info: { path: 'platform/extensions/managing-extensions.mdx' }, data: docs_131 },
  { info: { path: 'platform/features/chat-and-collaboration.mdx' }, data: docs_132 },
  { info: { path: 'platform/features/custom-fields.mdx' }, data: docs_133 },
  { info: { path: 'platform/features/dashboards-and-widgets.mdx' }, data: docs_134 },
  { info: { path: 'platform/features/index.mdx' }, data: docs_135 },
  { info: { path: 'platform/features/notifications.mdx' }, data: docs_136 },
  { info: { path: 'platform/features/scheduling.mdx' }, data: docs_137 },
  { info: { path: 'platform/iam/index.mdx' }, data: docs_138 },
  { info: { path: 'platform/iam/organizations-and-groups.mdx' }, data: docs_139 },
  { info: { path: 'platform/iam/policies-and-security.mdx' }, data: docs_140 },
  { info: { path: 'platform/iam/users-roles-permissions.mdx' }, data: docs_141 },
  { info: { path: 'platform/index.mdx' }, data: docs_142 },
  { info: { path: 'storefront/catalog/categories.mdx' }, data: docs_143 },
  { info: { path: 'storefront/catalog/index.mdx' }, data: docs_144 },
  { info: { path: 'storefront/catalog/pricing.mdx' }, data: docs_145 },
  { info: { path: 'storefront/catalog/products.mdx' }, data: docs_146 },
  { info: { path: 'storefront/catalog/variants-and-addons.mdx' }, data: docs_147 },
  { info: { path: 'storefront/customers/authentication.mdx' }, data: docs_148 },
  { info: { path: 'storefront/customers/index.mdx' }, data: docs_149 },
  { info: { path: 'storefront/customers/overview.mdx' }, data: docs_150 },
  { info: { path: 'storefront/index.mdx' }, data: docs_151 },
  { info: { path: 'storefront/orders/cart.mdx' }, data: docs_152 },
  { info: { path: 'storefront/orders/checkout.mdx' }, data: docs_153 },
  { info: { path: 'storefront/orders/index.mdx' }, data: docs_154 },
  { info: { path: 'storefront/orders/payment-gateways.mdx' }, data: docs_155 },
  { info: { path: 'storefront/overview.mdx' }, data: docs_156 },
  { info: { path: 'storefront/promotions/index.mdx' }, data: docs_157 },
  { info: { path: 'storefront/promotions/push-notifications.mdx' }, data: docs_158 },
  { info: { path: 'storefront/reviews.mdx' }, data: docs_159 },
  { info: { path: 'storefront/settings/api.mdx' }, data: docs_160 },
  { info: { path: 'storefront/settings/gateways.mdx' }, data: docs_161 },
  { info: { path: 'storefront/settings/index.mdx' }, data: docs_162 },
  { info: { path: 'storefront/settings/locations.mdx' }, data: docs_163 },
  { info: { path: 'storefront/settings/notifications.mdx' }, data: docs_164 },
  { info: { path: 'storefront/stores/food-trucks.mdx' }, data: docs_165 },
  { info: { path: 'storefront/stores/index.mdx' }, data: docs_166 },
  { info: { path: 'storefront/stores/operating-hours.mdx' }, data: docs_167 },
  { info: { path: 'storefront/stores/store-locations.mdx' }, data: docs_168 },
  { info: { path: 'storefront/stores/stores-and-networks.mdx' }, data: docs_169 },
];

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: docsArray.map((doc: any) => ({
      type: 'page',
      path: doc.info.path.replace(/\.mdx?$/, ''),
      data: {
        ...doc.data,
        body: doc.data.default,
        structuredData: doc.data.structuredData || doc.data.toc,
      },
    })),
  },
});

export type Page = InferPageType<typeof source>;
