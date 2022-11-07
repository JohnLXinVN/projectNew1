import { useEffect } from 'react';

import images from '~/assets/images';
import FAQs from '~/components/FAQs';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import LevelUp from '../Home/LevelUp';
import CardManagement from './CardManagement';
import ChooseCard from './ChooseCard';
import ControlGlobal from './ControlGlobal';
import EasyExpenseReporting from './EasyExpenseReporting';
import StreamlinedTeamSpend from './StreamlinedTeamSpend';
import Video from '~/layouts/components/Video';
import video from '~/assets/video';

function ProductVisaCards() {
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
        <div className={'wrapper'}>
            <HeaderTopProduct
                headerText="The most efficient corporate Visa Cards for businesses"
                des="Visa Credit and Visa Debit cards backed by powerful software to control your company’s spending."
                img={images.imgProductCard1}
            />
            <ChooseCard />
            <CardManagement />
            <Video src={video.cardVideo} />
            <StreamlinedTeamSpend />
            <ControlGlobal />
            <EasyExpenseReporting />
            <FAQs
                header="What CFOs often ask about"
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
                        des: "Your business can use corporate visa cards for any legitimate business activities it needs. (Refer to terms and conditions of the card carrier for more information). Your card users/ employees simply need to make a payment with the debit or credit card, snap or download a receipt, upload it to the app, add a small bit of info, and they're done. The expense then shows in real-time so that the finance team can check spend, keep track of budgeting, and create realistic forecasts. The supporting software for the virtual and physical company cards also lets the finance team set limits and add approval workflows according to company policy so that the business can implement good spend control and governance.",
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

export default ProductVisaCards;
