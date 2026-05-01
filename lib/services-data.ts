import {
    Globe,
    Megaphone,
    Target,
    Bot,
    Cpu,
    Mic,
    Layers,
    type LucideIcon,
} from "lucide-react";

export type ServiceFeature = {
    icon: string;
    title: string;
    description: string;
};

export type ServiceStep = {
    number: string;
    title: string;
    description: string;
};

export type ServiceContent = {
    overview: string;
    features: ServiceFeature[];
    process: ServiceStep[];
    closingStatement: string;
};

export type Service = {
    slug: string;
    title: string;
    icon: LucideIcon;
    tagline: string;
    description: string;
    content: ServiceContent;
};

export const services: Service[] = [
    {
        slug: "web-development",
        title: "Web Development",
        icon: Globe,
        tagline: "Built to perform. Designed to convert.",
        description:
            "We craft high-performance websites and web applications that look stunning, load fast, and turn visitors into customers.",
        content: {
            overview:
                "At Solis Network, web development is more than writing code — it's building a digital foundation for your business. We combine modern frameworks, clean architecture, and conversion-focused design to deliver web experiences that grow with you. Whether you need a sleek landing page or a complex SaaS platform, we engineer it to the highest standard.",
            features: [
                {
                    icon: "⚡",
                    title: "Custom Web Applications",
                    description:
                        "Fully custom-built web apps tailored to your exact business logic. From internal tools to customer-facing platforms, we build scalable solutions using Next.js, React, and TypeScript.",
                },
                {
                    icon: "🛒",
                    title: "E-Commerce Development",
                    description:
                        "Revenue-driving online stores with seamless checkout flows, product management, and payment integrations. Optimised for speed, SEO, and conversion.",
                },
                {
                    icon: "🎯",
                    title: "Landing Pages & Marketing Sites",
                    description:
                        "High-converting landing pages and corporate websites built with performance in mind. Every pixel is intentional, every section guides the visitor toward action.",
                },
                {
                    icon: "🔗",
                    title: "API & Third-Party Integration",
                    description:
                        "Connect your website with CRMs, payment gateways, analytics tools, and any external service through robust, well-documented API integrations.",
                },
                {
                    icon: "📱",
                    title: "Responsive & Mobile-First Design",
                    description:
                        "Every project we deliver works flawlessly across all screen sizes. We design mobile-first and test on real devices before every launch.",
                },
                {
                    icon: "🚀",
                    title: "Performance Optimisation",
                    description:
                        "Core Web Vitals scores that impress. We optimise images, code-split bundles, and implement caching strategies so your site loads in under a second.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Discovery & Strategy",
                    description:
                        "We start with a deep-dive into your business goals, target audience, and competitors. This shapes the technical and design strategy before a single line of code is written.",
                },
                {
                    number: "02",
                    title: "Design & Prototyping",
                    description:
                        "Our designers create wireframes and high-fidelity prototypes. You see exactly what you're getting and can give feedback before development begins.",
                },
                {
                    number: "03",
                    title: "Development & Build",
                    description:
                        "We build with clean, maintainable code using modern stacks. Weekly check-ins keep you informed and involved throughout the entire development phase.",
                },
                {
                    number: "04",
                    title: "Testing & QA",
                    description:
                        "Rigorous testing across browsers, devices, and performance metrics. We catch every bug, edge case, and accessibility issue before it reaches your users.",
                },
                {
                    number: "05",
                    title: "Launch & Ongoing Support",
                    description:
                        "A smooth, coordinated launch with zero downtime. We stay on as your technical partner — maintaining, updating, and evolving your platform as your business grows.",
                },
            ],
            closingStatement:
                "Your website is your most powerful sales tool. Let's build one that works as hard as you do.",
        },
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: Megaphone,
        tagline: "Reach the right people, at the right moment.",
        description:
            "Data-driven marketing campaigns that grow your audience, drive qualified leads, and build lasting brand loyalty across every digital channel.",
        content: {
            overview:
                "Great marketing isn't about being everywhere — it's about being in the right place with the right message at the right time. Solis Network builds full-funnel digital marketing strategies that attract, engage, and convert your ideal customers. From organic content to paid campaigns, we handle every channel with precision and creativity.",
            features: [
                {
                    icon: "📊",
                    title: "Social Media Management",
                    description:
                        "Consistent, on-brand social media presence across Instagram, LinkedIn, TikTok, and beyond. We handle content creation, scheduling, community management, and growth.",
                },
                {
                    icon: "✉️",
                    title: "Email Marketing & Automation",
                    description:
                        "Nurture sequences, newsletters, and automated flows that keep your audience engaged and drive repeat purchases. Average open rates 35% above industry benchmarks.",
                },
                {
                    icon: "📝",
                    title: "Content Strategy & SEO",
                    description:
                        "Long-form content, blog posts, and keyword strategies that build organic visibility over time. Every piece of content is designed to rank, educate, and convert.",
                },
                {
                    icon: "💰",
                    title: "Paid Search (Google Ads)",
                    description:
                        "Intent-driven Google Ads campaigns that capture buyers at the moment they're ready to act. We manage budgets, bids, and copy for maximum ROAS.",
                },
                {
                    icon: "📈",
                    title: "Analytics & Reporting",
                    description:
                        "Clear, jargon-free reporting dashboards that show exactly what's working. Monthly strategy reviews keep campaigns aligned with your business goals.",
                },
                {
                    icon: "🎯",
                    title: "Conversion Rate Optimisation",
                    description:
                        "A/B testing, landing page optimisation, and funnel analysis that squeeze more value from your existing traffic without increasing ad spend.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Audit & Research",
                    description:
                        "We analyse your current marketing performance, competitors, and audience behaviour to identify the highest-impact opportunities.",
                },
                {
                    number: "02",
                    title: "Strategy & Channel Selection",
                    description:
                        "We build a tailored multi-channel marketing plan with clear KPIs, timelines, and budget allocations — no generic playbooks.",
                },
                {
                    number: "03",
                    title: "Content & Creative Production",
                    description:
                        "Our team produces copy, graphics, and video content optimised for each platform and stage of the customer journey.",
                },
                {
                    number: "04",
                    title: "Launch & Management",
                    description:
                        "Campaigns go live with full monitoring. We react quickly to performance data and adjust bids, targeting, and messaging in real time.",
                },
                {
                    number: "05",
                    title: "Optimise & Scale",
                    description:
                        "As results come in, we double down on what works and cut what doesn't — continuously improving ROI and scaling winning campaigns.",
                },
            ],
            closingStatement:
                "Marketing that feels like a cost is marketing that isn't working. We build systems that make your spend come back multiplied.",
        },
    },
    {
        slug: "meta-ads",
        title: "Meta Ads",
        icon: Target,
        tagline: "Facebook & Instagram ads that actually convert.",
        description:
            "Precision-targeted Meta advertising campaigns that put your brand in front of the people most likely to buy — and keep them coming back.",
        content: {
            overview:
                "Meta's advertising platform — spanning Facebook, Instagram, and the Audience Network — gives you access to over 3 billion people. But raw reach means nothing without the right strategy. Solis Network's Meta Ads specialists combine deep audience intelligence, scroll-stopping creative, and relentless optimisation to deliver campaigns that generate real, measurable revenue for your business.",
            features: [
                {
                    icon: "🎯",
                    title: "Precision Audience Targeting",
                    description:
                        "Laser-focused targeting using interest layers, lookalike audiences, and custom audiences built from your CRM and website data. We find your buyers — not just browsers.",
                },
                {
                    icon: "🎨",
                    title: "Scroll-Stopping Creative",
                    description:
                        "High-quality ad creative — static images, carousels, Reels-style videos, and Stories — crafted to stop the scroll and drive clicks. We test multiple creatives every cycle.",
                },
                {
                    icon: "🔄",
                    title: "Retargeting & Remarketing",
                    description:
                        "Re-engage visitors who showed interest but didn't convert. Our retargeting funnels bring warm audiences back with the right message at every stage.",
                },
                {
                    icon: "🛍️",
                    title: "E-Commerce & Catalogue Ads",
                    description:
                        "Dynamic product ads that automatically show the right products to the right people based on their browsing and purchase behaviour.",
                },
                {
                    icon: "📉",
                    title: "Budget Optimisation & Bidding",
                    description:
                        "We manage your budget like it's our own — allocating spend to top-performing ad sets, adjusting bids in real time, and cutting waste fast.",
                },
                {
                    icon: "📊",
                    title: "Full-Funnel Reporting",
                    description:
                        "Transparent reporting on ROAS, CPL, CPA, and revenue attribution. You always know exactly what your Meta spend is generating.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Account Audit & Setup",
                    description:
                        "We audit your existing ad account (or build one from scratch), set up the Meta Pixel correctly, and configure conversion events so tracking is airtight from day one.",
                },
                {
                    number: "02",
                    title: "Audience Research & Strategy",
                    description:
                        "We map out your ideal customer profiles, build seed audiences, and design a full-funnel campaign structure — awareness, consideration, and conversion.",
                },
                {
                    number: "03",
                    title: "Creative Production",
                    description:
                        "We produce multiple ad variations — copy, images, and video — designed specifically for Meta's placements and tested to find top performers quickly.",
                },
                {
                    number: "04",
                    title: "Launch & Active Management",
                    description:
                        "Campaigns go live with daily monitoring. We check performance every day and make data-driven adjustments to keep CPAs low and ROAS high.",
                },
                {
                    number: "05",
                    title: "Scale & Growth",
                    description:
                        "Once we have winning combinations of audience + creative + offer, we scale budgets aggressively while protecting efficiency — growing your revenue without sacrificing margin.",
                },
            ],
            closingStatement:
                "Most businesses waste 60% of their Meta budget. We make sure every euro works for you.",
        },
    },
    {
        slug: "chatbots",
        title: "AI Chatbots",
        icon: Bot,
        tagline: "Your smartest team member — available 24/7.",
        description:
            "Intelligent AI chatbots that handle customer support, qualify leads, and automate conversations so your team can focus on what matters most.",
        content: {
            overview:
                "The era of rigid, scripted chatbots is over. Solis Network builds next-generation AI chatbots powered by large language models that understand context, answer naturally, and integrate deeply with your business systems. Whether on your website, WhatsApp, or Instagram DMs, our chatbots deliver human-quality conversations at machine scale — 24 hours a day, 7 days a week.",
            features: [
                {
                    icon: "🤖",
                    title: "Customer Support Automation",
                    description:
                        "Resolve 70%+ of customer queries automatically — without a human touch. Our bots understand intent, access your knowledge base, and escalate to a human only when necessary.",
                },
                {
                    icon: "🎯",
                    title: "Lead Qualification Bots",
                    description:
                        "Engage website visitors the moment they arrive, ask the right qualifying questions, and hand off hot leads to your sales team with full context. Never lose a lead to slow response times again.",
                },
                {
                    icon: "💬",
                    title: "WhatsApp & Social Bots",
                    description:
                        "Deploy intelligent bots on WhatsApp Business, Instagram DMs, and Facebook Messenger — where your customers already spend their time.",
                },
                {
                    icon: "🔗",
                    title: "CRM & Tool Integration",
                    description:
                        "Our chatbots connect directly with your CRM, helpdesk, calendar, and e-commerce platform. They can look up orders, book appointments, and update records automatically.",
                },
                {
                    icon: "🧠",
                    title: "Custom AI Personality & Knowledge",
                    description:
                        "Trained on your products, services, tone of voice, and policies. Your bot sounds like your brand — not a generic AI assistant.",
                },
                {
                    icon: "📊",
                    title: "Analytics & Conversation Insights",
                    description:
                        "Understand what your customers are asking, where they drop off, and what gaps exist in your content — all from the chatbot conversation dashboard.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Use Case Discovery",
                    description:
                        "We map out the exact conversations your bot will handle — support queries, lead qualification, bookings, FAQs — and define success metrics for each.",
                },
                {
                    number: "02",
                    title: "Knowledge Base & Training",
                    description:
                        "We ingest your documentation, product catalogue, policies, and FAQs into the AI model so it can answer accurately and confidently from day one.",
                },
                {
                    number: "03",
                    title: "Conversation Flow Design",
                    description:
                        "Every conversation path is designed for the best user experience — natural, helpful, and always guiding toward the right outcome.",
                },
                {
                    number: "04",
                    title: "Integration & Deployment",
                    description:
                        "The bot is connected to your website, messaging platforms, and backend systems. We handle all technical setup and ensure everything runs seamlessly.",
                },
                {
                    number: "05",
                    title: "Testing, Launch & Iteration",
                    description:
                        "Thorough testing with real scenarios before launch. Post-launch, we monitor conversations and continuously improve the bot's accuracy and helpfulness.",
                },
            ],
            closingStatement:
                "Your competitors are already using AI to serve customers faster. Don't let response time be the reason you lose deals.",
        },
    },
    {
        slug: "ai-automations",
        title: "AI Automations",
        icon: Cpu,
        tagline: "Remove the repetitive. Amplify the human.",
        description:
            "End-to-end AI automation systems that eliminate manual work, connect your tools, and let your team operate at 10× efficiency.",
        content: {
            overview:
                "Repetitive, manual processes are silently draining your team's time and your company's potential. Solis Network designs and builds intelligent automation workflows that handle the routine so your people can focus on the strategic. From document processing to multi-step business workflows, we use the latest AI tools to build automations that run 24/7 without supervision.",
            features: [
                {
                    icon: "⚙️",
                    title: "Business Process Automation",
                    description:
                        "Map, design, and automate complex multi-step business processes — from invoice processing to employee onboarding — with zero manual intervention.",
                },
                {
                    icon: "🔗",
                    title: "App & Platform Integration",
                    description:
                        "Connect your existing tools — CRM, ERP, email, Slack, spreadsheets — into seamless automated workflows. No more copy-pasting between systems.",
                },
                {
                    icon: "📄",
                    title: "AI Document Processing",
                    description:
                        "Automatically extract, classify, and process data from invoices, contracts, forms, and emails using AI — with accuracy that matches or exceeds manual review.",
                },
                {
                    icon: "📧",
                    title: "Intelligent Email & Communication",
                    description:
                        "AI that reads, categorises, and responds to emails — routing support tickets, drafting replies, and escalating urgent messages to the right person.",
                },
                {
                    icon: "📊",
                    title: "Data Pipeline Automation",
                    description:
                        "Automated data collection, transformation, and reporting pipelines that keep your dashboards always up to date without anyone lifting a finger.",
                },
                {
                    icon: "🧩",
                    title: "Custom AI Workflow Builder",
                    description:
                        "Bespoke automation solutions built around your exact business logic — not generic off-the-shelf tools that almost fit.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Process Audit",
                    description:
                        "We analyse your current workflows to identify the highest-value automation opportunities — the manual tasks costing the most time and money.",
                },
                {
                    number: "02",
                    title: "Automation Blueprint",
                    description:
                        "We design the full automation architecture — tools, triggers, logic, and exception handling — before building anything.",
                },
                {
                    number: "03",
                    title: "Build & Integration",
                    description:
                        "We build the automations using the right mix of tools — Make, Zapier, n8n, custom code, or AI APIs — and integrate them with your existing stack.",
                },
                {
                    number: "04",
                    title: "Testing & Validation",
                    description:
                        "Every automation is stress-tested with real data and edge cases before going live. We verify accuracy, speed, and reliability.",
                },
                {
                    number: "05",
                    title: "Deploy & Maintain",
                    description:
                        "Automations run live with monitoring dashboards and error alerts. We maintain and improve them as your business evolves.",
                },
            ],
            closingStatement:
                "The hours your team spends on repetitive tasks are hours not spent on growth. Let's get them back.",
        },
    },
    {
        slug: "voice-assistants",
        title: "Voice Assistants",
        icon: Mic,
        tagline: "The future of interaction is spoken.",
        description:
            "Custom AI voice assistants that handle calls, answer questions, book appointments, and represent your brand — with a natural human voice.",
        content: {
            overview:
                "Voice AI is no longer science fiction — it's a competitive advantage. Solis Network builds custom voice assistants that can handle inbound calls, make outbound follow-ups, walk customers through processes, and collect information — all using natural, lifelike AI voice. Whether you want to automate your phone support or build a fully branded voice experience, we deliver it.",
            features: [
                {
                    icon: "📞",
                    title: "Inbound Call Automation",
                    description:
                        "An AI voice assistant that answers your phone 24/7, understands caller intent, answers questions, and routes calls or books appointments — without a receptionist.",
                },
                {
                    icon: "🔔",
                    title: "Outbound Call Campaigns",
                    description:
                        "Automated outbound calls for follow-ups, appointment reminders, satisfaction surveys, and re-engagement — at scale and without a call centre.",
                },
                {
                    icon: "📅",
                    title: "Appointment Booking by Voice",
                    description:
                        "Callers can book, reschedule, or cancel appointments through a natural voice conversation that connects directly to your calendar system.",
                },
                {
                    icon: "🌍",
                    title: "Multilingual Voice Support",
                    description:
                        "Serve customers in their native language. Our voice assistants support multiple languages and automatically detect which one to use.",
                },
                {
                    icon: "🧠",
                    title: "Natural Language Understanding",
                    description:
                        "Our assistants understand accents, interruptions, and complex requests — not just rigid command phrases. They hold real, fluid conversations.",
                },
                {
                    icon: "📊",
                    title: "Call Analytics & Transcription",
                    description:
                        "Every call is recorded, transcribed, and analysed. Get insights into common questions, sentiment, and resolution rates from your voice data.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Use Case Definition",
                    description:
                        "We define exactly what your voice assistant will do — inbound handling, outbound campaigns, booking flows — and map out every conversation scenario.",
                },
                {
                    number: "02",
                    title: "Voice & Persona Design",
                    description:
                        "We design the voice, name, and personality of your assistant to match your brand. You approve everything before a single call goes live.",
                },
                {
                    number: "03",
                    title: "Script & Flow Development",
                    description:
                        "Conversation flows, fallback responses, escalation paths, and dynamic data lookups are all engineered for a smooth caller experience.",
                },
                {
                    number: "04",
                    title: "Integration & Testing",
                    description:
                        "The assistant is integrated with your phone system, CRM, and calendar. We run hundreds of test calls to catch every edge case before launch.",
                },
                {
                    number: "05",
                    title: "Launch & Continuous Improvement",
                    description:
                        "Live monitoring, call review, and ongoing refinement based on real conversation data. Your assistant gets smarter every week.",
                },
            ],
            closingStatement:
                "Every missed call is a missed opportunity. A voice assistant means you never miss one again.",
        },
    },
    {
        slug: "team-systems",
        title: "Team Systems",
        icon: Layers,
        tagline: "Custom tools built for the way your team works.",
        description:
            "We design and build bespoke internal systems, dashboards, and workflow tools that eliminate friction and supercharge team productivity.",
        content: {
            overview:
                "Generic software forces your team to adapt to the tool. We build tools that adapt to your team. Solis Network develops custom internal systems — from project management platforms to CRM dashboards and operational workflows — that fit your exact processes, integrate with your existing stack, and scale as your organisation grows. If you've ever thought 'I wish our system did X', we build that.",
            features: [
                {
                    icon: "🗂️",
                    title: "Custom Project Management Systems",
                    description:
                        "Purpose-built project and task management tools that match your team's actual workflow — not a watered-down version of what a generic tool offers.",
                },
                {
                    icon: "📊",
                    title: "Internal Dashboards & Reporting",
                    description:
                        "Real-time dashboards that pull data from all your tools into one place. Always know where your projects, KPIs, and team performance stand.",
                },
                {
                    icon: "👥",
                    title: "CRM & Client Management Tools",
                    description:
                        "Custom client management systems that track relationships, communications, and deals — built around your sales process, not a generic template.",
                },
                {
                    icon: "🔄",
                    title: "Workflow Automation & Approvals",
                    description:
                        "Automated approval chains, notifications, and handoffs that keep work moving without status-update meetings or manual follow-ups.",
                },
                {
                    icon: "🔐",
                    title: "Role-Based Access & Security",
                    description:
                        "Granular permissions so every team member sees exactly what they need — no more, no less. Enterprise-grade security built in from the start.",
                },
                {
                    icon: "🔗",
                    title: "Full-Stack Integration",
                    description:
                        "Your new system connects with Slack, email, accounting software, and any other tool your team uses — creating a single source of truth for your organisation.",
                },
            ],
            process: [
                {
                    number: "01",
                    title: "Requirements Workshop",
                    description:
                        "We run structured workshops with your team leads to document every workflow, pain point, and capability you need — before any design begins.",
                },
                {
                    number: "02",
                    title: "System Architecture",
                    description:
                        "We design the database structure, user roles, integration points, and technical architecture — ensuring the system can grow with your team.",
                },
                {
                    number: "03",
                    title: "Design & Prototyping",
                    description:
                        "Interactive prototypes let your team test the system before it's built. We refine based on feedback until every screen feels intuitive.",
                },
                {
                    number: "04",
                    title: "Development & Integration",
                    description:
                        "Built in iterative sprints with regular demos. We integrate with your existing tools and migrate your data cleanly and safely.",
                },
                {
                    number: "05",
                    title: "Training, Launch & Support",
                    description:
                        "Full team onboarding, documentation, and a dedicated support period post-launch. We don't disappear when the system goes live.",
                },
            ],
            closingStatement:
                "Stop working around your tools. Let's build tools that work around you.",
        },
    },
];

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
