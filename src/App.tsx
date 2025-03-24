// @ts-nocheck
import React, { useState } from 'react';
import { Check, X, Brain, Award } from 'lucide-react';
import styled from 'styled-components';

interface Pytanie {
  pytanie: string;
  poprawnaPodpowiedź: string;
  opcje: string[];
}

interface Gruczoł {
  gruczoł: string;
  pytania: Pytanie[];
}

interface OdpowiedźHistorii {
  pytanie: string;
  odpowiedzUżytkownika: string;
  poprawnaPodpowiedź: string;
  czyPoprawna: boolean;
}

const pytaniaUkladuHormonalnego: Gruczoł[] = [
  {
    gruczoł: 'Przysadka',
    pytania: [
      {
        pytanie: "Który hormon odpowiada za wzrost organizmu,przemianę białek, tłuszczów i węglowodanów we wszystkich komórkach ?",
        poprawnaPodpowiedź: "hormon wzrostu",
        opcje: ["prolaktyna", "hormon wzrostu", "TSH", "ACTH"]
      },
      {
        pytanie: "Który hormon pobudza wytwarzanie mleka u kobiet po porodzie i hamuje owulację?",
        poprawnaPodpowiedź: "prolaktyna",
        opcje: ["prolaktyna", "oksytocyna", "estrogen", "progesteron"]
      },
      {
        pytanie: "Które hormony stymulują tarczycę, korę nadnerczy i gonady?",
        poprawnaPodpowiedź: "hormony tropowe: TSH, ACTH, FSH i LH",
        opcje: ["hormony tropowe: TSH, ACTH, FSH i LH", "oksytocyna i wazopresyna", "prolaktyna", "hormon wzrostu"]
      },
       {
        pytanie: "Który hormon reguluje gospodarkę wodną?",
        poprawnaPodpowiedź: "hormon antydiuretyczny (wazopresyna, ADH)",
        opcje: ["hormon antydiuretyczny (wazopresyna, ADH)", "oksytocyna", "hormon wzrostu","prolaktyna"]
      },
      {
        pytanie: "Który hormon wywołuje skurcze macicy podczas porodu oraz wydzielanie mieka po porodzie, a u mężczyzn - skurcze nasieniowodów podczas ejakulacji?",
        poprawnaPodpowiedź: "Oksytocyna",
        opcje: ["progesteron","Oksytocyna", "prolaktyna", "estrogen"]
      }

    ]
  },
  {
    gruczoł: 'Szyszynka',
    pytania: [
      {
        pytanie: "Który hormon reguluje rytm snu i czuwania?",
        poprawnaPodpowiedź: "melatonina",
        opcje: ["serotonina", "melatonina", "kortyzol", "adrenalina"]
      }
    ]
  },
    {
    gruczoł: 'Tarczyca',
    pytania: [
      {
        pytanie: "Który hormon zmniejsza stężenie wapnia we krwi?",
        poprawnaPodpowiedź: "kalcytonina",
        opcje: ["kalcytonina", "tyroksyna", "parathormon", "tymozyna"]
      },
      {
          pytanie: "Które hormony pobudzają metabolizm?",
          poprawnaPodpowiedź: "tyroksyna i trójjodotyronina",
          opcje: ["tyroksyna i trójjodotyronina", "kalcytonina", "adrenalina", "insulina"]
      }
    ]
  },
    {
    gruczoł: 'Przytarczyce',
    pytania: [
      {
        pytanie: "Który hormon zwiększa stężenie wapnia we krwi?",
        poprawnaPodpowiedź: "parathormon",
        opcje: ["parathormon", "kalcytonina", "tyroksyna", "tymozyna"]
      }
    ]
  },
   {
    gruczoł: 'Grasica',
    pytania: [
      {
        pytanie: "Który hormon przyspiesza dojrzewanie limfocytów T?",
        poprawnaPodpowiedź: "tymozyna",
        opcje: ["tymozyna", "parathormon", "kalcytonina", "testosteron"]
      }
    ]
  },
     {
    gruczoł: 'Nadnercza',
    pytania: [
      {
        pytanie: "Który hormon powoduje wzrost ciśnienia krwi, częstotliwości skurczów serca, stężenia glukozy we krwi oraz częstotliwości oddechów?",
        poprawnaPodpowiedź: "adrenalina",
        opcje: ["adrenalina", "kortyzol", "insulina", "glukagon"]
      },
      {
          pytanie: "Który hormon działa przeciwzapalnie, Powoduje wzrost stężenia glukozy we krwi?",
          poprawnaPodpowiedź: "kortyzol",
          opcje: ["adrenalina", "kortyzol", "insulina", "glukagon"]
      }
    ]
  },
     {
    gruczoł: 'Trzustka',
    pytania: [
      {
        pytanie: "Który hormon obniża poziom glukozy we krwi i powoduje jej gromadzenie w wątrobie w postaci glikogenu?",
        poprawnaPodpowiedź: "insulina",
        opcje: ["insulina", "glukagon", "adrenalina", "kortyzol"]
      },
       {
        pytanie: "Który hormon podwyższa poziom glukozy we krwi przez stymulację rozkładu glikogenu?",
        poprawnaPodpowiedź: "glukagon",
        opcje: ["glukagon","insulina", "adrenalina", "kortyzol"]
      }
    ]
  },
    {
    gruczoł: 'Jądra',
    pytania: [
      {
        pytanie: "Który hormon odpowiada za rozwój męskich narządów rozrodczych?",
        poprawnaPodpowiedź: "testosteron",
        opcje: ["testosteron", "estrogen", "progesteron", "tymozyna"]
      }
    ]
  },
   {
    gruczoł: 'Jajniki',
    pytania: [
      {
        pytanie: "Który hormon odpowiada za rozwój żeńskich cech płciowych?",
        poprawnaPodpowiedź: "estrogeny",
        opcje: ["estrogeny", "progesteron", "testosteron", "tymozyna"]
      },
      {
           pytanie: "Który hormon umożliwia prawidłowy przebieg ciąży i Powoduje pogrubianie się błony śluzowej macicy podczas cyklu miesiączkowego?",
          poprawnaPodpowiedź: "progesteron",
          opcje: ["progesteron", "estrogen", "testosteron", "tymozyna"]
      }
    ]
  },
  {
    gruczoł: 'Przysadka',
    pytania: [
         // ... (poprzednie pytania) ...
      {
        pytanie: "Który gruczoł wydziela prolaktynę?",
        poprawnaPodpowiedź: "Przysadka",
        opcje: ["Przysadka", "Tarczyca", "Jajniki", "Trzustka"]
      },
      {
          pytanie: "Hormon wzrostu jest wydzielany przez...?",
          poprawnaPodpowiedź: 'Przysadka',
          opcje: ["Przysadka", "Nadnercza", "Szyszynka", "Grasica"]

      },
        {
          pytanie: "Który gruczoł produkuje Hormony tropowe: TSH, ACTH, FSH i LH?",
          poprawnaPodpowiedź: 'Przysadka',
          opcje: ["Przysadka", "Nadnercza", "Tarczyca","Przytarczyce"]

      },
        {
        pytanie: "Który gruczoł wydziela wazopresyne??",
        poprawnaPodpowiedź: "Przysadka",
        opcje: ["Przysadka", "Tarczyca", "Jajniki", "Trzustka"]
      },
      {
          pytanie: "Oksytocyna jest wydzielany przez...?",
          poprawnaPodpowiedź: 'Przysadka',
          opcje: ["Przysadka", "Nadnercza", "Szyszynka", "Grasica"]

      }
    ]
  },
  {
    gruczoł: 'Szyszynka',
    pytania: [
        // ... (poprzednie pytania) ...
      {
        pytanie: "Który gruczoł wydziela melatoninę?",
        poprawnaPodpowiedź: "Szyszynka",
        opcje: ["Szyszynka", "Przysadka", "Tarczyca", "Nadnercza"]
      }
    ]
  },
  {
      gruczoł: 'Tarczyca',
      pytania:[
          // ... (poprzednie pytania) ...
          {
            pytanie: "Kalcytonina jest produkowana w...?",
            poprawnaPodpowiedź: "Tarczyca",
            opcje:["Tarczyca", "Przytarczyce", "Przysadka", "Nadnercza"]
          },
          {
            pytanie: "Który gruczoł wydziela Tyroksyna i trójjodotyronina??",
            poprawnaPodpowiedź: "Tarczyca",
            opcje:["Tarczyca", "Przytarczyce", "Przysadka", "Nadnercza"]
          }
      ]
  },
  {
      gruczoł: 'Przytarczyce',
      pytania: [
          // ... (poprzednie pytania) ...
          {
              pytanie: "Który gruczoł wydziela parathormon?",
              poprawnaPodpowiedź: "Przytarczyce",
              opcje:["Przytarczyce", "Tarczyca", "Przysadka", "Nadnercza"]
          }
      ]
  },
    {
      gruczoł: 'Grasica',
      pytania: [
          // ... (poprzednie pytania) ...
          {
              pytanie: "Tymozyna jest wydzielana przez...?",
              poprawnaPodpowiedź: "Grasica",
              opcje:["Grasica", "Tarczyca", "Przysadka", "Nadnercza"]
          }
      ]
  },
  {
      gruczoł: "Nadnercza",
      pytania:[
           // ... (poprzednie pytania) ...
          {
              pytanie: "Adrenalina jest produkowana przez?",
              poprawnaPodpowiedź: "Nadnercza",
              opcje:["Nadnercza","Trzustka", "Przysadka", "Jądra"]
          },
          {
              pytanie: "Który gruczoł wydziela Kortyzol?",
              poprawnaPodpowiedź: "Nadnercza",
              opcje:["Nadnercza","Trzustka", "Przysadka", "Jądra"]
          }
      ]
  },
  {
      gruczoł: "Trzustka",
      pytania:[
           // ... (poprzednie pytania) ...
          {
              pytanie: "Insulina jest produkowana przez...?",
              poprawnaPodpowiedź: "Trzustka",
              opcje:["Trzustka","Nadnercza", "Przysadka", "Jądra"]
          },
           {
              pytanie: "Który gruczoł wydziela Glukagon?",
              poprawnaPodpowiedź: "Trzustka",
              opcje:["Trzustka","Nadnercza", "Przysadka", "Jądra"]
          }
      ]
  },
    {
      gruczoł: "Jądra",
      pytania:[
           // ... (poprzednie pytania) ...
          {
              pytanie: "Testosteron jest produkowana przez...?",
              poprawnaPodpowiedź: "Jądra",
              opcje:["Jądra","Jajniki", "Przysadka", "Nadnercza"]
          }
      ]
  },
    {
      gruczoł: "Jajniki",
      pytania:[
           // ... (poprzednie pytania) ...
          {
              pytanie: "Estrogeny są produkowane przez...?",
              poprawnaPodpowiedź: "Jajniki",
              opcje:["Jajniki","Jądra", "Przysadka", "Nadnercza"]
          },
            {
              pytanie: "Który gruczoł wydziela progesteron?",
              poprawnaPodpowiedź: "Jajniki",
              opcje:["Jajniki","Jądra", "Przysadka", "Nadnercza"]
          }
      ]
  }
];


