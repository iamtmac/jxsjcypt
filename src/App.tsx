/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  ArrowRight, 
  Globe, 
  Lock, 
  Cpu, 
  Network,
  Search,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Activity,
  Zap
} from 'lucide-react';
import CountUp from 'react-countup';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '数据登记', href: '#' },
    { name: '数据实验室', href: '#' },
    { name: '供需市场', href: '#' },
    { name: '流通服务', href: '#' },
    { name: '合作生态', href: '#' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <Database className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-slate-900" : "text-slate-900")}>嘉兴数据产业</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-primary font-semibold">Public Service Platform</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2">登录</button>
          <button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5">
            立即加入
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-semibold text-slate-700">{link.name}</a>
            ))}
            <hr className="border-slate-100" />
            <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-brand-primary/20">立即加入</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceSection = () => {
  const services = [
    {
      title: "数据登记",
      desc: "提供数据资产确权、存证、合规性审核等一站式登记服务。",
      icon: ShieldCheck,
      color: "bg-blue-500"
    },
    {
      title: "数据实验室",
      desc: "基于隐私计算、联邦学习等技术，实现数据“可用不可见”。",
      icon: Cpu,
      color: "bg-indigo-500"
    },
    {
      title: "供需市场",
      desc: "汇聚海量优质数据产品，精准匹配供需双方，促进要素流通。",
      icon: Network,
      color: "bg-sky-500"
    },
    {
      title: "流通服务",
      desc: "提供全流程交易撮合、资金结算、存证溯源等专业流通支持。",
      icon: Activity,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4">Core Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              全方位赋能 <br />
              <span className="text-brand-primary">数据要素</span> 价值释放
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            我们提供从数据确权到安全流通的全链路服务，助力企业在数字经济时代抢占先机。
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg", service.color)}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all">
                了解详情 <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Security" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <Lock className="text-white w-6 h-6" />
                  </div>
                  <div className="text-white font-bold">可信计算环境</div>
                </div>
                <p className="text-white/70 text-sm">
                  采用 TEE、MPC 等前沿技术，确保数据在计算过程中的绝对安全。
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4">Technology Stack</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              硬核技术支撑 <br />
              构建可信流通底座
            </h2>
            <div className="space-y-8">
              {[
                { title: "区块链存证", desc: "全流程上链，确保数据流转过程可追溯、不可篡改。", icon: Network },
                { title: "隐私计算", desc: "多方安全计算技术，实现数据“可用不可见，可控可计量”。", icon: Cpu },
                { title: "智能合约", desc: "自动化执行交易协议，降低信任成本，提升流通效率。", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    {
      date: "2024.03.15",
      title: "嘉兴市数据要素市场化配置改革方案正式发布",
      tag: "政策动态"
    },
    {
      date: "2024.03.10",
      title: "平台累计数据交易额突破 10 亿元大关",
      tag: "平台成果"
    },
    {
      date: "2024.03.05",
      title: "长三角数据要素可信流通联盟在嘉兴成立",
      tag: "行业新闻"
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4">Latest Updates</div>
            <h2 className="text-4xl font-extrabold text-slate-900">新闻资讯</h2>
          </div>
          <button className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            查看全部 <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl bg-slate-200 mb-6 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${i + 10}/800/500`} 
                  alt="News" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="text-slate-400 text-sm font-mono mb-2">{item.date}</div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <Database className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white">嘉兴数据产业</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              嘉兴市数据产业公共服务平台致力于构建安全、合规、高效的数据要素流通生态体系，助力数字经济高质量发展。
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8">快速链接</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">数据登记</a></li>
              <li><a href="#" className="hover:text-white transition-colors">数据实验室</a></li>
              <li><a href="#" className="hover:text-white transition-colors">供需市场</a></li>
              <li><a href="#" className="hover:text-white transition-colors">流通服务</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-primary" />
                <span>嘉兴市南湖区某某路 888 号</span>
              </li>
              <li className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-brand-primary" />
                <span>0573-88888888</span>
              </li>
              <li className="flex items-center gap-3">
                <Search className="w-5 h-5 text-brand-primary" />
                <span>contact@jxdata.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2024 嘉兴市数据产业公共服务平台. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">浙 ICP 备 12345678 号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Base Background Image (Futuristic Jiaxing - Light Version) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
          alt="Futuristic Digital City Light" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-slate-50"></div>
      </div>

      {/* Dynamic Digital Water Flow (Animated SVG) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flowing Lines */}
          {[
            "M-100,600 Q300,550 600,650 T1500,600",
            "M-100,650 Q400,600 700,700 T1500,650",
            "M-100,700 Q500,650 800,750 T1500,700",
            "M-100,550 Q200,500 500,600 T1500,550"
          ].map((d, i) => (
            <path 
              key={i}
              d={d}
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              className="animate-flow-line"
              style={{ animationDelay: `${i * 1.2}s`, animationDuration: `${4 + i}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5" />
            <span>嘉兴市数据要素可信流通门户</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            嘉兴数据 <br />
            <span className="text-brand-primary">产业服务</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            凝心聚力培育数据要素市场生态，打造长三角区域数据发展湾区。以数字水流汇聚智慧，引航数据产业新未来。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all group shadow-xl shadow-brand-primary/20">
              开始探索
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-2xl font-bold transition-all shadow-sm">
              了解更多
            </button>
          </div>

          <div className="mt-16 flex items-center gap-12 border-t border-slate-200 pt-10">
            <div>
              <div className="text-3xl font-bold text-slate-900 font-mono">
                <CountUp end={168} duration={2.5} />+
              </div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">注册用户</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 font-mono">
                <CountUp end={13753} duration={2.5} separator="," />
              </div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">数据目录</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 font-mono">
                <CountUp end={102} duration={2.5} />
              </div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">数据产品</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Futuristic Boat Visual - Light Theme */}
          <div className="relative z-10 w-full aspect-video rounded-[40px] bg-white border border-slate-100 shadow-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Database className="w-32 h-32 text-brand-primary opacity-5 absolute -top-16 -left-16" />
                <div className="w-64 h-32 bg-brand-primary/10 border border-brand-primary/20 rounded-full flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-flow-line" style={{ width: '200%' }}></div>
                   <span className="text-2xl font-bold text-brand-primary tracking-widest">数字红船</span>
                </div>
              </motion.div>
              
              {/* Floating Data Points */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
                    y: [Math.random() * 20, Math.random() * -20, Math.random() * 20]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-2 h-2 bg-brand-primary rounded-full opacity-40"
                  style={{ 
                    top: `${20 + Math.random() * 60}%`, 
                    left: `${20 + Math.random() * 60}%` 
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DataQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "您的企业是否拥有大量沉淀的业务数据，但尚未进行官方权属界定？",
      options: ["是的，急需确权", "有一些，但不确定", "目前不需要"],
      recommendation: "数据登记服务",
      icon: ShieldCheck
    },
    {
      id: 2,
      question: "您是否希望在不泄露原始数据的前提下，与合作伙伴进行联合建模或算法训练？",
      options: ["非常希望", "有此考虑", "暂无需求"],
      recommendation: "数据实验室",
      icon: Cpu
    },
    {
      id: 3,
      question: "您的企业是否存在数据获取困难，或有优质数据资源寻找变现渠道？",
      options: ["存在获取困难", "有资源想变现", "供需平衡"],
      recommendation: "供需市场",
      icon: Network
    },
    {
      id: 4,
      question: "您在数据交易过程中，是否担心合规性风险或缺乏全流程的存证溯源？",
      options: ["非常担心", "有所顾虑", "完全信任"],
      recommendation: "流通服务",
      icon: Activity
    },
    {
      id: 5,
      question: "您的企业是否计划参与长三角区域的数据产业生态协作？",
      options: ["已在计划中", "感兴趣想了解", "暂不考虑"],
      recommendation: "合作生态",
      icon: Globe
    }
  ];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-32 quiz-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">测一测：您的企业能用平台做什么？</h2>
          <p className="text-slate-600">只需 1 分钟，为您定制专属的数据产业服务方案</p>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="quiz-card"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">问题 {currentStep + 1} / {questions.length}</span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div key={i} className={cn("h-1.5 w-8 rounded-full transition-all", i <= currentStep ? "bg-brand-primary" : "bg-slate-200")}></div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-10 leading-tight">{questions[currentStep].question}</h3>

              <div className="grid gap-4">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-6 text-left rounded-2xl border border-slate-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-700 group-hover:text-brand-primary">{option}</span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="quiz-card text-center"
            >
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap className="text-brand-primary w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">测评完成！</h3>
              <p className="text-slate-600 mb-10">根据您的需求，我们建议您重点关注以下服务：</p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {questions.filter((_, i) => answers[i] === 0 || answers[i] === 1).map((q, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <q.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">推荐服务</div>
                      <div className="font-bold text-slate-900">{q.recommendation}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-10 py-4 bg-brand-primary text-white rounded-xl font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all">
                  立即咨询专家
                </button>
                <button onClick={resetQuiz} className="px-10 py-4 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  重新测评
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <ServiceSection />
        <DataQuiz />
        <TechnologySection />
        <NewsSection />
        
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <div className="p-16 md:p-24 rounded-[64px] bg-slate-900 relative overflow-hidden shadow-2xl">
              {/* Decorative elements for CTA */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">准备好开启您的数据价值之旅了吗？</h2>
                <p className="text-slate-400 mb-12 text-xl max-w-3xl mx-auto leading-relaxed">
                  加入嘉兴数据产业生态，与数百家领先企业共同探索数据要素的无限可能。
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-12 py-5 bg-brand-primary text-white rounded-2xl font-bold shadow-2xl shadow-brand-primary/40 hover:scale-105 transition-all">
                    立即注册
                  </button>
                  <button className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                    咨询专家
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
