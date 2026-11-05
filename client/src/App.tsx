import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiAlertCircle,
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiMoon,
  FiPhone,
  FiSend,
  FiSun,
  FiX,
  FiZap,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import CustomSelect, { type Option } from './components/CustomSelect';
import {
  SiOpenai,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiWebflow,
  SiAirtable,
  SiZapier,
  SiPostgresql,
  SiFastapi,
  SiPowerbi,
  SiMicrosoftexcel,
  SiGithub,
  SiChainlink,
} from 'react-icons/si';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gvdjnwh';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7s5tgup';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cx2UTKoC3FzQ3CPL-';
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919703320989';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'zero333three@gmail.com';
const SECONDARY_EMAIL = import.meta.env.VITE_CONTACT_EMAIL_SECONDARY || 'zerothreesolutions@gmail.com';
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '+91 9703320989';

const stats = [
  { label: 'AI solutions shipped', value: '60+' },
  { label: 'Automation systems', value: '48+' },
  { label: 'Web applications', value: '42+' },
  { label: 'Analytics dashboards', value: '32+' },
];

const services = [
  {
    title: 'AI Automation',
    text: 'Workflow automation, AI-powered operations, and internal tools that remove manual work.',
    icon: FiZap,
    skills: [
      { Icon: SiOpenai, name: 'OpenAI', color: '#00A37F' },
      { Icon: SiZapier, name: 'Zapier', color: '#FF4A00' },
      { Icon: SiPython, name: 'Python', color: '#3776AB' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { Icon: SiChainlink, name: 'LangChain', color: '#375BD2' },
      { Icon: FiZap, name: 'n8n', color: '#FF6F61' },
      { Icon: SiAirtable, name: 'Airtable', color: '#18BFFF' }
    ]
  },
  {
    title: 'AI Agents',
    text: 'Custom assistants for support, sales, research, reporting, and business operations.',
    icon: FiCpu,
    skills: [
      { Icon: SiOpenai, name: 'OpenAI', color: '#00A37F' },
      { Icon: SiPython, name: 'Python', color: '#3776AB' },
      { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiChainlink, name: 'LangChain', color: '#375BD2' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' }
    ]
  },
  {
    title: 'Data Analytics',
    text: 'Decision dashboards, reporting systems, and insight engines built around your KPIs.',
    icon: FiBarChart2,
    skills: [
      { Icon: SiPython, name: 'Python', color: '#3776AB' },
      { Icon: SiPostgresql, name: 'SQL/PostgreSQL', color: '#4169E1' },
      { Icon: SiPowerbi, name: 'Power BI', color: '#F2C811' },
      { Icon: SiMicrosoftexcel, name: 'Excel', color: '#217346' },
      { Icon: FiBarChart2, name: 'Charts', color: '#4f9dff' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' }
    ]
  },
  {
    title: 'Web Development',
    text: 'Fast, responsive websites, SaaS platforms, portals, and custom product experiences.',
    icon: FiGlobe,
    skills: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiNextdotjs, name: 'Next.js', color: '#0055FF' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
      { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
      { Icon: SiGithub, name: 'GitHub', color: '#2088FF' }
    ]
  },
  {
    title: 'UI/UX Design',
    text: 'Clean product interfaces, design systems, prototypes, and polished user journeys.',
    icon: FiLayers,
    skills: [
      { Icon: SiFigma, name: 'Figma', color: '#F24E1E' },
      { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
      { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
      { Icon: SiFramer, name: 'Framer', color: '#0055FF' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    text: 'Cloud deployment, CI/CD, monitoring, containerization, and scalable infrastructure.',
    icon: FiCloud,
    skills: [
      { Icon: SiAmazonaws, name: 'AWS', color: '#FF9900' },
      { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
      { Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
      { Icon: SiGithub, name: 'GitHub Actions', color: '#2088FF' },
      { Icon: SiPython, name: 'Python', color: '#3776AB' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' }
    ]
  },
  {
    title: 'No-Code Development',
    text: 'Rapid MVPs and business tools using Webflow, Bubble, Airtable, Zapier, and Make.',
    icon: FiDatabase,
    skills: [
      { Icon: SiWebflow, name: 'Webflow', color: '#146EF5' },
      { Icon: SiAirtable, name: 'Airtable', color: '#18BFFF' },
      { Icon: SiZapier, name: 'Zapier', color: '#FF4A00' },
      { Icon: FiCpu, name: 'Make', color: '#4A90E2' },
      { Icon: SiHtml5, name: 'Custom HTML', color: '#E34F26' },
      { Icon: SiCss3, name: 'Custom CSS', color: '#1572B6' }
    ]
  },
];

const solutions = [
  'Business Process Automation',
  'AI Customer Support Systems',
  'Business Intelligence Dashboards',
  'Custom SaaS Platforms',
  'Corporate Websites',
  'E-Commerce Solutions',
  'Cloud Infrastructure',
  'Startup MVPs',
]; const stack = [
  {
    category: 'AI & Automation',
    items: [
      { name: 'OpenAI', Icon: SiOpenai, color: '#00A37F' },
      { name: 'LangChain', Icon: SiChainlink, color: '#375BD2' },
      { name: 'n8n', Icon: FiZap, color: '#FF6F61' },
      { name: 'Make', Icon: FiCpu, color: '#4A90E2' },
      { name: 'AI Integrations', Icon: FiLayers, color: '#32d399' }
    ]
  },
  {
    category: 'Data Analytics',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Power BI', Icon: SiPowerbi, color: '#F2C811' },
      { name: 'Excel', Icon: SiMicrosoftexcel, color: '#217346' },
      { name: 'Visualization', Icon: FiBarChart2, color: '#4f9dff' }
    ]
  },
  {
    category: 'Product Engineering',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#0055FF' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' }
    ]
  },
  {
    category: 'Cloud Delivery',
    items: [
      { name: 'AWS', Icon: SiAmazonaws, color: '#FF9900' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'CI/CD', Icon: SiGithub, color: '#2088FF' },
      { name: 'Monitoring', Icon: FiCloud, color: '#4f9dff' }
    ]
  },
];
const features = [
  'Senior delivery team',
  'Business-first architecture',
  'Modern technology stack',
  'Scalable product foundations',
  'Fast launch cycles',
  'Transparent communication',
];
const portfolio = [
  {
    title: 'Autonomous Multi-Agent SRE Swarm',
    tech: 'LangGraph / K8s / Prometheus',
    image: '/projects/sre-swarm.jpg',
    problem: 'Microservice outages cause alert fatigue and hours of downtime.',
    result: 'Autonomous incident triage and self-healing rollbacks, cutting MTTR by 84%.',
  },
  {
    title: 'Real-time Conversational Voice AI',
    tech: 'LiveKit / WebRTC / Claude 3.5',
    image: '/projects/voice-ai.jpg',
    problem: 'Inbound call queues suffer 40%+ drop-offs and steep staffing costs.',
    result: '<280ms bidirectional voice agents handling 10k+ concurrent calls at 91% resolution.',
  },
  {
    title: 'Enterprise Multimodal Vision & QA',
    tech: 'YOLOv11 / Vision LLMs / TensorRT',
    image: '/projects/vision-qa.jpg',
    problem: 'Manual visual inspection creates severe throughput bottlenecks.',
    result: '99.4% automated visual defect accuracy at 60 FPS on edge hardware.',
  },
  {
    title: 'Agentic Revenue Operations & Discovery',
    tech: 'CrewAI / n8n / Firecrawl',
    image: '/projects/revenue-ops.jpg',
    problem: 'Sales teams spend 60%+ time manually prospecting and updating CRM.',
    result: 'Autonomous market signal tracking and lead enrichment generating 3.8x pipeline.',
  },
  {
    title: 'Enterprise GraphRAG Knowledge Platform',
    tech: 'Neo4j / LangChain / Qdrant',
    image: '/projects/graph-rag.jpg',
    problem: 'Fragmented enterprise docs cause hallucinations and compliance risk.',
    result: 'Grounded citation verification and knowledge graph search across 500k+ docs.',
  },
  {
    title: 'Autonomous AI Security & MCP Firewall',
    tech: 'Rust / eBPF / FastAPI / Langfuse',
    image: '/projects/ai-security.jpg',
    problem: 'Shadow AI adoption risks credential leaks and prompt injection exploits.',
    result: 'Zero-trust AI gateway inspecting 2M+ daily tokens with sub-millisecond overhead.',
  },
  {
    title: 'Private Enterprise Inference Cluster',
    tech: 'vLLM / TensorRT-LLM / Triton / K8s',
    image: '/projects/edge-inference.jpg',
    problem: 'Cloud API costs and data privacy prevent using public cloud models.',
    result: 'On-prem distributed inference cluster reaching 180 tok/s with 62% cost savings.',
  },
  {
    title: 'Autonomous 3D BIM & Jobsite Intelligence',
    tech: 'OpenBIM / IFC / Reality Capture',
    image: '/projects/construction-bim.jpg',
    problem: 'Jobsite progress clashes and manual schedule audits cause costly rework delays.',
    result: 'Drone reality capture aligned with 3D BIM models catching schedule clashes 3 weeks earlier.',
  },
  {
    title: 'Automated Construction Takeoff & Estimating',
    tech: 'Vision AI / Vector Blueprint Parsing',
    image: '/projects/construction-takeoff.jpg',
    problem: 'Manual plan takeoffs and contractor bid packages take 40+ hours per RFP.',
    result: 'Vector blueprint parsing extracting material takeoffs and labor bids with 98.7% precision.',
  },
];
const testimonials = [
  {
    name: 'Amrita Shah',
    role: 'SaaS Founder',
    quote: 'ZeroThree built our AI automation stack with the speed and precision we needed. Their insights made our launch far more efficient.',
    company: 'ScaleWave',
  },
  {
    name: 'Rahul Mehta',
    role: 'Operations Director',
    quote: 'The team turned our messy internal process into a clean automation system. We saved hours every week almost immediately.',
    company: 'Northline Labs',
  },
  {
    name: 'Priya Desai',
    role: 'CTO',
    quote: 'Their AI agents transformed our customer support. Response times dropped dramatically and our team can focus on what matters.',
    company: 'TechVibe',
  },
  {
    name: 'Vikram Joshi',
    role: 'Product Lead',
    quote: 'The analytics dashboard they built gives us real-time visibility into our KPIs. Decision-making is now data-driven and fast.',
    company: 'GrowthNest',
  },
  {
    name: 'Neha Kapoor',
    role: 'Founder',
    quote: 'From concept to launch, ZeroThree delivered a scalable SaaS platform that exceeded our expectations in every way.',
    company: 'CloudSync',
  },
  {
    name: 'Arjun Rao',
    role: 'Head of Engineering',
    quote: 'Their cloud infrastructure setup was seamless. We scaled 10x without any downtime issues. Truly professional delivery.',
    company: 'DataPulse',
  },
];

const textLoop = ['AI automation', 'data intelligence', 'modern web apps', 'cloud systems'];

const projectTypeOptions: Option[] = [
  { value: 'AI Automation', label: 'AI Automation' },
  { value: 'AI Agents', label: 'AI Agents & Assistants' },
  { value: 'Data Analytics', label: 'Data Analytics & Dashboards' },
  { value: 'Web Development', label: 'Web Development & SaaS' },
  { value: 'Cloud & DevOps', label: 'Cloud & DevOps' },
  { value: 'No-Code Development', label: 'No-Code Automation' },
];

const budgetOptionsUSD: Option[] = [
  { value: '< $5,000', label: '< $5,000' },
  { value: '$5,000 - $15,000', label: '$5,000 - $15,000' },
  { value: '$15,000 - $30,000', label: '$15,000 - $30,000' },
  { value: '$30,000+', label: '$30,000+' },
];

const budgetOptionsINR: Option[] = [
  { value: '< ₹5 Lakhs', label: '< ₹5 Lakhs' },
  { value: '₹5 Lakhs - ₹15 Lakhs', label: '₹5 Lakhs - ₹15 Lakhs' },
  { value: '₹15 Lakhs - ₹30 Lakhs', label: '₹15 Lakhs - ₹30 Lakhs' },
  { value: '₹30 Lakhs+', label: '₹30 Lakhs+' },
];

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const [popup, setPopup] = useState<{ show: boolean; type: 'success' | 'error'; title: string; message: string }>({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('zerothree-theme') as 'dark' | 'light' | null;
    if (stored) {
      setTheme(stored);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'services', 'stack', 'portfolio', 'contact'];
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let nextSection = 'home';
      // Bottom reached -> activate contact
      if (scrollY + viewportHeight >= docHeight - 70) {
        nextSection = 'contact';
      } else {
        // Check sections from bottom to top
        const targetPoint = scrollY + viewportHeight * 0.38;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && targetPoint >= el.offsetTop) {
            nextSection = sectionIds[i];
            break;
          }
        }
      }

      setActiveSection(prev => (prev !== nextSection ? nextSection : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: 'Sending your request...' });

    const currency = form.budget.includes('₹') ? 'INR' : 'USD';
    const now = new Date();
    const timeStr = now.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    });

    // Build a rich message body with all form details
    const messageBody = [
      `📧 Email: ${form.email}`,
      `🏢 Company: ${form.company || 'Not specified'}`,
      `📋 Project Type: ${form.projectType || 'Not specified'}`,
      `💰 Budget: ${form.budget || 'Not specified'} (${currency})`,
      ``,
      `💬 Message:`,
      form.message,
    ].join('\n');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          time: timeStr,
          message: messageBody,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus({
        type: 'success',
        message: 'Thanks! Your consultation request has been sent. We will connect with you shortly.',
      });
      setPopup({
        show: true,
        type: 'success',
        title: 'Request Sent Successfully!',
        message: 'Thank you for reaching out. Our team has received your details and will get back to you shortly.',
      });
      setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS error:', error);
      // Fallback: store in localStorage
      try {
        const storedLeads = JSON.parse(localStorage.getItem('zerothree_leads') || '[]');
        storedLeads.push({
          ...form,
          currency,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('zerothree_leads', JSON.stringify(storedLeads));
      } catch {
        // storage ignored
      }

      setStatus({
        type: 'error',
        message: 'Failed to send. Please try again or reach us directly via WhatsApp.',
      });
      setPopup({
        show: true,
        type: 'error',
        title: 'Submission Failed',
        message: 'We were unable to deliver your message right now. Your details were saved locally, or you can chat with us directly on WhatsApp.',
      });
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('zerothree-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <div className="animated-backdrop" aria-hidden="true">
        <div className="aurora-field" />
        <div className="backdrop-grid" />
        <div className="signal-line signal-line-one" />
        <div className="signal-line signal-line-two" />
        <div className="signal-line signal-line-three" />
        <div className="floating-cube cube-one" />
        <div className="floating-cube cube-two" />
        <div className="floating-cube cube-three" />
        <div className="floating-cube cube-four" />
        <div className="floating-cube cube-five" />
        <div className="floating-cube cube-six" />
      </div>

      <a className="whatsapp-float" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        <span className="whatsapp-pulse-ring-2" aria-hidden="true" />
        <FaWhatsapp aria-hidden="true" />
        <span className="whatsapp-float-label">Chat with us</span>
      </a>

      <header className="topbar">
        <a className="brand" href="#home" aria-label="ZeroThree Solutions home">
          <div className="brand-logo-badge">
            <img
              src="/logo.png"
              alt="ZeroThree Solutions Logo"
              className="brand-logo-img"
            />
          </div>
          <div>
            <p>ZeroThree Solutions <span style={{ opacity: 0.65, fontSize: '0.75em' }}>/ 0303</span></p>
            <span>Build. Analyze. Scale.</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a
            href="#services"
            aria-label="Services"
            className={`nav-link-item ${activeSection === 'services' ? 'active' : ''}`}
          >
            <FiLayers />
            <span className="nav-tooltip">Services</span>
          </a>
          <a
            href="#stack"
            aria-label="Stack"
            className={`nav-link-item ${activeSection === 'stack' ? 'active' : ''}`}
          >
            <FiCode />
            <span className="nav-tooltip">Stack</span>
          </a>
          <a
            href="#portfolio"
            aria-label="Work"
            className={`nav-link-item ${activeSection === 'portfolio' ? 'active' : ''}`}
          >
            <FiBriefcase />
            <span className="nav-tooltip">Work</span>
          </a>
          <a
            href="#contact"
            aria-label="Contact"
            className={`nav-link-item ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <FiMessageCircle />
            <span className="nav-tooltip">Contact</span>
          </a>
        </nav>

        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <main>
        <section className={`hero ${activeSection === 'home' ? 'section-active' : ''}`} id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <span className="eyebrow">Enterprise AI & Automation Agency · 0303 Solutions</span>
            <h1>
              Build smarter systems for{' '}
              <span className="animated-word-wrap">
                {textLoop.map(word => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </h1>
            <p>
              We design AI-powered workflows, analytics products, cloud systems, and polished web experiences that help growing businesses move faster.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Book Free Consultation <FiArrowRight />
              </a>
              <a className="button button-secondary" href="#portfolio">
                View Work
              </a>
            </div>
            <div className="hero-stats">
              {stats.map(item => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="orbital-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core-3d">
                <span>AI</span>
              </div>
              <div className="system-card system-card-one">
                <strong>Automation</strong>
                <span>42 active workflows</span>
              </div>
              <div className="system-card system-card-two">
                <strong>Analytics</strong>
                <span>Live KPI layer</span>
              </div>
              <div className="system-card system-card-three">
                <strong>Delivery</strong>
                <span>Cloud ready</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={`section ${activeSection === 'services' ? 'section-active' : ''}`} id="services">
          <div className="section-heading">
            <span>Our services</span>
            <h2>Senior capability across AI, product, data, and cloud.</h2>
          </div>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="service-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <div className="service-content">
                    <p className="service-description">{service.text}</p>
                    <div className="service-skills-grid">
                      {service.skills.map((skill, sIdx) => {
                        const SkillIcon = skill.Icon;
                        return (
                          <div
                            key={sIdx}
                            className="service-skill-item"
                            title={skill.name}
                            style={{ '--skill-brand-color': skill.color } as React.CSSProperties}
                          >
                            <SkillIcon style={{ color: skill.color }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading">
            <span>Solutions we build</span>
            <h2>Practical systems that improve revenue, operations, and speed.</h2>
          </div>
          <div className="solution-grid">
            {solutions.map(solution => (
              <div key={solution} className="solution-pill">
                <FiChevronRight />
                {solution}
              </div>
            ))}
          </div>
        </section>

        <section className={`section ${activeSection === 'stack' ? 'section-active' : ''}`} id="stack">
          <div className="section-heading">
            <span>Technology stack</span>
            <h2>Modern tools selected for maintainable delivery.</h2>
          </div>
          <div className="stack-grid">
            {stack.map(group => (
              <article key={group.category} className="stack-card">
                <h3>{group.category}</h3>
                <div className="stack-badges">
                  {group.items.map(item => {
                    const ItemIcon = item.Icon;
                    return (
                      <span key={item.name} className="badge">
                        <ItemIcon className="badge-icon" style={{ color: item.color }} />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section value-section">
          <div className="section-heading">
            <span>Why choose us</span>
            <h2>Professional delivery without the heavy agency drag.</h2>
          </div>
          <div className="feature-grid">
            {features.map(feature => (
              <div key={feature} className="feature-card">
                <FiCheck />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`section ${activeSection === 'portfolio' ? 'section-active' : ''}`} id="portfolio">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>High-impact projects designed for scale.</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map(item => (
              <motion.article key={item.title} className="portfolio-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260 }}>
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} className="portfolio-img-cover" loading="lazy" />
                  <div className="portfolio-image-overlay" />
                </div>
                <div className="portfolio-copy">
                  <h3>{item.title}</h3>
                  <p><strong>Problem:</strong> {item.problem}</p>
                  <p><strong>Result:</strong> {item.result}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-heading">
            <span>Testimonials</span>
            <h2>Trusted by founders and business leaders.</h2>
          </div>
          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article key={`${testimonial.name}-${index}`} className="testimonial-card">
                  <p>"{testimonial.quote}"</p>
                  <div className="testimonial-meta">
                    <strong>{testimonial.name}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`section section-contact ${activeSection === 'contact' ? 'section-active' : ''}`} id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span>Contact the team</span>
              <h2>Ready to build, analyze, and scale?</h2>
              <p>Tell us what you are building. We will help map the quickest path from idea to useful, production-ready system.</p>
              <div className="contact-details">
                <a href={`mailto:${CONTACT_EMAIL}`}><FiMail /> {CONTACT_EMAIL}</a>
                <a href={`mailto:${SECONDARY_EMAIL}`}><FiMail /> {SECONDARY_EMAIL}</a>
                <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}><FiPhone /> {CONTACT_PHONE}</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                </div>
              </div>
              <div className="field-group">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
              </div>
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="projectType">Project Type</label>
                  <CustomSelect
                    id="projectType"
                    value={form.projectType}
                    onChange={(val) => setForm(prev => ({ ...prev, projectType: val }))}
                    options={projectTypeOptions}
                    placeholder="Select project type"
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="budget">Budget</label>
                  <CustomSelect
                    id="budget"
                    value={form.budget}
                    onChange={(val) => {
                      setForm(prev => ({ ...prev, budget: val }));
                      if (val.includes('₹')) setCurrency('INR');
                      if (val.includes('$')) setCurrency('USD');
                    }}
                    options={currency === 'USD' ? budgetOptionsUSD : budgetOptionsINR}
                    placeholder="Select budget"
                    header={
                      <div className="dropdown-currency-switch" role="group" aria-label="Select currency">
                        <button
                          type="button"
                          className={`dropdown-currency-btn ${currency === 'USD' ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrency('USD');
                          }}
                        >
                          $ USD (US)
                        </button>
                        <button
                          type="button"
                          className={`dropdown-currency-btn ${currency === 'INR' ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrency('INR');
                          }}
                        >
                          ₹ INR (IN)
                        </button>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project" rows={5} required />
              </div>
              <button type="submit" className="button button-primary button-submit">
                <span className="button-text">Submit Request</span>
                <FiSend className="button-send-icon" />
              </button>
              {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand-wrap">
          <div className="footer-logo-badge">
            <img
              src="/logo.png"
              alt="ZeroThree Solutions (0303 Solutions)"
              className="footer-logo-img"
            />
          </div>
          <div>
            <p className="footer-brand">ZeroThree Solutions (0303 Solutions)</p>
            <p>Build. Analyze. Scale.</p>
          </div>
        </div>
        <p>© 2026 ZeroThree Solutions (0303 Solutions). All Rights Reserved.</p>
      </footer>

      {/* Pop-up Notification Modal */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(prev => ({ ...prev, show: false }))}
          >
            <motion.div
              className={`popup-modal ${popup.type}`}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="popup-close"
                onClick={() => setPopup(prev => ({ ...prev, show: false }))}
                aria-label="Close notification"
              >
                <FiX />
              </button>

              <div className="popup-icon-wrap">
                {popup.type === 'success' ? (
                  <FiCheckCircle className="popup-icon success" />
                ) : (
                  <FiAlertCircle className="popup-icon error" />
                )}
              </div>

              <h3 className="popup-title">{popup.title}</h3>
              <p className="popup-message">{popup.message}</p>

              <div className="popup-actions">
                {popup.type === 'error' && (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="popup-btn popup-btn-secondary"
                  >
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                )}
                <button
                  type="button"
                  className="popup-btn popup-btn-primary"
                  onClick={() => setPopup(prev => ({ ...prev, show: false }))}
                >
                  {popup.type === 'success' ? 'Great, got it!' : 'Close'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
