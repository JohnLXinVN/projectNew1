import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import images from '~/assets/images';

import ChildrenItemHeader from '~/components/ChildrenItemHeader';
import config from '~/config';

import styles from './MenuHeaderItem.module.scss';

const cx = classNames.bind(styles);

function MenuHeaderItem() {
    const menuHeaderItem = [
        {
            name: 'Product',
            icon: <FontAwesomeIcon icon={faChevronDown} />,
            children1: [
                {
                    title: 'Visa Company Cards',
                    des: 'Smart corporate cards for employees and teams',
                    icon: <img className={cx('icon-img')} src={images.iconCard} alt="icon" />,
                    to: config.routes.productvisacards,
                },
                {
                    title: 'Travel expenses',
                    des: 'Track mileage, per diems, and reimbursements, all in one place.',
                    icon: <img className={cx('icon-img')} src={images.iconTravel} alt="icon" />,
                    to: config.routes.businesstravelexpenses,
                },
                {
                    title: 'Expense management',
                    des: 'Advanced approval flows and spend policies',
                    icon: <img className={cx('icon-img')} src={images.iconExpense} alt="icon" />,
                    to: config.routes.productexpensemanagement,
                },
                {
                    title: 'Bill payments',
                    des: 'Free transfers with SEPA Instant and Faster Payments',
                    icon: <img className={cx('icon-img')} src={images.iconBill} alt="icon" />,
                    to: config.routes.billpayments,
                },
                {
                    title: 'Invoice management',
                    des: 'AP approvals and data extraction in 60 languages',
                    icon: <img className={cx('icon-img')} src={images.iconInvoice} alt="icon" />,
                    to: config.routes.invoiceManagement,
                },
                {
                    title: 'Integrations',
                    des: 'One-click integrations with your accounting or ERP software',
                    icon: <img className={cx('icon-img')} src={images.iconIntegrations} alt="icon" />,
                    to: config.routes.integrations,
                },
                {
                    title: 'Subscriptions',
                    des: 'Monitor all your company’s recurring payments in one place',
                    icon: <img className={cx('icon-img')} src={images.iconSub} alt="icon" />,
                    to: config.routes.subscriptions,
                },
            ],
        },
        {
            name: 'Resources',
            icon: <FontAwesomeIcon icon={faChevronDown} />,
            children2: [
                {
                    title: 'Blog',
                    des: 'Insight and tips for finance teams',
                    icon: <img className={cx('icon-img')} src={images.iconblog} alt="icon" />,
                    to: config.routes.blog,
                },
                {
                    title: 'Help Centre',
                    des: 'Get started with , all features explained',
                    icon: <img className={cx('icon-img')} src={images.iconhelp} alt="icon" />,
                    to: config.routes.help,
                },
                {
                    title: 'Ebooks',
                    des: 'In-depth guides and studies',
                    icon: <img className={cx('icon-img')} src={images.iconebook} alt="icon" />,
                    to: config.routes.ebooks,
                },
                {
                    title: 'Podcast',
                    des: 'Feature releases and tech news',
                    icon: <img className={cx('icon-img')} src={images.iconpodcast} alt="icon" />,
                    to: config.routes.podcast,
                },
            ],
        },
        {
            name: 'Customer Stories',
            to: config.routes.customers,
        },
        {
            name: 'Pricing',
            to: config.routes.pricing,
        },
    ];
    return (
        <>
            <div className={cx('menu-header')}>
                {menuHeaderItem.map((item, index) => (
                    <div className={cx('menu-header')} key={index}>
                        {!!item.icon && (
                            <Tippy
                                arrow
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                                        {!!item.children1 && (
                                            <div className={cx('menu-children1')}>
                                                <div className={cx('menu-inner')}>
                                                    {item.children1.map((childrenItem, index) => (
                                                        <ChildrenItemHeader data={childrenItem} key={index} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {!!item.children2 && (
                                            <div className={cx('menu-children2')}>
                                                <header className={cx('header-menu')}>
                                                    <div className={cx('nameNew')}>New</div>
                                                    <Link className={cx('title')} to={config.routes.ebookfreeplatform}>
                                                        <div className={cx('content')}>
                                                            Build a finance function focused on growth - free ebook
                                                        </div>
                                                        <FontAwesomeIcon
                                                            className={cx('icon-content')}
                                                            icon={faArrowRight}
                                                        />
                                                    </Link>
                                                </header>
                                                <div className={cx('menu-inner')}>
                                                    {item.children2.map((childrenItem, index) => (
                                                        <ChildrenItemHeader data={childrenItem} key={index} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            >
                                <div className={cx('menu-item', 'menu-item-icon')}>
                                    <div className={cx('item-name')}>{item.name}</div>
                                    <div className={cx('item-icon')}>{item.icon}</div>
                                </div>
                            </Tippy>
                        )}

                        {!!item.to && (
                            <Link className={cx('menu-item')} to={item.to}>
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default MenuHeaderItem;
