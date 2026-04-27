// script.js

// --- Navigation Logic ---
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- Story Logic ---
const stories = {
    kongji: {
        title: "🐸 콩쥐 팥쥐",
        content: `
            <p>옛날 옛적, 깊은 산골 마을에 얼굴도 예쁘고 마음씨도 아주 고운 '콩쥐'라는 소녀가 살고 있었어요. 콩쥐는 어머니를 일찍 여의고 아버지와 단둘이 살다가, 아버지가 새어머니를 맞이하게 되면서 팥쥐라는 언니와 함께 살게 되었죠.</p>
            <p>하지만 새어머니와 팥쥐 언니는 콩쥐를 아주 많이 미워했어요. 맛있는 음식은 팥쥐만 주고, 콩쥐에게는 매일매일 힘들고 고된 집안일만 시켰답니다. 추운 겨울에도 얇은 옷을 입고 빨래를 해야 했고, 무거운 나무를 해와야 했어요.</p>
            <p>어느 날, 마을 뒷산에서 아주 큰 잔치가 열렸어요. 마을 사람들은 모두 예쁜 옷을 입고 잔치에 갔지만, 새어머니는 콩쥐에게 산더미 같은 일거리를 주었어요. <strong>"이 밑 빠진 독에 물을 가득 채우고, 벼를 다 찧고, 베를 다 짜놓지 않으면 잔치에 올 생각은 꿈도 꾸지 마라!"</strong> 새어머니의 불호령에 콩쥐는 그만 주저앉아 엉엉 울고 말았어요.</p>
            <p>밑이 뻥 뚫린 항아리에 아무리 물을 부어도 물은 줄줄 새어나갔어요. 그때, 어디선가 커다란 두꺼비 한 마리가 엉금엉금 기어 와서 말했어요. <em>"콩쥐야 울지마. 내가 도와줄게!"</em> 두꺼비는 자신의 넓은 등으로 항아리 구멍을 꽉 막아주었고, 콩쥐는 금세 물을 채울 수 있었어요.</p>
            <p>다음은 벼를 찧을 차례였어요. 너무 많아서 혼자서는 며칠이 걸릴 양이었죠. 그런데 이번에는 하늘에서 수많은 참새 떼가 짹짹거리며 날아와 순식간에 껍질을 까주었어요. 마지막으로 베를 짜야 할 때, 하늘에서 예쁜 선녀님이 내려와 비단 옷과 반짝이는 꽃신을 주며 베를 대신 짜주었답니다.</p>
            <p>선녀님의 도움으로 세상에서 제일 예쁜 모습으로 변한 콩쥐는 서둘러 잔칫집으로 향했어요. 하지만 너무 급하게 뛰어가다 그만 냇물에 꽃신 한 짝을 빠뜨리고 말았어요. 마침 그곳을 지나가던 원님이 반짝이는 꽃신을 발견했고, 이 신발의 주인을 찾기 시작했어요.</p>
            <p>마을의 모든 아가씨가 신발을 신어보았지만 맞지 않았어요. 팥쥐도 억지로 발을 우겨넣었지만 소용없었죠. 마지막으로 콩쥐가 신발을 신자 마치 맞춘 것처럼 꼭 맞았어요. 콩쥐의 고운 마음씨에 반한 원님은 콩쥐와 결혼했고, 콩쥐는 새어머니와 팥쥐를 용서하며 모두 함께 오래오래 행복하게 살았답니다. 🎉</p>
        `
    },
    prince: {
        title: "👑 어린 왕자",
        content: `
            <p>끝없이 펼쳐진 사하라 사막, 비행기가 고장 나서 불시착한 조종사 아저씨 앞에 아주 작고 신비로운 소년이 나타났어요. 그 소년은 바로 머나먼 우주의 작은 별 'B612'에서 온 어린 왕자였어요.</p>
            <p>어린 왕자의 별은 집 한 채보다 조금 클 정도로 아주 작았어요. 그곳에는 화산 세 개와, 어린 왕자가 세상에서 제일 사랑하는 아름다운 장미꽃 한 송이가 살고 있었죠. 어린 왕자는 매일 장미꽃에 물을 주고 벌레를 잡아주며 정성껏 돌보았지만, 장미꽃은 자존심이 세서 자꾸만 투정을 부렸어요. 결국 장미꽃의 투정에 지친 어린 왕자는 진짜 친구를 찾기 위해 별을 떠나기로 결심했답니다.</p>
            <p>여행을 떠난 어린 왕자는 여러 이웃 별들을 방문했어요. 첫 번째 별에는 모든 것을 지배하고 싶어 하는 왕이 살았고, 두 번째 별에는 칭찬만 듣고 싶어 하는 허영쟁이가 살았어요. 그리고 숫자를 세는 데만 집착하는 상인, 1분마다 가로등을 껐다 켜는 점등부, 탐험은 하지 않고 책상에만 앉아있는 지리학자를 만났죠. 어린 왕자는 <strong>"어른들은 참 이상해. 진짜 중요한 게 뭔지 모르는 것 같아."</strong>라고 생각했어요.</p>
            <p>마지막으로 도착한 곳은 바로 우리가 사는 지구였어요. 지구에는 장미꽃이 수천 송이나 피어있는 정원이 있었어요. 어린 왕자는 자기 별의 장미꽃이 세상에 하나뿐인 줄 알았는데, 그게 아니라는 사실에 너무 슬퍼서 잔디밭에 엎드려 울었어요.</p>
            <p>그때, 아주 지혜로운 사막 여우가 나타났어요. 여우는 어린 왕자에게 <strong>"길들인다"</strong>는 것의 의미를 가르쳐 주었어요. <em>"네가 나를 길들인다면 우리는 서로에게 이 세상에 단 하나뿐인 존재가 되는 거야. 네 장미꽃이 수천 송이의 다른 장미꽃들과 다른 이유는, 네가 그 꽃을 위해 물을 주고 정성을 다해 길들였기 때문이야."</em></p>
            <p>그리고 여우는 가장 중요한 비밀을 알려주었어요. <strong>"가장 중요한 것은 눈에 보이지 않아. 오직 마음으로만 볼 수 있어."</strong></p>
            <p>여우의 말을 듣고 깨달음을 얻은 어린 왕자는 자기가 길들인, 그래서 책임을 져야 하는 자신의 장미꽃이 너무나 보고 싶어졌어요. 비록 몸은 지구에 남겨두었지만, 어린 왕자는 영혼이 되어 밤하늘을 날아 자신이 사랑하는 장미꽃이 있는 작은 별 B612로 돌아갔답니다. 지금도 밤하늘의 별들을 바라보면, 그 별들 중 어딘가에서 어린 왕자가 맑은 웃음을 짓고 있을 거예요. ✨</p>
        `
    }
};

