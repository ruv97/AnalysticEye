import React from "react";
import Navbar from "./components/Navbar";
import Card from  "./components/Card";
import Footer from "./components/Footer";

import logos from "./images/visulization.png";
import logoss from "./images/dashboard.png";
import logosss from "./images/statistics.png";
import ml from "./images/Ml and DL model.png";
import pr from "./images/prediction analytics.png";
import tm from "./images/Forecasting.png"


export default function App(){
  return (
    <div>
      <Navbar />
      <div className="flex--cards">
        <Card 
          img={logos}
          title="Data Visualization"
          description="Transform the collected data into a visual context to make it easier to understand and share insight into the information. As per your requirements, It is possible to give you Data Visualization reports through python or R data analytic tools."
        />
        <Card 
          img={logoss}
          title="Reports and Dashboard"
          description="If you need more visualization options on a single page, we can build the data analysis taskboard for your dataset. Also, it is possible to feed real-time data for automating the dashboard. Tableau and Power BI software tools can make reports and dashboards.
          "
        />
        <Card 
          img={logosss}
          title="Statistical Model"
          description="Using the mathematical models and statistical assumptions we build the parametric statistical models using the python or R languages

          "
        />
        <Card 
          img={ml}
          title="ML and DL Model"
          description="To achieve a better performance of the prediction accuracy better than a statistical model, build all types of Machine Learning and Deep Learning models for the data. Python or R languages is used to create the models."
        />
        <Card 
          img={pr}
          title="Predictive Analytics"
          description="Identify the likelihood of future outcomes using the statistical models, ML models, and DL models and suggest better decisions based on the predictions."
        />
        <Card 
          img={tm}
          title="Time Series Forecasting"
          description="Apply the statistical and Machine Learning modeling technique for time-stamped data to forecast future outcomes based on your requirements. Python and R languages can be used for forecasting."
        />
       </div> 
       <Footer />
    </div>
  )
}

