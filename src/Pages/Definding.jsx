import React from "react";

const SecurityStatsSection = () => {
  return (
    <section className="defending text-white md:py-32 py-10">
      <div className="px-6 max-w-screen-xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl lg:text-5xl font-light mb-4">
            Defending your data <br/> from every possible <br/> cyber threat.
        </h2>
        <p className="max-w-4xl text-[#C3CDD3] pb-5 md:text-base text-sm">
            At RockSec Group, we are dedicated to fortifying your digital assets against an ever-evolving landscape of cyber threats. Our holistic approach combines state-of-the-art technologies with proactive defense strategies to mitigate risks and safeguard your critical data. From identifying vulnerabilities to implementing robust protective measures, we leave no stone unturned in ensuring your business's security. Trust RockSec Group to provide unparalleled expertise and solutions, giving you the confidence to operate in a secure and seamless digital ecosystem.
        </p>
      </div>
    </section>
  );
};

export default SecurityStatsSection;