
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { RouterProvider } from 'react-router'
import AppLayout from './components/Layouts/AppLayout'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About/AboutUs'
import ContactUs from './pages/Contact/ContactUs'
import Accounts from './pages/Accounts/Accounts'
import DigitalSolutions from './pages/DigitalSolutions/DigitalSolutions'
import GoldLoanService from './pages/FooterPageLink/GoldLoanService'
import CashMangProd from './pages/CashMangProd/CashMangProd'
import TermsConditions from './pages/Policy/TermsConditions'
import PrivacyPolicy from './pages/Policy/PrivacyPolicy'
import Disclaimer from './pages/Policy/Disclaimer'
import RefundPolicy from './pages/Policy/RefundPolicy'
import Faq from './pages/Others/Faq'
import Support from './pages/Others/Support'
import { ThemeProvider } from './context/ThemeContext'
import PersonalLoan from './pages/LoanServices/PersonalLoan'
import BusinessLoan from './pages/LoanServices/BusinessLoan'
import GroupLoan from './pages/LoanServices/GroupLoan'
import ProductLoan from './pages/LoanServices/ProductLoan'
import LoanAgainstVehicle from './pages/LoanServices/LoanAgainstVehicle'
import FdInvesment from './pages/InvesmentsPlan/FdInvesment'
import RdInvesment from './pages/InvesmentsPlan/RdInvesment'
import SipInvesment from './pages/InvesmentsPlan/SipInvesment'
import BraceletsBangles from './pages/GoldLoanPages/BraceletsBangles'
import RingsEarRings from './pages/GoldLoanPages/RingsEarRings'
import Necklaces from './pages/GoldLoanPages/Necklaces'
import Pendants from './pages/GoldLoanPages/Pendants'
import AnkletsToeRings from './pages/GoldLoanPages/AnkletsToeRings'
import KhazanaJewellery from './pages/GoldLoanPages/KhazanaJewellery'
import BanglesDesigns from './pages/GoldLoanPages/BanglesDesigns'
import RingDesigns from './pages/GoldLoanPages/RingDesigns'
import LoanService from './pages/FooterPageLink/LoanService'
import InvesmentsPlan from './pages/FooterPageLink/InvesmentsPlan'
import PlApplyFrom from './pages/LoanServices/ApplyFrom/PL/PlApplyFrom'
import BlApplyFrom from './pages/LoanServices/ApplyFrom/BL/BlApplyFrom'
import ProApplyFrom from './pages/LoanServices/ApplyFrom/ProL/ProApplyFrom'
import GropApplyFrom from './pages/LoanServices/ApplyFrom/GL/GropApplyFrom'
import VehiApplyFrom from './pages/LoanServices/ApplyFrom/LAVehi/VehiApplyFrom'
import FdCalculator from './pages/Calculators/FdCalculator'
import RdCalculator from './pages/Calculators/RdCalculator'
import LoanEMICalculator from './pages/Calculators/LoanEMICalculator'




const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/accounts",
        element: <Accounts/>,
      },
      {
        path: "/digital-solutions",
        element: <DigitalSolutions/>,
      },
      {
        path: "/gold-loan-services",
        element: <GoldLoanService/>,
      },
      {
        path: "/loan-Service",
        element: <LoanService/>,
      },
      {
        path: "/invesments-plan",
        element: <InvesmentsPlan/>,
      },
      {
        path: "/cash-managment-product",
        element: <CashMangProd/>,

      },
      {
        path: "/terms-conditions",
        element: <TermsConditions/>,

      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,

      },
      {
        path: "/disclaimer",
        element: <Disclaimer/>,

      },
      {
        path: "/refund-policy",
        element: <RefundPolicy/>,

      },
      {
        path: "/faq",
        element: <Faq/>,

      },
      {
        path: "/support",
        element: <Support/>,

      },
      {
        path: "/rd-calculator",
        element: <RdCalculator/>,

      },
      {
        path: "/fd-calculator",
        element: <FdCalculator/>,

      },
      {
        path: "/loan-emi-calculator",
        element: <LoanEMICalculator/>,

      },
      {
        path: "/personal-loan",
        element: <PersonalLoan/>,

      },
      {
        path: "/business-loan",
        element: <BusinessLoan/>,

      },
      {
        path: "/group-loan",
        element: <GroupLoan/>,

      },
      {
        path: "/product-loan",
        element: <ProductLoan/>,

      },
      {
        path: "/loan-against-vehicle",
        element: <LoanAgainstVehicle/>,

      },
      {
        path: "/fd-invesment",
        element: <FdInvesment/>,

      },
      {
        path: "/rd-invesment",
        element: <RdInvesment/>,
      },
      {
        path: "/sip-invesment",
        element: <SipInvesment/>,

      },
      {
        path: "/bracelets-bangles",
        element: <BraceletsBangles/>,

      },
      {
        path: "/rings-ear-rings",
        element: <RingsEarRings/>,

      },
      {
        path: "/necklaces",
        element: <Necklaces/>,

      },
      {
        path: "/pendants",
        element: <Pendants/>,

      },
      {
        path: "/anklets-and-ring",
        element: <AnkletsToeRings/>,

      },
      {
        path: "/khazana-jewellery",
        element: <KhazanaJewellery/>,

      },
      {
        path: "/bangle-designs",
        element: <BanglesDesigns/>,

      },
      {
        path: "/ring-designs",
        element: <RingDesigns/>,

      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/pl-apply-from",
        element: <PlApplyFrom/>,
      },
      {
        path: "/bl-apply-from",
        element: <BlApplyFrom/>,
      },
      {
        path: "/prod-apply-from",
        element: <ProApplyFrom/>,
      },
      {
        path: "/grop-apply-from",
        element: <GropApplyFrom/>,
      },
      {
        path: "/vehi-apply-from",
        element: <VehiApplyFrom/>,
      }
    ]
  }
]);

const App = () => {
  return (    
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App;
