<<<<<<< Updated upstream:src/Components/DashboardComps/Dashboard.js
import React from 'react'
import Container from '../Container'
import SendBusinessMail from './SendBusinessMail'
import TagLine from './TagLine'
import WhatWeOffer from './WhatWeOffer'
import OurTeam from './OurTeam'
=======
import React from "react";
import Container from "./Container";
import SendBusinessMail from "./DashboardComps/SendBusinessMail";
import TagLine from "./DashboardComps/TagLine";
import WhatWeOffer from "./DashboardComps/WhatWeOffer";
import OurTeam from "./DashboardComps/OurTeam";
>>>>>>> Stashed changes:src/Components/Dashboard.js

export default function Dashboard() {
  return (
    <div className="parallax">
      <Container
        children={<TagLine />}
        backgroundClass="bg-1"
        heightClass="h-80vh"
      />
      <Container children={<SendBusinessMail />} backgroundClass="bg-2" />
      <Container children={<WhatWeOffer />} backgroundClass="bg-1" />
      <Container children={<OurTeam />} backgroundClass="bg-2" />
    </div>
  );
}
