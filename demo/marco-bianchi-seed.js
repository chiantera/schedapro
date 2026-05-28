// SchedaPRO — Demo seed: Marco Bianchi
// Incolla nella console del browser su http://localhost:5174
// e poi ricarica la pagina.

(async () => {
  const OWNER_ID = 'dev-user';
  const CASE_ID  = 'marco-bianchi';
  const LOCAL_ID = `${OWNER_ID}::${CASE_ID}`;
  const NOW = new Date().toISOString();

  const marcoBianchi = {
    case_id: CASE_ID,
    case_title: 'Marco Bianchi',
    case_summary: '35 anni. Obiettivo: aumento massa muscolare. Livello: intermedio. 12 sessioni in 3 mesi. Lavoro d\'ufficio sedentario, disponibile 3 giorni/settimana.',
    brief_markdown: `## Marco Bianchi — Note rapide
- 35 anni, impiegato, sedentario fuori dal centro
- Obiettivo massa: +3 kg muscolo in 6 mesi
- Disponibilità: lun/mer/ven ore 18:30
- Limite: dolore occasionale alla spalla dx (vecchia lussazione)
- Non ama il cardio. Motivazione alta nelle prime 2 settimane, poi cala.
- Preferisce schede strutturate — non gli piace improvvisare
- Porta il caffè dal bar ma non fa colazione

## Prossima sessione
**Lunedì** — Giorno A (petto + tricipiti). Testare variazione panca con presa stretta.

## Domande aperte
- Ha fatto l\'ecografia alla spalla? Chiedere lunedì.
- Seguire la dieta consigliata? Pesarsi il 15 giugno.`,

    open_questions: [
      {
        question: 'Ha fatto l\'ecografia alla spalla destra?',
        why_it_matters: 'Vecchia lussazione — prima di aumentare i carichi sulla panca, serve la liberatoria del fisiatra',
        source_refs: [],
      },
      {
        question: 'Sta rispettando le 200 g di proteine giornaliere?',
        why_it_matters: 'Il plateau sulla massa potrebbe essere nutrizionale, non di allenamento',
        source_refs: [],
      },
    ],

    materials: [
      {
        id: 'mat-1',
        name: 'Modulo anamnesi sportiva',
        kind: 'document',
        text: 'Marco Bianchi, 35 anni. Nessuna patologia cardiaca. Lussazione spalla dx nel 2019 (guarita). Non fuma, beve alcol occasionalmente. Lavoro sedentario (8 ore/giorno).',
        added_at: '2026-03-01T09:00:00Z',
      },
    ],

    timeline: [
      {
        event_id: 'ev-1',
        date: '2026-03-03',
        event_type: 'session',
        title: 'Sessione 1 — Valutazione iniziale',
        description: 'Test forza: panca 60 kg × 5, squat 80 kg × 5, stacco 90 kg × 5. Peso 78 kg, BF 18%.',
        source_refs: [],
      },
      {
        event_id: 'ev-2',
        date: '2026-03-10',
        event_type: 'session',
        title: 'Sessione 3 — Prima progressione',
        description: 'Panca 65 kg × 5. Dolore lieve spalla verso la fine della serie. Sostituito con panca inclinata manubri.',
        source_refs: [],
      },
      {
        event_id: 'ev-3',
        date: '2026-03-24',
        event_type: 'measurement',
        title: 'Misurazione 1 mese',
        description: 'Peso 78.5 kg (+0.5 kg). Circonferenza braccio sx: 36 cm → 37 cm. Soddisfazione: buona.',
        source_refs: [],
      },
      {
        event_id: 'ev-4',
        date: '2026-04-07',
        event_type: 'session',
        title: 'Sessione 7 — Panca stabile',
        description: 'Panca 67.5 kg × 4. Non riesce a completare la quinta ripetizione da 3 settimane. Possibile plateau.',
        source_refs: [],
      },
      {
        event_id: 'ev-5',
        date: '2026-04-21',
        event_type: 'measurement',
        title: 'Misurazione 2 mesi',
        description: 'Peso 79.2 kg (+0.7 kg). Panca invariata a 67.5 kg. Squat salito a 95 kg. Stacco 105 kg.',
        source_refs: [],
      },
      {
        event_id: 'ev-6',
        date: '2026-05-05',
        event_type: 'session',
        title: 'Sessione 10 — Variazione programma',
        description: 'Introdotto 4×8 pausa-ripetizioni sulla panca. Risposta positiva, dolore spalla assente.',
        source_refs: [],
      },
      {
        event_id: 'ev-7',
        date: '2026-05-19',
        event_type: 'session',
        title: 'Sessione 12 — Verifica plateau',
        description: 'Panca pausa: 65 kg × 8. Buona esecuzione. Rimandata la progressione a 70 kg. Umore alto.',
        source_refs: [],
      },
    ],

    procedural_deadlines: [
      {
        deadline_id: 'dl-1',
        title: 'Sessione — Giorno A (Petto + Tricipiti)',
        due_date: '2026-06-02',
        due_time: '18:30',
        deadline_type: 'hearing',
        status: 'pending',
        notes: 'Testare panca con presa stretta. Chiedere della spalla.',
        source_refs: [],
      },
      {
        deadline_id: 'dl-2',
        title: 'Check-in misurazioni 3 mesi',
        due_date: '2026-06-09',
        due_time: '09:00',
        deadline_type: 'defense_brief',
        status: 'pending',
        notes: 'Peso, circonferenze, foto progresso. Confronto con baseline.',
        source_refs: [],
      },
      {
        deadline_id: 'dl-3',
        title: 'Gara amatoriale Natural Bodybuilding Roma',
        due_date: '2026-09-20',
        due_time: '10:00',
        deadline_type: 'filing',
        status: 'pending',
        notes: 'Obiettivo dichiarato da Marco. Da valutare fattibilità reale.',
        source_refs: [],
      },
    ],

    persons: [
      {
        person_id: 'p-1',
        name: 'Marco Bianchi',
        role: 'client',
        notes: '35 anni, Roma, impiegato. Tel: 340-1234567. WhatsApp preferito.',
        source_refs: [],
      },
      {
        person_id: 'p-2',
        name: 'Dott. Rossi Luca',
        role: 'other',
        notes: 'Fisiatra — ha seguito la spalla nel 2019. Da contattare se i carichi aumentano.',
        source_refs: [],
      },
    ],

    evidence: [
      {
        evidence_id: 'ej-1',
        name: 'Panca piana — progressione',
        description: '60 kg (sessione 1) → 67.5 kg (sessione 7) → plateau da 8 settimane. 4×8 pausa ok.',
        status: 'plateau',
        source_refs: [],
      },
      {
        evidence_id: 'ej-2',
        name: 'Squat — progressione',
        description: '80 kg (sessione 1) → 95 kg (sessione 10). Progressione regolare.',
        status: 'migliorato',
        source_refs: [],
      },
      {
        evidence_id: 'ej-3',
        name: 'Stacco da terra — progressione',
        description: '90 kg → 105 kg in 3 mesi. Tecnica migliorata.',
        status: 'migliorato',
        source_refs: [],
      },
      {
        evidence_id: 'ej-4',
        name: 'Peso corporeo',
        description: '78 kg → 79.2 kg in 2 mesi. +1.2 kg totali — sotto target (+1 kg/mese massa).',
        status: 'non_valutabile',
        source_refs: [],
      },
    ],

    contradictions: [
      {
        contradiction_id: 'co-1',
        title: 'Plateau panca da 8 settimane',
        description: 'Marco non ha superato 67.5 kg in panca piana da 8 settimane nonostante progressione su squat e stacco. Possibile causa: spalla destra limitante, volume insufficiente sul petto, apporto proteico inadeguato.',
        severity: 'significant',
        resolution_status: 'pending',
        source_refs: [],
      },
      {
        contradiction_id: 'co-2',
        title: 'Aumento di massa inferiore al target',
        description: '+1.2 kg in 2 mesi vs target +1 kg/mese. Potrebbe indicare dieta non ottimizzata.',
        severity: 'minor',
        resolution_status: 'pending',
        source_refs: [],
      },
    ],

    legal_analysis: {
      risk_level: 'medium',
      risk_summary: 'Progressione globale buona su squat e stacco. Plateau persistente sulla panca piana da 8 settimane. Spalla destra da monitorare. Aumento di massa nella norma ma sotto il target dichiarato.',
      immediate_actions: [
        'Verificare stato spalla destra prima di aumentare carichi in panca',
        'Introdurre variazione tecnica: pausa-ripetizioni o panca inclinata come esercizio primario per 4 settimane',
        'Aumentare apporto proteico: portare a 2 g/kg/giorno',
        'Aggiungere una sessione extra di recupero attivo (stretching spalle + mobilità toracica)',
      ],
      charges: [
        {
          charge_code: 'OBJ-1',
          charge_name: 'Aumento massa muscolare',
          max_sentence: '+3 kg muscolo in 6 mesi',
          prosecution_strength: 0.45,
          elements_required: [
            {
              element: 'Stimolo allenante',
              description: 'Progressione del carico e del volume nel tempo',
              status: 'disputed',
              notes: 'Plateau panca — da risolvere',
              source_refs: [],
            },
            {
              element: 'Apporto proteico',
              description: '2 g/kg/giorno per sintesi proteica ottimale',
              status: 'missing',
              notes: 'Non verificato — Marco dice di mangiare bene ma non traccia',
              source_refs: [],
            },
            {
              element: 'Recupero adeguato',
              description: '3 sessioni/settimana + sonno 7-8h',
              status: 'proven',
              notes: 'Confermato — rispetta i giorni di riposo',
              source_refs: [],
            },
          ],
          available_defenses: [],
          notes: 'Progressione parziale. Intervenire su nutrizione e variazione tecnica panca.',
          source_refs: [],
        },
      ],
      strategies: [
        {
          title: 'Periodizzazione ondulata sul petto',
          strategy_type: 'variazione tecnica',
          priority: 'primary',
          description: 'Alternare settimane di forza (4×5, 80-85% 1RM) e settimane di ipertrofia (4×10-12, 65-70% 1RM). Rompere l\'adattamento al plateau.',
          strengths: ['Stimolo neurale e metabolico alternato', 'Riduce il rischio di sovraccarico spalla'],
          risks: ['Richiede pianificazione precisa dei carichi', 'Marco potrebbe demotivarsi con i pesi più leggeri'],
          required_evidence: ['1RM panca attuale verificato'],
          source_refs: [],
        },
        {
          title: 'Priorità nutrizionale',
          strategy_type: 'intervento dietetico',
          priority: 'secondary',
          description: 'Introdurre tracking alimentare per 2 settimane. Obiettivo minimo: 158 g proteina/giorno (79 kg × 2 g).',
          strengths: ['Basso rischio', 'Alto impatto se la causa è nutrizionale'],
          risks: ['Marco potrebbe non voler tracciare'],
          required_evidence: ['Diario alimentare 3 giorni tipo'],
          source_refs: [],
        },
      ],
      constitutional_issues: [
        {
          title: 'Spalla destra — rischio infortunio',
          issue_type: 'limitazione fisica',
          severity: 'significant',
          description: 'Vecchia lussazione 2019. Dolore occasionale su panca piana con carico elevato. Non ha fatto ecografia di controllo.',
          legal_basis: 'Anamnesi sportiva — sessione 3',
          remedy: 'Richiedere ok fisiatra prima di superare 70 kg in panca. Nel frattempo: inclinata manubri + pausa-ripetizioni.',
          source_refs: [],
        },
      ],
      witness_assessments: [
        {
          witness_name: 'Panca piana — performance',
          role: 'prosecution',
          credibility_score: 0.45,
          key_testimony: '67.5 kg × 4 — invariato da 8 settimane. Non riesce la quinta ripetizione.',
          strengths: ['Dato oggettivo misurabile'],
          vulnerabilities: ['Potrebbe essere sovraccaricato tecnicament', 'Spalla limitante'],
          cross_examination_angles: ['Testare pausa-ripetizioni', 'Testare presa stretta', 'Valutare panca inclinata come alternativa'],
          source_refs: [],
        },
        {
          witness_name: 'Squat — performance',
          role: 'defense',
          credibility_score: 0.82,
          key_testimony: '80 kg → 95 kg in 3 mesi. Progressione lineare costante.',
          strengths: ['Conferma che il sistema nervoso e la risposta all\'allenamento funzionano'],
          vulnerabilities: [],
          cross_examination_angles: [],
          source_refs: [],
        },
      ],
      evidence_balance: {
        prosecution_strength: 0.60,
        defense_strength: 0.70,
        key_prosecution_evidence: ['Panca plateau 8 settimane', 'Massa sotto target (+1.2 kg vs target +2 kg)'],
        key_defense_evidence: ['Squat +15 kg', 'Stacco +15 kg', 'Compliance sessioni: 12/12 (100%)'],
        critical_gaps: ['Monitoraggio nutrizionale mancante', 'Ecografia spalla dx non fatta', '1RM reale non testato di recente'],
        overall_assessment: 'Atleta con ottima compliance e risposta positiva agli esercizi multiarticolari. Il plateau sulla panca è isolato e risolvibile con variazione tecnica e ottimizzazione nutrizionale. Nessun segnale di overtraining.',
      },
      client_summary: 'Marco Bianchi, 35 anni. 12 sessioni in 3 mesi, frequenza 100%. Progressione eccellente su squat e stacco. Plateau isolato sulla panca piana, probabilmente tecnico/nutrizionale. Spalla da monitorare. Motivazione alta.',
    },

    raw_documents: [
      {
        doc_id: 'raw-1',
        name: 'Log sessioni 1-6 (marzo-aprile 2026)',
        description: 'Sessioni 1-6, carichi e note',
        text: `SESSIONE 1 - 03/03/2026
Panca: 60×5, 60×5, 65×3
Squat: 80×5, 80×5, 85×3
Stacco: 90×5, 90×5
Note: prima sessione, buona forma, un po' rigido alle anche

SESSIONE 3 - 10/03/2026
Panca: 65×5, 65×5 (dolore lieve spalla fine serie) → cambiato inclinata manubri 20kg×10×3
Squat: 85×5, 87.5×5
Note: spalla da tenere d'occhio

SESSIONE 5 - 24/03/2026
Panca inclinata manubri: 24kg×10×4 (nessun dolore)
Squat: 90×5, 90×5
Stacco: 100×5
Note: misurazione peso 78.5kg (+0.5), braccio sx 37cm

SESSIONE 6 - 31/03/2026
Panca: 67.5×5, 67.5×4 (stessa storia)
Squat: 92.5×5
Stacco: 102.5×5
Note: plateau panca inizia qui`,
        added_at: '2026-03-01T09:00:00Z',
        category: 'fascicolo',
      },
      {
        doc_id: 'raw-2',
        name: 'Log sessioni 7-12 (aprile-maggio 2026)',
        description: 'Sessioni 7-12, progressione e note',
        text: `SESSIONE 7 - 07/04/2026
Panca: 67.5×4, 67.5×4, 67.5×3 - ANCORA PLATEAU
Squat: 95×5 (nuovo PR!)
Note: frustrazione evidente. Proposto cambio tecnica.

SESSIONE 8 - 14/04/2026
Introdotto pausa-ripetizioni: 60kg×6(pausa)×4 serie
Squat: 95×5×4
Note: Marco perplesso dai pesi più leggeri ma esecuzione ottima

SESSIONE 9 - 21/04/2026
Misurazioni 2 mesi: peso 79.2kg, BF stimato 17.5%, braccio sx 37.5cm
Stacco: 105×5 (nuovo PR)
Note: soddisfazione per stacco, ancora frustrazione panca

SESSIONE 10 - 05/05/2026
Panca pausa: 62.5×6×4 (miglioramento qualità)
Squat: 97.5×4
Note: spalla ok. Umore buono.

SESSIONE 11 - 12/05/2026
Panca pausa: 62.5×7×4
Squat: 97.5×5 (completato!)
Stacco: 105×5
Note: buona seduta. Chiesto se fa colazione: "cafè solo"

SESSIONE 12 - 19/05/2026
Panca pausa: 65×8×4 (ottima!)
Squat: 100×3 (tentativo PR, tecnica ceduta)
Note: pronto per riprendere progressione panca il prossimo ciclo`,
        added_at: '2026-05-20T09:00:00Z',
        category: 'fascicolo',
      },
    ],

    analyzed_doc_ids: ['raw-1', 'raw-2'],

    pro_recommendation: null,

    usage_estimate: {
      pages: 3,
      audio_minutes: 0,
      flash_input_tokens: 8420,
      flash_output_tokens: 2100,
      pro_used: false,
    },

    draft_artifacts: [],

    created_at: '2026-03-01T09:00:00Z',
    updated_at: NOW,
  };

  // Inietta in IndexedDB
  const DB_NAME = 'plt';
  const STORE = 'cases_v2';
  const DB_VERSION = 3;

  const record = {
    ...marcoBianchi,
    local_id: LOCAL_ID,
    local_owner_id: OWNER_ID,
  };

  await new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(record);
      tx.oncomplete = resolve;
      tx.onerror = reject;
    };
    req.onerror = reject;
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'local_id' });
      }
    };
  });

  console.log('%c✅ Marco Bianchi aggiunto con successo!', 'color: #22c55e; font-weight: bold; font-size: 14px');
  console.log('Ricarica la pagina (F5) per vedere il cliente nella lista.');
})();
