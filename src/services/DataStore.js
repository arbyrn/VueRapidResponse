// JavaScript source code
var dataStore = {
  cardDetails: [
    {
      cardId: "MedStrategy",
      featureHeader: "Medical Strategy Shaping",
      featureText:
        "Rapid Response Insights provides your team leader(s) with analytics to reformulate strategies and tactics and give immediate feedback and direction at Medical Congress events. The result; a competitive advantage from collecting more relevant insights that shape future strategic initiatives.",
      callout: "Discussion",
      calloutColor: "red",
      mainImg: "discussion.jpg",
      mirrorImg: "discussion_og.jpg",
      border: "none",
      imgAlign: "left",
      linkText: "See All Features >",
      linkAddress: "/features",
      overlayImg: ""
    },
    {
      cardId: "CycleTime",
      featureHeader: "Shrink Cycle Time",
      featureText:
        "Significantly shrink your cycle times to learn, share, stategize, and action relevant intelligence within your global Medical Affairs organization.",
      callout: "",
      calloutColor: "",
      mainImg: "stop-watch.jpg",
      mirrorImg: "stop-watch_og.jpg",
      border: "none",
      imgAlign: "right",
      linkText: "See All Features >",
      linkAddress: "/features",
      overlayImg: "CycleOverlay.png"
    },
    {
      cardId: "RealTime",
      featureHeader: "Feed Real-Time Feedback",
      featureText:
        "Imagine your medical affairs team is at a key 3- day medical congress.They are feeding back real- time insights based on what they are learning from pharmaceutical researchers, thought leaders, and competitors.The entire team has a real-time pulse on everything happening at a medical congress event.",
      callout: "Real-Time",
      calloutColor: "red",
      mainImg: "feedback.jpg",
      mirrorImg: "feedback_og.jpg",
      border: "none",
      imgAlign: "right",
      linkText: "See All Features >",
      linkAddress: "/features",
      overlayImg: ""
    },
    {
      cardId: "Customizable",
      featureHeader: "Customizable",
      featureText:
        "Collection tool field values can be <strong>customized for specific markets and therapy areas</strong> within your company.",
      callout: "Customizable",
      calloutColor: "black",
      mainImg: "rock-people.jpg",
      mirrorImg: "rock-people_og.jpg",
      border: "black",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "MeanInsights",
      featureHeader: "Meaningful Insights",
      featureText:
        "Customized field interdependency, audit controls and help functions results in collecting more relevant, <strong>meaningful, concise and easily referenceable insights</strong> that align with your medical strategy.",
      callout: "Meaningful Data",
      calloutColor: "black",
      mainImg: "Binders.jpg",
      mirrorImg: "Binders_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "FastMods",
      featureHeader: "Fast Modifications",
      featureText:
        "Field values can be changed at any time, <strong>with 24-hour turnaround or less. </strong>Collection and analysis is more agile</strong> in response to market events. This is a standard feature at no additional cost.",
      callout: "24-Hour Modification",
      calloutColor: "black",
      mainImg: "clock.jpg",
      mirrorImg: "clock_og.jpg",
      border: "black",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "CollectAnywhere",
      featureHeader: "Anytime. Anywhere.",
      featureText:
        "<strong>Insights can be collected and accessed anywhere</strong>. When an Internet connection is not available insights are transmitted automatically the next time an Internet connection is available.",
      callout: "Collect Anywhere",
      calloutColor: "black",
      mainImg: "meeting.jpg",
      mirrorImg: "meeting_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "SSO",
      featureHeader: "Single Sign-On",
      featureText:
        "Rapid Response Insights can be SSO Integrated. The tool can be accessed through your company's Single Sign-On (SSO/SAML) server making it easier for your MSLs and other Medical Affairs to <strong>quickly enter insights.</strong>",
      callout: "Single Sign-On",
      calloutColor: "black",
      mainImg: "password.jpg",
      mirrorImg: "password_og.jpg",
      border: "black",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "SupportingDocs",
      featureHeader: "Load Supporting Documents",
      featureText:
        "Images and documents can be uploaded as part of an Insight submission, making the <strong>insight data more thorough and fully supported.</strong>",
      callout: "Supporting Docs",
      calloutColor: "black",
      mainImg: "upload.jpg",
      mirrorImg: "upload_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "MultiDevice",
      featureHeader: "Multi Device and Browser",
      featureText:
        "Rapid Response Insights operates on all devices (laptop, tablet, phone) and on all major browsers (Chrome IE, Edge, Safari, Firefox). This provides <strong>flexibility and ease in collecting data</strong> on multitude of platforms.",
      callout: "Multi Device and Browser",
      calloutColor: "black",
      mainImg: "technology.jpg",
      mirrorImg: "technology_og.jpg",
      border: "black",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "Templates",
      featureHeader: "Templates",
      featureText:
        "Insight Templates allow frequently used sets of field choices to be saved and recalled to <strong>save time in creating subsequent insights.</strong>",
      callout: "Templates",
      calloutColor: "black",
      mainImg: "network.jpg",
      mirrorImg: "network_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "RealTimeReports",
      featureHeader: "Real-time Reporting",
      featureText:
        "Insights appear real-time in the analysis portal.  <strong>Eliminates costly delays in bottleneck review processes</strong> that prevent stakeholders from accessing Insights timely.",
      callout: "Real Time Reporting",
      calloutColor: "red",
      mainImg: "dices-over-newspaper.jpg",
      mirrorImg: "dices-over-newspaper_og.jpg",
      border: "red",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "Translation",
      featureHeader: "Language Translation",
      featureText:
        "Foreign language Insights are translated into English.  Analysis portal displays Insights in English and the native language for <strong>seamless integration across your global organization.</strong>",
      callout: "Language Translation",
      calloutColor: "red",
      mainImg: "welcome.jpg",
      mirrorImg: "welcome_og.jpg",
      border: "red",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "InsightComments",
      featureHeader: "Insight Comments",
      featureText:
        "Add comments to start discussions around insights. <strong>Shared comments exponentially enhance the distribution and value of the insight</strong> throughout Medical Affairs.",
      callout: "Insight Comments",
      calloutColor: "red",
      mainImg: "Callouts.jpg",
      mirrorImg: "Callouts_og.jpg",
      border: "red",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "AI",
      featureHeader: "Artificial Intelligence",
      featureText:
        "Rapid Response Insights uses machine learning to identify important trends and evolving medical information. ECT is dedicated to bringing the full power of artificial intelligence to derive more meaning from collected insights.",
      callout: "Artificial Intelligence",
      calloutColor: "red",
      mainImg: "cranium.jpg",
      mirrorImg: "cranium_og.jpg",
      border: "red",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "DocLibrary",
      featureHeader: "Document Library",
      featureText:
        "The Document Library organizes supporting documents in folders categorized by Insight topics for <strong>easy reference and retrieval.</strong>",
      callout: "Document Library",
      calloutColor: "red",
      mainImg: "tablet.jpg",
      mirrorImg: "tablet_og.jpg",
      border: "red",
      imgAlign: "right",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "Trends",
      featureHeader: "Trend Analysis",
      featureText:
        "Word Cloud and Frequency charts grapically depict changing Insight trends",
      callout: "Trends",
      calloutColor: "red",
      mainImg: "WordCloud.jpg",
      mirrorImg: "WordCloud_og.jpg",
      border: "red",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "Exporting",
      featureHeader: "Exporting",
      featureText:
        "Individual Insights, or relevant parts of Insights, can be compiled to create topic specific MS Word reports. Filtered entries can be exported to Excel for further <strong>sharing and collaboration.</strong>",
      callout: "Exporting",
      calloutColor: "red",
      mainImg: "download.jpg",
      mirrorImg: "download_og.jpg",
      border: "red",
      imgAlign: "left",
      linkText: "Schedule a Demo>",
      linkAddress: "/ctapage",
      overlayImg: ""
    },
    {
      cardId: "Team",
      featureHeader: "We're Not Cookie Cutter",
      featureText:
        'Our mission at ECT Technologies is to help you improve the efficiency and effectiveness of your medical affairs department through customized web-based applications. If you want an out-of-the-box solution, that\'s great, we can help. However, experience tells us that every business is unique and cookie-cutter solutions often fall short of providing the best results. Hiring a vendor is okay, but a <span class="text-danger">medical insights technology partner that serves as an extension of your team is where you will get the biggest return on your investment</span>',
      callout: "",
      calloutColor: "",
      mainImg: "pastries.jpg",
      mirrorImg: "pastries_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "",
      linkAddress: "#",
      overlayImg: ""
    },
    {
      cardId: "TeamSnow",
      featureHeader: "We're Not a Factory",
      featureText:
        'Our mission at ECT Technologies is to help you improve the efficiency and effectiveness of your medical affairs department through customized web-based solutions.  Experience tells us that every business is unique and assembly line solutions often fall short of providing the best results. Hiring a vendor is okay, but a medical insights technology partner that serves as an extension of your team is where you will get the biggest return on your investment.<p class="text-danger">Let us know what Medical Insights problems you are trying to solve, maybe we can help.</p>',
      callout: "",
      calloutColor: "",
      mainImg: "snowflakes.jpg",
      mirrorImg: "snowflakes_og.jpg",
      border: "black",
      imgAlign: "left",
      linkText: "",
      linkAddress: "#",
      overlayImg: ""
    }
  ],
  dividerDetails: [
    {
      dividerId: 1,
      title: "Need Better Management of Your Insights?",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "See Plans",
          btnColor: "btnRed",
          btnLink: "/plans"
        },
        {
          btnText: "Schedule Free Consult",
          btnColor: "btnBlack",
          btnLink: "/ctapage"
        }
      ]
    },
    {
      dividerId: 2,
      title: "Want the Latest News on Medical Insights",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "Follow us on LinkedIn!",
          btnColor: "btnWhite",
          btnLink: "https://www.linkedin.com/company/ect-us"
        }
      ]
    },
    {
      dividerId: 3,
      title:
        "Do You Have the Answers to these top 2 Medical Insights Questions?",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "Download Your Free Ebook",
          btnColor: "btnBlack",
          btnLink: "#"
        }
      ]
    },
    {
      dividerId: 4,
      title:
        "The Fear of Sharing Medical Insights and Why You Should Get Over It",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "Download Your Free Ebook",
          btnColor: "btnBlack",
          btnLink: "#"
        }
      ]
    },
    {
      dividerId: 5,
      title: "Guide to Selecting a Medical Insights Software Vendor",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "Download Your Free Guide",
          btnColor: "btnBlack",
          btnLink: "#"
        }
      ]
    },
    {
      dividerId: 6,
      title:
        "Do You Have the Answers to these top 2 Medical Insights Questions?",
      dividerColor: "Gray",
      buttons: [
        {
          btnText: "See a Demo",
          btnColor: "btnBlack",
          btnLink: "/ctapage"
        }
      ]
    },
    {
      dividerId: 7,
      title: "Insight <strong>Analysis</strong> - Features & Benefits",
      dividerColor: "Gray",
      buttons: [
        {
          btnText: "See a Demo",
          btnColor: "btnBlack",
          btnLink: "/ctapage"
        }
      ]
    },
    {
      dividerId: 8,
      title:
        'Insight <strong class="black">Collection</strong> - Features & Benefits',
      dividerColor: "Gray",
      buttons: [
        {
          btnText: "See a Demo",
          btnColor: "btnBlack",
          btnLink: "/ctapage"
        }
      ]
    },
    {
      dividerId: 9,
      title: "Need Help picking your Medical Insights Vendor",
      dividerColor: "Red",
      buttons: [
        {
          btnText: "Request Consult",
          btnColor: "btnBlack",
          btnLink: "/ctapage"
        }
      ]
    }
  ],
  getCard(cardId) {
    return this.cardDetails.filter(function(card) {
      return card.cardId == cardId;
    })[0];
  },
  getDivider(dividerId) {
    return this.dividerDetails.filter(function(divider) {
      return divider.dividerId == dividerId;
    })[0];
  }
};
export default dataStore;
