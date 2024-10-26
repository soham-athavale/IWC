// src/components/About.js
import React from 'react';
import Accordion from './ui/nextui-accordion'; 

function About() {
  return (
    <div className="mx-4 md:mx-16">
      <h1>About IWC</h1>
      <p>
        Waste management is a critical aspect of modern urban planning, with significant implications for environmental sustainability and public health. Waste is often burnt or disposed incorrectly leading to pollution recovery and increased landfill use. To address these challenges, we propose an Intelligent Waste Classification System leveraging object detection and deep learning technologies. This system aims to automate the identification and classification of waste materials, thereby enhancing the efficiency and accuracy of waste management processes.
      </p>
      <Accordion/>
    </div>
  );
}

export default About;

