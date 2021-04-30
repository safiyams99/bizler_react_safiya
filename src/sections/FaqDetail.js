import React from 'react'
import FaqCard from '../components/FaqCard'
import faqData from '../Data/faqData'

const FaqDetail = () => {
    return (
        <>
        <section id="faq">
        <div className="container">
          <div className="col-md-12">
            <div id="accordion">
              {faqData.map((data) => {
                const { id1,cname1,collapseId,spanNo,spanContent,id2,cname2,heading } = data;
                return (
                  <FaqCard
                    key={spanNo}
                    id1 = {id1}
                    cname1 = {cname1}
                    collapseId = {collapseId}
                    spanNo = {spanNo}
                    spanContent = {spanContent}
                    id2 = {id2}
                    cname2 = {cname2}
                    heading = {heading}
                  />
                );
              })}
            </div>
          </div>

          <div className="col-md-12">
            <div className="chat-id text-center"><p>If you do not find the answer to your question listed within our FAQ`s, you can always contact us directly at <span>letstalk@bizler.com</span></p></div>
          </div>

        </div>
        </section>
        
        </>
    )
}

export default FaqDetail;