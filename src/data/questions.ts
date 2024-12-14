import { Question } from '../types/quiz';

export const questions: { [key: string]: Question[] } = {
  uk: [
    {
      id: 1,
      type: 'single',
      question: "Який у вас бюджет на проект?",
      description: "Це допоможе нам підібрати відповідні послуги",
      options: [
        { label: "💰 До 5 000$", value: "budget-low" },
        { label: "💰 5 000$ - 10 000$", value: "budget-medium" },
        { label: "💰 Більше 10 000$", value: "budget-high" }
      ]
    },
    {
      id: 2,
      type: 'multiple',
      question: "Які послуги вас цікавлять?",
      description: "Оберіть всі підходящі варіанти",
      options: [
        { label: "🎨 Дизайн", value: "service-design" },
        { label: "💻 Розробка", value: "service-development" },
        { label: "📈 Маркетинг", value: "service-marketing" },
        { label: "🤝 Консультація", value: "service-consultation" }
      ]
    },
    {
      id: 3,
      type: 'rating',
      question: "Наскільки терміново потрібно реалізувати проект?",
      description: "Від 1 (не терміново) до 5 (дуже терміново)",
      options: ['1', '2', '3', '4', '5'],
      min: 1,
      max: 5
    },
    {
      id: 4,
      type: 'matrix',
      question: "Оцініть важливість характеристик проекту",
      description: "Для кожної характеристики оберіть рівень важливості",
      rows: ["Швидкість розробки", "Якість дизайну", "Вартість", "Підтримка"],
      columns: ["Дуже важливо", "Важливо", "Не дуже важливо"],
      options: []
    },
    {
      id: 5,
      type: 'priority',
      question: "Розставте пріоритети етапів проекту",
      description: "Перетягніть елементи в порядку важливості",
      options: [
        { label: "📱 Мобільна версія", value: "mobile" },
        { label: "🎨 Дизайн", value: "design" },
        { label: "🔍 SEO оптимізація", value: "seo" },
        { label: "📊 Аналітика", value: "analytics" }
      ]
    },
    {
      id: 6,
      type: 'file-upload',
      question: "Завантажте приклади дизайну",
      description: "Додайте зображення для референсу",
      options: [],
      maxFiles: 3,
      acceptedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf']
    },
    {
      id: 7,
      type: 'text',
      question: "Розкажіть коротко про ваш проект",
      description: "Опишіть основні вимоги та побажання",
      placeholder: "Наприклад: Потрібен корпоративний сайт з каталогом продукції...",
      options: []
    },
    {
      id: 8,
      type: 'date',
      question: "Коли плануєте почати проект?",
      description: "Оберіть приблизну дату старту",
      options: []
    },
    {
      id: 9,
      type: 'image-choice',
      question: "Який стиль дизайну вам ближче?",
      description: "Оберіть найбільш підходящий варіант",
      options: [
        {
          label: "Мінімалістичний",
          value: "minimal",
          imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=500",
          description: "Чистий та лаконічний дизайн з акцентом на контент"
        },
        {
          label: "Сучасний",
          value: "modern",
          imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
          description: "Яскравий та динамічний дизайн з сучасними елементами"
        },
        {
          label: "Класичний",
          value: "classic",
          imageUrl: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=500",
          description: "Елегантний та традиційний дизайн з увагою до деталей"
        }
      ]
    },
    {
      id: 10,
      type: 'contact',
      question: "Оберіть зручний спосіб зв'язку",
      description: "Наш спеціаліст зв'яжеться з вами найближчим часом",
      options: ["WhatsApp", "Telegram", "Viber"]
    }
  ],
  en: [
    {
      id: 1,
      type: 'single',
      question: "What's your project budget?",
      description: "This will help us select appropriate services",
      options: [
        { label: "💰 Up to $5,000", value: "budget-low" },
        { label: "💰 $5,000 - $10,000", value: "budget-medium" },
        { label: "💰 More than $10,000", value: "budget-high" }
      ]
    },
    {
      id: 2,
      type: 'multiple',
      question: "Which services are you interested in?",
      description: "Select all that apply",
      options: [
        { label: "🎨 Design", value: "service-design" },
        { label: "💻 Development", value: "service-development" },
        { label: "📈 Marketing", value: "service-marketing" },
        { label: "🤝 Consultation", value: "service-consultation" }
      ]
    },
    {
      id: 3,
      type: 'rating',
      question: "How urgent is your project?",
      description: "From 1 (not urgent) to 5 (very urgent)",
      options: ['1', '2', '3', '4', '5'],
      min: 1,
      max: 5
    },
    {
      id: 4,
      type: 'matrix',
      question: "Rate the importance of project characteristics",
      description: "For each characteristic, select the level of importance",
      rows: ["Development speed", "Design quality", "Cost", "Support"],
      columns: ["Very important", "Important", "Not very important"],
      options: []
    },
    {
      id: 5,
      type: 'priority',
      question: "Set project phase priorities",
      description: "Drag elements in order of importance",
      options: [
        { label: "📱 Mobile version", value: "mobile" },
        { label: "🎨 Design", value: "design" },
        { label: "🔍 SEO optimization", value: "seo" },
        { label: "📊 Analytics", value: "analytics" }
      ]
    },
    {
      id: 6,
      type: 'file-upload',
      question: "Upload design examples",
      description: "Add reference images",
      options: [],
      maxFiles: 3,
      acceptedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf']
    },
    {
      id: 7,
      type: 'text',
      question: "Tell us briefly about your project",
      description: "Describe main requirements and preferences",
      placeholder: "For example: Need a corporate website with product catalog...",
      options: []
    },
    {
      id: 8,
      type: 'date',
      question: "When do you plan to start the project?",
      description: "Choose an approximate start date",
      options: []
    },
    {
      id: 9,
      type: 'image-choice',
      question: "Which design style do you prefer?",
      description: "Choose the most suitable option",
      options: [
        {
          label: "Minimalist",
          value: "minimal",
          imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=500",
          description: "Clean and concise design focusing on content"
        },
        {
          label: "Modern",
          value: "modern",
          imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
          description: "Bright and dynamic design with modern elements"
        },
        {
          label: "Classic",
          value: "classic",
          imageUrl: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=500",
          description: "Elegant and traditional design with attention to detail"
        }
      ]
    },
    {
      id: 10,
      type: 'contact',
      question: "Choose your preferred contact method",
      description: "Our specialist will contact you shortly",
      options: ["WhatsApp", "Telegram", "Viber"]
    }
  ],
  ru: [
    {
      id: 1,
      type: 'single',
      question: "Какой у вас бюджет на проект?",
      description: "Это поможет нам подобрать подходящие услуги",
      options: [
        { label: "💰 До 5 000$", value: "budget-low" },
        { label: "💰 5 000$ - 10 000$", value: "budget-medium" },
        { label: "💰 Более 10 000$", value: "budget-high" }
      ]
    },
    {
      id: 2,
      type: 'multiple',
      question: "Какие услуги вас интересуют?",
      description: "Выберите все подходящие варианты",
      options: [
        { label: "🎨 Дизайн", value: "service-design" },
        { label: "💻 Разработка", value: "service-development" },
        { label: "📈 Маркетинг", value: "service-marketing" },
        { label: "🤝 Консультация", value: "service-consultation" }
      ]
    },
    {
      id: 3,
      type: 'rating',
      question: "Насколько срочно нужно реализовать проект?",
      description: "От 1 (не срочно) до 5 (очень срочно)",
      options: ['1', '2', '3', '4', '5'],
      min: 1,
      max: 5
    },
    {
      id: 4,
      type: 'matrix',
      question: "Оцените важность характеристик проекта",
      description: "Для каждой характеристики выберите уровень важности",
      rows: ["Скорость разработки", "Качество дизайна", "Стоимость", "Поддержка"],
      columns: ["Очень важно", "Важно", "Не очень важно"],
      options: []
    },
    {
      id: 5,
      type: 'priority',
      question: "Расставьте приоритеты этапов проекта",
      description: "Перетащите элементы в порядке важности",
      options: [
        { label: "📱 Мобильная версия", value: "mobile" },
        { label: "🎨 Дизайн", value: "design" },
        { label: "🔍 SEO оптимизация", value: "seo" },
        { label: "📊 Аналитика", value: "analytics" }
      ]
    },
    {
      id: 6,
      type: 'file-upload',
      question: "Загрузите примеры дизайна",
      description: "Добавьте изображения для референса",
      options: [],
      maxFiles: 3,
      acceptedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf']
    },
    {
      id: 7,
      type: 'text',
      question: "Расскажите кратко о вашем проекте",
      description: "Опишите основные требования и пожелания",
      placeholder: "Например: Нужен корпоративный сайт с каталогом продукции...",
      options: []
    },
    {
      id: 8,
      type: 'date',
      question: "Когда планируете начать проект?",
      description: "Выберите примерную дату старта",
      options: []
    },
    {
      id: 9,
      type: 'image-choice',
      question: "Какой стиль дизайна вам ближе?",
      description: "Выберите наиболее подходящий вариант",
      options: [
        {
          label: "Минималистичный",
          value: "minimal",
          imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=500",
          description: "Чистый и лаконичный дизайн с акцентом на контент"
        },
        {
          label: "Современный",
          value: "modern",
          imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
          description: "Яркий и динамичный дизайн с современными элементами"
        },
        {
          label: "Классический",
          value: "classic",
          imageUrl: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=500",
          description: "Элегантный и традиционный дизайн с вниманием к деталям"
        }
      ]
    },
    {
      id: 10,
      type: 'contact',
      question: "Выберите удобный способ связи",
      description: "Наш специалист свяжется с вами в ближайшее время",
      options: ["WhatsApp", "Telegram", "Viber"]
    }
  ]
};

export function getQuestions(language: string): Question[] {
  return questions[language] || questions['uk'];
}