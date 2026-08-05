import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/schema';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  // Dynamic contents for the terms and refund policy based on current selected language
  const getContent = () => {
    switch (lang) {
      case 'fr':
        return {
          title: 'Politique de Confidentialité & Conditions',
          subtitle: 'Conditions de réservation, politique de remboursement et confidentialité',
          intro: 'Chez Morocco Travelland, nous accordons une grande importance à la transparence de nos services. Veuillez lire nos conditions générales de réservation, nos politiques d\'annulation ainsi que les règles de confidentialité.',
          refundTitle: '1. Conditions d\'Annulation & Politique de Remboursement',
          refundDesc: 'Afin de garantir les réservations des guides, des transports privés et des hôtels/riads de luxe, nous appliquons une politique de remboursement échelonnée. Plus la date de votre départ est proche, plus les frais d\'annulation retenus sont élevés :',
          colPeriod: 'Période d\'Annulation',
          colRefund: 'Taux de Remboursement',
          colFee: 'Frais d\'Annulation',
          row1: ['Plus de 30 jours avant le départ', '100% Remboursé', '0% de frais'],
          row2: ['15 à 30 jours avant le départ', '75% Remboursé', '25% de frais'],
          row3: ['7 à 14 jours avant le départ', '50% Remboursé', '50% de frais'],
          row4: ['3 à 6 jours avant le départ', '25% Remboursé', '75% de frais'],
          row5: ['Moins de 48 heures / Non-présentation', 'Aucun remboursement', '100% de frais'],
          refundNote: 'Note importante : Les frais de transaction bancaire ou les dépôts non remboursables versés à certains prestataires tiers (tels que les vols intérieurs ou événements spéciaux) peuvent être exclus du remboursement.',
          termsTitle: '2. Conditions Générales de Voyage',
          termsItems: [
            'Réservation et Acompte : Pour confirmer votre circuit privé, un acompte est requis. Le solde restant doit être réglé au début du circuit.',
            'Modifications d\'Itinéraire : Morocco Travelland se réserve le droit de modifier légèrement l\'itinéraire en cas de force majeure (conditions météo dans le Sahara, routes coupées dans l\'Atlas, etc.) afin de garantir votre sécurité.',
            'Assurance Voyage : Nous conseillons vivement à tous nos clients de souscrire une assurance voyage complète couvrant les annulations et l\'assistance médicale.'
          ],
          privacyTitle: '3. Politique de Confidentialité des Données',
          privacyItems: [
            'Collecte d\'informations : Nous collectons uniquement les informations nécessaires à l\'organisation de votre voyage (nom, email, téléphone, détails de vol).',
            'Non-partage des données : Vos informations personnelles ne sont jamais vendues ou partagées avec des tiers à des fins commerciales. Elles sont transmises uniquement aux prestataires logistiques impliqués dans votre circuit (hôtels, chauffeurs).',
            'Sécurité : Nous mettons en œuvre des mesures de sécurité pour protéger vos données.'
          ]
        };
      case 'es':
        return {
          title: 'Política de Privacidad y Términos',
          subtitle: 'Condiciones de reserva, política de reembolso y confidencialidad',
          intro: 'En Morocco Travelland valoramos la transparencia. Lea atentamente nuestras condiciones de reserva, políticas de cancelación y normas de protección de datos.',
          refundTitle: '1. Condiciones de Cancelación y Política de Reembolso',
          refundDesc: 'Para asegurar las reservas de guías, transporte privado y hoteles/riads, aplicamos una política de reembolso escalonada. A medida que se acerca la fecha de salida, la tarifa de cancelación aumenta:',
          colPeriod: 'Período de Cancelación',
          colRefund: 'Porcentaje de Reembolso',
          colFee: 'Cargos por Cancelación',
          row1: ['Más de 30 días antes de la salida', '100% Reembolsado', '0% de cargos'],
          row2: ['15 a 30 días antes de la salida', '75% Reembolsado', '25% de cargos'],
          row3: ['7 a 14 días antes de la salida', '50% Reembolsado', '50% de cargos'],
          row4: ['3 a 6 días antes de la salida', '25% Reembolsado', '75% de cargos'],
          row5: ['Menos de 48 horas / No presentado', 'Sin reembolso', '100% de cargos'],
          refundNote: 'Nota importante: Los gastos de transacción bancaria o los depósitos no reembolsables realizados a terceros proveedores de servicios pueden estar excluidos del reembolso.',
          termsTitle: '2. Condiciones Generales del Viaje',
          termsItems: [
            'Reserva y Depósito: Para confirmar su viaje privado se requiere un depósito inicial. El pago restante se liquidará al inicio del viaje.',
            'Modificación de Itinerarios: Morocco Travelland se reserva el derecho de ajustar rutas por fuerza mayor (clima en el Sáhara, carreteras bloqueadas en el Atlas, etc.) para garantizar su seguridad.',
            'Seguro de Viaje: Se recomienda encarecidamente contar con un seguro de viaje que cubra cancelaciones y gastos médicos.'
          ],
          privacyTitle: '3. Protección de Datos y Privacidad',
          privacyItems: [
            'Recopilación de información: Solo recopilamos los datos esenciales para la planificación del viaje (nombre, email, teléfono, detalles del vuelo).',
            'Confidencialidad: Su información no será compartida con terceros ajenos al servicio logístico directo (hoteles y transportistas).',
            'Seguridad: Implementamos medidas tecnológicas avanzadas para resguardar su información.'
          ]
        };
      case 'it':
        return {
          title: 'Politica sulla Privacy e Termini',
          subtitle: 'Condizioni di prenotazione, politica di rimborso e riservatezza',
          intro: 'In Morocco Travelland diamo priorità alla trasparenza. Si prega di leggere attentamente le nostre condizioni generali, le regole di rimborso e l\'informativa sulla privacy.',
          refundTitle: '1. Termini di Cancellazione e Politica di Rimborso',
          refundDesc: 'Per garantire la prenotazione di guide, mezzi di trasporto privati e riad/hotel di lusso, applichiamo una politica di rimborso scaglionata. Più ci si avvicina alla partenza, maggiore sarà la penale trattenuta:',
          colPeriod: 'Periodo di Cancellazione',
          colRefund: 'Percentuale di Rimborso',
          colFee: 'Penale di Cancellazione',
          row1: ['Più di 30 giorni prima della partenza', '100% Rimborso', '0% penale'],
          row2: ['Da 15 a 30 giorni prima della partenza', '75% Rimborso', '25% penale'],
          row3: ['Da 7 a 14 giorni prima della partenza', '50% Rimborso', '50% penale'],
          row4: ['Da 3 a 6 giorni prima della partenza', '25% Rimborso', '75% penale'],
          row5: ['Meno di 48 ore / Mancata presentazione', 'Nessun rimborso', '100% penale'],
          refundNote: 'Nota importante: I costi per le transazioni bancarie o i depositi non rimborsabili già versati a terzi (es. voli interni) non sono inclusi nella quota rimborsabile.',
          termsTitle: '2. Condizioni Generali di Viaggio',
          termsItems: [
            'Prenotazione e Deposito: Per confermare il tour è richiesto un deposito. Il saldo rimanente deve essere corrisposto all\'inizio del tour.',
            'Modifiche del Percorso: Ci riserviamo il diritto di modificare gli itinerari in caso di forza maggiore (maltempo nel Sahara, strade interrotte sull\'Atlante) per la vostra incolumità.',
            'Assicurazione: Si raccomanda caldamente di viaggiare muniti di una polizza assicurativa completa.'
          ],
          privacyTitle: '3. Informativa sulla Privacy dei Dati',
          privacyItems: [
            'Raccolta Dati: Raccogliamo solo le informazioni strettamente necessarie all\'organizzazione del tour (nome, telefono, email, dettagli dei voli).',
            'Trattamento Dati: I dati non vengono ceduti a scopi pubblicitari, ma condivisi solo con i fornitori logistici (hotel, autisti).',
            'Sicurezza: Adottiamo elevati standard di sicurezza informatica per la tutela della privacy.'
          ]
        };
      case 'zh':
        return {
          title: '隐私政策与预订条款',
          subtitle: '包含预订条件、分阶段退款政策及数据隐私规范',
          intro: 'Morocco Travelland 始终致力于提供诚实透明的旅行服务。请在确认行程前仔细阅读我们的预订条款、取消扣费比例以及个人信息保护规则。',
          refundTitle: '1. 取消与退款政策条款',
          refundDesc: '为了确保本地私人向导、专属越野车辆以及奢华沙漠营地/高端酒店的提前预订，我们实行分阶段的退款政策。取消申请提交的时间距离出发日期越近，扣除的取消手续费比例越高：',
          colPeriod: '取消申请提交时间',
          colRefund: '退款金额比例',
          colFee: '取消手续费用',
          row1: ['出发前30天以上', '100% 退款', '免收手续费'],
          row2: ['出发前15至30天', '75% 退款', '扣除25%费用'],
          row3: ['出发前7至14天', '50% 退款', '扣除50%费用'],
          row4: ['出发前3至6天', '25% 退款', '扣除75%费用'],
          row5: ['出发前48小时内 / 未按时抵达', '不予退款', '扣除100%费用'],
          refundNote: '特别提示：银行跨境汇款手续费，或已向第三方服务商（如摩洛哥国内机票、特定景区门票）支付且不可退还的预订定金，不属于退款范围。',
          termsTitle: '2. 私人定制旅行通用条款',
          termsItems: [
            '预订与定金：在确认您的私人路线后，需支付一定比例的定金以锁定服务。余款需在旅行开始第一天以现金或商定方式结算。',
            '路线微调权利：如遭遇不可抗力（如撒哈拉沙漠极端沙尘暴、阿特拉斯山脉积雪封路等），Morocco Travelland 保留微调行程路线的权利，以确保旅客安全。',
            '旅游保险建议：我们强烈建议所有旅客在出发前购买涵盖国际旅行意外医疗及行程取消险的全面旅游保险。'
          ],
          privacyTitle: '3. 旅客个人数据隐私保护',
          privacyItems: [
            '数据收集范围：我们仅收集用于安排机票、酒店入住、沙漠许可所需的必要信息（如姓名、护照信息、联系电话、航班号）。',
            '数据安全共享：我们绝不会将您的个人隐私转售或用于商业推广，个人信息仅向提供您行程服务的直属酒店及司机披露。',
            '信息安全防护：我们采用严格的本地加密机制，确保存档数据不被未授权访问。'
          ]
        };
      default:
        return {
          title: 'Privacy Policy & Booking Terms',
          subtitle: 'Terms of service, refund policy, and information privacy',
          intro: 'At Morocco Travelland, we value transparency and trust. Please read our general booking conditions, refund policies, and privacy terms carefully.',
          refundTitle: '1. Cancellation & Refund Policy',
          refundDesc: 'To secure bookings for guides, private transportation, and boutique riads/hotels, we apply a tiered refund schedule. The closer the cancellation date is to the tour departure, the higher the cancellation fee:',
          colPeriod: 'Cancellation Timeframe',
          colRefund: 'Refund Percentage',
          colFee: 'Cancellation Fee',
          row1: ['More than 30 days prior to departure', '100% Refund', '0% Fee'],
          row2: ['15 to 30 days prior to departure', '75% Refund', '25% Fee'],
          row3: ['7 to 14 days prior to departure', '50% Refund', '50% Fee'],
          row4: ['3 to 6 days prior to departure', '25% Refund', '75% Fee'],
          row5: ['Less than 48 hours / No-show', '0% Refund (No Refund)', '100% Fee'],
          refundNote: 'Important note: International bank transfer fees or non-refundable payments made to third-party providers (such as domestic flights or event tickets) are excluded from refunds.',
          termsTitle: '2. General Booking Conditions',
          termsItems: [
            'Booking Deposit: A deposit is required to secure your private tour. The remaining balance must be settled at the beginning of your trip.',
            'Itinerary Alterations: Morocco Travelland reserves the right to adjust routes due to force majeure events (Sahara Desert sandstorms, Atlas Mountains snow blocking, etc.) to ensure passenger safety.',
            'Travel Insurance: We highly recommend that all clients purchase comprehensive travel insurance covering tour cancellation, medical emergencies, and luggage loss.'
          ],
          privacyTitle: '3. Privacy & Data Protection Policy',
          privacyItems: [
            'Information Collected: We collect only the essential details required to design and operate your tour (name, email, phone, flight details).',
            'Data Protection: We never sell or share your personal details with third parties for marketing purposes. Data is shared exclusively with providers involved in your tour logistics (hotels, drivers).',
            'Information Security: We use industry-standard security measures to safeguard your personal records.'
          ]
        };
    }
  };

  const content = getContent();

  return (
    <>
      <SEOHead
        title={`${content.title} | Morocco Travelland`}
        description={content.intro}
        canonicalPath="/privacy"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: content.title, url: '/privacy' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fda35?w=1920&q=75"
          alt="Morocco Travelland Booking terms and privacy policy"
          className="page-hero__bg"
          width="1920" height="400"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{content.title}</h1>
          <p className="page-hero__subtitle">{content.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <main className="section policy-content-sec">
        <div className="container container--narrow">
          <div className="policy-block">
            <p className="policy-intro">{content.intro}</p>
            <div className="divider text-left" style={{ margin: 'var(--space-6) 0' }}></div>

            {/* Section 1: Refund Policy Table */}
            <h2 className="policy-subtitle">{content.refundTitle}</h2>
            <p className="policy-desc">{content.refundDesc}</p>

            <div className="policy-table-wrapper">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>{content.colPeriod}</th>
                    <th>{content.colRefund}</th>
                    <th>{content.colFee}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>{content.row1[0]}</strong></td>
                    <td className="text-success font-semibold">{content.row1[1]}</td>
                    <td>{content.row1[2]}</td>
                  </tr>
                  <tr>
                    <td><strong>{content.row2[0]}</strong></td>
                    <td className="text-accent font-semibold">{content.row2[1]}</td>
                    <td className="text-error font-semibold">{content.row2[2]}</td>
                  </tr>
                  <tr>
                    <td><strong>{content.row3[0]}</strong></td>
                    <td className="text-warning font-semibold">{content.row3[1]}</td>
                    <td className="text-error font-semibold">{content.row3[2]}</td>
                  </tr>
                  <tr>
                    <td><strong>{content.row4[0]}</strong></td>
                    <td className="text-warning font-semibold">{content.row4[1]}</td>
                    <td className="text-error font-semibold">{content.row4[2]}</td>
                  </tr>
                  <tr>
                    <td><strong>{content.row5[0]}</strong></td>
                    <td className="text-error font-semibold">{content.row5[1]}</td>
                    <td className="text-error font-extrabold">{content.row5[2]}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout-info" style={{ marginTop: 'var(--space-4)' }}>
              {content.refundNote}
            </div>

            <div className="divider text-left" style={{ margin: 'var(--space-8) 0' }}></div>

            {/* Section 2: Booking Conditions */}
            <h2 className="policy-subtitle">{content.termsTitle}</h2>
            <ul className="policy-list">
              {content.termsItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="divider text-left" style={{ margin: 'var(--space-8) 0' }}></div>

            {/* Section 3: Privacy */}
            <h2 className="policy-subtitle">{content.privacyTitle}</h2>
            <ul className="policy-list">
              {content.privacyItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
