// ترجع رابط بنك الأسئلة الخارجي للمسار المطلوب.
// الروابط مخزّنة هنا (في الخادم) ولا تظهر في كود الواجهة،
// مما يمنع المستخدم من نسخها أو رؤيتها مباشرة.

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const EXTERNAL_BANKS: Record<string, string> = {
  'grade_6/first/my_language': 'https://wondrous-trifle-a3386f.netlify.app/',
  'grade_6/first/islamic': 'https://ubiquitous-banoffee-1af9bd.netlify.app/',
  'grade_6/first/science': 'https://voluble-arithmetic-3b8fb0.netlify.app/',
  'grade_6/first/quran_tajweed': 'https://funny-puppy-b83822.netlify.app/',
  'grade_6/first/math': 'https://fanciful-shortbread-48f4ab.netlify.app/',
  'grade_6/first/english': 'https://cozy-torrone-fba63d.netlify.app/',
  'grade_7/first/math': 'https://lustrous-horse-07d775.netlify.app/',
  'grade_7/first/science': 'https://zingy-bavarois-ab67b5.netlify.app/',
  'grade_7/first/arabic': 'https://bespoke-semifreddo-0c55cd.netlify.app/',
  'grade_7/first/english': 'https://courageous-medovik-e17354.netlify.app/',
  'grade_7/first/life_skills': 'https://magical-hotteok-61e64d.netlify.app/',
  'grade_7/first/social': 'https://fancy-gelato-8a0f47.netlify.app/',
  'grade_7/second/math': 'https://m1wv95qxyqz0-d.space-z.ai',
  'grade_7/second/english': 'https://g15vn5th4xq1-d.space-z.ai',
  'grade_7/second/science': 'https://f16v35v9q3r0-d.space-z.ai',
  'grade_7/second/computer': 'https://z1yv35as5kk1-d.space-z.ai',
  'grade_7/second/islamic': 'https://v19vk502nqe0-d.space-z.ai',
  'grade_7/second/arabic': 'https://f1cvu5f9x3y1-d.space-z.ai',
  'grade_7/second/social': 'https://k1rvp5h0cq81-d.space-z.ai',
  'grade_8/second/arabic': 'https://b1wwe5tx9vy1-d.space-z.ai',
  'grade_8/second/science': 'https://science-bank-quiz.surge.sh/',
  'grade_8/second/math': 'https://math-bank-1783927706.surge.sh',
  'grade_8/second/islamic': 'https://litter.catbox.moe/189odp.html',
  'grade_8/second/social': 'https://preview-chat-1973e060-27df-4b77-9cf4-09853edec3d8.space-z.ai/',
  'grade_8/second/english': 'https://r1zwh5yehe31-d.space-z.ai',
  'grade_8/second/life_skills': 'https://maharat-questionbank-part2.surge.sh/',
  'grade_9/first/arabic': 'https://tourmaline-bonbon-a098cd.netlify.app/',
  'grade_9/second/arabic': 'https://n1rw15fj9qv0-d.space-z.ai',
  'grade_9/second/science': 'https://bank-3alom-science.surge.sh/',
  'grade_9/second/math': 'https://math-bank-arabic.surge.sh/',
  'grade_9/second/computer': 'https://bank-questions-part2.surge.sh/',
  'grade_9/second/english': 'https://preview-chat-a479b95b-8bb9-4828-8914-eec0f3c2505d.space-z.ai/',
  'grade_9/second/islamic': 'https://gleeful-bienenstitch-f2ca46.netlify.app/',
  'grade_9/second/social': 'https://eloquent-cheesecake-184e66.netlify.app/',
  'grade_10/first/biology': 'https://resilient-llama-3915f7.netlify.app/',
  'grade_10/second/math': 'https://celebrated-paletas-2733f0.netlify.app/',
  'grade_10/second/arabic': 'https://leafy-ganache-8b54b6.netlify.app/',
  'grade_10/second/hadith': 'https://glittery-biscochitos-f39dcd.netlify.app/',
  'grade_10/second/english': 'https://rad-youtiao-5b1bb2.netlify.app/',
  'grade_10/second/physics': 'https://superb-kitten-d834b4.netlify.app/',
  'grade_10/second/financial_literacy': 'https://deft-pothos-a792e2.netlify.app/',
  'grade_10/second/environmental_science': 'https://playful-figolla-b12a68.netlify.app/',
  'grade_10/second/computer': 'https://candid-brigadeiros-5c7d83.netlify.app/',
  'grade_10/second/social': 'https://wonderful-twilight-9a6879.netlify.app/',
  'grade_10/second/vocational': 'https://elegant-centaur-34f493.netlify.app/',
  'grade_11/second/biology': 'https://guileless-pithivier-82f239.netlify.app/',
  'grade_11/second/english': 'https://regal-maamoul-71fa84.netlify.app/',
  'grade_11/second/fitness_health': 'https://marvelous-axolotl-73c5f5.netlify.app/',
  'grade_11/second/chemistry': 'https://inspiring-lokum-c34af6.netlify.app/',
  'grade_11/second/art_book': 'https://lucky-mousse-9390fe.netlify.app/',
  'grade_11/second/computer': 'https://lambent-rabanadas-bf3421.netlify.app/',
  'grade_11/second/language_competencies': 'https://precious-sunshine-1bf3a7.netlify.app/',
  'grade_11/second/math': 'https://extraordinary-duckanoo-0631d7.netlify.app/',
  'grade_12/second/english': 'https://thunderous-rolypoly-917abd.netlify.app/',
  'grade_12/second/digital_citizenship': 'https://zesty-torrone-c9d6a4.netlify.app/',
  'grade_12/second/psychological_social_studies': 'https://timely-mousse-a5367c.netlify.app/',
  'grade_12/second/fiqh': 'https://jolly-maamoul-f2efe2.netlify.app/',
  'grade_12/second/life_skills': 'https://ornate-valkyrie-c51fbc.netlify.app/',
  'grade_12/second/math': 'https://splendid-cat-652f40.netlify.app/',
  'grade_12/second/physics': 'https://sprightly-unicorn-d4471a.netlify.app/',
  'grade_12/second/geography': 'https://tangerine-taffy-fd3cd8.netlify.app/',
  'grade_12/second/literary_studies': 'https://nimble-arithmetic-c103d8.netlify.app/',
  'grade_12/second/earth_space': 'https://effervescent-caramel-bd6444.netlify.app/',
  'grade_1/first/islamic': 'https://incomparable-scone-879384.netlify.app/',
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const key = `${body.grade}/${body.semester}/${body.subject}`;
    const url = EXTERNAL_BANKS[key];
    if (!url) {
      return Response.json({ error: 'not_found' }, { status: 404 });
    }
    return Response.json({ url });
  } catch (error) {
    console.error('getExternalBankUrl error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});