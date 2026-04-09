'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Security & Compliance | Enterprise Fleet Management Security',
  description: 'Fleetbase provides enterprise-grade security for fleet management operations. Role-based access control, audit logs, data encryption, GDPR compliance, and self-hosted deployment options.',
  keywords: ['fleet management security', 'logistics data security', 'RBAC fleet management', 'GDPR logistics software', 'enterprise fleet security'],
  openGraph: {
    title: 'Security & Compliance | Enterprise Fleet Management Security',
    description: 'Fleetbase provides enterprise-grade security for fleet management operations. Role-based access control, audit logs, data encryption, GDPR compliance, and self-hosted deployment options.',
  },
};


const faqs = [
  { q: 'Is Fleetbase SOC 2 compliant?', a: 'Fleetbase Cloud is working toward SOC 2 Type II certification. Our infrastructure and operational controls are designed to meet SOC 2 requirements across the Trust Service Criteria of Security, Availability, and Confidentiality. Enterprise customers can request our current security documentation and roadmap.' },
  { q: 'Where is my data stored?', a: 'Fleetbase Cloud stores data in ISO 27001-certified data centers. You can choose your preferred region at account setup. For customers with strict data residency requirements, Fleetbase can be self-hosted on your own infrastructure in any region or cloud provider of your choice.' },
  { q: 'How does Fleetbase handle data encryption?', a: 'All data is encrypted in transit using TLS 1.2 or higher. Data at rest is encrypted using AES-256. Sensitive fields such as API keys, payment credentials, and personal data are encrypted at the application layer in addition to the storage-level encryption.' },
  { q: 'Can I self-host Fleetbase for maximum data control?', a: 'Yes. Fleetbase is fully open-source and can be self-hosted on your own infrastructure — on-premises, in your private cloud, or on any major cloud provider. Self-hosting gives you complete control over your data, network, and security configuration.' },
  { q: 'How does Fleetbase manage access control?', a: 'Fleetbase uses role-based access control (RBAC) with granular permission management. Administrators can define custom roles with specific permissions for each module and resource. Multi-factor authentication (MFA) is supported for all user accounts.' },
  { q: 'Is Fleetbase GDPR compliant?', a: 'Yes. Fleetbase is designed with GDPR compliance in mind. We provide data processing agreements (DPAs) for EU customers, support data subject rights requests (access, deletion, portability), and give you full control over data retention policies. For self-hosted deployments, you are the data controller.' },
  { q: 'How are security vulnerabilities handled?', a: 'Fleetbase has a responsible disclosure policy and a dedicated security team that monitors for vulnerabilities. Critical security patches are released within 24 hours of discovery. As an open-source platform, the community also contributes to security reviews. Enterprise customers receive direct security notifications.' },
  { q: 'What happens to my data if I cancel?', a: 'Upon account cancellation, you can export all your data in standard formats before deletion. Data is permanently deleted from our systems within 30 days of account closure. For self-hosted deployments, you retain full control of your data at all times.' },
];

const securityFeatures = [
  { icon: '🔐', title: 'End-to-End Encryption', desc: 'All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Sensitive fields receive additional application-layer encryption.' },
  { icon: '🛡️', title: 'Role-Based Access Control', desc: 'Granular RBAC with custom roles and per-module permissions. Enforce least-privilege access across your entire organization.' },
  { icon: '🔑', title: 'Multi-Factor Authentication', desc: 'MFA support for all user accounts. Enforce MFA organization-wide to prevent unauthorized access.' },
  { icon: '📋', title: 'Comprehensive Audit Logs', desc: 'Every action taken in the platform is logged with timestamp, user, IP address, and full context for compliance and forensic review.' },
  { icon: '🌐', title: 'API Security', desc: 'Scoped API keys with expiry dates, HMAC webhook signature verification, and rate limiting on all endpoints.' },
  { icon: '🏠', title: 'Self-Hosting Option', desc: 'Deploy Fleetbase on your own infrastructure for complete data sovereignty. No data ever leaves your environment.' },
];

const complianceItems = [
  { name: 'GDPR', status: 'Compliant', desc: 'Full data subject rights, DPAs available, configurable retention policies' },
  { name: 'SOC 2 Type II', status: 'In Progress', desc: 'Controls designed to meet Trust Service Criteria; certification in progress' },
  { name: 'ISO 27001', status: 'Infrastructure', desc: 'Hosted on ISO 27001-certified infrastructure with certified cloud providers' },
  { name: 'PCI DSS', status: 'Scoped', desc: 'Payment processing delegated to PCI-certified payment gateways; no card data stored' },
  { name: 'CCPA', status: 'Compliant', desc: 'California Consumer Privacy Act compliance with data access and deletion support' },
  { name: 'HIPAA', status: 'On Request', desc: 'BAAs available for healthcare logistics customers on Enterprise plans' },
];

