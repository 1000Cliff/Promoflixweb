const industries = [
  {
    label: 'MED SPAS',
    title: 'Increase Repeat Bookings',
    description: 'Follow up with past clients using personalized video that still feels high-touch and premium.',
    image: '/industry-examples/MedSpa.png',
  },
  {
    label: 'RECRUITERS',
    title: 'Attract Top Talent',
    description: 'Stand out to candidates and re-engage overlooked contacts with personalized video messaging.',
    image: '/industry-examples/Recruitment.png',
  },
  {
    label: 'REAL ESTATE',
    title: 'Convert Cold Leads',
    description: 'Turn dormant prospects into active conversations with tailored property outreach.',
    image: '/industry-examples/Real Estate.png',
  },
  {
    label: 'INSURANCE',
    title: 'Boost Policy Renewals',
    description: 'Turn leads into loyal clients by combining personal connection with scalable video outreach.',
    image: '/industry-examples/Mortgage.png',
  },
  {
    label: 'EDUCATION',
    title: 'Increase Response Rates',
    description: 'Send personalized videos to students, parents, donors, and alumni without losing the human touch.',
    image: '/industry-examples/Education.png',
  },
  {
    label: 'HEALTHCARE',
    title: 'Build Trust At Scale',
    description: 'Deliver a clearer, more personal first impression for patients across every follow-up touchpoint.',
    image: '/industry-examples/Healthcare.png',
  },
  {
    label: 'NONPROFIT',
    title: 'Strengthen Donor Engagement',
    description: 'Make supporters feel seen with outreach that stays personal even as volume grows.',
    image: '/industry-examples/non-profit.png',
  },
  {
    label: 'TECH',
    title: 'Create Better First Touches',
    description: 'Give outbound campaigns a human face and increase replies from high-value prospects.',
    image: '/industry-examples/Tech.png',
  },
] as const;

const marqueeIndustries = [...industries, ...industries];

export function IndustriesSection() {
  return (
    <section className="bg-white py-[120px] relative w-full z-[6]" data-name="How teams use promoflix" id="industries">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[60px] px-5 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between" data-name="top">
          <div className="flex max-w-[630px] flex-col gap-1">
            <p className="text-[14px] font-semibold uppercase leading-[1.5] text-[#2952e8]">Industries</p>
            <h2 className="text-[44px] font-semibold leading-[1.3] tracking-[-2px] text-[#18181b]">
              See how teams like yours use Promoflix
            </h2>
          </div>
          <p className="max-w-[430px] text-[16px] leading-[1.5] text-[#70707b]">
            100+ industries! Any business that relies on outreach can transform campaign results using personalized video outreach.
          </p>
        </div>

        <div className="industries-marquee-shell">
          <div className="industries-marquee-track">
            {marqueeIndustries.map((item, index) => (
              <article className="industries-marquee-card" key={`${item.label}-${index}`}>
                <div className="industries-marquee-media">
                  <div className="industries-marquee-stack" aria-hidden="true">
                    <img alt="" className="industries-marquee-image industries-marquee-image-back" src={item.image} />
                    <img alt="" className="industries-marquee-image industries-marquee-image-middle" src={item.image} />
                  </div>
                  <img alt={item.label} className="industries-marquee-image industries-marquee-image-front" src={item.image} />
                  <div className="industries-marquee-play" aria-hidden="true">
                    <svg className="industries-marquee-play-icon" fill="none" viewBox="0 0 24 24">
                      <path d="M9 7.5L17 12L9 16.5V7.5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="m-0 text-[14px] font-semibold uppercase leading-[1.5] text-[#2952e8]">{item.label}</p>
                  <p className="m-0 text-[20px] font-semibold leading-[1.35] text-[#18181b]">{item.title}</p>
                  <p className="m-0 text-[16px] leading-[1.5] text-[#70707b]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[12px] border border-[#3a6ef2] bg-[#eff4ff]" data-name="bottom">
          <div className="flex w-full flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[20px] font-semibold leading-[1.5] text-[#18181b]">
              Get a real example of a Promoflix-enhanced email for your industry
            </p>
            <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
              <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
                <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
                  <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">
                    Send me example
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              <div
                aria-hidden="true"
                className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
