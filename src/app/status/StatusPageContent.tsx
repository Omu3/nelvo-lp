'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, AlertTriangle, XCircle, Activity, Mail, Clock } from 'lucide-react';

// インシデント履歴データ（手動で追加・更新可能）
// 形式: { date: string, title: string, status: 'resolved' | 'investigating' | 'monitoring', description: string }
const incidents: Array<{
  date: string;
  title: string;
  status: 'resolved' | 'investigating' | 'monitoring';
  description: string;
}> = [
  // 例: インシデントがある場合はここに追加
  // {
  //   date: '2026-01-10 14:30',
  //   title: 'Dashboard response time increased',
  //   status: 'resolved',
  //   description: 'Dashboard response time was temporarily increased. The issue has been resolved.',
  // },
];

type StatusType = 'operational' | 'degraded' | 'partial' | 'major' | 'maintenance';

// 現在の稼働状況（手動で更新）
const currentStatus: StatusType = 'operational';

// 各コンポーネントのステータス（手動で更新）
const componentStatus: Record<string, StatusType> = {
  website: 'operational',
  auth: 'operational',
  billing: 'operational',
  integrations: 'operational',
  dashboard: 'operational',
};

export function StatusPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.status;

  const currentDate = new Date();
  const formattedDate = language === 'ja'
    ? `${currentDate.getFullYear()}年${String(currentDate.getMonth() + 1).padStart(2, '0')}月${String(currentDate.getDate()).padStart(2, '0')}日 ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`
    : `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;

  const getStatusConfig = (status: StatusType) => {
    const configs = {
      operational: {
        color: 'green',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-600',
        icon: CheckCircle2,
        label: pageT.statusTypes.operational,
      },
      degraded: {
        color: 'yellow',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-600',
        icon: AlertTriangle,
        label: pageT.statusTypes.degraded,
      },
      partial: {
        color: 'orange',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-600',
        icon: AlertTriangle,
        label: pageT.statusTypes.partial,
      },
      major: {
        color: 'red',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-600',
        icon: XCircle,
        label: pageT.statusTypes.major,
      },
      maintenance: {
        color: 'blue',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-600',
        icon: Activity,
        label: pageT.statusTypes.maintenance,
      },
    };
    return configs[status];
  };

  const currentStatusConfig = getStatusConfig(currentStatus);
  const StatusIcon = currentStatusConfig.icon;

  const components = [
    { key: 'website', label: pageT.components.website },
    { key: 'auth', label: pageT.components.auth },
    { key: 'billing', label: pageT.components.billing },
    { key: 'integrations', label: pageT.components.integrations },
    { key: 'dashboard', label: pageT.components.dashboard },
  ];

  // 直近5件まで表示
  const recentIncidents = incidents.slice(0, 5);

  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900" data-language={language}>
      <Header />

      {/* Page Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <PageNavigation />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {pageT.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {pageT.description}
          </p>
        </div>
      </div>

      {/* Current Status */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className={`${currentStatusConfig.bgColor} border ${currentStatusConfig.borderColor} rounded-xl p-8 md:p-12`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <StatusIcon className={`w-8 h-8 ${currentStatusConfig.textColor}`} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {currentStatusConfig.label}
              </h2>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4">
              {pageT.lastUpdated}: {formattedDate}
            </div>
          </div>
          
          {/* Notice */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              {pageT.notice}
            </p>
          </div>
        </div>
      </section>

      {/* Component Status */}
      <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {language === 'ja' ? '影響範囲' : 'Components'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {components.map((component) => {
              const status = componentStatus[component.key] || 'operational';
              const config = getStatusConfig(status);
              const Icon = config.icon;
              return (
                <div
                  key={component.key}
                  className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${config.textColor} flex-shrink-0`} />
                    <span className="font-medium text-gray-900">{component.label}</span>
                  </div>
                  <span className={`text-sm font-medium ${config.textColor}`}>
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {pageT.incidentHistory.title}
          </h2>
          {recentIncidents.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">{pageT.incidentHistory.noIncidents}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => {
                const statusConfig = getStatusConfig(
                  incident.status === 'resolved' ? 'operational' :
                  incident.status === 'investigating' ? 'major' : 'degraded'
                );
                const statusLabels = {
                  resolved: pageT.incidentHistory.resolved,
                  investigating: pageT.incidentHistory.investigating,
                  monitoring: pageT.incidentHistory.monitoring,
                };
                return (
                  <div
                    key={index}
                    className={`${statusConfig.bgColor} border ${statusConfig.borderColor} rounded-lg p-6`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{incident.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{incident.date}</span>
                        </div>
                      </div>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${statusConfig.textColor} ${statusConfig.bgColor} border ${statusConfig.borderColor}`}>
                        {statusLabels[incident.status]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{incident.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              {pageT.contactNote}
            </h2>
            <a
              href={`mailto:${pageT.contactEmail}`}
              className="inline-flex items-center gap-2 text-[#214BCE] hover:text-[#6C2BD9] font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{pageT.contactText}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Future Note */}
      <section className="py-6 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              {pageT.futureNote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
