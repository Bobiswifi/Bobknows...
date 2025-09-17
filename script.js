const quotes = [
  "Eat your socks on Wednesdays. It's tradition.",
  "Aliens hate Mondays.",
  "Never trust a pineapple wearing glasses.",
  "If the toaster looks at you funny, apologize.",
  "Always carry a spoon for unexpected cereal.",
  "When in doubt, blame the coffee.",
  "A stapler a day keeps reality away.",
  "If you can see your future, it's probably in the reflection of a puddle.",
  "Don't argue with pigeons; they're unionized.",
  "Plants are just shy people who forgot how to talk.",
  "Singing to your plants only works if they have headphones.",
  "Borrow time from yesterday, return it tomorrow.",
  "If your socks disappear, they've joined a better party.",
  "Parallel parking is a ceremonial dance.",
  "The moon is just Earth's nightlight; be gentle.",
  "Always check your pockets for small dictators.",
  "Your shadow is an unpaid intern. Treat it kindly.",
  "Never trust recipes that ask for feelings instead of salt.",
  "Smile at a fork; it might be a spoon in disguise.",
  "If your keys sing, it's time to move.",
  "Dreams are unpaid internships for ideas.",
  "Don't feed the Wi-Fi after midnight.",
  "A good nap can solve three minor mysteries.",
  "If it rattles when you shake it, it's probably a gossip.",
  "Wear sunglasses to keep your future bright.",
  "If you meet a mirror, give it a compliment.",
  "Replace your password with a riddle for extra charm.",
  "If today is a sandwich, make it spicy.",
  "Don't trust elevators with dramatic pauses.",
  "When the floor says 'hello', step lightly.",
  "If your coffee winks back, drink more slowly.",
  "Toast your toast; it deserves respect.",
  "Collect small regrets; trade them for souvenirs later.",
  "If socks could talk, they'd ask for holidays.",
  "Always water your ideas; they get cranky when dry.",
  "Hug a cactus if you need tough love.",
  "If someone offers you a map to their secrets, check for typos.",
  "Breathe through your elbows on special occasions.",
  "Keep a rubber duck for legal counsel.",
  "Never argue with a song; it's already on repeat.",
  "If your chair applauds, you've done something right.",
  "Use confetti sparingly; it's emotionally expensive.",
  "A bad pun is a secret handshake with the universe.",
  "If rain asks permission, say yes.",
  "Don't let the calendar dictate your naps.",
  "Salt your enemies, pepper your friends.",
  "If a bookshelf judges you, buy it a plant.",
  "Keep a flashlight for your thoughts at night.",
  "When in traffic, imagine you're a parade.",
  "The fridge is a museum for leftover art.",
  "If your umbrella applauds, step outside.",
  "Never trust a closed jar of cookies.",
  "If you lose your train of thought, file a missing-person report.",
  "Smile — it's a universal restart button.",
  "If your sandwich winks, it's probably sentient.",
  "Always ask permission before high-fiving a stranger.",
  "If the moon borrows your hat, let it keep it.",
  "Keep a tiny umbrella for your thoughts in stormy weather.",
  "If your shadow moves differently, it's auditioning.",
  "Don't microwave your emotions; they explode.",
  "If the clock snoozes, respect its boundaries.",
  "Paint your to-do list with invisible ink for privacy.",
  "Never fold a map that doesn't fold back.",
  "If a dragon offers gum, politely decline.",
  "Check your pockets for small revolutions.",
  "If the kettle whistles, it's gossiping about tea.",
  "Carry a pebble for dramatic storytelling.",
  "Don't let your socks unionize without representation.",
  "If the spoon is brave, let it stir.",
  "When in doubt, consult the nearest lamppost.",
  "Treat Mondays like mild plot twists.",
  "The grass grows where gossip falls.",
  "If your bookmarks go missing, they're on vacation.",
  "Wear a hat to protect your thoughts from rain.",
  "Never let a cloud dictate your mood.",
  "If the elevator hums, it's composing a song.",
  "Feed your inbox compliments; it responds kinder.",
  "If you find a lost idea, return it with interest.",
  "Always RSVP to your imagination.",
  "If a sandwich reads you back, you've made a friend.",
  "Carry a spare mystery for slow days.",
  "If the moon borrows your socks, it's cold up there.",
  "When the door whispers, listen closely.",
  "If you meet a cactus in a tuxedo, take a picture.",
  "Keep a secret handshake with your coffee.",
  "If your bookmark winks, it's time to read differently.",
  "Never iron a memory; it wrinkles authenticity.",
  "If the spoon sings, set the table to applause.",
  "Always let the plants choose the playlist.",
  "If your shoelaces tie themselves, respect their autonomy.",
  "Wear socks that match your mood, not your shoes.",
  "If the candle whispers, tell it a short story.",
  "Carry a compass for decisions that smell like toast.",
  "If the pen runs away, it needed a vacation.",
  "Always wink back at strange clouds.",
  "If your keys hide, offer them a snack.",
  "Don't let the calendar borrow your weekends.",
  "If the chair prefers jazz, play some.",
  "Never microwave wisdom; it gets chewy.",
  "If a leaf bows, it's practicing manners.",
  "Carry a tiny party in your pocket for unexpected celebrations."
];

