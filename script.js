// ==========================================
// 1. 資料定義 (Trigrams & 完整 64 Hexagrams)
// ==========================================

const trigrams = {
    '111': { name: '乾', nature: '天' },
    '110': { name: '兌', nature: '澤' },
    '101': { name: '離', nature: '火' },
    '100': { name: '震', nature: '雷' },
    '011': { name: '巽', nature: '風' },
    '010': { name: '坎', nature: '水' },
    '001': { name: '艮', nature: '山' },
    '000': { name: '坤', nature: '地' }
};

const hexagramsDatabase = {
    '乾乾': { number: 1,  name: '乾', fullName: '乾為天', judgment: '元亨，利貞。' },
    '坤坤': { number: 2,  name: '坤', fullName: '坤為地', judgment: '元亨，利牝馬之貞。' },
    '水雷': { number: 3,  name: '屯', fullName: '水雷屯', judgment: '元亨，利貞。勿用有攸往，利建侯。' },
    '山水': { number: 4,  name: '蒙', fullName: '山水蒙', judgment: '亨。匪我求童蒙，童蒙求我。' },
    '水天': { number: 5,  name: '需', fullName: '水天需', judgment: '有孚，光亨，貞吉。利涉大川。' },
    '天水': { number: 6,  name: '訟', fullName: '天水訟', judgment: '有孚，窒。惕中吉。終凶。' },
    '地水': { number: 7,  name: '師', fullName: '地水師', judgment: '貞，丈人吉，無咎。' },
    '水地': { number: 8,  name: '比', fullName: '水地比', judgment: '吉。原筮元永貞，無咎。' },
    '風天': { number: 9,  name: '小畜', fullName: '風天小畜', judgment: '亨。密雲不雨，自我西郊。' },
    '天澤': { number: 10, name: '履', fullName: '天澤履', judgment: '履虎尾，不咥人，亨。' },
    '地天': { number: 11, name: '泰', fullName: '地天泰', judgment: '小往大來，吉亨。' },
    '天地': { number: 12, name: '否', fullName: '天地否', judgment: '否之匪人，不利君子貞。' },
    '天火': { number: 13, name: '同人', fullName: '天火同人', judgment: '同人於野，亨。利涉大川。' },
    '火天': { number: 14, name: '大有', fullName: '火天大有', judgment: '元亨。' },
    '地山': { number: 15, name: '謙', fullName: '地山謙', judgment: '亨，君子有終。' },
    '雷地': { number: 16, name: '豫', fullName: '雷地豫', judgment: '利建侯行師。' },
    '澤雷': { number: 17, name: '隨', fullName: '澤雷隨', judgment: '元亨利貞，無咎。' },
    '山風': { number: 18, name: '蠱', fullName: '山風蠱', judgment: '元亨，利涉大川。' },
    '地澤': { number: 19, name: '臨', fullName: '地澤臨', judgment: '元亨利貞。至於八月有凶。' },
    '風地': { number: 20, name: '觀', fullName: '風地觀', judgment: '觀，盥而不薦，有孚顒若。' },
    '火雷': { number: 21, name: '噬嗑', fullName: '火雷噬嗑', judgment: '亨。利用獄。' },
    '山火': { number: 22, name: '賁', fullName: '山火賁', judgment: '亨。小利有攸往。' },
    '山地': { number: 23, name: '剝', fullName: '山地剝', judgment: '不利有攸往。' },
    '地雷': { number: 24, name: '復', fullName: '地雷復', judgment: '亨。出入無疾，朋來無咎。' },
    '天雷': { number: 25, name: '無妄', fullName: '天雷無妄', judgment: '元亨利貞。其匪正有眚。' },
    '山天': { number: 26, name: '大畜', fullName: '山天大畜', judgment: '利貞，不家食吉，利涉大川。' },
    '山雷': { number: 27, name: '頤', fullName: '山雷頤', judgment: '貞吉。觀頤，自求口實。' },
    '澤風': { number: 28, name: '大過', fullName: '澤風大過', judgment: '棟橈，利有攸往，亨。' },
    '坎坎': { number: 29, name: '坎', fullName: '坎為水', judgment: '習坎，有孚，維心亨，行有尚。' },
    '離離': { number: 30, name: '離', fullName: '離為火', judgment: '利貞，亨。畜牝牛，吉。' },
    '澤山': { number: 31, name: '咸', fullName: '澤山咸', judgment: '亨，利貞，取女吉。' },
    '雷風': { number: 32, name: '恆', fullName: '雷風恆', judgment: '亨，無咎，利貞，利有攸往。' },
    '天山': { number: 33, name: '遁', fullName: '天山遁', judgment: '亨，小利貞。' },
    '雷天': { number: 34, name: '大壯', fullName: '雷天大壯', judgment: '利貞。' },
    '火地': { number: 35, name: '晉', fullName: '火地晉', judgment: '康侯用錫馬蕃庶，晝日三接。' },
    '地火': { number: 36, name: '明夷', fullName: '地火明夷', judgment: '利艱貞。' },
    '風火': { number: 37, name: '家人', fullName: '風火家人', judgment: '利女貞。' },
    '火澤': { number: 38, name: '睽', fullName: '火澤睽', judgment: '小事吉。' },
    '水山': { number: 39, name: '蹇', fullName: '水山蹇', judgment: '利西南，不利東北；利見大人，貞吉。' },
    '雷水': { number: 40, name: '解', fullName: '雷水解', judgment: '利西南，無所往，其來復吉。' },
    '山澤': { number: 41, name: '損', fullName: '山澤損', judgment: '損，有孚，元吉，無咎，可貞。' },
    '風雷': { number: 42, name: '益', fullName: '風雷益', judgment: '利有攸往，利涉大川。' },
    '澤天': { number: 43, name: '夬', fullName: '澤天夬', judgment: '揚於王庭，孚號，有厲。' },
    '天風': { number: 44, name: '姤', fullName: '天風姤', judgment: '女壯，勿用取女。' },
    '澤地': { number: 45, name: '萃', fullName: '澤地萃', judgment: '亨。王假有廟，利見大人，亨，利貞。' },
    '地風': { number: 46, name: '升', fullName: '地風升', judgment: '元亨，用見大人，勿恤。南征吉。' },
    '澤水': { number: 47, name: '困', fullName: '澤水困', judgment: '亨，貞，大人吉，無咎，有言不信。' },
    '水風': { number: 48, name: '井', fullName: '水風井', judgment: '改邑不改井，無喪無得，往來井井。' },
    '澤火': { number: 49, name: '革', fullName: '澤火革', judgment: '己日乃孚，元亨利貞，悔亡。' },
    '火風': { number: 50, name: '鼎', fullName: '火風鼎', judgment: '元吉，亨。' },
    '雷雷': { number: 51, name: '震', fullName: '雷震為', judgment: '亨。震來虩虩，笑言啞啞。' },
    '山山': { number: 52, name: '艮', fullName: '艮為山', judgment: '艮其背，不獲其身，行其庭，不見其人。' },
    '風山': { number: 53, name: '漸', fullName: '風山漸', judgment: '女歸吉，利貞。' },
    '雷澤': { number: 54, name: '歸妹', fullName: '雷澤歸妹', judgment: '征凶，無攸利。' },
    '雷火': { number: 55, name: '豐', fullName: '雷火豐', judgment: '亨，王假之，勿憂，宜日中。' },
    '火山': { number: 56, name: '旅', fullName: '火山旅', judgment: '小亨，旅貞吉。' },
    '風風': { number: 57, name: '巽', fullName: '巽為風', judgment: '小亨，利攸往，利見大人。' },
    '澤澤': { number: 58, name: '兌', fullName: '兌為澤', judgment: '亨，利貞。' },
    '風水': { number: 59, name: '渙', fullName: '風水渙', judgment: '亨。王假有廟，利涉大川，利貞。' },
    '水澤': { number: 60, name: '節', fullName: '水澤節', judgment: '亨。苦節不可貞。' },
    '風澤': { number: 61, name: '中孚', fullName: '風澤中孚', judgment: '豚魚吉，利涉大川，利貞。' },
    '雷山': { number: 62, name: '小過', fullName: '雷山小過', judgment: '亨，利貞。可小事，不可大事。' },
    '水火': { number: 63, name: '既濟', fullName: '水火既濟', judgment: '亨，小利貞，初吉終亂。' },
    '火水': { number: 64, name: '未濟', fullName: '火水未濟', judgment: '亨，小狐濡尾，吝無攸利。' }
};

