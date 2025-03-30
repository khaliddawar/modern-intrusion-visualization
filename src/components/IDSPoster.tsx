
import React from 'react';
import { Shield, ShieldAlert, Eye, Server, Database, Lock, AlertTriangle, CheckCircle, Brain, Cpu, BarChart2, Network } from 'lucide-react';
import IDSFeature from './IDSFeature';
import DataFlowAnimation from './DataFlowAnimation';

const IDSPoster: React.FC = () => {
  return (
    <div className="bg-cyber-darker min-h-screen w-full p-4 md:p-8 relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20"
        style={{ backgroundSize: '30px 30px' }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyber-blue opacity-10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cyber-accent opacity-10 blur-3xl animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-cyber mb-3 tracking-wider glow-text">
            <span className="text-cyber-cyan">AI-POWERED</span> <span className="text-cyber-blue">INTRUSION</span> <span className="text-white">DETECTION</span>
          </h1>
          <div className="w-full max-w-3xl mx-auto h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent mb-6"></div>
          <p className="text-cyber-cyan text-xl md:text-2xl font-medium tracking-wide">
            NEXT-GENERATION NETWORK SECURITY WITH MACHINE LEARNING
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Definition and description */}
            <div className="bg-gradient-to-br from-cyber-dark to-cyber-darker border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.2)] animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-cyber text-white mb-4">WHAT IS <span className="text-cyber-blue">AI-BASED IDS?</span></h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                An AI-powered Intrusion Detection System (IDS) uses artificial intelligence and machine learning algorithms to monitor network traffic and system activities for malicious actions or security policy violations, adapting to new threats in real-time.
              </p>
              <div className="flex items-center mt-6 space-x-3">
                <div className="hexagon bg-cyber-blue/20 p-4 w-16 h-16 flex items-center justify-center">
                  <Brain className="text-cyber-blue w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg">Advanced AI Protection</h3>
                  <p className="text-gray-400 text-sm">Leverages neural networks and deep learning for anomaly detection</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <IDSFeature 
                icon={<Brain />} 
                title="AI-Based Detection" 
                description="Uses neural networks to identify patterns and anomalies"
              />
              <IDSFeature 
                icon={<BarChart2 />} 
                title="Behavioral Analysis" 
                description="Learns normal network behavior and flags deviations"
              />
              <IDSFeature 
                icon={<Cpu />} 
                title="Real-time Processing" 
                description="Analyzes network traffic with millisecond response time"
              />
              <IDSFeature 
                icon={<Network />} 
                title="Adaptive Learning" 
                description="Continuously improves through machine learning feedback"
              />
            </div>

            {/* Data flow animation */}
            <div className="relative h-16 bg-cyber-dark/50 rounded-lg overflow-hidden border border-cyber-blue/20">
              <DataFlowAnimation />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual element */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 bg-cyber-dark/60 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="hexagon bg-cyber-blue/20 p-5 w-48 h-48 flex items-center justify-center animate-pulse-glow">
                  <Shield className="text-cyber-blue w-28 h-28" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Network security visualization" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Types of IDS */}
            <div className="bg-gradient-to-br from-cyber-dark to-cyber-darker border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.2)] animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-cyber text-white mb-4">AI-ENHANCED <span className="text-cyber-blue">IDS TYPES</span></h2>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-blue/20 p-2 rounded">
                    <AlertTriangle className="text-cyber-warning w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Neural NIDS</h3>
                    <p className="text-gray-400 text-sm">Neural network-powered network traffic analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-blue/20 p-2 rounded">
                    <Server className="text-cyber-success w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">ML-Based HIDS</h3>
                    <p className="text-gray-400 text-sm">Machine learning analysis of host system behavior</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-blue/20 p-2 rounded">
                    <Database className="text-cyber-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Deep Learning PIDS</h3>
                    <p className="text-gray-400 text-sm">Deep learning analysis of protocol behaviors</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-blue/20 p-2 rounded">
                    <CheckCircle className="text-cyber-cyan w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Hybrid AI Systems</h3>
                    <p className="text-gray-400 text-sm">Combines multiple AI techniques for comprehensive security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="w-full max-w-3xl mx-auto h-1 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent mb-6"></div>
          <p className="font-cyber tracking-wider">FAST NUCES PESHAWAR • DEPARTMENT OF CYBERSECURITY</p>
          <p className="mt-2 text-sm">PRESENTED BY THE NETWORK SECURITY RESEARCH GROUP • FAST NATIONAL UNIVERSITY</p>
        </footer>
      </div>
    </div>
  );
};

export default IDSPoster;
