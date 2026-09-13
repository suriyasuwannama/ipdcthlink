/**
 * ข้อมูลลิงก์เริ่มต้นสำหรับ CTH IPD Link Portal (ห้องยาผู้ป่วยใน โรงพยาบาลจอมทอง)
 */
const DEFAULT_CATEGORIES = [
    {
      "id": "rx-system",
      "name": "ระบบงานจ่ายยา & คำสั่งยา",
      "icon": "Pill",
      "color": "emerald",
      "description": "ระบบสั่งยา ตรวจสอบคำสั่งยา และประวัติผู้ป่วยใน"
    },
    {
      "id": "clinical-sop",
      "name": "งานบริบาล & คู่มือการใช้ยา",
      "icon": "Stethoscope",
      "color": "teal",
      "description": "Drug Interaction, High Alert Drugs, ADR, Med Rec และแนวทางปฏิบัติ"
    },
    {
      "id": "inventory-stock",
      "name": "ระบบคลังยา & สต๊อก IPD",
      "icon": "Boxes",
      "color": "blue",
      "description": "การเบิกจ่ายยา ยายืม เบิกคลังใหญ่ และตรวจสอบสต๊อกยา"
    },
    {
      "id": "reports-stat",
      "name": "รายงาน & สถิติภาระงาน",
      "icon": "BarChart3",
      "color": "indigo",
      "description": "บันทึกสถิติประจำวัน แบบฟอร์มออนไลน์ และ Dashboard สรุปผล"
    },
    {
      "id": "external-links",
      "name": "ลิงก์ภายนอก & ติดต่อสื่อสาร",
      "icon": "Globe",
      "color": "purple",
      "description": "เว็บบอร์ด สื่อสารตึกผู้ป่วย เว็บกรม และเอกสารสำคัญ"
    }
  ],
  "links": [
    {
      "id": "link-1789302742203",
      "title": "LINE OA",
      "url": "https://account.line.biz/login?redirectUri=https%3A%2F%2Faccount.line.biz%2Foauth2%2Fcallback%3Fclient_id%3D10%26code_challenge%3DYo4BiL5PQ6XZhDba0OpUA6rQzqQeyvBq9ThukL4eRyg%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fmanager.line.biz%252Fapi%252Foauth2%252FbizId%252Fcallback%26response_type%3Dcode%26state%3DMno19KDd8yGx9jjExgF204xkinLs1RIt",
      "categoryId": "rx-system",
      "badge": "LINE OA",
      "description": "",
      "color": "emerald",
      "target": "_blank",
      "isPinned": true,
      "iconType": "file",
      "iconValue": "data:image/png;base64,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"
    },
    {
      "id": "link-1789302349204",
      "title": "ใบรับรองเงินเดือน",
      "url": "https://statement.chiangmaihealth.go.th/web/index.php?r=site%2Flogin",
      "categoryId": "external-links",
      "badge": "SLIP",
      "description": "",
      "color": "emerald",
      "target": "_blank",
      "isPinned": false,
      "iconType": "preset",
      "iconValue": "BookOpen"
    },
    {
      "id": "link-1",
      "title": "ระบบคิวผู้ป่วย",
      "url": "https://cth-rx-queue.web.app/",
      "categoryId": "rx-system",
      "description": "เช็คประวัติการสั่งยา ตรวจสอบการจ่ายยา และพิมพ์ฉลากยา IPD",
      "iconType": "preset",
      "iconValue": "Hospital",
      "badge": "QUEUE",
      "color": "purple",
      "isPinned": true,
      "target": "_blank"
    },
    {
      "id": "link-2",
      "title": "ลงเวลาวอร์ด",
      "url": "https://docs.google.com/spreadsheets/d/1SJK581WXZqU2gjvOkyQq8YAhhDj0xmLJzloIh3m8qkI/edit?gid=1008096564#gid=1008096564",
      "categoryId": "rx-system",
      "description": "ระบบรับและยืนยันคำสั่งยาด่วน/ยาประจำวัน ตึกผู้ป่วยใน",
      "iconType": "preset",
      "iconValue": "FileText",
      "badge": "Time Sign",
      "color": "emerald",
      "isPinned": true,
      "target": "_blank"
    },
    {
      "id": "link-3",
      "title": "ํY-site compatibility",
      "url": "https://drive.google.com/file/d/1A5GIFGgA-1muWDl-qcYZJ4xJvTtytFFd/view?usp=sharing",
      "categoryId": "clinical-sop",
      "description": "ระบบประวัติการใช้ยาเดิมก่อนนอนโรงพยาบาล และเปรียบเทียบคำสั่งยา",
      "iconType": "preset",
      "iconValue": "ClipboardCheck",
      "badge": "Y-site",
      "color": "teal",
      "isPinned": false,
      "target": "_blank"
    },
    {
      "id": "link-4",
      "title": "Drug Interaction & MIMS Check",
      "url": "https://www.mims.com/thailand",
      "categoryId": "clinical-sop",
      "description": "ตรวจสอบอันตรกิริยาระหว่างยา ขนาดยา และข้อห้ามใช้",
      "iconType": "preset",
      "iconValue": "ShieldAlert",
      "badge": "Drug Info",
      "color": "teal",
      "isPinned": false,
      "target": "_blank"
    },
    {
      "id": "link-5",
      "title": "บัญชียาโรงพยาบาลจอมทอง (CTH Formulary)",
      "url": "https://docs.google.com/spreadsheets",
      "categoryId": "clinical-sop",
      "description": "ค้นหารายการยา บัญชียาโรงพยาบาล ข้อบ่งใช้ และเงื่อนไขการใช้ยา",
      "iconType": "preset",
      "iconValue": "BookOpen",
      "badge": "Formulary",
      "color": "teal",
      "isPinned": false,
      "target": "_blank"
    },
    {
      "id": "link-7",
      "title": "คลังยาผู้ป่วยใน",
      "url": "https://cth-rx-inventory.web.app/",
      "categoryId": "inventory-stock",
      "description": "ตรวจสอบคงคลังยาเบิกจ่าย ตัดสต๊อก และระบบแจ้งเตือนยาใกล้หมด",
      "iconType": "preset",
      "iconValue": "Boxes",
      "badge": "Stock",
      "color": "blue",
      "isPinned": true,
      "target": "_blank"
    },
    {
      "id": "link-9",
      "title": "จำนวนผู้ป่วยปี 2569",
      "url": "https://docs.google.com/spreadsheets/d/1el4PsjxgqWMKvaahVwahXqmVGvFT3GeTFasUuFos52s/edit?usp=share_link",
      "categoryId": "reports-stat",
      "description": "บันทึกจำนวนใบสั่งยา จำนวนรายการ และภาระงานประจำเวร",
      "iconType": "preset",
      "iconValue": "Archive",
      "badge": "Daily Stat",
      "color": "indigo",
      "isPinned": true,
      "target": "_blank"
    },
    {
      "id": "link-10",
      "title": "ลงจำนวนเคมีบำบัด",
      "url": "https://docs.google.com/spreadsheets/d/1kFWnEEY_fa-Ho3oQuuauVvO8gE6j_xMsrb0GNl0XNzk/edit?usp=sharing",
      "categoryId": "reports-stat",
      "description": "",
      "iconType": "preset",
      "iconValue": "HeartPulse",
      "badge": "P4P Chemo",
      "color": "indigo",
      "isPinned": false,
      "target": "_blank"
    },
    {
      "id": "link-11",
      "title": "ระบบลา",
      "url": "https://smartoffice.appcth.com/smo/login?ReturnUrl=%2Fsmo",
      "categoryId": "external-links",
      "description": "เบอร์โทรศัพท์ภายใน เบอร์ต่อวอร์ด และช่องทางติดต่อตึกผู้ป่วย",
      "iconType": "preset",
      "iconValue": "Globe",
      "badge": "SMART OFFICE",
      "color": "emerald",
      "isPinned": false,
      "target": "_blank"
    },
    {
      "id": "link-12",
      "title": "เว็บไซต์โรงพยาบาลจอมทอง",
      "url": "https://chomthonghospital.go.th",
      "categoryId": "external-links",
      "description": "เว็บบอร์ด ข่าวสาร ประกาศ และข้อมูลบุคลากร รพ.จอมทอง",
      "iconType": "preset",
      "iconValue": "Globe",
      "badge": "CTH Web",
      "color": "purple",
      "isPinned": false,
      "target": "_blank"
    }
  ];