function openStory(id) {
    const modal = document.getElementById('story-modal');
    document.getElementById('story-title').innerText = stories[id].title;
    document.getElementById('story-body').innerHTML = stories[id].content;
    modal.classList.add('active');
}

function closeStory() {
    document.getElementById('story-modal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('story-modal');
    if (event.target == modal) {
        closeStory();
    }
}

// --- Chatbot Logic ---
let currentCharacter = '';
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatTitle = document.getElementById('chat-title');

// 문맥(Context)과 감정(Sentiment)을 저장하는 상태 객체
let chatContext = {
    lastTopic: null,
    sentiment: 'neutral'
};

const randReply = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 긍정/부정 단어 사전
const sentimentDict = {
    positive: ["좋아", "예뻐", "멋져", "고마워", "착해", "최고", "짱", "대단해", "사랑해", "재밌어"],
    negative: ["싫어", "나빠", "짜증", "슬퍼", "미워", "바보", "힘들어", "우울", "아파", "못생"]
};

// 맥락 파악용 질문 사전
const contextQuestions = ["그래서", "그리고", "왜", "어떻게", "진짜", "정말"];

const botData = {
    kongji: {
        name: "콩쥐 🐸",
        greeting: "안녕! 나는 콩쥐야. 오늘 잔치가 열렸는데, 나랑 이야기할래?",
        topics: {
            "팥쥐": {
                keywords: ["팥쥐", "언니"],
                replies: ["팥쥐 언니는 나한테 가끔 심술을 부리지만... 그래도 언니인걸.", "새어머니가 예쁜 옷은 팥쥐 언니만 줘 ㅠㅠ"],
                context_pos: ["언니도 좋은 점이 있을 거라고 믿어!", "맞아, 언니랑도 친하게 지내고 싶어."],
                context_neg: ["맞아... 언니가 괴롭힐 땐 너무 속상해.", "언니가 나한테 일만 시켜서 너무 힘들어."],
                context_q: ["그래서 내가 맨날 울면서 일을 다 해야 해.", "왜냐면 새어머니가 팥쥐 언니만 예뻐하시거든."]
            },
            "두꺼비": {
                keywords: ["두꺼비", "개구리"],
                replies: ["두꺼비 친구가 내 독 구멍을 막아줬어! 정말 고마운 친구야.", "두꺼비가 없었다면 잔치에 못 갔을 거야. 개굴개굴!"],
                context_pos: ["응! 두꺼비는 정말 최고야. 너무 듬직해.", "두꺼비 덕분에 기분이 너무 좋아졌어!"],
                context_neg: ["두꺼비가 징그럽다고? 아니야, 마음은 엄청 착해!", "두꺼비를 미워하지 마 ㅠㅠ"],
                context_q: ["두꺼비가 자기 등으로 독의 큰 구멍을 콱! 막아줬거든.", "물이 새지 않게 도와줬어!"]
            },
            "새엄마": {
                keywords: ["새엄마", "어머니", "엄마"],
                replies: ["새어머니가 일을 너무 많이 시켜서 힘들 때도 있어 ㅠㅠ", "잔치에 못 가게 산더미처럼 일을 주셨어."],
                context_pos: ["언젠가 새어머니도 내 마음을 알아주실 거야.", "착하게 지내다 보면 좋아지겠지?"],
                context_neg: ["새어머니 때문에 매일매일 눈물만 나...", "나도 엄마가 보고 싶어..."],
                context_q: ["왜 나만 미워하시는지 나도 잘 모르겠어..."]
            },
            "원님": {
                keywords: ["원님", "신발", "꽃신"],
                replies: ["원님께서 내 잃어버린 꽃신을 찾아주셨지~ 정말 멋진 분이셔.", "꽃신이 시냇물에 떠내려갈 땐 얼마나 놀랐는지 몰라!"],
                context_pos: ["원님은 정말 착하시고 잘생기셨어!", "꽃신이 발에 딱 맞을 때 정말 행복했어."],
                context_neg: ["꽃신을 잃어버렸을 땐 세상이 무너지는 줄 알았어 ㅠㅠ", "팥쥐 언니가 내 신발을 뺏으려고 했었어."],
                context_q: ["냇가에서 너무 서두르다가 그만 신발이 벗겨졌거든."]
            }
        },
        basic: [
            { keywords: ["안녕", "하이", "반가워", "ㅎㅇ"], replies: ["반가워! 오늘 하루 어땠어?", "안녕! 넌 어디서 왔어?"] },
            { keywords: ["이름", "누구"], replies: ["내 이름은 콩쥐야! 만나서 반가워."] },
            { keywords: ["배고파", "밥", "간식", "먹을"], replies: ["잔칫집에서 가져온 떡 하나 줄까?", "나도 팥쥐 언니가 밥을 안 줘서 배고파 ㅠㅠ"] },
            { keywords: ["심심", "놀자", "게임"], replies: ["나랑 게임 메뉴에서 항아리 물 채우기 할래?", "냇가에서 물장구 치자!"] },
            { keywords: ["학교", "숙제", "공부"], replies: ["학교에 가는구나! 난 못 가봤지만 응원할게.", "숙제 다 하고 나랑 놀자!"] }
        ],
        defaults: [
            "그렇구나... 혹시 두꺼비나 원님에 대해 물어볼래?",
            "헤헤, 참새들이 노래하는 소리 들어본 적 있어?",
            "내가 산골에만 살아서 잘 몰라. 좀 더 쉽게 말해줄래?"
        ]
    },
    prince: {
        name: "어린왕자 👑",
        greeting: "안녕, 나는 B612 별에서 온 어린왕자야. 네 별은 어디니?",
        topics: {
            "장미": {
                keywords: ["장미", "꽃"],
                replies: ["내 장미는 세상에서 단 하나뿐인 꽃이야. 투덜대긴 하지만 내가 책임져야 해.", "네 별에도 아름다운 꽃이 피니?"],
                context_pos: ["응! 내 장미는 온 우주에서 가장 아름다워.", "장미가 나를 보고 활짝 웃어주면 행복해."],
                context_neg: ["장미가 허영심이 많아서 날 좀 힘들게 했어.", "장미가 투덜대서 너무 슬펐어."],
                context_q: ["장미는 가시가 4개밖에 없는데 호랑이 발톱도 안 무섭다고 우겼거든.", "장미를 내 별에 혼자 두고 와서 너무 걱정돼."]
            },
            "여우": {
                keywords: ["여우", "동물"],
                replies: ["여우 친구가 '가장 중요한 건 눈에 보이지 않는다'고 알려줬어.", "여우는 나와 길들여진 소중한 사이야."],
                context_pos: ["여우는 정말 현명해. 여우의 털처럼 금빛 밀밭이 좋아.", "여우를 만나서 정말 다행이었어."],
                context_neg: ["여우랑 헤어질 땐 너무 슬퍼서 눈물이 났어.", "지구 사냥꾼들이 여우를 괴롭히지 않았으면 좋겠어."],
                context_q: ["여우가 나한테 길들여달라고 부탁했어. 서로에게 유일한 존재가 되자고."]
            },
            "어른": {
                keywords: ["어른", "지구", "사람", "왕", "숫자"],
                replies: ["어른들은 숫자를 참 좋아하는 것 같아. 진짜 중요한 건 묻지 않고 말이야.", "지구에는 이상한 어른들이 너무 많아."],
                context_pos: ["그래도 비행기 조종사 아저씨는 내 친구야! 그림을 잘 그리거든.", "너는 어른들처럼 숫자만 좋아하지 않아서 다행이야."],
                context_neg: ["어른들은 겉모습만 보고 판단해. 참 이상해.", "왕이나 허영쟁이들은 자기밖에 모르는 것 같아 바보 같아."],
                context_q: ["어른들은 새로 사귄 친구 목소리가 어떤지, 무슨 장난감을 좋아하는지는 절대 안 묻거든."]
            },
            "양": {
                keywords: ["양", "상자", "그림"],
                replies: ["상자 속에 있는 양이 맘에 들어. 장미를 먹지 않게 조심해야 할 텐데...", "나에게 양을 한 마리 더 그려줄래?"],
                context_pos: ["상자 속의 양은 내가 준 풀을 아주 맛있게 먹을 거야.", "양이 얌전해서 정말 귀여워."],
                context_neg: ["양이 내 장미꽃을 먹어버리면 어떡하지? 너무 무서워...", "바오밥 나무를 먹어야 하는데... 걱정이야."],
                context_q: ["조종사 아저씨가 구멍 뚫린 상자를 그려줬어. 그 안에 양이 자고 있대!"]
            }
        },
        basic: [
            { keywords: ["안녕", "하이", "반가워", "ㅎㅇ"], replies: ["안녕! 넌 지구에서 온 친구구나.", "반가워. 네 웃음소리가 별빛 같아."] },
            { keywords: ["이름", "누구"], replies: ["나는 어린왕자라고 해. 아주 작은 별에서 왔어."] },
            { keywords: ["배고파", "밥", "간식"], replies: ["넌 밥을 먹어야 하는구나. 내 별에서는 물 한 모금이면 돼.", "지구 사람들은 먹는 걸 참 좋아해."] },
            { keywords: ["심심", "놀자", "학교"], replies: ["밤하늘의 별을 세어보는 놀이를 해봐!", "지구 학교에서는 길들여지는 법도 배우니?"] }
        ],
        defaults: [
            "지구 어른들은 참 이상해... 나에게 여우나 장미에 대해 이야기해 줄래?",
            "사막의 바람처럼 신비로운 이야기네. 더 말해줘.",
            "가장 중요한 건 눈에 보이지 않는다는 걸 기억해."
        ]
    }
};

function analyzeSentiment(text) {
    let posCount = sentimentDict.positive.filter(word => text.includes(word)).length;
    let negCount = sentimentDict.negative.filter(word => text.includes(word)).length;
    
    if (posCount > negCount) return 'positive';
    if (negCount > posCount) return 'negative';
    return 'neutral';
}

function extractTopic(text, charId) {
    const topics = botData[charId].topics;
    for (let t in topics) {
        if (topics[t].keywords.some(kw => text.includes(kw))) {
            return t; // '팥쥐', '장미' 등
        }
    }
    return null;
}

function isContextQuestion(text) {
    return contextQuestions.some(kw => text.includes(kw));
}

function selectCharacter(charId) {
    currentCharacter = charId;
    document.querySelector('.character-selection').classList.add('hidden');
    chatWindow.classList.remove('hidden');
    
    chatTitle.innerText = botData[charId].name + "와 대화 중...";
    chatMessages.innerHTML = ''; 
    
    // 상태 초기화
    chatContext.lastTopic = null;
    chatContext.sentiment = 'neutral';

    appendMessage(botData[charId].greeting, 'bot');
}

function handleChatKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;
    
    appendMessage(text, 'user');
    chatInput.value = '';
    
    setTimeout(() => {
        const reply = getBotReply(text, currentCharacter);
        appendMessage(reply, 'bot');
    }, 600);
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('msg', sender);
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(text, charId) {
    const bot = botData[charId];
    
    // 1. 현재 문장의 감정과 새로운 토픽 분석
    const currentSentiment = analyzeSentiment(text);
    const currentTopic = extractTopic(text, charId);
    const isQ = isContextQuestion(text);

    // 2. 새로운 토픽이 등장했으면 컨텍스트 업데이트 후 토픽 기본 대답 반환
    if (currentTopic) {
        chatContext.lastTopic = currentTopic;
        chatContext.sentiment = currentSentiment; // 토픽에 대한 감정 저장
        
        // 만약 토픽과 함께 강한 감정이 섞여있다면? (예: "팥쥐 너무 미워!")
        if (currentSentiment === 'negative') return randReply(bot.topics[currentTopic].context_neg);
        if (currentSentiment === 'positive') return randReply(bot.topics[currentTopic].context_pos);
        
        return randReply(bot.topics[currentTopic].replies);
    }

    // 3. 토픽이 직접 언급되지 않았지만 문맥 질문이나 감정 표현이 있을 경우
    if (chatContext.lastTopic) {
        const topicData = bot.topics[chatContext.lastTopic];
        
        // "그래서?", "왜?" 같은 질문일 경우
        if (isQ) {
            return randReply(topicData.context_q);
        }
        
        // 토픽 언급 없이 감정만 표출할 경우 (예: "진짜 나쁘다", "너무 좋다")
        if (currentSentiment === 'negative') return randReply(topicData.context_neg);
        if (currentSentiment === 'positive') return randReply(topicData.context_pos);
    }

    // 4. 일반적인 기본 일상 대화 매칭 (인사, 밥, 게임 등)
    for (let rule of bot.basic) {
        if (rule.keywords.some(kw => text.includes(kw))) {
            return randReply(rule.replies);
        }
    }

    // 5. 토픽도 없고 감정도 없고 일상대화도 아니면 기본 응답
    return randReply(bot.defaults);
}


// --- Game Logic ---
const gameSpace = document.getElementById('game-space');
const gameArea = document.getElementById('game-area');
const gameTitle = document.getElementById('game-title');
let currentGameInterval; 

function openGame(gameId) {
    document.querySelector('#game .card-container').classList.add('hidden');
    gameSpace.classList.remove('hidden');
    gameArea.innerHTML = ''; 
    clearInterval(currentGameInterval);

    if (gameId === 'kongji') initKongjiGame(1);
    else if (gameId === 'kongji-grain') initKongjiGrainGame(1);
    else if (gameId === 'prince') initPrinceGame(1);
    else if (gameId === 'prince-star') initPrinceStarGame(1);
}

function closeGame() {
    gameSpace.classList.add('hidden');
    document.querySelector('#game .card-container').classList.remove('hidden');
    clearInterval(currentGameInterval);
}

// 1. Kongji Jar Game (Levels 1-3)
let waterLevel = 0;
let jarLevel = 1;

function initKongjiGame(level) {
    jarLevel = level;
    gameTitle.innerText = `🐸 밑 빠진 독 채우기 (레벨 ${level})`;
    waterLevel = 0;
    
    // Leak rate increases with level
    const leakAmount = level * 2; 
    const leakSpeed = 400 - (level * 50);

    gameArea.innerHTML = `
        <div class="kongji-game">
            <div class="level-indicator">Level ${level}</div>
            <p>두꺼비를 마구 클릭해서 물을 100%까지 채워주세요! (물이 새는 속도가 빨라집니다)</p>
            <div class="jar">
                <div class="water-level" id="water-fill"></div>
                <div class="hole" style="width:${30 + level*10}px; height:${30 + level*10}px;"></div>
            </div>
            <button class="toad-btn" onclick="fillWater()">🐸</button>
            <h3 id="water-status">0%</h3>
            <div id="next-level-container"></div>
        </div>
    `;

    clearInterval(currentGameInterval);
    currentGameInterval = setInterval(() => {
        if (waterLevel > 0 && waterLevel < 100) {
            waterLevel -= leakAmount; 
            if (waterLevel < 0) waterLevel = 0;
            updateWaterUI();
        }
    }, leakSpeed);
}

function fillWater() {
    if (waterLevel >= 100) return;
    waterLevel += 8; // Need more clicks for higher levels implicitly due to faster leak
    if (waterLevel >= 100) {
        waterLevel = 100;
        clearInterval(currentGameInterval);
        const msg = jarLevel < 3 ? "성공! 다음 레벨로 넘어갈까요?" : "축하합니다! 잔치에 갈 수 있어요! 🎉 모든 레벨 클리어!";
        document.getElementById('water-status').innerText = msg;
        
        if (jarLevel < 3) {
            document.getElementById('next-level-container').innerHTML = 
                `<button class="next-level-btn" onclick="initKongjiGame(${jarLevel + 1})">다음 레벨 도전!</button>`;
        }
    }
    updateWaterUI();
}

function updateWaterUI() {
    if(waterLevel < 100) {
        document.getElementById('water-status').innerText = waterLevel + "%";
    }
    document.getElementById('water-fill').style.height = waterLevel + "%";
}

// 2. Kongji Grain Sorting Game (Levels 1-3)
let grainScore = 0;
let grainLevel = 1;

function initKongjiGrainGame(level) {
    grainLevel = level;
    gameTitle.innerText = `🌾 콩쥐팥쥐 곡식 고르기 (레벨 ${level})`;
    grainScore = 0;
    const targetScore = level * 10;
    const fallSpeed = 1500 - (level * 300); // faster
    
    gameArea.innerHTML = `
        <div class="kongji-game">
            <div class="level-indicator">Level ${level} (목표: ${targetScore}점)</div>
            <p>떨어지는 동그란 '콩(🟢)'만 클릭하세요! '팥(🔴)'을 누르면 감점됩니다.</p>
            <h3 id="grain-score">점수: 0</h3>
            <div class="grain-board" id="grain-board"></div>
            <div id="grain-next-btn"></div>
        </div>
    `;

    const board = document.getElementById('grain-board');
    clearInterval(currentGameInterval);
    
    currentGameInterval = setInterval(() => {
        if (grainScore >= targetScore) {
            clearInterval(currentGameInterval);
            const msg = grainLevel < 3 ? "성공!" : "모든 곡식을 다 골라냈어요! 클리어! 🎉";
            document.getElementById('grain-score').innerText = msg;
            if (grainLevel < 3) {
                document.getElementById('grain-next-btn').innerHTML = 
                    `<button class="next-level-btn" onclick="initKongjiGrainGame(${grainLevel + 1})">다음 레벨 도전!</button>`;
            }
            return;
        }

        const grain = document.createElement('div');
        grain.classList.add('grain');
        const isKong = Math.random() > 0.4; // 60% chance kong
        grain.innerText = isKong ? '🟢' : '🔴';
        grain.style.left = Math.floor(Math.random() * 260) + 'px';
        grain.style.top = '-40px';
        board.appendChild(grain);

        // Animate falling
        let top = -40;
        const fall = setInterval(() => {
            top += 5;
            grain.style.top = top + 'px';
            if (top > 400) {
                clearInterval(fall);
                if(grain.parentNode) grain.remove();
            }
        }, 50);

        grain.onclick = () => {
            if (isKong) {
                grainScore += 1;
            } else {
                grainScore = Math.max(0, grainScore - 1);
            }
            document.getElementById('grain-score').innerText = `점수: ${grainScore}`;
            clearInterval(fall);
            grain.remove();
        };
    }, fallSpeed);
}

// 3. Prince Memory Game (Levels 1-3)
const memoryItems = ['🌹', '🦊', '🐑', '👑', '⭐', '🐍', '🏜️', '🪐'];
let flippedCards = [];
let matchedPairs = 0;
let memoryLevel = 1;

function initPrinceGame(level) {
    memoryLevel = level;
    gameTitle.innerText = `👑 어린왕자 짝맞추기 (레벨 ${level})`;
    matchedPairs = 0;
    flippedCards = [];
    
    // Level 1: 4 pairs (8 cards), Level 2: 6 pairs (12 cards), Level 3: 8 pairs (16 cards)
    const pairsCount = 2 + (level * 2);
    const selectedItems = memoryItems.slice(0, pairsCount);
    let deck = [...selectedItems, ...selectedItems];
    deck.sort(() => Math.random() - 0.5);
    
    // Adjust grid size
    const cols = level === 1 ? 4 : (level === 2 ? 4 : 4);
    
    gameArea.innerHTML = `
        <div class="level-indicator">Level ${level}</div>
        <div class="memory-board" style="grid-template-columns: repeat(${cols}, 1fr);">
            ${deck.map((emoji, index) => `
                <div class="memory-card" data-index="${index}" data-emoji="${emoji}" onclick="flipCard(this)"></div>
            `).join('')}
        </div>
        <h3 id="memory-status" style="margin-top:20px; width:100%;">카드를 뒤집어 짝을 맞추세요!</h3>
        <div id="memory-next-btn" style="width:100%; text-align:center;"></div>
    `;
}

function flipCard(cardElem) {
    if (flippedCards.length >= 2 || cardElem.classList.contains('flipped') || cardElem.classList.contains('matched')) {
        return;
    }

    cardElem.classList.add('flipped');
    cardElem.innerText = cardElem.getAttribute('data-emoji');
    flippedCards.push(cardElem);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.getAttribute('data-emoji') === card2.getAttribute('data-emoji')) {
        card1.classList.replace('flipped', 'matched');
        card2.classList.replace('flipped', 'matched');
        matchedPairs++;
        
        const totalPairs = 2 + (memoryLevel * 2);
        if (matchedPairs === totalPairs) {
            const msg = memoryLevel < 3 ? "성공! 다음 레벨로 가볼까요?" : "성공! 모든 짝을 다 맞췄어요! ✨";
            document.getElementById('memory-status').innerText = msg;
            if (memoryLevel < 3) {
                document.getElementById('memory-next-btn').innerHTML = 
                    `<button class="next-level-btn" onclick="initPrinceGame(${memoryLevel + 1})">다음 레벨 도전!</button>`;
            }
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '';
        card2.innerText = '';
    }
    
    flippedCards = [];
}

// 4. Prince Star Catching Game (Levels 1-3)
let starScore = 0;
let starLevel = 1;
let basketX = 220; // center

function initPrinceStarGame(level) {
    starLevel = level;
    gameTitle.innerText = `⭐ 어린왕자 별 잡기 (레벨 ${level})`;
    starScore = 0;
    const targetScore = level * 15;
    const fallSpeed = 1000 - (level * 200);
    
    gameArea.innerHTML = `
        <div class="kongji-game" style="width:100%">
            <div class="level-indicator">Level ${level} (목표: ${targetScore}점)</div>
            <p>마우스를 좌우로 움직여서 떨어지는 별을 바구니에 담으세요!</p>
            <h3 id="star-score">점수: 0</h3>
            <div class="star-board" id="star-board" onmousemove="moveBasket(event)">
                <div class="basket" id="basket">🧺</div>
            </div>
            <div id="star-next-btn" style="margin-top:15px;"></div>
        </div>
    `;

    const board = document.getElementById('star-board');
    clearInterval(currentGameInterval);
    
    currentGameInterval = setInterval(() => {
        if (starScore >= targetScore) {
            clearInterval(currentGameInterval);
            const msg = starLevel < 3 ? "성공!" : "밤하늘의 별을 모두 모았어요! 클리어! 🎉";
            document.getElementById('star-score').innerText = msg;
            if (starLevel < 3) {
                document.getElementById('star-next-btn').innerHTML = 
                    `<button class="next-level-btn" onclick="initPrinceStarGame(${starLevel + 1})">다음 레벨 도전!</button>`;
            }
            return;
        }

        const star = document.createElement('div');
        star.classList.add('star');
        star.innerText = '⭐';
        star.style.left = Math.floor(Math.random() * (board.offsetWidth - 30)) + 'px';
        star.style.top = '-30px';
        board.appendChild(star);

        let top = -30;
        const fall = setInterval(() => {
            top += (5 + level); // falls faster based on level
            star.style.top = top + 'px';
            
            // Collision detection
            const basket = document.getElementById('basket');
            if (basket && top > 330 && top < 370) {
                const starLeft = parseInt(star.style.left);
                const basketLeft = parseInt(basket.style.left || 0) - 30; // approx width adjustment
                
                if (Math.abs(starLeft - basketX) < 40) {
                    starScore++;
                    document.getElementById('star-score').innerText = `점수: ${starScore}`;
                    clearInterval(fall);
                    star.remove();
                }
            }

            if (top > 400) {
                clearInterval(fall);
                if(star.parentNode) star.remove();
            }
        }, 50);

    }, fallSpeed);
}

function moveBasket(e) {
    const board = document.getElementById('star-board');
    const basket = document.getElementById('basket');
    if (!basket) return;
    
    // Get mouse position relative to board
    const rect = board.getBoundingClientRect();
    let x = e.clientX - rect.left;
    
    // Boundary check
    if (x < 30) x = 30;
    if (x > board.offsetWidth - 30) x = board.offsetWidth - 30;
    
    basketX = x - 30; // center offset
    basket.style.left = x + 'px';
}
