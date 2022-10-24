const images = {
    logo: require('~/assets/images/imgHomePage/logo.svg').default,
    avatarEn: require('~/assets/images/imgHomePage/en.svg').default,
    avatarDeutschland: require('~/assets/images/imgHomePage/Deutschland.svg').default,
    avatarEspanol: require('~/assets/images/imgHomePage/España.svg').default,
    avatarFrance: require('~/assets/images/imgHomePage/France.svg').default,
    avatarNederlanden: require('~/assets/images/imgHomePage/Nederland.svg').default,
    iconBill: require('~/assets/images/imgHomePage/bill.svg').default,
    iconExpense: require('~/assets/images/imgHomePage/expense.svg').default,
    iconCard: require('~/assets/images/imgHomePage/iconcard.svg').default,
    iconTravel: require('~/assets/images/imgHomePage/icontravel.svg').default,
    iconIntegrations: require('~/assets/images/imgHomePage/integrations.svg').default,
    iconInvoice: require('~/assets/images/imgHomePage/invoice.svg').default,
    iconSub: require('~/assets/images/imgHomePage/sub.svg').default,
    iconblog: require('~/assets/images/imgHomePage/iconblog.svg').default,
    iconhelp: require('~/assets/images/imgHomePage/iconhelp.svg').default,
    iconebook: require('~/assets/images/imgHomePage/iconebook.svg').default,
    iconpodcast: require('~/assets/images/imgHomePage/iconpodcast.svg').default,
    logoBrand1: require('~/assets/images/imgHomePage/logobrand1.svg').default,
    logoBrand2: require('~/assets/images/imgHomePage/logobrand2.svg').default,
    logoBrand3: require('~/assets/images/imgHomePage/logobrand3.svg').default,
    logoBrand4: require('~/assets/images/imgHomePage/logobrand4.svg').default,
    logoBrand5: require('~/assets/images/imgHomePage/logobrand5.svg').default,
    logoBrand6: require('~/assets/images/imgHomePage/logobrand6.svg').default,
    greenLitter: require('~/assets/images/imgHomePage/greenlitte.svg').default,
    img1more: require('~/assets/images/imgHomePage/img1more.svg').default,
    img3more: require('~/assets/images/imgHomePage/img3more.svg').default,
    img4more: require('~/assets/images/imgHomePage/img4more.svg').default,
    iconTick: require('~/assets/images/imgHomePage/iconTick.svg').default,
    integrationImg: require('~/assets/images/imgHomePage/integrationsimg.svg').default,
    img1: require('~/assets/images/imgHomePage/img1.webp'),
    img2: require('~/assets/images/imgHomePage/img2.webp'),
    img3: require('~/assets/images/imgHomePage/img3.webp'),
    img4: require('~/assets/images/imgHomePage/img4.webp'),
    img2more: require('~/assets/images/imgHomePage/img2more.webp'),
    imgSlider1: require('~/assets/images/imgHomePage/img-slider1.webp'),
    imgSlider2: require('~/assets/images/imgHomePage/img-slider2.webp'),
    imgSlider3: require('~/assets/images/imgHomePage/img-slider3.webp'),
    imgSolution1: require('~/assets/images/imgHomePage/img-solution1.webp'),
    imgSolution2: require('~/assets/images/imgHomePage/img-solution2.webp'),
    imgSolution3: require('~/assets/images/imgHomePage/img-solution3.webp'),
    imgBanner: require('~/assets/images/imgHomePage/img12.webp'),
    smartCard1: require('~/assets/images/imgHomePage/smartcard1.webp'),
    smartCard2: require('~/assets/images/imgHomePage/smartcard2.webp'),
    testimonialImg: require('~/assets/images/imgHomePage/testimonial-img.webp'),
    hardCard: require('~/assets/images/imgHomePage/cardvisa.webp'),
    iconFace: require('~/assets/images/imgHomePage/iconFace.svg').default,
    iconLinkedIn: require('~/assets/images/imgHomePage/iconLinkedIn.svg').default,
    iconTwitter: require('~/assets/images/imgHomePage/iconTwitter.svg').default,
    iconYoutube: require('~/assets/images/imgHomePage/iconYoutube.svg').default,
    imgProductCard1: require('~/assets/images/imgProductCard/imgproduct1.webp'),
    imgChoose1: require('~/assets/images/imgProductCard/iconChoose1.svg').default,
    imgChoose2: require('~/assets/images/imgProductCard/iconChoose2.svg').default,
    imgChoose3: require('~/assets/images/imgProductCard/iconChoose3.svg').default,
    imgChoose4: require('~/assets/images/imgProductCard/iconChoose4.svg').default,
    imgChoose5: require('~/assets/images/imgProductCard/iconChoose5.svg').default,
    imgChoose6: require('~/assets/images/imgProductCard/iconChoose6.svg').default,
    imgProductCard2: require('~/assets/images/imgProductCard/imgproductcard2.webp'),
    imgProductCard3: require('~/assets/images/imgProductCard/imgproductcard3.webp'),
    imgProductCard4: require('~/assets/images/imgProductCard/imgproductcard4.svg').default,
    imgProductCard5: require('~/assets/images/imgProductCard/imgproductcard5.webp'),
    imgProductCard6: require('~/assets/images/imgProductCard/imgproductcard6.svg').default,
    imgProductCard7: require('~/assets/images/imgProductCard/imgproductcard7.webp'),
    imgProductCard8: require('~/assets/images/imgProductCard/imgproductcard8.webp'),
    icon1: require('~/assets/images/imgProductCard/icon1.svg').default,
    imgBusinessTravel1: require('~/assets/images/imgBusinessTravel/imgbusinesstravel1.webp'),
    imgBusinessTravel2: require('~/assets/images/imgBusinessTravel/imgbusinesstravel2.svg').default,
    imgBusinessTravel3: require('~/assets/images/imgBusinessTravel/imgbusinesstravel3.svg').default,
    imgBusinessTravel4: require('~/assets/images/imgBusinessTravel/imgbusinesstravel4.webp'),
    imgBusinessTravel5: require('~/assets/images/imgBusinessTravel/imgbusinesstravel5.svg').default,
    imgBusinessTravel6: require('~/assets/images/imgBusinessTravel/imgbusinesstravel6.webp'),
    imgBusinessTravel7: require('~/assets/images/imgBusinessTravel/imgbusinesstravel7.webp'),
    imgExpenseManagement1: require('~/assets/images/imgExpenseManagement/expense-management1.webp'),
    imgExpenseManagement2: require('~/assets/images/imgExpenseManagement/expense-management2.svg').default,
    imgExpenseManagement3: require('~/assets/images/imgExpenseManagement/expense-management3.svg').default,
    imgExpenseManagement4: require('~/assets/images/imgExpenseManagement/expense-management4.svg').default,
    imgExpenseManagement5: require('~/assets/images/imgExpenseManagement/expense-management5.webp'),
    iconExpenseManagement1: require('~/assets/images/imgExpenseManagement/icon-expense-management1.svg').default,
    iconExpenseManagement2: require('~/assets/images/imgExpenseManagement/icon-expense-management2.svg').default,
    iconExpenseManagement3: require('~/assets/images/imgExpenseManagement/icon-expense-management3.svg').default,
    iconExpenseManagement4: require('~/assets/images/imgExpenseManagement/icon-expense-management4.svg').default,
    iconExpenseManagement5: require('~/assets/images/imgExpenseManagement/icon-expense-management5.svg').default,
    iconExpenseManagement6: require('~/assets/images/imgExpenseManagement/icon-expense-management6.svg').default,
    iconExpenseManagement7: require('~/assets/images/imgExpenseManagement/icon-expense-management7.svg').default,
    imgBillPayment1: require('~/assets/images/imgBillPay/img-bill1.webp'),
    imgBillPayment2: require('~/assets/images/imgBillPay/img-bill2.svg').default,
    imgBillPayment3: require('~/assets/images/imgBillPay/img-bill3.webp'),
    imgBillPayment4: require('~/assets/images/imgBillPay/img-bill4.svg').default,
    imgBillPayment5: require('~/assets/images/imgBillPay/img-bill5.svg').default,
    imgBillPayment6: require('~/assets/images/imgBillPay/img-bill6.svg').default,
    imgBillPayment7: require('~/assets/images/imgBillPay/img-bill7.svg').default,
    iconBillPayment1: require('~/assets/images/imgBillPay/icon-bill1.svg').default,
    iconBillPayment2: require('~/assets/images/imgBillPay/icon-bill2.svg').default,
    iconBillPayment3: require('~/assets/images/imgBillPay/icon-bill3.svg').default,
    iconBillPayment4: require('~/assets/images/imgBillPay/icon-bill4.svg').default,
    iconBillPayment5: require('~/assets/images/imgBillPay/icon-bill5.svg').default,
    iconBillPayment6: require('~/assets/images/imgBillPay/icon-bill6.svg').default,
    iconBillPayment7: require('~/assets/images/imgBillPay/icon-bill7.svg').default,
    iconBillPayment8: require('~/assets/images/imgBillPay/icon-bill8.svg').default,
    iconBillPayment9: require('~/assets/images/imgBillPay/icon-bill9.svg').default,
};

export default images;
