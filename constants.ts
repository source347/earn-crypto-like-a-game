import { CategoryType, LinkItem, CategoryMeta } from './types';

export const CATEGORIES: CategoryMeta[] = [
  
  {
    id: CategoryType.GAMING,
    label: "🎮 Arcade Mode",
    description: "Play games, get paid. Why do it for free when you can farm crypto?",
    icon: "🎮",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: CategoryType.TASKS,
    label: "📜 Quest Board",
    description: "Bounties, surveys, and micro-tasks. Grind XP for real loot.",
    icon: "📜",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: CategoryType.PASSIVE,
    label: "💤 Sleepy Gains",
    description: "AFK Farming. Set up nodes and bandwidth sharing then hibernate.",
    icon: "💤",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: CategoryType.TOOLS,
    label: "🛠️ Gear Shop",
    description: "The essential loadout. Wallets and exchanges to store your hoard.",
    icon: "🛠️",
    gradient: "from-gray-600 to-slate-800"
  },
  {
    id: CategoryType.LONGTERM,
    label: "💎 The Vault",
    description: "HODL territory. Airdrops and moonshots for the diamond hands.",
    icon: "💎",
    gradient: "from-indigo-500 to-violet-700"
  },
  {
    id: CategoryType.INSTANT,
    label: "⚡ Instant Loot",
    description: "Speedrun your way to satoshis. Click, claim, withdrawal. NO CAP.",
    icon: "⚡",
    gradient: "from-yellow-400 to-orange-500"
  }
];