// ==========================================
// 2. 爻辭與理數動態生成器
// ==========================================
function generateLineText(bits, movingLine, hexName) {
    const movingIndex = movingLine - 1;
    const isYang = bits[movingIndex] === 1;
    const lowerBits = bits.slice(0, 3).join('');
    const upperBits = bits.slice(3, 6).join('');
    const natureKey = (trigrams[upperBits]?.nature || '坤') + (trigrams[lowerBits]?.nature || '坤');
    const judgment = hexagramsDatabase[natureKey]?.judgment || '順應天時，利貞。';
    
    let lineTitle = '';
    if (movingLine === 1) lineTitle = isYang ? '初九' : '初六';
    else if (movingLine === 2) lineTitle = isYang ? '九二' : '六二';
    else if (movingLine === 3) lineTitle = isYang ? '九三' : '六三';
    else if (movingLine === 4) lineTitle = isYang ? '九四' : '六四';
    else if (movingLine === 5) lineTitle = isYang ? '九五' : '六五';
    else if (movingLine === 6) lineTitle = isYang ? '上九' : '上六';
    
    return `【${hexName}】之【${lineTitle}】。
爻性：當前動爻為「${isYang ? '純陽剛爻' : '陰柔得位爻'}」。
本卦大象提示：${judgment}
核心理數：此爻發動，提示事情在發展的第 ${movingLine} 階段發生關鍵變局，觸發後面變卦。`;
}