export default function SecurityCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Security & Compliance</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Enterprise-Grade Security,{' '}
              <span className="text-gradient">Built Into Every Layer</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Fleetbase is designed with security and compliance at its core. From end-to-end encryption and granular access control to full audit logging and self-hosting options, your data is protected at every layer — and you remain in full control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/contact"><Button size="lg">Talk to Our Security Team</Button></Link>
              <Link href="/pricing"><Button size="lg" variant="outline">View Enterprise Plans</Button></Link>
              <Link href="https://github.com/fleetbase" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="ghost">Review Source Code</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-2xl font-bold mb-1">AES-256</div><div className="text-sm text-muted-foreground">Encryption at Rest</div></div>
            <div><div className="text-2xl font-bold mb-1">TLS 1.2+</div><div className="text-sm text-muted-foreground">Encryption in Transit</div></div>
            <div><div className="text-2xl font-bold mb-1">RBAC</div><div className="text-sm text-muted-foreground">Granular Access Control</div></div>
            <div><div className="text-2xl font-bold mb-1">100%</div><div className="text-sm text-muted-foreground">Open-Source Auditable</div></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security at Every Layer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fleetbase implements defense-in-depth security across infrastructure, application, and data layers to protect your operations and your customers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feat, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Data Protection</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Data is Yours. Always.</h2>
              <p className="text-lg text-muted-foreground mb-8">Fleetbase gives you complete control over your data. Whether you choose Fleetbase Cloud or self-host on your own infrastructure, you decide where your data lives, how long it is retained, and who can access it. We never sell or share your data with third parties.</p>
              <div className="space-y-4">
                {['All data encrypted at rest with AES-256','All data encrypted in transit with TLS 1.2+','Sensitive fields encrypted at the application layer','Configurable data retention policies per organization','Full data export in standard formats at any time','Permanent deletion within 30 days of account closure','Self-hosting option for complete data sovereignty','No data sharing or selling to third parties — ever'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span className="text-primary text-xs">✓</span></div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative">
              <Image
                src="/images/console-screenshots/iam-users.webp"
                alt="Fleetbase IAM user management showing team members with role assignments, access permissions, and account status"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
              <Image
                src="/images/console-screenshots/iam-roles.webp"
                alt="Fleetbase IAM access control showing role-based permissions matrix with granular access settings per module and action type"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Access Control</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Granular Access Control for Every Team</h2>
              <p className="text-lg text-muted-foreground mb-8">Fleetbase&apos;s role-based access control system lets you define exactly what each team member can see and do. Create custom roles with per-module, per-resource permissions and enforce least-privilege access across your entire organization.</p>
              <div className="space-y-6">
                {[{icon:'👥',title:'Custom Roles',desc:'Create unlimited custom roles tailored to your organizational structure and workflows.'},{icon:'🔒',title:'Granular Permissions',desc:'Control access at the module, resource, and action level — read, create, update, delete.'},{icon:'📱',title:'Multi-Factor Authentication',desc:'Enforce MFA for all users or specific roles to prevent unauthorized account access.'},{icon:'🔍',title:'Session Management',desc:'View and revoke active sessions. Set session timeout policies for sensitive environments.'}].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{item.icon}</div>
                    <div><h4 className="font-semibold mb-1">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Audit & Compliance</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Audit Trail for Every Action</h2>
              <p className="text-lg text-muted-foreground mb-8">Every action taken in Fleetbase is logged with a full audit trail — who did what, when, from where, and what changed. This gives you the visibility needed for compliance audits, security investigations, and operational accountability.</p>
              <div className="space-y-4">
                {['Every user action logged with timestamp and IP address','Full before/after state captured for data changes','API request logs with authentication details','Export audit logs for compliance reporting','Configurable log retention periods','Tamper-evident log storage'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span className="text-primary text-xs">✓</span></div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative">
              <Image
                src="/images/console-screenshots/developers-logs.webp"
                alt="Fleetbase audit log dashboard showing complete action history with user, action type, resource, timestamp, IP address, and change inspector"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fleetbase is designed to help you meet your regulatory and compliance obligations across major frameworks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {complianceItems.map((item, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.status === 'Compliant' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-muted text-muted-foreground'}`}>{item.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Enterprise customers can request detailed compliance documentation and security questionnaire responses.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
              <Image
                src="/images/console-screenshots/iam-roles.webp"
                alt="Fleetbase IAM roles and permissions management showing role configuration with granular access controls for self-hosted deployment"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Self-Hosting</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Maximum Security Through Self-Hosting</h2>
              <p className="text-lg text-muted-foreground mb-8">For organizations with strict data residency, regulatory, or security requirements, Fleetbase can be deployed entirely on your own infrastructure. As a fully open-source platform, you can audit every line of code and ensure your data never leaves your environment.</p>
              <div className="space-y-4">
                {['Deploy on any cloud provider or on-premises hardware','Full control over network, firewall, and access policies','Data never leaves your infrastructure','Audit the complete source code on GitHub','Configure your own backup and disaster recovery','Integrate with your existing security tooling and SIEM'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span className="text-primary text-xs">✓</span></div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="https://docs.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button variant="outline">Self-Hosting Guide</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🔍</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Responsible Disclosure</h2>
            <p className="text-lg text-muted-foreground mb-8">We take security seriously and welcome responsible disclosure of vulnerabilities. If you discover a security issue in Fleetbase, please report it to our security team. We commit to acknowledging reports within 24 hours and providing regular updates on remediation progress.</p>
            <div className="bg-card border rounded-lg p-6 text-left mb-8">
              <h3 className="font-semibold mb-3">Our Security Response Process</h3>
              <div className="space-y-3">
                {[{step:'01',text:'Report received and acknowledged within 24 hours'},{step:'02',text:'Severity assessment and initial investigation within 48 hours'},{step:'03',text:'Critical patches released within 24 hours of confirmation'},{step:'04',text:'Public disclosure coordinated with reporter after fix is deployed'}].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm font-bold flex-shrink-0">{item.step}</span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="mailto:security@fleetbase.io"><Button variant="outline">Report a Vulnerability</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about Fleetbase security and compliance.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border rounded-lg overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-muted-foreground text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-muted-foreground leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Security or Compliance Requirements?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Our security team is available to discuss your specific requirements, provide compliance documentation, and help you evaluate Fleetbase for your environment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"><Button size="lg">Talk to Our Security Team</Button></Link>
            <Link href="/pricing"><Button size="lg" variant="outline">View Enterprise Plans</Button></Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Security questionnaires · DPAs · BAAs · Custom compliance reviews available on Enterprise plans</p>
        </div>
      </section>
    </div>
  );
}
