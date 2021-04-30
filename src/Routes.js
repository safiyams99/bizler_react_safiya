import React from 'react'
import {Route, Switch, useParams} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import DetailedService from "./pages/DetailedService"
import {ServiceContent} from "./Data/ServiceData"
import Portfolio from "./pages/Portfolio"
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import DetailedPortfolio from "./pages/DetailedPortfolio"
import PortfolioData from "./Data/PortfolioData";
import NotFound from "./pages/404"
import Faqs from "./pages/Faqs"
import TeamPage from "./pages/TeamPage"
import DetailedBlog from "./pages/DetailedBlog"
import BlogPostData from './Data/BlogData';
import ViewAbout from "./pages/viewAbout"
import Career from "./pages/Career";
import DetailedBusinessPartner from "./pages/DetailedBusinessPartner"

function Routes() {
    const {webHosting,webDesigning,webDevelopment,digitalMarketing} = ServiceContent;
    const {photography,education,ecommerce,realEstate,restaurant, saloonSpa} = PortfolioData
    return (
        <Switch>
            <Route exact path="/" render={(props) => <Home {...props} /> } />
            <Route exact path="/about" render={(props) => <About {...props} /> } />
            <Route exact path="/mainAbout" render={(props) => <ViewAbout {...props} /> } />
            <Route exact path="/services" render={(props) => <Services {...props} /> } />
            <Route exact path="/web Hosting" render={(props) => <DetailedService {...props} content={webHosting} /> } />
            <Route exact path="/web Designing" render={(props) => <DetailedService {...props} content={webDesigning} /> } />
            <Route exact path="/web Development" render={(props) => <DetailedService {...props} content={webDevelopment} /> } />
            <Route exact path="/digital Marketing" render={(props) => <DetailedService {...props} content={digitalMarketing} /> } />
            <Route exact path="/portfolio" render={(props) => <Portfolio {...props} /> } />
            <Route exact path="/photography" render={(props) => <DetailedPortfolio {...props} data={photography}/> } />
            <Route exact path="/Education" render={(props) => <DetailedPortfolio {...props} data={education}/> } />
            <Route exact path="/Ecommerce" render={(props) => <DetailedPortfolio {...props} data={ecommerce}/> } />
            <Route exact path="/real estate" render={(props) => <DetailedPortfolio {...props} data={realEstate}/> } />
            <Route exact path="/Bar & Restaurant" render={(props) => <DetailedPortfolio {...props} data={restaurant}/> } />
            <Route exact path="/saloon & spa" render={(props) => <DetailedPortfolio {...props} data={saloonSpa}/> } />
            <Route exact path="/contactUs" render={(props) => <ContactUs {...props} /> } />
            <Route exact path="/Blog" render={(props) => <Blog {...props} /> } />
            <Route exact path="/teamPage" render={(props) => <TeamPage {...props} /> } />
            <Route exact path="/career"  render={(props) => <Career {...props} /> } />
            <Route exact path="/Faqs" render={(props) => <Faqs {...props} /> } />
            <Route exact path="/DetailedBusinessPartner" render={(props) => <DetailedBusinessPartner {...props} content={webHosting} />  } />
            {BlogPostData.map(data=>{
                const {id} = data;
                return(
                    <Route key={id} exact path={`/blog/${id}`} render={(props) => <DetailedBlog {...props} data={data}/> } />

                )
            })}
            <Route exact path="/*" render={(props) => <NotFound {...props} /> } />

        </Switch>
    )
}

export default Routes