// Wrap initialization in DOMContentLoaded to be extra-safe when the script is loaded
function setup() {
  console.log('Bob Knows: Starting setup...');
  
  // Get all required elements
  const quoteEl = document.getElementById('quote');
  const askBtn = document.getElementById('askBtn');
  const copyBtn = document.getElementById('copyBtn');
  const tweetBtn = document.getElementById('tweetBtn');
  const avatarEl = document.getElementById('avatar');

  // Log what we found
  console.log('Bob Knows: Found elements:', {
    quote: quoteEl?.tagName,
    askBtn: askBtn?.tagName,
    copyBtn: copyBtn?.tagName,
    tweet: tweetBtn?.tagName,
    avatar: avatarEl?.tagName
  });

  // Defensive checks
  if (!quoteEl || !askBtn || !copyBtn || !tweetBtn || !avatarEl) {
    console.error('Bob Knows: Some elements are missing!');
    return;
  }

  // Simple random number generator for Safari
  function randomInt(max) {
    return Math.floor(Date.now() / 1000) % max;
  }

  function pickQuote() {
    const idx = randomInt(quotes.length);
    console.log('Bob Knows: Picked quote index:', idx);
    return { text: quotes[idx], idx };
  }

  function updateAvatar(idx) {
    // simple deterministic set of emojis
    const emojis = ['🧔‍♂️','🧓','🕵️‍♂️','👨‍🌾','🧙‍♂️','🤡','👽','🐻','🦜','🦄'];
    const emoji = emojis[idx % emojis.length];
    console.log('Bob Knows: Setting avatar to:', emoji);
    avatarEl.textContent = emoji;
    // change accent hue slightly
    const hue = (idx * 37) % 360;
    document.documentElement.style.setProperty('--accent', `hsl(${hue} 85% 60%)`);
  }

  function setQuote(q){
    console.log('Bob Knows: Setting quote to:', q);
    quoteEl.textContent = q;
  }

  // Set up Ask Bob button
  console.log('Bob Knows: Setting up Ask Bob button...');
  askBtn.onclick = function() {
    console.log('Bob Knows: Ask button clicked!');
    const {text, idx} = pickQuote();
    setQuote(text);
    updateAvatar(idx);
    // update tweet link
    const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' — Bob knows... maybe.')}`;
    tweetBtn.href = tweet;
  };

  // Set up Copy button
  console.log('Bob Knows: Setting up Copy button...');
  copyBtn.onclick = function() {
    console.log('Bob Knows: Copy button clicked!');
    const text = quoteEl.textContent || '';
    // Try the modern clipboard API first
    if (window.navigator && window.navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 1200);
      }).catch((e) => {
        console.warn('Bob Knows: Modern clipboard failed, trying fallback', e);
        useFallbackCopy(text);
      });
      return;
    }

    // Safari-friendly fallback copy
    function useFallbackCopy(text) {
      console.log('Bob Knows: Using fallback copy...');
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        
        // Check if we can select the text
        const selected = document.getSelection().rangeCount > 0 
          ? document.getSelection().getRangeAt(0)
          : false;
        
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        
        // Restore the original selection if there was one
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
        
        if (ok) {
          console.log('Bob Knows: Fallback copy succeeded');
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = 'Copy', 1200);
          return;
        }
      } catch(e) {
        console.error('Bob Knows: Fallback copy failed', e);
      }
      
      copyBtn.textContent = 'Copy failed';
      setTimeout(() => copyBtn.textContent = 'Copy', 1200);
    }
    
    // Try fallback immediately if modern API isn't available
    useFallbackCopy(text);
  };

  // show an initial random quote
  console.log('Bob Knows: Setting initial quote...');
  (function init(){
    const {text, idx} = pickQuote();
    setQuote(text);
    updateAvatar(idx);
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' — Bob knows... maybe.')}`;
  })();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
