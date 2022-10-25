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
                header="FAQs"
                headerContent1="What is a company expense card?"
                content1="A company expense card is a payment card used to make payments on behalf of a business. For example, a sales team employee may need to buy dinner with their company expense card at a client meeting. The payment is made for work using the card provided by the business and connected to a relevant bank account. This means the employee does not have to pay with their own money and wait for the company to reimburse them. And it means that the company gets immediate visibility over spend providing the card is linked to appropriate, comprehensive software. Some expense management solution providers, like Payhawk, also feature in-built, customisable workflows so businesses can control their spending and set limits and approvals."
                headerContent2="How do companies manage Payhawk corporate visa cards"
                content2="Companies of a certain size will seek to work with a spend management solution like Payhawk to manage their company debit and credit cards. We can offer an all-in-one expense management experience for businesses that saves countless hours in admin and offers real-time visibility and control over spend. Most growing businesses and Enterprises will not manage their own company cards. Instead, they work with experts to automate manual financial processes, control spend, integrate their payments and accounting data, offer a great user experience and an easy way to capture receipts and invoices, and provide comprehensive controls and governance."
            />
            <LevelUp />
        </div>
    );
}

export default ProductVisaCards;