// ==========================================
// 3. 核心算法 (由下往上精準對照)
// ==========================================
function getTrigramsFromBits(bits) {
    const lowerBits = bits.slice(0, 3).join('');
    const upperBits = bits.slice(3, 6).join('');
    return {
        lower: trigrams[lowerBits]?.name || '坤',
        upper: trigrams[upperBits]?.name || '坤',
        lowerNature: trigrams[lowerBits]?.nature || '地',
        upperNature: trigrams[upperBits]?.nature || '地'
    };
}

function lookupHexagram(bits) {
    const { upper, lower, upperNature, lowerNature } = getTrigramsFromBits(bits);
    const key = upperNature + lowerNature;
    if (hexagramsDatabase[key]) return hexagramsDatabase[key].fullName;
    return `${upper}${lower}卦`;
}

// ==========================================
// 4. 核心互動控管區 (滑鼠拖曳、手指觸控、手機實體搖晃)
// ==========================================
const diceCup = document.getElementById('dice-cup');
const questionInput = document.getElementById('question');
const resultSection = document.getElementById('result-section');
const promptSection = document.getElementById('prompt-section');
const motionBtn = document.getElementById('motion-btn');
const hintOrElement = document.querySelector('.hint-or');

let isDragging = false;
let startX, startY;
let shakeCount = 0;
let isShakingRealPhone = false;
const diceSymbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// --- 互動 A：滑鼠 & 手指觸控拖曳搖晃 ---
if (diceCup) {
    diceCup.addEventListener('mousedown', startDragShake);
    diceCup.addEventListener('touchstart', startDragShake, { passive: true });
}

window.addEventListener('mousemove', preserveDragShake);
window.addEventListener('touchmove', preserveDragShake, { passive: false });
window.addEventListener('mouseup', stopDragShake);
window.addEventListener('touchend', stopDragShake);

function startDragShake(e) {
    const questionText = questionInput.value.trim();
    if (!questionText) {
        alert('請先誠心輸入您想請示的問題，並在心中默念一次，再起卦喔！');
        return;
    }
    isDragging = true;
    shakeCount = 0;
    startX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    startY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    diceCup.classList.add('shaking');
}

