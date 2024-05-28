import React, { useState } from "react";
import FaqCard from "../../../Components/FaqCard";

const FaqSection = () => {
  const [seeMore, setSeeMore] = useState(false);

  const questions = [
    {
      title: "Can i use Banigi AI for free?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      title: "Can i use Banigi AI for free?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      title: "Can i use Banigi AI for free?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      title: "Can i use Banigi AI for free?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      title: "Can i use Banigi AI for free?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
        title: "Can i use Banigi AI for free?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      },
      {
        title: "Can i use Banigi AI for free?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      },
      {
        title: "Can i use Banigi AI for free?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      },
  ];
  return (
    <>
      <div className="faqDiv" id="faq">
        <h3>
          Frequently Asked <span>Questions</span>
        </h3>
        {seeMore ? (
      <div className="faqList">
        {questions.map(({ title, content }) => (
          <FaqCard key={title} title={title} content={content} />
        ))}
      </div>
    ) : (
      <div className="faqList">
        {questions.slice(0, 5).map(({ title, content }) => (
          <FaqCard key={title} title={title} content={content} />
        ))}
      </div>
    )}
    <h6
      className="seeMoreBtn"
      onClick={() => {
        setSeeMore(!seeMore);
      }}
    >
      {seeMore ? "See less" : "See More"}
    </h6>
      </div>
    </>
  );
};

export default FaqSection;
