import { useState } from 'react';
import './App.css';
// import TrafficLight from './mc/TrafficLight';
import TrafficLight from './w2/TrafficLight/TrafficLight';
// import NestedComment from './mc/nestedComment/components/NestedComment'
import TextGenerate from './mc/typeWriter/TextGenerate';
import MultiFilter from './mc/multipleFilter/MultiFilter';
import Timer from './mc/timer/Timer';
// import DropDown from './mc/multiDropdown/DropDown';
import OptimizedSearch from './mc/searchOptimised/OptimizedSearch';
import StackQueue from './mc/Stack-Queue/StackQueue';
import ProgressApp from './mc/progressBar/ProgressApp';
import GridApp from './mc/gridLight/GridApp';
import PaginationApp from './mc/pagination/PaginationApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './mc/theme/pages/Home';
import About from './mc/theme/pages/About';
import Contact from './mc/theme/pages/Contact';
import Navbar from './mc/theme/component/Navbar';
import { ThemeProvider } from './mc/theme/theme-context';
import BreadcrumbApp from './mc/breadcrumb/BreadcrumbApp';
import ProductDeails from './mc/breadcrumb/ProductDeails';
import ProductListing from './mc/breadcrumb/ProductListing';
import UseEffectApp from './mc/useEffect-polyfill/UseEffectApp';
import UseMemoApp from './mc/useMemo-polyfill/UseMemoApp';
import JobBoard from './mc/jobBoard/JobBoard';
import PhoneApp from './mc/phoneOtp/PhoneApp';
import MultiSelect from './mc/multiSelectInput-pill/MultiSelect';
import FileExtensionApp from './mc/fileExtension/FileExtensionApp';
import TypeWriter from './w2/TypeWriter/TypeWriter';
import W1jsc from './jsc/w1/W1jsc';
import Dropdown from './w1/Accordion/Dropdown';
import Carsouel from './w1/Carsouel/Carsouel';
import PasswordGeneratorApp from './mc/passwordGenerator/PasswordGeneratorApp';
import StarRating from './mc/starRating/StarRating';
import InfiniteScroll from './mc/infiniteScroll/InfiniteScroll';

function App() {
  return (
    <>
      {/* <TrafficLight /> */}
      {/* <NestedComment /> */}
      {/* <TextGenerate /> */}
      {/* <MultiFilter /> */}
      {/* <Timer duration={2 * 24 * 60 * 60 * 1000}/> */}
      {/* <DropDown /> */}
      {/* <OptimizedSearch /> */}
      {/* <StackQueue /> */}
      {/* <ProgressApp /> */}
      {/* <GridApp /> */}
      {/* <PaginationApp /> */}


      {/*---- Theme Switcher---- */}
      {/* <ThemeProvider>
      <BrowserRouter>
      {/* navbar */}
      {/* <Navbar />
        {/* routes */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* </ThemeProvider> */}

      {/*---- Theme Switcher Finished---- */}



      {/*---- BreadCrumbs----- */}
      {/****
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BreadcrumbApp />} />
        <Route path='/product' element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDeails />} /> 
      </Routes> 
      </BrowserRouter>
       */}

      {/*---- BreadCrumbs Finished----- */}


      {/* <UseEffectApp /> */}

      {/* <UseMemoApp /> */}

      {/* <JobBoard /> */}

      {/* <PhoneApp /> */}

      {/* <MultiSelect /> */}

      {/* <FileExtensionApp /> */}

       {/* <PasswordGeneratorApp /> */}

       {/* <FileExtensionApp /> */}

       {/* <StarRating /> */}

       {/* <InfiniteScroll /> */}


      {/* ----Machine coding---- */}

      {/* < TrafficLight /> */}

      {/* <TypeWriter /> */}

      {/* <Dropdown /> */}

      {/* <Carsouel /> */}



       {/* ----Js Coding ---- */}

       {/* <W1jsc /> */}

    </>
  );
}

export default App;
