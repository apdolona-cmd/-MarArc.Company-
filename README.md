# 🏢 MarArc.Company - نظام إدارة شركة شاملة

![MarArc Company](https://img.shields.io/badge/MarArc-Company%20Management-blue)
![React](https://img.shields.io/badge/React-19.2.6-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-FF6B35)

نظام إدارة شركات شامل مصمم خصيصاً لشركات الرخام والمقاولات، يوفر 8 أنظمة متقدمة مع التحكم الكامل في الصلاحيات.

---

## ✨ الميزات الرئيسية

### 🎯 8 أنظمة رئيسية متكاملة:

1. **📄 نظام الفواتير والعروض** - إدارة كاملة للفواتير والعروض التسعيرية
2. **🏗️ نظام إدارة المشاريع** - تتبع المشاريع والميزانيات والفرق
3. **⏰ نظام الحضور والغياب** - تسجيل يومي للحضور مع تقارير
4. **🏖️ نظام إدارة الإجازات** - طلبات إجازات مع سير عمل الموافقة
5. **📦 نظام المخزون** - إدارة مخزون متقدمة مع تنبيهات النقص
6. **📊 نظام التقارير** - تقارير متقدمة وتحليل بيانات
7. **📬 نظام الاتصالات** - بريد إلكتروني و WhatsApp و SMS
8. **📝 نظام العقود والمستندات** - إدارة العقود وتتبع التجديد

### 🔐 نظام صلاحيات متطور:
- **10 رتب وظيفية** محددة مسبقاً
- صلاحيات مخصصة لكل رتبة
- تحكم كامل على مستوى الصفحات والإجراءات
- حماية البيانات الحساسة

### 🌍 الدعم الكامل للعربية:
- واجهة RTL (من اليمين إلى اليسار)
- جميع النصوص بالعربية
- معايير محلية

### 🎨 تصميم احترافي:
- ثيم فاخر (أزرق داكن + ذهبي)
- واجهة سهلة الاستخدام
- استجابة كاملة (Responsive)
- رموز ومؤشرات بصرية

---

## 🚀 البدء السريع

### المتطلبات:
- Node.js 18+
- npm أو yarn
- حساب Firebase

### التثبيت:

```bash
# استنساخ المشروع
git clone https://github.com/apdolona-cmd/-MarArc.Company-.git
cd -MarArc.Company-

# تثبيت المكتبات
npm install

# بدء خادم التطوير
npm run dev

# الدخول على المشروع
# افتح http://localhost:5173
# بيانات الدخول: admin / 01147497465
```

### البناء للإنتاج:

```bash
npm run build
# سيتم إنشاء ملف index.html مفرد في مجلد dist/
```

---

## 📁 هيكل المشروع

```
src/
├── components/           # المكونات الأساسية
│   ├── Dashboard.tsx        # لوحة التحكم
│   ├── Invoices.tsx         # نظام الفواتير
│   ├── Projects.tsx         # نظام المشاريع
│   ├── Attendance.tsx       # الحضور والغياب
│   ├── LeaveManagement.tsx  # إدارة الإجازات
│   ├── Inventory.tsx        # المخزون
│   ├── Reports.tsx          # التقارير
│   ├── Communications.tsx   # الاتصالات
│   ├── Contracts.tsx        # العقود
│   ├── PerformanceReview.tsx # التقييم
│   ├── Employees.tsx        # الموظفين
│   ├── Clients.tsx          # العملاء
│   └── ... (مكونات أخرى)
├── store/
│   └── useStore.ts      # Zustand Store - إدارة الحالة الكاملة
├── hooks/
│   └── usePermissions.ts # نظام الصلاحيات
├── firebase/
│   └── config.ts        # إعدادات Firebase
└── utils/
    └── cn.ts            # دوال مساعدة

Documentation/
├── ROLES_DISTRIBUTION.md # توزيع الأدوار (10 رتب)
├── PERMISSIONS_USAGE.md  # أمثلة وشرح الصلاحيات
├── TESTING_GUIDE.md     # دليل الاختبار
└── SYSTEM_STATUS.md     # حالة النظام
```

---

## 👥 الرتب الوظيفية (10 رتب)

| الرتبة | الصلاحيات | الأنظمة المتاحة |
|--------|---------|---|
| 🔴 **مدير عام** | كاملة | جميع الأنظمة (21 صفحة) |
| 🔵 **مدير قسم** | إدارة القسم | 13 صفحة |
| 🟡 **مشرف** | إدارة يومية | 11 صفحة |
| 🟢 **مهندس أول** | قيادة مشاريع | 8 صفحات |
| 🟠 **مهندس** | تنفيذ | 6 صفحات |
| 🔴 **فني أول** | إدارة مخزون | 7 صفحات |
| 🔵 **فني** | تنفيذ فني | 5 صفحات |
| 💰 **محاسب** | إدارة مالية | 11 صفحة |
| 👔 **موظف استقبال** | خدمة عملاء | 6 صفحات |
| 👷 **عامل** | حضور فقط | 4 صفحات |

---

## 🛠️ التكنولوجيات المستخدمة

### Frontend:
- **React 19.2.6** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.17** - Styling
- **Lucide React** - Icons
- **Zustand 5.0.14** - State management

### Backend:
- **Firebase Realtime Database** - Real-time data sync
- **Firebase Authentication** - User authentication

### Build & Tools:
- **Vite 7.3.2** - Build tool
- **Vite Plugin Single File** - Single-file output for production

---

## 📚 الوثائق

جميع الملفات المهمة موجودة في جذر المشروع:

1. **[ROLES_DISTRIBUTION.md](./ROLES_DISTRIBUTION.md)** - نظام الأدوار الكامل
2. **[PERMISSIONS_USAGE.md](./PERMISSIONS_USAGE.md)** - أمثلة عملية للصلاحيات
3. **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - دليل الاختبار الشامل
4. **[SYSTEM_STATUS.md](./SYSTEM_STATUS.md)** - حالة المشروع

---

## 🔐 الأمان

- ✅ تحكم في الوصول على مستوى الصفحات
- ✅ تحكم في الإجراءات (CRUD operations)
- ✅ حماية البيانات الحساسة
- ✅ تتبع العمليات (Activity Logging)
- ✅ Firebase authentication

---

## 🎯 حالات الاستخدام

### للشركات:
- إدارة المشاريع والعملاء
- متابعة الموظفين والرواتب
- تتبع المخزون والمواد
- إدارة العقود والفواتير

### للفريق الإداري:
- إدارة الموارد البشرية
- متابعة الحضور والإجازات
- تقييم الأداء
- إرسال الإشعارات والاتصالات

### للإدارة العليا:
- التقارير المتقدمة والتحليلات
- مراقبة الأداء الكلي
- اتخاذ القرارات بناءً على البيانات

---

## 📊 الإحصائيات

- **8** أنظمة رئيسية
- **10** رتب وظيفية
- **23** صلاحية مختلفة
- **21** صفحة للمدير العام
- **2000+** سطر كود للمكونات الجديدة
- **500+** سطر كود للنظام الأساسي

---

## 🐛 الإبلاغ عن الأخطاء

وجدت مشكلة؟ [فتح issue](https://github.com/apdolona-cmd/-MarArc.Company-/issues)

---

## 💡 المساهمة

المساهمات مرحب بها! يرجى:
1. Fork المشروع
2. Create فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE)

---

## 📞 التواصل

- **البريد الإلكتروني:** apdolona@gmail.com
- **GitHub:** [@apdolona-cmd](https://github.com/apdolona-cmd)
- **Repository:** [MarArc.Company](https://github.com/apdolona-cmd/-MarArc.Company-)

---

## 🎉 الشكر والتقدير

شكراً لاستخدام نظام إدارة MarArc Company!

---

**تم الإنشاء:** June 12, 2026
**الإصدار:** 1.0.0
**الحالة:** ✅ جاهز للإنتاج

---

## 📌 ملاحظات مهمة

- تأكد من إضافة بيانات اعتماد Firebase الصحيحة في `src/firebase/config.ts`
- استخدم `.env` لتخزين المتغيرات الحساسة (اختياري)
- اختبر النظام بحسابات مختلفة قبل النشر
- راجع [TESTING_GUIDE.md](./TESTING_GUIDE.md) للاختبار الشامل

---

**دعم النظام متاح على مدار الساعة! 🚀**
