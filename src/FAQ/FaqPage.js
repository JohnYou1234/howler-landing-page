import React from 'react';
import './faq.css';

const faqData = [
  {
    question: "Why is the site not loading",
    answer: "Currently, our site is limited by the free plan of our hosting service. If the site is unused within 15 minutes, then it will go down and needs about 1 minute to start back up the next time it is visited."
  },
  {
    question: "What is Howler?",
    answer: "Howler is a forum-based University of Washington application that is designed to create a safe space for students to discuss mental health issues and seek support from their peers."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, navigate to the Howler sign-up page and follow the instructions. You will need a valid UW NetID to create an account."
  },
  {
    question: "Can I post anonymously?",
    answer: "All posts are anonymous; however, each post is still tied to your individual account. While other users cannot see this, we at Howler keep this data for security and moderation reasons."
  },
  {
    question: "How do I report inappropriate content?",
    answer: "If you see inappropriate content, please use the report function on the post or comment to notify our moderators. Our team will review the report and take appropriate action."
  },
  {
    question: "How do I delete my account?",
    answer: "To delete your account, please contact our support team at howlerverify@gmail.com. We will assist you with the account deletion process."
  },
  {
    question: "What if I have more questions?",
    answer: "If you have more questions or concerns, please contact our support team at howlerverify@gmail.com. We are always happy to help!"
  }
];

function FaqPage() {
  return (
    <div id="faq" className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-board">
        {faqData.map((faqItem, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{faqItem.question}</div>
            <div className="faq-answer"><p>{faqItem.answer}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
