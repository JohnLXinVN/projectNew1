import config from '~/config';
import BillPayments from '~/page/BillPayments';
import BusinessTravelExpenses from '~/page/BusinessTravelExpenses';
import Customers from '~/page/Customers';

import Integrations from '~/page/Integrations';
import InvoiceManagement from '~/page/InvoiceManagement';
import Login from '~/page/Login';
import Pricing from '~/page/Pricing';
import ProductExpenseManagement from '~/page/ProductExpenseManagement';
import ProductVisaCards from '~/page/ProductVisaCards';
import Subscriptions from '~/page/Subscriptions';
import Demo from '~/page/Demo';
import LayoutLogin from '~/layouts/LayoutLogin';
import EbookFreePlatform from '~/page/EbookFreePlatform';
import Home from '~/page/Home/Home';
import Product from '~/page/Product';
import Download from '~/page/Download';
import WhyPayhawk from '~/page/WhyPayhawk';
import Webinars from '~/page/Webinars';
import Security from '~/page/Security';
import UseCases from '~/page/UseCases';
import Partners from '~/page/Partners';

const publicRoute = [
    {
        path: config.routes.businesstravelexpenses,
        component: BusinessTravelExpenses,
    },
    { path: config.routes.customers, component: Customers },
    { path: config.routes.billpayments, component: BillPayments },
    { path: config.routes.integrations, component: Integrations },
    { path: config.routes.invoiceManagement, component: InvoiceManagement },
    { path: config.routes.login, component: Login, layout: LayoutLogin },
    { path: config.routes.pricing, component: Pricing },
    {
        path: config.routes.productexpensemanagement,
        component: ProductExpenseManagement,
    },
    { path: config.routes.productvisacards, component: ProductVisaCards },
    { path: config.routes.subscriptions, component: Subscriptions },
    { path: config.routes.demo, component: Demo },
    { path: config.routes.ebookfreeplatform, component: EbookFreePlatform },
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.download, component: Download },
    { path: config.routes.whypayhawk, component: WhyPayhawk },
    { path: config.routes.webinars, component: Webinars },
    { path: config.routes.security, component: Security },
    { path: config.routes.usecase, component: UseCases },
    { path: config.routes.partners, component: Partners },
];

const privateRoute = [];

export { publicRoute, privateRoute };