function preserveDragShake(e) {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches ? e.touches[0].clientX : startX);
    const currentY = e.clientY || (e.touches ? e.touches[0].clientY : startY);
    
    const distance = Math.abs(currentX - startX) + Math.abs(currentY - startY);
    if (distance > 15) {
        shakeCount++;
        randomizeDiceVisuals();
        startX = currentX;
        startY = currentY;
    }
}

function stopDragShake() {
    if (!isDragging) return;
    isDragging = false;
    diceCup.classList.remove('shaking');
    if (shakeCount > 5) {
        executeDivination();
    } else {
        alert('起卦需要注入誠意，請按住法器並「用力來回滑動搖晃」它！');
    }
}

function randomizeDiceVisuals() {
    const diceDivs = diceCup.querySelectorAll('.die');
    diceDivs.forEach(die => {
        die.innerText = diceSymbols[Math.floor(Math.random() * 6)];
    });
}

// --- 互動 B：手機實體重力搖晃感應 (Web DeviceMotion) ---
let lastX = null, lastY = null, lastZ = null;
const SHAKE_THRESHOLD = 15; 
let realPhoneShakeTimer = null;

function handleDeviceMotion(event) {
    const questionText = questionInput.value.trim();
    if (!questionText) return;

    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;

    let x = acceleration.x;
    let y = acceleration.y;
    let z = acceleration.z;

    if (lastX === null) {
        lastX = x; lastY = y; lastZ = z;
        return;
    }

    let deltaX = Math.abs(x - lastX);
    let deltaY = Math.abs(y - lastY);
    let deltaZ = Math.abs(z - lastZ);

    if ((deltaX > SHAKE_THRESHOLD && deltaY > SHAKE_THRESHOLD) || 
        (deltaX > SHAKE_THRESHOLD && deltaZ > SHAKE_THRESHOLD) || 
        (deltaY > SHAKE_THRESHOLD && deltaZ > SHAKE_THRESHOLD)) {
        
        if (!isShakingRealPhone) {
            isShakingRealPhone = true;
            diceCup.classList.add('shaking');
        }

        randomizeDiceVisuals();

        clearTimeout(realPhoneShakeTimer);
        realPhoneShakeTimer = setTimeout(() => {
            isShakingRealPhone = false;
            diceCup.classList.remove('shaking');
            executeDivination();
        }, 1000);
    }

    lastX = x; lastY = y; lastZ = z;
}

// --- 互動 C：裝置陀螺儀授權與電腦版「或」字環境動態控制 ---
if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    // 確判為需要點擊授權的行動裝置 (如 iOS) -> 展開按鈕與或字
    if (motionBtn) motionBtn.classList.remove('hidden');
    if (hintOrElement) hintOrElement.classList.remove('hidden');
    
    motionBtn.addEventListener('click', () => {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    if (motionBtn) motionBtn.classList.add('hidden');
                    if (hintOrElement) hintOrElement.classList.add('hidden'); // 授權成功後同時藏掉「或」字
                    window.addEventListener('devicemotion', handleDeviceMotion, false);
                }
            })
            .catch(console.error);
    });
} else {
    // Android 或不需授權的裝置直接監聽
    window.addEventListener('devicemotion', handleDeviceMotion, false);
    
    // 如果是一般電腦、桌機 (完全不支援 DeviceMotion 且無觸控觸發)
    if (typeof DeviceMotionEvent === 'undefined' || !('ontouchstart' in window)) {
        if (motionBtn) motionBtn.classList.add('hidden');
        if (hintOrElement) hintOrElement.classList.add('hidden'); // ✨ 電腦端環境防漏：自動隱藏「或」字
    }
}

