import React,{useState} from 'react';
import style from './faqs.module.css';
import { faqsData } from './data';
import Faq from './Faq';

const Faqs = () => {
  const [faqs, setFaqs]=useState(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>Faqs</h1>
        {faqs.map((faq) => (<Faq key={faq.id}  {...faq}/>))}
      </section>
    </main>
  )
}

export default Faqs
