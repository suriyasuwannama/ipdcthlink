/**
 * ข้อมูลลิงก์เริ่มต้นสำหรับ CTH IPD Link Portal (ห้องยาผู้ป่วยใน โรงพยาบาลจอมทอง)
 */
const DEFAULT_CATEGORIES = [
  { id: 'rx-system', name: 'ระบบงานจ่ายยา & คำสั่งยา', icon: 'Pill', color: 'emerald', description: 'ระบบสั่งยา ตรวจสอบคำสั่งยา และประวัติผู้ป่วยใน' },
  { id: 'clinical-sop', name: 'งานบริบาล & คู่มือการใช้ยา', icon: 'Stethoscope', color: 'teal', description: 'Drug Interaction, High Alert Drugs, ADR, Med Rec และแนวทางปฏิบัติ' },
  { id: 'inventory-stock', name: 'ระบบคลังยา & สต๊อก IPD', icon: 'Boxes', color: 'blue', description: 'การเบิกจ่ายยา ยายืม เบิกคลังใหญ่ และตรวจสอบสต๊อกยา' },
  { id: 'reports-stat', name: 'รายงาน & สถิติภาระงาน', icon: 'BarChart3', color: 'indigo', description: 'บันทึกสถิติประจำวัน แบบฟอร์มออนไลน์ และ Dashboard สรุปผล' },
  { id: 'external-links', name: 'ลิงก์ภายนอก & ติดต่อสื่อสาร', icon: 'Globe', color: 'purple', description: 'เว็บบอร์ด สื่อสารตึกผู้ป่วย เว็บกรม และเอกสารสำคัญ' }
];

const DEFAULT_LINKS = [
  {
    id: 'link-1',
    title: 'ระบบสั่งยาผู้ป่วยใน HOMC IPD',
    url: 'http://192.168.1.100/homc-ipd',
    categoryId: 'rx-system',
    description: 'เช็คประวัติการสั่งยา ตรวจสอบการจ่ายยา และพิมพ์ฉลากยา IPD',
    iconType: 'preset',
    iconValue: 'Hospital',
    badge: 'HOMC',
    color: 'emerald',
    isPinned: true,
    target: '_blank'
  },
  {
    id: 'link-2',
    title: 'E-IPD Medication Order',
    url: 'http://192.168.1.105/e-ipd',
    categoryId: 'rx-system',
    description: 'ระบบรับและยืนยันคำสั่งยาด่วน/ยาประจำวัน ตึกผู้ป่วยใน',
    iconType: 'preset',
    iconValue: 'FileText',
    badge: 'E-IPD',
    color: 'emerald',
    isPinned: true,
    target: '_blank'
  },
  {
    id: 'link-3',
    title: 'Medication Reconciliation (Med Rec IPD)',
    url: 'http://192.168.1.110/medrec',
    categoryId: 'clinical-sop',
    description: 'ระบบประวัติการใช้ยาเดิมก่อนนอนโรงพยาบาล และเปรียบเทียบคำสั่งยา',
    iconType: 'preset',
    iconValue: 'ClipboardCheck',
    badge: 'MedRec',
    color: 'teal',
    isPinned: true,
    target: '_blank'
  },
  {
    id: 'link-4',
    title: 'Drug Interaction & MIMS Check',
    url: 'https://www.mims.com/thailand',
    categoryId: 'clinical-sop',
    description: 'ตรวจสอบอันตรกิริยาระหว่างยา ขนาดยา และข้อห้ามใช้',
    iconType: 'preset',
    iconValue: 'ShieldAlert',
    badge: 'Drug Info',
    color: 'teal',
    isPinned: true,
    target: '_blank'
  },
  {
    id: 'link-5',
    title: 'บัญชียาโรงพยาบาลจอมทอง (CTH Formulary)',
    url: 'https://docs.google.com/spreadsheets',
    categoryId: 'clinical-sop',
    description: 'ค้นหารายการยา บัญชียาโรงพยาบาล ข้อบ่งใช้ และเงื่อนไขการใช้ยา',
    iconType: 'preset',
    iconValue: 'BookOpen',
    badge: 'Formulary',
    color: 'teal',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-6',
    title: 'แนวทางยากลุ่มเสี่ยงสูง (High Alert Drugs - HAD)',
    url: 'https://chomthonghospital.go.th/had-manual',
    categoryId: 'clinical-sop',
    description: 'คู่มือการบริหารยากลุ่มเสี่ยงสูง การผสมยา และข้อควรระวัง IPD',
    iconType: 'preset',
    iconValue: 'AlertTriangle',
    badge: 'SOP/HAD',
    color: 'teal',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-7',
    title: 'ระบบสต๊อกห้องยา IPD & คลังยา',
    url: 'http://192.168.1.120/pharmacy-stock',
    categoryId: 'inventory-stock',
    description: 'ตรวจสอบคงคลังยาเบิกจ่าย ตัดสต๊อก และระบบแจ้งเตือนยาใกล้หมด',
    iconType: 'preset',
    iconValue: 'Boxes',
    badge: 'Stock',
    color: 'blue',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-8',
    title: 'ระบบเบิกยายืม & โอนยาระหว่างหอผู้ป่วย',
    url: 'http://192.168.1.125/borrow-drug',
    categoryId: 'inventory-stock',
    description: 'บันทึกการคืนยายืม และเบิกยาสำรองประจำตึกผู้ป่วยใน',
    iconType: 'preset',
    iconValue: 'Archive',
    badge: 'Transfer',
    color: 'blue',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-9',
    title: 'แบบบันทึกสถิติภาระงานประจำวัน IPD',
    url: 'https://docs.google.com/forms',
    categoryId: 'reports-stat',
    description: 'บันทึกจำนวนใบสั่งยา จำนวนรายการ และภาระงานประจำเวร',
    iconType: 'preset',
    iconValue: 'BarChart3',
    badge: 'Daily Stat',
    color: 'indigo',
    isPinned: true,
    target: '_blank'
  },
  {
    id: 'link-10',
    title: 'ระบบรายงานความเสี่ยง CTH Incident Report',
    url: 'http://192.168.1.130/incident',
    categoryId: 'reports-stat',
    description: 'รายงานความคลาดเคลื่อนทางยา (MDE/ADR) และเหตุการณ์เกือบเกิดความเสี่ยง',
    iconType: 'preset',
    iconValue: 'HeartPulse',
    badge: 'Risk/ADR',
    color: 'indigo',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-11',
    title: 'ติดต่อหอผู้ป่วยใน (Phone Directory)',
    url: 'http://192.168.1.5/phone-directory',
    categoryId: 'external-links',
    description: 'เบอร์โทรศัพท์ภายใน เบอร์ต่อวอร์ด และช่องทางติดต่อตึกผู้ป่วย',
    iconType: 'preset',
    iconValue: 'MessageSquare',
    badge: 'Contact',
    color: 'purple',
    isPinned: false,
    target: '_blank'
  },
  {
    id: 'link-12',
    title: 'เว็บไซต์โรงพยาบาลจอมทอง',
    url: 'https://chomthonghospital.go.th',
    categoryId: 'external-links',
    description: 'เว็บบอร์ด ข่าวสาร ประกาศ และข้อมูลบุคลากร รพ.จอมทอง',
    iconType: 'preset',
    iconValue: 'Globe',
    badge: 'CTH Web',
    color: 'purple',
    isPinned: false,
    target: '_blank'
  }
];
