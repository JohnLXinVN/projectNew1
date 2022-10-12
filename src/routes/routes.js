import config from '~/config';
import BillPayments from '~/page/BillPayments';
import Blog from '~/page/Blog';
import BusinessTravelExpenses from '~/page/BusinessTravelExpenses';
import Customers from '~/page/Customers';
import Ebooks from '~/page/Ebooks';

import Integrations from '~/page/Integrations';
import InvoiceManagement from '~/page/InvoiceManagement';
import Login from '~/page/Login';
import Podcast from '~/page/Podcast';
import Pricing from '~/page/Pricing';
import ProductExpenseManagement from '~/page/ProductExpenseManagement';
import ProductVisaCards from '~/page/ProductVisaCards';
import Subscriptions from '~/page/Subscriptions';
import Demo from '~/page/Demo';
import LayoutLogin from '~/layouts/LayoutLogin';
import EbookFreePlatform from '~/page/EbookFreePlatform';
import Help from '~/page/Help';
import Home from '~/page/Home/Home';
import Product from '~/page/Product';

const publicRoute = [
    { path: config.routes.blog, component: Blog },
    {
        path: config.routes.businesstravelexpenses,
        component: BusinessTravelExpenses,
    },
    { path: config.routes.customers, component: Customers },
    { path: config.routes.ebooks, component: Ebooks },
    { path: config.routes.billpayments, component: BillPayments },
    { path: config.routes.integrations, component: Integrations },
    { path: config.routes.invoiceManagement, component: InvoiceManagement },
    { path: config.routes.login, component: Login, layout: LayoutLogin },
    { path: config.routes.podcast, component: Podcast },
    { path: config.routes.pricing, component: Pricing },
    {
        path: config.routes.productexpensemanagement,
        component: ProductExpenseManagement,
    },
    { path: config.routes.productvisacards, component: ProductVisaCards },
    { path: config.routes.subscriptions, component: Subscriptions },
    { path: config.routes.demo, component: Demo },
    { path: config.routes.ebookfreeplatform, component: EbookFreePlatform },
    { path: config.routes.help, component: Help },
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
];

const privateRoute = [];

export { publicRoute, privateRoute };
