# Flag apertura locale

File: `src/constants/index.ts`
Proprietà: `serviceInfo.isOpenForBusiness`

- `false` → il componente `OpeningHours` non calcola l'orario in tempo reale e mostra il badge "Opening Soon" (ambra).
- `true` → torna il calcolo automatico dell'orario (Melbourne time) e il badge Open Now / Closed.

Per riattivare l'orario quando il locale apre, basta cambiare il valore in `src/constants/index.ts`:

```ts
isOpenForBusiness: true,
```

Nessun'altra modifica necessaria.
