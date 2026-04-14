export const steps = {
  step1: `admin' OR '1'='1'`,

  step2: `
SELECT * FROM users
WHERE username = 'admin' OR '1'='1';
`,

  step3: `
username = 'admin'  → FALSE
'1'='1'             → TRUE

Final condition:
(FALSE) OR (TRUE) → TRUE
`,

  step4: `
[ admin ]
[ guest ]
[ testuser ]
`,
};
