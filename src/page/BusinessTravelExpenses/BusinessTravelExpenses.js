import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import FAQs from '~/components/FAQs';
import HeaderText from '~/components/HeaderText';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import config from '~/config';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';
import LevelUp from '../Home/LevelUp';

import styles from './BusinessTravelExpenses.module.scss';

const cx = classNames.bind(styles);

function BusinessTravelExpenses() {
    return (
        <div className={cx('wrapper')}>
            <HeaderTopProduct
                headerText="Business travel expenses made easy with Payhawk"
                des="Use Payhawk to track mileage, per diems, and out-of-pocket reimbursements, all in one place. Pack your bags, grow your business, and leave the trip expenses to us."
                img={images.imgBusinessTravel1}
            />
            <div className="container">
                <HeaderText
                    title="Track mileage accurately"
                    des="Accurately reimburse your team members with just a few clicks whenever they use their own vehicle for business. Travelling employees only need to add the start and end points (and any other stops), and Payhawk automatically calculates the exact business travel expense and reimbursement amount."
                />
                <IntroduceImgLeft
                    title="Payhawk mileage tracking benefits"
                    listItem
                    images={images.imgBusinessTravel2}
                    listItemBusinessTravelExpenses
                />
                <IntroduceImgRight
                    title="Control your tax deductible expenses"
                    content="Establish an easy way to report the distance travelled for work purposes to calculate the exact reimbursement. Finance teams can then effortlessly track the tax-deductible mileage expenses."
                    btnBlackWhile="Schedule a demo"
                    images={images.imgBusinessTravel3}
                />
                <HeaderText
                    title="Set custom per diem rates"
                    des="Your finance team can now easily set custom per diem rates and add the deduction amounts. Once you approve the per diem request, the employee will be reimbursed in a single click directly from Payhawk."
                />
                <IntroduceImgLeft
                    title="Reduce manual work"
                    content="Employees can now submit per diem expenses in just a few seconds by entering all the necessary info via the mobile app. Payhawk will auto-calculate the exact amount they’ll get reimbursed based on the trip details, including meals, and meal deductions."
                    images={images.imgBusinessTravel4}
                    imgWidthFull
                />
                <IntroduceImgRight
                    title="Compliant with regulations"
                    content="Some countries like Germany set specific per diem rates for companies to follow for their employees. These rates are based on the amount of time away from home. And they don’t include any costs already covered by the employer, such as accommodation. Payhawk’s per diem calculations are 100% compliant with the German regulations."
                    images={images.imgBusinessTravel5}
                    btnBlackWhile="Schedule a demo"
                />
                <HeaderText
                    title="Streamline employee reimbursements"
                    des="Manage all business travel expenses and approvals for employees that don't use a company card. You can also automate and customise approval workflows for reimbursements according to your company’s expense policy."
                />
                <IntroduceImgLeft
                    title1="Put your finance team in the driving seat"
                    title2="Save time and empower your team"
                    content1="With Payhawk, an employee can add their personal bank account information when they add the expense for reimbursement. The finance team then reviews the expenses and can reimburse individually or in bulk in just a few clicks. The funds will then hit the employee’s bank account in a flash, thanks to Instant SEPA and Faster Payments."
                    content2="Reimbursable expenses can be a major source of tension in a business. For the finance team, this looks like getting people to submit expense reports on time and avoiding lost receipts. While for their non-finance colleagues, it’s about getting reimbursed promptly, especially for urgent payments. Thanks to Payhawk, you can eliminate many of these issues and save time and friction, allowing your team to focus on what matters instead; growing the business."
                    btnBlackWhile="Schedule a demo"
                    doubleTitle
                    toBtn={config.routes.demo}
                    imgWidthFull
                    images={images.imgBusinessTravel6}
                />
                <HeaderText
                    title="Support compliant accommodation bookings"
                    des="Lead with control and governance around accommodation spend by building spend limits and workflows into your tool according to your travel policy."
                />
                <IntroduceImgRight
                    title1="Manage accommodation spend"
                    title2="Connect Payhawk and Travelperk for a smooth ride"
                    content1="Give your employees a frictionless way to book accommodation via the portal in the same way as they would make any expense using Payhawk — ensuring they photograph or upload a proof of payment."
                    content2="Thanks to our direct integration with Travelperk, there’s no need to individually upload any of your flight, hotel, car, or train ticket receipts to Payhawk. As long as you booked via Travelperk, these expenses will be automatically transferred to your Payhawk account."
                    btnBlackWhile="Schedule a demo"
                    toBtn={config.routes.demo}
                    doubleTitle
                    imgWidthFull
                    images={images.imgBusinessTravel7}
                />
                <HeaderText
                    title="One integrated tool for all your company spend"
                    des="From cash, personal cards, and business credit and debit cards to invoice payments, subscription management, and business travel expenses, Payhawk gives you complete real-time visibility of your company spend."
                />

                <div className={cx('btn-primary')}>
                    <Button primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                        Schedule a demo
                    </Button>
                </div>
            </div>
            <FAQs
                header="Have a question?"
                lists={[
                    {
                        id: 1,
                        title: 'Can I connect Payhawk to TravelPerk?',
                        des: 'Yes, you can! The integration facilitates automated reconciliation of all TravelPerk expenses made with the Payhawk company card. The integration fetches the invoices from TravelPerk and matches them to the transactions done with the card. Read more about it here.',
                    },
                    {
                        id: 2,
                        title: 'Is it safe to do employee reimbursements via Payhawk?',
                        des: 'Yes, it is safe. Payhawk connects directly to your employee’s bank account and lets you complete the transfer via SEPA Instant or Faster Payments. Read more here',
                    },
                    {
                        id: 3,
                        title: 'How does Payhawk calculate the per diem expense? ',
                        des: 'Once the per diem rates are set in the portal, employees simply need to enter travel data. Then, Payhawk will automatically calculate the per diem reimbursement amount for the employee. Read more here and also here.',
                    },
                    {
                        id: 3,
                        title: 'How does Payhawk calculate the mileage expense? ',
                        des: "The employee will first use Google Maps to help make their mileage expense. Then, once your business's mileage rates are set in the portal, Payhawk will multiply this rate by the KM provided by the employee in Google Maps. Read more here.",
                    },
                ]}
            />
            <LevelUp />
        </div>
    );
}

export default BusinessTravelExpenses;
