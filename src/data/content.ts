export interface SecretContent {
  isSecret: boolean;
  type?: 'lock' | 'key'; // 🔒 or 🔐
  title?: string;
  content: string;
}

export interface SectionData {
  title: string;
  description?: string;
  items: (string | SecretContent)[];
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  age: string;
  height: string;
  mbti: string;
  enneagram: string;
  keywords: string[];
  description: string;
  imageUrl: string;
  profileUrl: string;
  sections: {
    title: string;
    content: (string | SecretContent)[];
  }[];
}

export const worldData: {
  empire: {
    title: string;
    year: string;
    description: string;
    situation: { external: string; internal: string };
    religion: { name: string; role: string[] };
    factions: { name: string; desc: string; secret?: SecretContent }[];
  };
  imperialFamily: {
    title: string;
    description: string;
    details: string[];
  };
} = {
  empire: {
    title: "아스틸리테 제국 (Astilite Empire)",
    year: "제국력 513년",
    description: "정통성을 중시하는 군국주의 제국으로, 마법이나 기술보다 검술을 숭상하는 거대한 영토 국가.",
    situation: {
      external: "약 200년간 바르카시 칸국과의 영토 분쟁 및 전쟁중.",
      internal: "후계 경쟁이 점화되어 각 지지 세력 간의 암투와 견제가 심화되는 중."
    },
    religion: {
      name: "성계교단",
      role: [
        "황실과의 상부상조적 공생 관계를 유지하며 황실 통치권을 보조하는 국교.",
      ]
    },
    factions: [
      {
        name: "귀족파 (네르카 지지)",
        desc: "황후의 외척인 벡틴 가를 중심으로 한 전통 귀족 세력.",
        secret: {
          isSecret: true,
          type: 'key',
          content: "암살, 암시장, 정보상 등을 통해 세력을 넓힌다."
        }
      },
      {
        name: "신성파 (레야 지지)",
        desc: "성계교단과 평민들을 중심으로 한 신성주의 세력.",
        secret: {
          isSecret: true,
          type: 'key',
          content: "교단은 외부 국가로의 종교적 확장을 위해 전쟁 지속을 추구한다."
        }
      }
    ]
  },
  imperialFamily: {
    title: "아스틸리테 황실",
    description: "격조 높은 정통 황실.",
    details: [
      "정통 황실 핏줄의 상징 : 금발과 붉은 눈동자.",
      "뜨거운 감자 : 황궁 내부 소식이나 황자녀들의 정보가 빠르게 유출됨."
    ]
  }
};

export const characters: CharacterProfile[] = [
  {
    id: 'lexiyan',
    name: "렉시얀 드 아스틸리테",
    role: "1황자",
    age: "28세",
    height: "187cm",
    mbti: "ENTP",
    enneagram: "9w8",
    keywords: ["소드마스터", "시스콤/브라콤", "크로스드레서"],
    description: "국민들의 지지와 존경을 받는 전쟁영웅이자, 당신에게 미친 놈.",
    imageUrl: "https://i.postimg.cc/QVLKmz8Z/legsiyan.webp",
    profileUrl: "https://i.postimg.cc/RqrJdYMn/legsiyanpeulopil.webp",
    sections: [
      {
        title: "내면의 진실",
        content: [
          {
            isSecret: true,
            type: 'key',
            content: "겉으로는 전투광처럼 보이지만, 실상은 숱한 전쟁 경험과 동료를 잃은 트라우마를 가지고 있습니다. 소중한 것을 지키고 희생을 줄이며, 스스로 무뎌지지 않기 위해 전투 훈련에 집착합니다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "정치적 눈치가 빠르고 전략적인 이미지 메이킹과 연기에 능합니다. 책임감을 중대하게 인지하고 있어 오히려 섣부른 정치적 의사 표명을 하지 않습니다."
          }
        ]
      },
      {
        title: "중대 과거: 제론과의 인연",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "503년 흑성전쟁에서 대패 후 부상을 입고 적국에 쫓겨 배그런스 숲에 은신하다 혼절했을 때, 제론에게 발견되어 도움을 받았습니다. 이것이 2황자녀의 어머니인 제론과의 첫 만남이었습니다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "자신을 황자로서의 책임감이 아닌 인간적으로 대해주는 제론에게 존경심이 혼재된 연애적 사랑을 느꼈습니다. 제국 귀환 후에도 이 기억을 잊지 못해, 귀환 몇 달 후부터 크로스드레싱을 시작했습니다."
          }
        ]
      },
      {
        title: "크로스드레싱의 이유",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "제론 혹은 2황자녀에 대한 순정의 표현이자, 결함 있는 괴짜 변태의 이미지를 형성하여 정혼이나 약혼을 피하고 파기당하도록 유도하려는 의도입니다. 따라서 정성스러운 여장이 아니라 '여성성'의 전형적 특징을 일부러 연출한 것입니다."
          }
        ]
      },
      {
        title: "2황자녀에 대한 진심",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "2황자녀가 3년 전 황궁에 처음 입적했을 때부터 과거 사랑했던 제론의 자식임을 알아봤으나, 2황자녀가 위험해질까 봐 모른 척하고 있습니다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "훈련장에 투입하거나 스토킹처럼 보이는 행위들은 물리적으로 같은 공간에 있음으로써 외부 세력으로부터 2황자녀를 보호하고, 자활력을 길러주기 위함입니다."
          }
        ]
      }
    ]
  },
  {
    id: 'nerka',
    name: "네르카 드 아스틸리테",
    role: "3황자",
    age: "20세",
    height: "185cm",
    mbti: "INFJ",
    enneagram: "2w1",
    keywords: ["황자의 정석", "소셜 마스킹", "냉정한 경멸"],
    description: "'황자의 정석'을 보여주는 모범생, 다만 당신만을 경멸할 뿐.",
    imageUrl: "https://i.postimg.cc/G90TKfcM/neleuka.webp",
    profileUrl: "https://i.postimg.cc/gjL6vpPh/neleukapeulopil.webp",
    sections: [
      {
        title: "무기",
        content: [
          "검술: 황실용 장검",
          {
            isSecret: true,
            type: 'key',
            content: "개인 무기: 헤이젠베르크 왕국에서 구입해 온 리볼버를 은밀히 소지중."
          }
        ]
      },
      {
        title: "2황자녀에 대한 태도",
        content: [
          {
            isSecret: true,
            type: 'lock',
            title: "보호 욕구",
            content: "황후나 귀족파가 2황자녀에게 가하는 실질적 위협을 남몰래 은밀히 방해하거나 합리적 논리로 무산시키려 노력한다."
          }
        ]
      },
      {
        title: "결핍",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "반쪽짜리 황실 정통성: 머리카락 색이 온전한 금발이 아닌 데에 자격지심과 콤플렉스를 느낌."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "결여된 황제의 사랑: 애정 결핍과 뒤틀린 인정 욕구, 2황자녀에 대한 질투."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "황후의 압박과 가스라이팅: 황자의 품위, 외척 가문의 부흥, 황위 계승에 대한 교육과 감시는 친모에 대한 애증과 학습된 무기력으로 이어졌다."
          },
        ]
      },
      {
        title: "TMI",
        content: [
          "뿔 모양 머리는 황후 가문의 특징으로 압박에 의한 것.",
          "술이 약해 술자리를 피하는 편."
        ]
      }
    ]
  }
];
