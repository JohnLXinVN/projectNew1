import classNames from 'classnames/bind';
import { useEffect } from 'react';

import images from '~/assets/images';
import FAQs from '~/components/FAQs';
import HeaderText from '~/components/HeaderText';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import LevelUp from '../Home/LevelUp';
import DesJoin from './DesJoin';
import FormSubmit from '../../components/FormSubmit';
import ListSelectPartners from './ListSelectPartners';

import styles from './Partners.module.scss';
import SolutionPartner from './SolutionPartner';
import TestimonialPlain from './TestimonialPlain';

const cx = classNames.bind(styles);

function Partners() {
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
                headerText="Payhawk’s Solution Partner Program"
                des="Join a network of professional services partners with key competencies in integration and customisation services for ERPs, HCM systems, accounting systems and other business tools."
                img={images.imgPartners1}
                btnLeft="Join a program"
                btnRight="Request services"
            />
            <div className="container">
                <HeaderText title="Join our network" />

                <DesJoin />
            </div>
            <SolutionPartner />
            <div className={cx('wrapper-introduce')}>
                <div className="container">
                    <IntroduceImgLeft
                        title="What can you expect when you become a Partner?"
                        content="Payhawk is present in more than 32 countries across two continents. Our customer-centric organisation and the product-oriented team have helped us disrupt the expense management market, by combining company cards, expenses and bill payments."
                        images={images.imgPartners5}
                        imgWidthFull
                    />
                </div>
            </div>
            <HeaderText title="Become a partner, and you'll get:" />
            <ListSelectPartners />
            <FormSubmit
                title="How can you become a Payhawk partner?"
                des="Please fill in the form and our Partnerships Team will contact you within 48 hours to discuss your application and explain the next steps."
            />
            <TestimonialPlain />
            <FAQs
                header="Have a question?"
                lists={[
                    {
                        id: 1,
                        title: 'What is a company expense card?',
                        des: 'A company expense card is a payment card used to make payments on behalf of a business. For example, a sales team employee may need to buy dinner with their company expense card at a client meeting. The payment is made for work using the card provided by the business and connected to a relevant bank account. This means the employee does not have to pay with their own money and wait for the company to reimburse them. And it means that the company gets immediate visibility over spend providing the card is linked to appropriate, comprehensive software. Some expense management solution providers, like Payhawk, also feature in-built, customisable workflows so businesses can control their spending and set limits and approvals.',
                    },
                    {
                        id: 2,
                        title: 'How do companies manage Payhawk corporate Visa cards',
                        des: 'Companies of a certain size will seek to work with a spend management solution like Payhawk to manage their company debit and credit cards. We can offer an all-in-one expense management experience for businesses that saves countless hours in admin and offers real-time visibility and control over spend. Most growing businesses and Enterprises will not manage their own company cards. Instead, they work with experts to automate manual financial processes, control spend, integrate their payments and accounting data, offer a great user experience and an easy way to capture receipts and invoices, and provide comprehensive controls and governance.',
                    },
                    {
                        id: 3,
                        title: 'What can we use corporate Visa cards for?',
                        des: 'Your business can use corporate visa cards for any legitimate business activities it needs. (Refer to terms and conditions of the card carrier for more information). Your card users/ employees simply need to make a payment with the debit or credit card, snap or download a receipt, upload it to the app, add a small bit of info, and theyre done. The expense then shows in real-time so that the finance team can check spend, keep track of budgeting, and create realistic forecasts. The supporting software for the virtual and physical company cards also lets the finance team set limits and add approval workflows according to company policy so that the business can implement good spend control and governance.',
                    },
                    {
                        id: 4,
                        title: 'Users ask: Can I use my corporate card for personal expenses?',
                        des: "No. Corporate cards are not for personal, family, or household purposes. Your organisation will define what's categorised as a personal vs. a work expense within its business expense policy. It may be that some companies allow for travel to the office to be expensed. Others may expect the employee to pay for travel themselves and reflect this in their salary and benefits. At Payhawk, we have in-built customisable approval workflows and spend limits, which means that a business can easily define what they want to be accepted, and it's much harder for users to break policy.",
                    },
                ]}
            />
            <LevelUp />
        </div>
    );
}

export default Partners;
