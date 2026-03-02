import hometown from "./assets/images/hometown.png";
import tiktok from "./assets/images/tiktok.png";
import personal from "./assets/images/personal.jpg";

export const data = {
  en: {
    nav: { about: "About", projects: "Project", contact: "Contact" },
    hero: {
      title: "Hello my name is",
      name: "Nguyen Duc Hieu",
      age: {
        title: "Age",
        number: 26,
      },
      address: {
        title: "Address",
        string:
          "1-37-20 Hakozaki, Higashi-ku, Fukuoka City, Fukuoka Prefecture",
      },
      school: {
        title: "School Name",
        string: "Vocational School Computer Education Academy",
      },
      role: "Front-End Engineer",
      link: "View my project",
      analysis: {
        strength: {
          title: "STRENGTH",
          desc: "It is the ability to proactively learn new knowledge and skills. If there is something I don't understand, I try to research it myself and understand it.",
        },
        weakness: {
          title: "WEAKNESS",
          desc: "I tend to speak in a lower voice when nervous. To overcome this, I am actively practicing confident communication and focusing on maintaining steady volume.",
        },
        future: {
          title: "FUTURE GOALS",
          desc: "To become a reliable Full-stack Engineer in any environment. Beyond honing technical skills, I aim to improve my Japanese and English proficiency to access global information and collaborate effectively in multinational teams.",
        },
      },
    },
    projects: {
      title: "Project",
      data: [
        {
          id: 1,
          image: personal,
          title: "Personal Portfolio",
          desc: "Introduce yourself, your future plans, and the skills you have learned.",
          tech: ["React", "Vite", "Tailwind CSS"],
          link: "https://github.com/nguyenhieu67/personal-portfolio",
        },
        {
          id: 2,
          image: tiktok,
          title: "Clone Tiktok",
          desc: "I'm cloning TikTok based on UI and logic, it's still under development.",
          tech: ["React"],
          link: "https://github.com/nguyenhieu67/tiktok-clone",
        },
        {
          id: 3,
          image: hometown,
          title: "Website introducing my hometown",
          desc: "We will create a website that introduces our local delicious food and beautiful scenery to foreign tourists.",
          tech: ["JavaScript", "HTML", "SCSS"],
          link: "https://github.com/nguyenhieu67/Graduation-project",
        },
      ],
    },
    contact: {
      title: "Contact",
      desc: "Do you have a great idea and need support? Don't hesitate!",
      namePlaceholder: "Your name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message...",
      btn: "Send",
      subTitle: "Or send it directly via",
      emailTitle: "Email",
      email: "nguyenduchieu05082000@gmail.com",
      githubTitle: "Github",
      github: "github/nguyenhieu67",
    },
    footer: {
      copy: "Designed and built by",
      name: "Nguyen Duc Hieu",
      rights: "Copyright 2026",
    },
  },

  jp: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      contact: "連絡先",
    },
    hero: {
      title: "こんにちは、",
      name: "グエン ドゥク ヒエウです。",
      age: {
        title: "年齢",
        number: 26,
      },
      address: {
        title: "住所",
        string:
          "〒812-0053 福岡県福岡市東区箱崎１丁目３７−２０ エスポワール箱崎３",
      },
      school: {
        title: "学校名",
        string: "専門学校 コンピュータ教育学院",
      },
      role: "フロントエンドエンジニア",
      link: "私のプロジェクトを見ましょう",
      analysis: {
        strength: {
          title: "長所",
          desc: "新しい知識や技術を自ら積極的に学ぶ習得力です。わからないことがあれば、自分で調べ、理解できるうよう努力しています。",
        },
        weakness: {
          title: "短所",
          desc: "緊張するとだんだん小さな声で話してしまう点です。それを克服するために、自信を持ってハキハキと話す練習や、声の大きさを意識するよう努めています。",
        },
        future: {
          title: "将来の目標",
          desc: "どんな現場でも信頼されるフルスタックエンジニアになることです。そのために技術を磨くのはもちろんですが、日本語と英語のスキルも向上させていきたいです。言語力を高めることで、最新の情報を手に入れたり、多国籍なチームでもスムーズに連携できるようになり、「あなたに任せれば安心だ」と言われるエンジニアを目指したいです。",
        },
      },
    },
    projects: {
      title: "プロジェクト",
      data: [
        {
          id: 1,
          image: personal,
          title: "個人ポートフォリオ",
          desc: "自分自身のこと、将来の計画、習得したスキルについて紹介してください。",
          tech: ["React", "Vite", "Tailwind CSS"],
          link: "https://github.com/nguyenhieu67/personal-portfolio",
        },
        {
          id: 2,
          image: { tiktok },
          title: "ティックトックのクローン",
          desc: "UI とロジックに基づいて TikTok を複製していますが、まだ開発中です。",
          tech: ["React"],
          link: "https://github.com/nguyenhieu67/tiktok-clone",
        },
        {
          id: 3,
          image: { hometown },
          title: "故郷を紹介するサイト",
          desc: "私たちの地元の美味しい食べ物やきれいな景色を外国人観光客に紹介するサイトにします。",
          tech: ["JavaScript", "HTML", "SCSS"],
          link: "https://github.com/nguyenhieu67/Graduation-project",
        },
      ],
    },
    contact: {
      title: "連絡先",
      desc: "素晴らしいアイデアをお持ちで、サポートが必要な場合は、お気軽にお問い合わせください。",
      namePlaceholder: "あなたの名前",
      emailPlaceholder: "メール",
      messagePlaceholder: "メッセージ...",
      btn: "送信",
      subTitle: "または直接送信してください",
      emailTitle: "メール",
      email: "nguyenduchieu05082000@gmail.com",
      githubTitle: "ギットハブ",
      github: "https://github.com/nguyenhieu67",
    },
    footer: {
      copy: "設計・施工：",
      name: "グエン ドゥク ヒエウ",
      rights: "著作権 2026",
    },
  },
};
