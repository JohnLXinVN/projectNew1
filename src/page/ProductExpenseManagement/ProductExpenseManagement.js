import classNames from 'classnames/bind';
import { useEffect } from 'react';

import images from '~/assets/images';
import FAQs from '~/components/FAQs';
import HeaderText from '~/components/HeaderText';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import ChooseCardItem from '~/layouts/components/ChooseCardItem';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';
import LevelUp from '../Home/LevelUp';

import styles from './ProductExpenseManagement.module.scss';

const cx = classNames.bind(styles);

function ProductExpenseManagement() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <HeaderTopProduct
                headerText="Expense management software for better financial control"
                des="All-in-one expense management software that tracks and helps CFOs and finance teams optimise company budgets and expenses."
                img={images.imgExpenseManagement1}
            />
            <div className="container">
                <div className="mt-96 mb-48">
                    <div className="row">
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement1}
                                content="Track your company spend"
                                des="Monitor every business expense and transaction as it happens in real-time. Use your expense management software to gain important insights to help with planning and forecasting. And easily share reports with stakeholders and senior management."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement2}
                                content="Make every payment traceable"
                                des="Connect specific corporate visa cards to specific employees, so you always know who's spending. Support individuals to spend as necessary across different functions, too; with individual and team cards."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement3}
                                content="Create business budgets"
                                des="Set up your budget management per cost centre and track payments and expenses against them in real-time. Get valuable insights on how money is spent across business functions and adjust budgets as required."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement4}
                                content="Empower budget holders"
                                des="Give every budget owner, whether an individual or team leader, real-time visibility over their project budget when receiving requests to help assess actual and planned spend and keep track of remaining funds."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement5}
                                content="Never miss regular payments or subscriptions"
                                des="Make regular company payments via your debit or credit card for anything from rent to magazine subs, and if your corresponding card has insufficient funds, we'll remind you to upload funds before the deadline."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement6}
                                content="Accounting data"
                                des="Set up cost centres, categories, and VAT in Payhawk. Our AI automatically suggests the correct expense data for your invoice and recurring payments and uses machine learning to improve recommendations based on your actions."
                            />
                        </div>
                    </div>
                    <HeaderText
                        title="Clever spend management"
                        des="Customisable expense policy tools to monitor and limit spend, set approval flows, and stay agile"
                    />

                    <IntroduceImgLeft
                        title="Set spend limits"
                        content="Define individual or team thresholds and adjust them at any time. The associated budget owner will receive notifications in real-time to approve transactions which helps reduce risk of fraud and support spend control."
                        images={images.imgExpenseManagement2}
                        imgWidthFull
                    />
                    <IntroduceImgRight
                        title="Define spend policies and approval flows"
                        content="Build spend policies with our advanced workflows and manage all card controls such as recurring limits, ATM withdrawals, and the approval chain for requests. Plus, use expense management software to take care of your debit and credit cards in bulk."
                        images={images.imgExpenseManagement3}
                        imgWidthFull
                    />
                    <IntroduceImgLeft
                        title="Customise your approval chain"
                        content="Create custom approval chains as required by your own complex spend policies. Add multiple employees responsible for approving a request."
                        images={images.imgExpenseManagement4}
                        imgWidthFull
                    />
                    <IntroduceImgRight
                        title="Keep your approvals agile"
                        content="No need to wait until you’re back at your desk, approve requests quickly with smart expense management software via the Payhawk App on your mobile device."
                        images={images.imgExpenseManagement5}
                        imgWidthFull
                        btnBlackWhile="Schedule a demo"
                        btnWhileBlack="Watch video"
                    />
                    <HeaderText
                        title="Clear and actionable reporting"
                        des="Detailed, personalised, user-friendly reporting that helps manage and optimise business spend"
                    />
                    <div className="row">
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement7}
                                content="Support your finance team"
                                des="Show your finance team live cash flow data and the condition of each business budget, including reports on overall company expenditure, as well as by cost centre and team, with the ability to filter by category, supplier, and employee."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement7}
                                content="Create personalised reports"
                                des="Build reports that work best for your business by filtering transactions by debit or credit card, category, employee, supplier, missing receipt, amounts, and more. Create and save your custom filtered views, so they're always handy."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.iconExpenseManagement7}
                                content="Keep track of your subscriptions"
                                des="Track all subscription spending and provide insights into upcoming company payments to help employees estimate their monthly expenditure. Analyse subscription spending and show any changes in payments as they’re made."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FAQs
                header="FAQs"
                lists={[
                    {
                        id: 1,
                        title: 'What is spend management software?',
                        des: "Spend management software helps businesses manage their spending. In Payhawk's case, our spend management software can support businesses in the various ways they spend, and automate much of the process involved. Our software supports multiple spend management requirements, including company cards, reimbursements, employee expense management, supplier invoice (bill) payments, invoice management, accounting system/ ERP integrations, and subscriptions. Spend management software must help businesses get a good view over their spending in order to support budgets and cost control. And, it must help make associated accounting easier and more streamlined.",
                    },
                    {
                        id: 2,
                        title: 'What is a spend management company?',
                        des: 'A spend management company offers businesses the various tools they need to manage spending within their organisation, including providing reporting and visibility over money spent. At Payhawk, we help companies manage not only reimbursable employee expenses like per diems and mileage but also supplier invoices and subscriptions. Spend management should typically include ways to empower employees to spend while helping the business stay in command of cash flow with proactive and reactive controls (like approval workflows) built into company cards and supporting expense management software.',
                    },
                    {
                        id: 3,
                        title: 'Is spend management the same as expense management?',
                        des: 'Spend management and expense management are similar, but there is a difference between what each includes. Spend management involves the overarching management strategy, process, and tools to look after bills payments/supplier invoices, company cards, and employee expenses and reimbursements. It includes specific ways to manage and control spending, including approval workflows, accounting integrations and automation, and real-time reporting. Expense management, however, only covers expenses. Even so, expense management covers many formats, including per diems, mileage, and more.',
                    },
                    {
                        id: 4,
                        title: 'How does Payhawk improve expense reporting?',
                        des: "Payhawk helps you use your spend data effectively and efficiently. Our solution features customisable 'custom fields' in order to capture the data you need to support your business from a commercial perspective. The custom fields allow you to capture expense data in a way that best helps your business to segment information based on projects, locations, and more. By creating custom fields for spend, you can ultimately define what you report on to make it the most specific and valuable for your business. Watch the Explose customer story to discover how they used custom fields to manage project spend in their digital agency.",
                    },
                    {
                        id: 5,
                        title: 'Will it improve receipt chasing/receipt capture?',
                        des: "Yes. Any digital payments can be easily uploaded to the portal as PDFs, and any physical receipts need only be snapped by a phone camera and uploaded to the app. The OCR technology in the Payhawk portal automatically uploads all of the information, so the employee (and admins in the finance team) avoid 95% of manual data entry. Employees don't need to collect receipts throughout the month or fill out endless spreadsheets. The finance team admins can see what receipts and invoices are still missing, and the portal sends automatic reminders to users to reduce receipt chasing. Our customer AIOPSGROUP reports that they have saved approx' 2h daily and up to 1-2 days in terms of resolution time since using Payhawk.",
                    },
                    {
                        id: 6,
                        title: 'How can we ensure our teams follow our company expense policies?',
                        des: 'With Payhawk, your business expense policies are built into the solution. You can set limits at multiple levels to ensure that you give employees freedom within a framework when it comes to spending. Tineke Van Maerken, VP of Finance at our customer Luxair explains, "as an administrator, I can adapt card limits instantaneously to suit the business needs. Every cardholder has a monthly limit — but unexpected expenses can occur beyond the limit, too." Admins can set automatic approval limits on employee fund requests, different levels of approval within the workflows, and multiple employees to approve requests (meaning that approvals get completed even if someone is off).',
                    },
                    {
                        id: 7,
                        title: 'Is there an approval process built-in?',
                        des: 'The Payhawk solution lets admins select individual or team spend thresholds. Your admins can then update these thresholds at any time in just a few clicks to ensure that the tool is responsive to changing business needs. If an employee needs to request more money, they can do this by creating a fund request, again in just a matter of clicks. The budget owner can then choose to approve or reject the request from wherever they are via the app on their phone or laptop.',
                    },
                    {
                        id: 8,
                        title: 'How can expense management software help me with end-of-month closing?',
                        des: "By using Payhawk, businesses can close the month up to five days faster. Bank reconciliations and syncing transactions and invoices are among the most time-consuming tasks for finance and accounting teams at the month-end close. With Payhawk, these arduous tasks are automated and sent directly to accounting software via an ERP integration. Time is saved on receipt chasing, too, as the mobile app asks the user to attach their receipt directly after the transaction (and sends them reminders throughout the month if they haven't.) Also, Payhawk customers will have a unique IBAN so that the business can pay employee reimbursements and bills via SEPA Instant and Faster Payments.",
                    },
                ]}
            />

            <LevelUp />
        </div>
    );
}

export default ProductExpenseManagement;