export const LINKS: LinkItem[] = [
  // --- INSTANT / FAUCETS ---
  {
    id: 'freebitco',
    title: 'FreeBitco.in',
    url: 'https://freebitco.in/?r=17006348',
    description: 'The GOAT of Faucets. Hourly free rolls. Literally unkillable.',
    category: CategoryType.INSTANT,
    tags: ['Hourly', 'BTC', 'Legend'],
    color: 'bg-orange-500',
    isHot: true
  },
  {
    id: 'faucetpay',
    title: 'FaucetPay',
    url: 'https://faucetpay.io/?r=95880',
    description: 'Your loot bag. Essential micro-wallet linked to hundreds of faucets.',
    category: CategoryType.INSTANT,
    tags: ['Wallet', 'Hub'],
    color: 'bg-blue-600'
  },
  {
    id: 'cointiply',
    title: 'Cointiply',
    url: 'https://cointiply.com/r/mOnqp',
    description: 'Make it rain! 🌧️ High paying offerwall and chat rain pool.',
    category: CategoryType.INSTANT,
    tags: ['High Pay', 'Chat', 'App'],
    color: 'bg-red-500',
    isHot: true
  },
  {
    id: 'coinpayu',
    title: 'CoinPayU',
    url: 'https://www.coinpayu.com/?r=dashboard',
    description: 'Get paid to look at memes (and ads). Best PTC marketplace.',
    category: CategoryType.INSTANT,
    tags: ['PTC', 'Market'],
    color: 'bg-green-500'
  },
  {
    id: 'adbtc',
    title: 'AdBTC',
    url: 'https://r.adbtc.top/1169353',
    description: 'Old school cool. Surf sites, stack Satoshis or Rubles.',
    category: CategoryType.INSTANT,
    tags: ['PTC', 'Classic'],
    color: 'bg-yellow-600'
  },
  {
    id: 'btcadspace',
    title: 'BTC Ad Space',
    url: 'https://btcadspace.com/ref/source',
    description: 'Fresh PTC platform. View ads, earn Bitcoin. Simple.',
    category: CategoryType.INSTANT,
    tags: ['PTC', 'New'],
    color: 'bg-orange-400'
  },
  {
    id: 'firefaucet',
    title: 'FireFaucet',
    url: 'https://firefaucet.win/ref/126786',
    description: 'Auto-claim madness. Level up to increase your multiplier!',
    category: CategoryType.INSTANT,
    tags: ['Auto', 'Leveling'],
    color: 'bg-orange-600'
  },
  {
    id: 'autofaucet',
    title: 'DutchyCorp',
    url: 'https://autofaucet.dutchycorp.space/?r=Autofaucets',
    description: 'The Multiverse of Faucets. Auto-claim 70+ coins at once.',
    category: CategoryType.INSTANT,
    tags: ['Auto', 'Multi-Coin'],
    color: 'bg-purple-600'
  },
  {
    id: 'vie',
    title: 'Vie Faucet',
    url: 'https://viefaucet.com?r=6380ee9189dc9d60cddeaf22',
    description: 'Clean UI, no nonsense, fast withdrawals.',
    category: CategoryType.INSTANT,
    tags: ['Clean', 'Fast'],
    color: 'bg-teal-500'
  },
  {
    id: 'earnviv',
    title: 'EarnViv',
    url: 'https://earnviv.com/?r=36182',
    description: 'High yield rewards for the dedicated grinder.',
    category: CategoryType.INSTANT,
    tags: ['Faucet', 'Rewards'],
    color: 'bg-indigo-500'
  },
  {
    id: 'earnbitmoon',
    title: 'EarnBitMoon',
    url: 'https://earnbitmoon.club/?ref=265500',
    description: 'To the moon! 🚀 Frequent claims and bonuses.',
    category: CategoryType.INSTANT,
    tags: ['Club', 'Bonus'],
    color: 'bg-yellow-500'
  },
  {
    id: 'freeward',
    title: 'Freeward',
    url: 'https://freeward.net/ref/7pex8',
    description: 'Global reward platform. Crypto, Giftcards, Skins.',
    category: CategoryType.INSTANT,
    tags: ['GPT', 'Skins'],
    color: 'bg-cyan-600'
  },

  // The "Pick" Series
  { id: 'dogepick', title: 'DogePick', url: 'https://dogepick.io/?ref=limana', description: 'Hourly Doge. Much wow.', category: CategoryType.INSTANT, tags: ['Doge'], color: 'bg-yellow-400' },
  { id: 'litepick', title: 'LitePick', url: 'https://litepick.io/?ref=source', description: 'Hourly Litecoin loot.', category: CategoryType.INSTANT, tags: ['LTC'], color: 'bg-gray-400' },
  { id: 'polpick', title: 'PolPick', url: 'https://polpick.io/?ref=dashboard', description: 'Stack MATIC for gas.', category: CategoryType.INSTANT, tags: ['Polygon'], color: 'bg-purple-500' },
  { id: 'solpick', title: 'SolPick', url: 'https://solpick.io/?ref=dashboard', description: 'Solana summer never ends.', category: CategoryType.INSTANT, tags: ['Solana'], color: 'bg-indigo-400' },
  { id: 'suipick', title: 'SuiPick', url: 'https://suipick.io/?ref=dashboard', description: 'Water your wallet with SUI.', category: CategoryType.INSTANT, tags: ['Sui'], color: 'bg-blue-400' },
  { id: 'tonpick', title: 'TonPick', url: 'https://tonpick.game/?ref=dashboard', description: 'TON of fun on Telegram.', category: CategoryType.INSTANT, tags: ['TON'], color: 'bg-blue-500' },
  { id: 'usdpick', title: 'USDPick', url: 'https://usdpick.io?ref=fAYHy9teXq', description: 'Straight up cash (USDT).', category: CategoryType.INSTANT, tags: ['USD'], color: 'bg-green-600' },

  // The "Free-IN" Series
  { id: 'freebch', title: 'FreeBCH.in', url: 'https://freebch.in?ref=GYbcNKDvc8', description: 'Free Bitcoin Cash flow.', category: CategoryType.INSTANT, tags: ['BCH'], color: 'bg-green-500' },
  { id: 'freebnb', title: 'FreeBNB.in', url: 'https://freebnb.in?ref=t3guZH6504', description: 'Fuel for your BSC degen plays.', category: CategoryType.INSTANT, tags: ['BNB'], color: 'bg-yellow-500' },
  { id: 'freearb', title: 'FreeArb.in', url: 'https://freearb.in?ref=DT-wOppZxs', description: 'Layer 2 loot.', category: CategoryType.INSTANT, tags: ['ARB'], color: 'bg-blue-600' },
  { id: 'freeshib', title: 'FreeShib.in', url: 'https://freeshib.in?ref=Q4gBET4aub', description: 'For the Shib Army.', category: CategoryType.INSTANT, tags: ['SHIB'], color: 'bg-red-600' },
  { id: 'freesui', title: 'FreeSui.in', url: 'https://freesui.in?ref=2OBNF6surV', description: 'Mystic SUI rewards.', category: CategoryType.INSTANT, tags: ['SUI'], color: 'bg-blue-400' },
  { id: 'freeton', title: 'FreeTonCoin', url: 'https://freetoncoin.in?ref=4oDtavonot', description: 'The Open Network rewards.', category: CategoryType.INSTANT, tags: ['TON'], color: 'bg-blue-500' },
  { id: 'freetron', title: 'FreeTron', url: 'https://freetron.in?ref=D96wTKmOPD', description: 'Justin Sun approved (maybe).', category: CategoryType.INSTANT, tags: ['TRX'], color: 'bg-red-500' },
  { id: 'freetrump', title: 'FreeTrump', url: 'https://freetrump.in?ref=Qzx6sqZz1E', description: 'Make Crypto Great Again?', category: CategoryType.INSTANT, tags: ['Meme'], color: 'bg-orange-500' },
  { id: 'freexrp', title: 'FreeXRP', url: 'https://freexrp.in?ref=sKqECBxDCJ', description: 'Ripple rewards.', category: CategoryType.INSTANT, tags: ['XRP'], color: 'bg-slate-500' },


  // --- GAMING ---
  {
    id: 'rollercoin',
    title: 'RollerCoin',
    url: 'https://rollercoin.com/?r=kcq1472k',
    description: 'Build a virtual data center. 8-bit nostalgia meets real crypto.',
    category: CategoryType.GAMING,
    tags: ['Sim', 'Mining', 'Fun'],
    color: 'bg-purple-700',
    isHot: true
  },
  {
    id: 'limercoin',
    title: 'LimerCoin',
    url: 'https://limercoin.com/?ref=4i6ljids',
    description: 'Strategy mining game. Competitor to Rollercoin.',
    category: CategoryType.GAMING,
    tags: ['Strategy', 'Sim'],
    color: 'bg-yellow-600'
  },
  {
    id: 'simplebits',
    title: 'SimpleBits',
    url: 'https://simplebits.io/ref/0rd4li1cSLTL',
    description: 'RPG + Mining Simulator. Level up your character.',
    category: CategoryType.GAMING,
    tags: ['RPG', 'Hybrid'],
    color: 'bg-green-600'
  },
  {
    id: 'luckyx',
    title: 'LuckyX',
    url: 'https://app.luckyx.world/?p=Yie918',
    description: 'Is today your lucky day? Gamified rewards.',
    category: CategoryType.GAMING,
    tags: ['Luck', 'Web3'],
    color: 'bg-pink-600'
  },
   {
    id: 'gamee',
    title: 'Gamee (TG)',
    url: 'https://t.me/gamee/start?startapp=eyJyZWYiOjMzMzYwMDY0MH0',
    description: 'The biggest gaming platform on Telegram.',
    category: CategoryType.GAMING,
    tags: ['Telegram', 'Mobile'],
    color: 'bg-blue-400'
  },
  {
    id: 'luckywatch',
    title: 'LuckyWatch',
    url: 'https://luckywatch.pro/u/0oqit',
    description: 'Watch and earn. Simple as that.',
    category: CategoryType.GAMING,
    tags: ['Video', 'Easy'],
    color: 'bg-red-400'
  },

  // --- TASKS ---
  {
    id: '2captcha',
    title: '2Captcha',
    url: 'https://2captcha.com/?from=9690712',
    description: 'Human intelligence needed. Solve captchas for cold hard cash.',
    category: CategoryType.TASKS,
    tags: ['Work', 'Reliable'],
    color: 'bg-slate-600'
  },
  {
    id: 'timebucks',
    title: 'TimeBucks',
    url: 'https://timebucks.com/?refID=219093340',
    description: 'The "Do Anything" site. Surveys, videos, clicks.',
    category: CategoryType.TASKS,
    tags: ['GPT', 'Video'],
    color: 'bg-green-700'
  },
  {
    id: 'everve',
    title: 'Everve',
    url: 'https://everve.net/ref/678797/',
    description: 'Social Exchange. Get paid to Like, Follow, and Subscribe.',
    category: CategoryType.TASKS,
    tags: ['Social', 'Exchange'],
    color: 'bg-pink-500'
  },
  {
    id: 'pawns',
    title: 'Pawns.app',
    url: 'https://pawns.app/?r=1112465',
    description: 'Monetize your IP address + surveys.',
    category: CategoryType.TASKS,
    tags: ['Passive', 'Survey'],
    color: 'bg-red-500'
  },
  {
    id: 'surfe',
    title: 'Surfe.be',
    url: 'https://surfe.be/ext/178882',
    description: 'Bottom banner ads that pay while you browse normally.',
    category: CategoryType.TASKS,
    tags: ['Extension', 'Passive'],
    color: 'bg-blue-500'
  },
  {
    id: 'rewardvid',
    title: 'RewardVid',
    url: 'https://rewardvid.com?ref=ETqLenDf',
    description: 'Popcorn time. Watch videos, earn loot.',
    category: CategoryType.TASKS,
    tags: ['Video'],
    color: 'bg-red-600'
  },
  {
    id: 'miningblocks',
    title: 'MiningBlocks',
    url: 'https://miningblocks.club/?Referral=35696',
    description: 'Mining pools meets micro-tasks.',
    category: CategoryType.TASKS,
    tags: ['Pool', 'Task'],
    color: 'bg-orange-500'
  },
  {
    id: 'skynet',
    title: 'Certik Quest',
    url: 'https://skynet.certik.com/quest/signup?referralId=4324d09a-bf19-437c-8635-645a52dbf136',
    description: 'Learn about security, earn badges (and maybe drops).',
    category: CategoryType.TASKS,
    tags: ['Edu', 'Safe'],
    color: 'bg-slate-800'
  },
   {
    id: 'superintent',
    title: 'SuperIntent',
    url: 'https://mission.superintent.ai/?referralCode=eIJAOWtvmB',
    description: 'Train AI models. Be the ghost in the machine.',
    category: CategoryType.TASKS,
    tags: ['AI', 'Training'],
    color: 'bg-purple-500'
  },

  // --- PASSIVE / NODES ---
  {
    id: 'grass',
    title: 'GetGrass',
    url: 'https://app.getgrass.io/register?referralCode=XBPRl6U7sAvvzRX',
    description: 'Touch grass? No. SELL grass (bandwidth) to AI labs.',
    category: CategoryType.PASSIVE,
    tags: ['AI', 'Bandwidth', 'Hot'],
    color: 'bg-green-500',
    isHot: true
  },
  {
    id: 'nodepay',
    title: 'Nodepay',
    url: 'https://app.nodepay.ai/register?ref=5pxS8VIIZzNeDSF',
    description: 'Turn your internet into passive income.',
    category: CategoryType.PASSIVE,
    tags: ['Node', 'AI'],
    color: 'bg-blue-600'
  },
  {
    id: 'optimai-node',
    title: 'Optimai Node',
    url: 'https://node.optimai.network/register?ref=0EB0B06E',
    description: 'Run a node, secure the network.',
    category: CategoryType.PASSIVE,
    tags: ['Node', 'DePIN'],
    color: 'bg-teal-600'
  },
  {
    id: '3dos',
    title: '3DOS',
    url: 'https://dashboard.3dos.io/register?ref_code=6d8572',
    description: 'The decentralized manufacturing revolution.',
    category: CategoryType.PASSIVE,
    tags: ['DePIN', '3D'],
    color: 'bg-orange-600'
  },
  {
    id: 'gata',
    title: 'Gata.xyz',
    url: 'https://app.gata.xyz?invite_code=8epdx7rg',
    description: 'Aggregator for various DePIN networks.',
    category: CategoryType.PASSIVE,
    tags: ['Aggregator'],
    color: 'bg-indigo-500'
  },
  {
    id: 'aro',
    title: 'Aro Network',
    url: 'https://dashboard.aro.network/signup?referral=GJIXM0',
    description: 'Decentralized physical infrastructure rewards.',
    category: CategoryType.PASSIVE,
    tags: ['Infra'],
    color: 'bg-gray-600'
  },
  
  // --- LONG TERM / AIRDROPS ---
  {
    id: 'sosovalue',
    title: 'SoSoValue',
    url: 'https://sosovalue.com/join/0DCN0PVQ',
    description: 'Research tool. Earn Brain XP. Likely airdrop.',
    category: CategoryType.LONGTERM,
    tags: ['Research', 'Airdrop'],
    color: 'bg-blue-700',
    isHot: true
  },
  {
    id: 'brevis',
    title: 'Brevis',
    url: 'https://proving-grounds.brevis.network/VQcpfa',
    description: 'ZK Coprocessor proving grounds. Hard tech.',
    category: CategoryType.LONGTERM,
    tags: ['ZK', 'Tech'],
    color: 'bg-purple-800'
  },
  {
    id: 'blockstreet',
    title: 'Blockstreet',
    url: 'https://blockstreet.money/dashboard?invite_code=mvEz8G',
    description: 'Learn to earn. Financial literacy pays off.',
    category: CategoryType.LONGTERM,
    tags: ['Edu'],
    color: 'bg-green-800'
  },
  {
    id: 'billions',
    title: 'Billions',
    url: 'https://signup.billions.network/?rc=IMENAAXD',
    description: 'Early access to the Billions network.',
    category: CategoryType.LONGTERM,
    tags: ['Network'],
    color: 'bg-yellow-600'
  },
  {
    id: 'etherdrops',
    title: 'EtherDrops',
    url: 'https://t.me/EtherDROPS_bot?start=promo_OYJAP5',
    description: 'Top tier tracking bot. Essential for DEX traders.',
    category: CategoryType.LONGTERM,
    tags: ['Telegram', 'Bot'],
    color: 'bg-blue-500'
  },
  {
    id: 'blockscout',
    title: 'Blockscout',
    url: 'https://eth.blockscout.com/?ref=6RZXK3',
    description: 'The open source explorer. Create an account.',
    category: CategoryType.LONGTERM,
    tags: ['Explorer'],
    color: 'bg-slate-600'
  },

  // --- TOOLS / EXCHANGES ---
  {
    id: 'binance',
    title: 'Binance',
    url: 'https://accounts.binance.com/register?ref=49685937',
    description: 'The final boss of exchanges. Liquidity king.',
    category: CategoryType.TOOLS,
    tags: ['Exchange', 'Tier 1'],
    color: 'bg-yellow-500'
  },
  {
    id: 'mexc',
    title: 'MEXC Global',
    url: 'https://www.mexc.com/auth/signup?inviteCode=2pLgC',
    description: 'Where the 100x gems list first. No KYC options.',
    category: CategoryType.TOOLS,
    tags: ['Exchange', 'Gems'],
    color: 'bg-green-500'
  },
  {
    id: 'publish0x',
    title: 'Publish0x',
    url: 'https://www.publish0x.com/?a=OpnelZ1bKB',
    description: 'Earn crypto by reading articles. Yes, really.',
    category: CategoryType.TOOLS,
    tags: ['Content', 'Reading'],
    color: 'bg-orange-400'
  }
];
