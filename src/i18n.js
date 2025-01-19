import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Take Control of Your Finances",
      description: "Start budgeting today and achieve your financial goals with ease.",
      cta: "Start Budgeting Now",
      income: "Income",
      expenses: "Expenses",
      add: "Add",
    },
  },
  es: {
    translation: {
      welcome: "Toma el Control de tus Finanzas",
      description: "Empieza a presupuestar hoy y alcanza tus metas financieras con facilidad.",
      cta: "Comienza a Presupuestar Ahora",
      income: "Ingresos",
      expenses: "Gastos",
      add: "Agregar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;