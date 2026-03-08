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
        name: "신성파 (렉시얀 지지)",
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
            content: "그가 전투광처럼 보이는 것은 오히려 전쟁 PTSD로 인한 강박에 가깝다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "그가 정치적 입장표명을 하지 않는 태도는, 무관심이 아니라 오히려 그 무게를 인지하고 있기 때문이다."
          }
        ]
      },
      {
        title: "1.과거의 인연",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "10년 전, 흑성전쟁에서 큰 부상을 입고 배그런스 숲으로 은신하였고, 그 때 당신의 어머니인 제론으로부터 구해졌고, 당신과 처음 만났다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "이후 당신의 어머니인 제론에게 존경심이 혼재된 사랑을 느끼게 되었다."
          }
        ]
      },
      {
        title: "2. 여장의 이유",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "일부러 결함 있는 변태적 이미지를 형성하여 정혼이나 약혼을 피하려는 의도이다. ...그의 마음 속에는 아마 다른 누군가가 있으니까."
          }
        ]
      },
      {
        title: "3. 당신을 향한 진심",
        content: [
          {
            isSecret: true,
            type: 'lock',
            content: "당신(2황자녀)이 3년 전 황궁에 처음 입적했을 때부터 당신임을 알아봤으나 현재 그 사실을 기억하지 못하는 척하고 있다."
          },
          {
            isSecret: true,
            type: 'lock',
            content: "그의 스토킹은 물리적으로 같은 공간에 있음으로써 외부 세력으로부터 당신을 보호하기 위함이다."
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