// Add shuffle utility function
const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Update styled components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 100%;
  max-width: ${props => props.$wide ? '42rem' : '28rem'};
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Score = styled.div`
  background: #3b82f6;
  color: white;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const QuestionContainer = styled.div`
  background: rgba(239, 246, 255, 0.7);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: left;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${props => {
    if (props.$selected) {
      return props.$correct ? 'rgba(52, 211, 153, 0.2)' : 'rgba(248, 113, 113, 0.2)';
    }
    return 'rgba(255, 255, 255, 0.9)';
  }};
  &:hover {
    transform: ${props => props.$disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
  }
  &:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

const HistoryItem = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  background: ${props => props.$correct ? '#dcfce7' : '#fee2e2'};
  &:hover {
    background: ${props => props.$correct ? '#bbf7d0' : '#fecaca'};
  }
`;

const RestartButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:hover {
    background: #1d4ed8;
  }
`;

const QuizUkladuHormonalnego: React.FC = () => {
  // Add new state for shuffled questions
  const [shuffledQuestions, setShuffledQuestions] = useState(() => {
    return shuffle(pytaniaUkladuHormonalnego.flatMap(gruczoł => 
      gruczoł.pytania.map(pytanie => ({
        ...pytanie,
        gruczoł: gruczoł.gruczoł,
        opcje: shuffle(pytanie.opcje)
      }))
    ));
  });

  // Replace existing state management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wynik, ustawWynik] = useState(0);
  const [quizZakończony, ustawQuizZakończony] = useState(false);
  const [wybranaPodpowiedź, ustawWybranaPodpowiedź] = useState<string | null>(null);
  const [historiaOdpowiedzi, ustawHistorieOdpowiedzi] = useState<OdpowiedźHistorii[]>([]);

  const aktualnePytanie = shuffledQuestions[currentQuestionIndex];

  const sprawdźOdpowiedź = (opcja: string): void => {
    ustawWybranaPodpowiedź(opcja);
    
    const czyPoprawna = opcja === aktualnePytanie.poprawnaPodpowiedź;
    
    if (czyPoprawna) {
      ustawWynik(wynik + 1);
    }

    ustawHistorieOdpowiedzi([
      ...historiaOdpowiedzi, 
      {
        pytanie: aktualnePytanie.pytanie,
        odpowiedzUżytkownika: opcja,
        poprawnaPodpowiedź: aktualnePytanie.poprawnaPodpowiedź,
        czyPoprawna
      }
    ]);

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        ustawQuizZakończony(true);
      }
      ustawWybranaPodpowiedź(null);
    }, 1500);
  };

  const resetujQuiz = (): void => {
    setShuffledQuestions(shuffle(pytaniaUkladuHormonalnego.flatMap(gruczoł => 
      gruczoł.pytania.map(pytanie => ({
        ...pytanie,
        gruczoł: gruczoł.gruczoł,
        opcje: shuffle(pytanie.opcje)
      }))
    )));
    setCurrentQuestionIndex(0);
    ustawWynik(0);
    ustawQuizZakończony(false);
    ustawHistorieOdpowiedzi([]);
  };

  if (quizZakończony) {
    return (
      <Container>
        <Card $wide>
          <div className="flex items-center justify-center mb-6">
            <Award size={64} className="text-yellow-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Quiz Zakończony!</h2>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-2xl font-semibold text-gray-700">
              Twój wynik: {wynik} / {shuffledQuestions.length}
            </p>
          </div>
          
          <div className="space-y-4 max-h-80 overflow-y-auto">
          <RestartButton onClick={resetujQuiz}>
            <Brain size={24} style={{ marginRight: '0.5rem' }} />
            Rozpocznij ponownie
          </RestartButton>
            <h3 className="text-xl font-bold text-gray-800 text-center">Historia Odpowiedzi</h3>
            {historiaOdpowiedzi.map((odpowiedź, index) => (
              <HistoryItem 
                key={index} 
                $correct={odpowiedź.czyPoprawna}
              >
                <p className="font-semibold text-gray-800 mb-2">{odpowiedź.pytanie}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Twoja odpowiedź: {odpowiedź.odpowiedzUżytkownika}</p>
                    <p className="text-sm text-gray-600">Poprawna odpowiedź: {odpowiedź.poprawnaPodpowiedź}</p>
                  </div>
                  {odpowiedź.czyPoprawna ? (
                    <Check color="green" size={32} />
                  ) : (
                    <X color="red" size={32} />
                  )}
                </div>
              </HistoryItem>
            ))}
          </div>
          

        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Header>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
              Quiz o Układzie Hormonalnym
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
              Gruczoł: {aktualnePytanie.gruczoł}
            </p>
          </div>
          <Score>{wynik}</Score>
        </Header>
        
        <QuestionContainer>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{aktualnePytanie.pytanie}</h3>
          
          <div className="space-y-3">
            {aktualnePytanie.opcje.map((opcja) => (
              <Button 
                key={opcja} 
                onClick={() => sprawdźOdpowiedź(opcja)}
                $selected={!!wybranaPodpowiedź}
                $correct={opcja === aktualnePytanie.poprawnaPodpowiedź}
                $disabled={!!wybranaPodpowiedź}
              >
                <div className="flex justify-between items-center">
                  {opcja}
                  {wybranaPodpowiedź && opcja === aktualnePytanie.poprawnaPodpowiedź && (
                    <Check color="green" />
                  )}
                  {wybranaPodpowiedź && opcja === wybranaPodpowiedź && opcja !== aktualnePytanie.poprawnaPodpowiedź && (
                    <X color="red" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        </QuestionContainer>
        
        <div className="text-sm text-gray-600 text-center">
          Pytanie {currentQuestionIndex + 1} z {shuffledQuestions.length}
        </div>
      </Card>
    </Container>
  );
};

export default QuizUkladuHormonalnego;