// --- 核心開卦與渲染邏輯 ---
function executeDivination() {
    const questionText = questionInput.value.trim();
    if (!questionText) return;

    const mainBits = [];
    for (let i = 0; i < 6; i++) {
        mainBits.push(Math.random() > 0.5 ? 1 : 0);
    }

    const movingLine = Math.floor(Math.random() * 6) + 1; 
    const movingIndex = movingLine - 1;

    const { upper, lower } = getTrigramsFromBits(mainBits);
    const mainHexName = lookupHexagram(mainBits);

    const changedBits = [...mainBits];
    changedBits[movingIndex] = changedBits[movingIndex] === 1 ? 0 : 1;
    const changedHexName = lookupHexagram(changedBits);

    const mutualBits = [
        mainBits[1], mainBits[2], mainBits[3],
        mainBits[2], mainBits[3], mainBits[4]
    ];
    const mutualHexName = lookupHexagram(mutualBits);

    const oppositeBits = mainBits.map(b => b === 1 ? 0 : 1);
    const oppositeHexName = lookupHexagram(oppositeBits);

    const reversedBits = [...mainBits].reverse();
    const reversedHexName = lookupHexagram(reversedBits);

    const lineText = generateLineText(mainBits, movingLine, mainHexName);
    const lineNames = ['初', '二', '三', '四', '五', '上'];
    const movingLineChinese = `${lineNames[movingIndex]}爻`;

    document.getElementById('res-upper').innerText = upper;
    document.getElementById('res-lower').innerText = lower;
    document.getElementById('res-moving').innerText = movingLineChinese;
    
    document.getElementById('hex-main').innerText = mainHexName;
    document.getElementById('hex-changed').innerText = changedHexName;
    document.getElementById('hex-mutual').innerText = mutualHexName;
    document.getElementById('hex-opposite').innerText = oppositeHexName;
    document.getElementById('hex-reversed').innerText = reversedHexName;
    
    document.getElementById('res-line-text').innerText = lineText;

    const diagramContainer = document.getElementById('hexagram-diagram');
    diagramContainer.innerHTML = '';
    
    for (let i = 5; i >= 0; i--) {
        const isYang = mainBits[i] === 1;
        const isMoving = (i === movingIndex);
        
        const lineDiv = document.createElement('div');
        lineDiv.className = `line-item ${isMoving ? 'moving-line' : ''}`;
        
        const lineGraphic = isYang ? '━━━━━━━━━━━' : '━━━━   ━━━━';
        const arrow = isMoving ? ' 🌟 ← 動爻' : '';
        
        lineDiv.innerText = `${lineGraphic}${arrow}`;
        diagramContainer.appendChild(lineDiv);
    }

    // ✨ 修正：全新升級的 Prompt 模板結構（直白中文解碼＋提問引導診斷）
    const generatedPrompt = `請用梅花易數與易經象數派角度分析以下卦象。

【請示問題】
${questionText}

【起卦結果】
上卦：${upper}
下卦：${lower}
動爻：${movingLineChinese}

本卦：${mainHexName}
變卦：${changedHexName}
互卦：${mutualHexName}
錯卦：${oppositeHexName}
綜卦：${reversedHexName}

動爻爻辭：
${lineText}

【執行指令】
請嚴格遵循以下要求進行深度解析：
1. 當前局勢：說明目前面臨的真實狀況與隱含的環境因素。
2. 未來進程：預測事情接下來的發展趨勢、轉折點與潛在阻礙。
3. 行動戰略：結合動爻階段，給予明確、具體且可操作的下一步行動建議。
4. 直擊解答：針對使用者提出的問題，給出最核心、不繞圈子的答案。

【核心原則】
⚠️ 請用「白話中文」很直接地解釋，拒絕使用空洞、生硬的神祕學套話或過度神秘化，要把理數轉化為現代人的生活與決策邏輯。
⚠️ 如果你發現使用者輸入的問題問法不夠精確、細節不足（導致理數無法完美對照現實），請在文章最後「特別開闢一個段落」，針對使用者的提問方式給予具體的改善建議，教他下次應該如何精準補充資訊。`;

    document.getElementById('prompt-content').value = generatedPrompt;

    resultSection.classList.remove('hidden');
    promptSection.classList.remove('hidden');
    promptSection.scrollIntoView({ behavior: 'smooth' });
}

// --- 一鍵複製功能 ---
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
        const promptText = document.getElementById('prompt-content');
        promptText.select();
        promptText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(promptText.value).then(() => {
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 2000);
        }).catch(() => {
            alert('複製失敗，請手動複製。');
        });
    });
}