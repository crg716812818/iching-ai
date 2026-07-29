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
// 占問分類與文案模板（純前端，不連接任何 AI 服務）
// ==========================================
const inquiryTemplates = [
    { id: 'love_feeling', category: 'love', title: '對方的真實想法', subject: ['對方姓名', '對方生日'], template: '{person}想占問，{subject}目前對我的真實想法為何？以此起卦時間，在{location}起卦，請分析對方目前的心態、對我的好感程度、是否有隱藏想法、目前最大的阻礙，以及未來三個月雙方關係的發展。' },
    { id: 'love_future', category: 'love', title: '感情未來發展', subject: ['對方姓名', '對方生日'], template: '{person}想占問，我與{subject}的感情未來將如何發展？以此起卦時間，在{location}起卦，請分析彼此緣分、目前互動狀態、關係中的阻礙、是否適合繼續投入，以及未來三至六個月的發展。' },
    { id: 'love_reconcile', category: 'love', title: '是否有機會復合', subject: ['對方姓名', '對方生日'], template: '{person}想占問，我與{subject}是否還有復合機會？以此起卦時間，在{location}起卦，請分析對方心意、分開的核心原因、復合契機與阻礙，以及未來三個月是否有適合主動聯絡的時機。' },
    { id: 'love_confess', category: 'love', title: '是否適合告白', subject: ['對方姓名', '對方生日'], template: '{person}想占問，目前是否適合向{subject}表明心意？以此起卦時間，在{location}起卦，請分析雙方好感、告白成功機會、適合的方式與時機、可能風險，以及未來三個月關係走向。' },
    { id: 'love_marriage', category: 'love', title: '婚姻與長期緣分', subject: ['對方姓名', '對方生日'], template: '{person}想占問，我與{subject}是否適合走向婚姻或長期關係？以此起卦時間，在{location}起卦，請分析價值觀與緣分、相處優勢、潛在衝突、外在阻力，以及長期關係的發展與建議。' },
    { id: 'love_custom', category: 'love', title: '自訂感情問題', subject: ['對方姓名', '對方生日'], custom: true },

    { id: 'career_change', category: 'career', title: '是否適合轉換工作', subject: ['公司名稱', '職位或機會'], template: '{person}想占問，目前是否適合轉換工作{subjectPhrase}？以此起卦時間，在{location}起卦，請分析目前工作運勢、轉職成功機率、可能遇到的阻礙、是否有更好的發展機會，以及未來三個月整體職涯發展。' },
    { id: 'career_stay', category: 'career', title: '是否應該留任', subject: ['公司名稱', '目前職位'], template: '{person}想占問，繼續留在目前工作{subjectPhrase}是否有利？以此起卦時間，在{location}起卦，請分析發展空間、主管與同事助力、潛在阻礙、留任與離開的利弊，以及未來六個月職涯趨勢。' },
    { id: 'career_interview', category: 'career', title: '面試與錄取機會', subject: ['公司名稱', '應徵職位'], template: '{person}想占問，應徵機會{subjectPhrase}的結果是否順利？以此起卦時間，在{location}起卦，請分析錄取機率、個人優勢、競爭與阻礙、後續時程，以及這份機會是否適合長期發展。' },
    { id: 'career_promotion', category: 'career', title: '升遷與職涯發展', subject: ['公司名稱', '目前職位'], template: '{person}想占問，目前工作{subjectPhrase}是否有升遷與突破機會？以此起卦時間，在{location}起卦，請分析職場運勢、貴人助力、需要補強之處、升遷阻礙，以及未來三至六個月的發展。' },
    { id: 'career_business', category: 'career', title: '是否適合創業', subject: ['產業', '合作對象'], template: '{person}想占問，投入創業計畫{subjectPhrase}是否適合？以此起卦時間，在{location}起卦，請分析時機、資源與合作關係、主要風險、獲利可能，以及未來六個月應採取的行動。' },
    { id: 'career_custom', category: 'career', title: '自訂事業問題', subject: ['公司或產業', '職位或對象'], custom: true },

    { id: 'health_overall', category: 'health', title: '近期健康狀況', subject: ['關注部位', '症狀或狀況'], template: '{person}想占問，目前身體狀況{subjectPhrase}是否需要特別注意？以此起卦時間，在{location}起卦，請分析目前健康狀況、需要留意的部位、可能的問題、近期恢復趨勢，以及未來三個月健康運勢。' },
    { id: 'health_recovery', category: 'health', title: '恢復與療養趨勢', subject: ['病症或部位', '治療方式'], template: '{person}想占問，目前健康問題{subjectPhrase}的恢復與療養趨勢如何？以此起卦時間，在{location}起卦，請分析恢復進度、影響因素、需要留意的風險、生活調整方向，以及未來三個月的趨勢。' },
    { id: 'health_family', category: 'health', title: '家人健康關懷', subject: ['家人姓名', '與當事人關係'], template: '{person}想占問，家人{subjectPhrase}近期健康是否需要特別留意？以此起卦時間，在{location}起卦，請分析目前狀況、需注意的部位與徵兆、恢復趨勢、照護重點，以及未來三個月健康運勢。' },
    { id: 'health_exam', category: 'health', title: '檢查或治療是否順利', subject: ['檢查或治療項目', '醫療院所'], template: '{person}想占問，即將進行的檢查或治療{subjectPhrase}是否順利？以此起卦時間，在{location}起卦，請分析過程趨勢、可能阻礙、恢復情況、應留意之處，以及如何以穩健態度因應。' },
    { id: 'health_mind', category: 'health', title: '身心壓力與調養', subject: ['壓力來源', '持續時間'], template: '{person}想占問，目前身心壓力{subjectPhrase}應如何調整？以此起卦時間，在{location}起卦，請分析壓力根源、身心影響、改善契機、需避免的情況，以及未來三個月的調養方向。' },
    { id: 'health_custom', category: 'health', title: '自訂健康問題', subject: ['關注部位或對象', '相關狀況'], custom: true },

    { id: 'wealth_fortune', category: 'wealth', title: '最近財運如何', subject: ['收入來源', '財務目標'], template: '{person}想占問，目前整體財運{subjectPhrase}如何？以此起卦時間，在{location}起卦，請分析目前財運趨勢、正財、偏財、可能出現的機會、需要注意的風險，以及未來三個月財務發展。' },
    { id: 'wealth_stock', category: 'wealth', title: '是否適合買股票', subject: ['股票代號', '預計投入金額或持有成本'], template: '{person}想占問，若今日買入或繼續持有「{subjectValue}」，目前預計投入金額或持有成本為「{subjectExtra}」，以此起卦時間，在{location}起卦，請分析未來三至六個月的走勢、是否適合繼續持有、是否適合加碼、最大的風險，以及整體投資結果是否有利。' },
    { id: 'wealth_stock_target', category: 'wealth', title: '股票目標價與漲跌', subject: ['股票名稱或代號及目前價格', '時間區間與目標價格'], template: '{person}想占問，今日「{subjectValue}」，在「{subjectExtra}」之前，股價是否可能上漲或下跌至指定目標價？以此起卦時間，在{location}起卦，請分析期間內的趨勢方向、抵達目標價的可能性、重要轉折、最大風險，以及適合觀察或採取行動的時機。' },
    { id: 'wealth_add', category: 'wealth', title: '是否適合加碼', subject: ['投資標的', '目前成本'], template: '{person}想占問，目前對{subject}加碼是否有利？以此起卦時間，在{location}起卦，請分析標的趨勢、加碼時機、資金風險、可能回報，以及未來三至六個月適合採取的策略。' },
    { id: 'wealth_stop', category: 'wealth', title: '是否適合停損', subject: ['投資標的', '目前成本或虧損'], template: '{person}想占問，目前對{subject}停損、續抱或減碼何者較有利？以此起卦時間，在{location}起卦，請分析後續趨勢、反彈機會、最大風險、決策時機，以及未來三至六個月的結果。' },
    { id: 'wealth_business', category: 'wealth', title: '創業財務前景', subject: ['產業', '預計投入金額'], template: '{person}想占問，投入創業{subjectPhrase}的財務前景是否有利？以此起卦時間，在{location}起卦，請分析市場機會、現金流、合作與資源、主要風險，以及未來六個月的發展與建議。' },
    { id: 'wealth_home', category: 'wealth', title: '是否適合買房', subject: ['房屋地址或建案名稱', '總價、預算或預計購買時間'], template: '{person}想占問，購買「{subjectValue}」，相關預算與時程為「{subjectExtra}」，對目前的我是否合適且有利？以此起卦時間，在{location}起卦，請分析購屋時機、財務負擔、房屋與我的緣分、可能遇到的風險、未來保值發展，以及是否適合成交。' },
    { id: 'wealth_custom', category: 'wealth', title: '自訂財富問題', subject: ['標的或項目', '金額或成本'], custom: true },

    { id: 'life_home', category: 'life', title: '地址與居住吉凶', subject: ['完整地址或社區名稱', '預計居住者或居住期間'], template: '{person}想占問，位於「{subjectValue}」的住所，對「{subjectExtra}」是否適合居住？以此起卦時間，在{location}起卦，請分析此處與居住者的契合程度、居住後的整體運勢、家庭與身心影響、需要留意之處，以及長期居住是否吉利。' },
    { id: 'life_move', category: 'life', title: '是否適合搬家', subject: ['預計搬往地點', '預計搬遷時間'], template: '{person}想占問，搬往「{subjectValue}」，並預計於「{subjectExtra}」搬遷，是否是合適的決定？以此起卦時間，在{location}起卦，請分析搬遷時機、新環境的助力、可能阻礙、對生活與家庭的影響，以及搬遷後三至六個月的發展。' },
    { id: 'life_travel', category: 'life', title: '旅行是否順利', subject: ['目的地', '出發日期或旅行期間'], template: '{person}想占問，前往「{subjectValue}」並於「{subjectExtra}」進行的旅程是否順利？以此起卦時間，在{location}起卦，請分析行程整體趨勢、交通與安全、可能的阻礙、需要留意的時機，以及此行是否能達成預期目的。' },
    { id: 'life_decision', category: 'life', title: '重要選擇與決定', subject: ['考慮中的選項', '希望決定的期限'], template: '{person}想占問，目前面對「{subjectValue}」的選擇，並希望在「{subjectExtra}」前做出決定，哪個方向更符合當下時運？以此起卦時間，在{location}起卦，請分析各方向的利弊、潛在阻礙、關鍵轉折、未來發展，以及最適合採取的行動。' },
    { id: 'life_lost', category: 'life', title: '尋找遺失物品', subject: ['遺失物品', '最後看見的地點與時間'], template: '{person}想占問，遺失的「{subjectValue}」，最後於「{subjectExtra}」附近出現，是否有機會找回？以此起卦時間，在{location}起卦，請分析物品可能所在方向與環境、找回機會、應優先尋找之處、可能的協助者，以及適合採取的行動。' },
    { id: 'life_family', category: 'life', title: '家庭關係與相處', subject: ['家人姓名或稱謂', '目前主要狀況'], template: '{person}想占問，與家人「{subjectValue}」之間目前面對「{subjectExtra}」的狀況，應如何改善？以此起卦時間，在{location}起卦，請分析彼此心態、問題根源、溝通阻礙、關係轉機，以及未來三個月最合適的相處方式。' },
    { id: 'life_custom', category: 'life', title: '自訂生活問題', subject: ['相關地點或對象', '時間或背景'], custom: true }
];

const inquiryCategories = [
    { id: 'love', icon: '♥', label: '感情' }, { id: 'career', icon: '▣', label: '事業' },
    { id: 'health', icon: '✚', label: '健康' }, { id: 'wealth', icon: '◇', label: '財富' },
    { id: 'life', icon: '⌂', label: '生活' }
];

let activeCategory = 'love';
let activeTemplate = inquiryTemplates[0];
let inquiryConfirmed = false;

function normalizeBirthday(value) {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 8) return `${digits.slice(0, 4)}/${digits.slice(4, 6)}/${digits.slice(6)}`;
    return value.trim().replaceAll('-', '/');
}

function isValidBirthday(value) {
    if (!value) return true;
    const match = value.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
    if (!match) return false;
    const [, year, month, day] = match.map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function validateBirthday(input, message, enabled = true) {
    if (!enabled) {
        input.removeAttribute('aria-invalid');
        message.classList.remove('error');
        message.textContent = '';
        return true;
    }
    input.value = normalizeBirthday(input.value);
    const valid = isValidBirthday(input.value);
    input.setAttribute('aria-invalid', String(!valid));
    message.classList.toggle('error', !valid);
    message.textContent = valid ? '格式：YYYY/MM/DD' : '請輸入有效日期，例如 1999/02/05';
    return valid;
}

function updateStepProgress() {
    const birthday = document.getElementById('person-birthday');
    const steps = {
        1: Boolean(activeTemplate),
        2: Boolean(document.getElementById('person-name').value.trim()) && isValidBirthday(birthday.value),
        3: Boolean(document.getElementById('question').value.trim()),
        4: !document.getElementById('result-section').classList.contains('hidden'),
        5: !document.getElementById('prompt-section').classList.contains('hidden')
    };
    document.querySelectorAll('[data-step]').forEach(section => section.classList.toggle('completed', steps[section.dataset.step]));
}

function personDescription() {
    const name = document.getElementById('person-name').value.trim() || '當事人';
    const birthday = document.getElementById('person-birthday').value.trim();
    return `${name}${birthday ? `（${birthday}生）` : ''}`;
}

function currentLocation() {
    const location = document.getElementById('location').value;
    return location === 'other' ? (document.getElementById('custom-location').value.trim() || '所處地點') : location;
}

function updateInquiry(force = false) {
    if (!activeTemplate) return;
    const value = document.getElementById('subject-value').value.trim();
    const extra = document.getElementById('subject-extra').value.trim();
    const subject = [value, extra].filter(Boolean).join('（') + (value && extra ? '）' : '');
    const subjectPhrase = subject ? `（${subject}）` : '';
    const custom = document.getElementById('custom-question').value.trim() || '請在此寫下想問的問題';
    let text = activeTemplate.custom
        ? `${personDescription()}想占問：「${custom}」。以此起卦時間，在${currentLocation()}起卦，請依照梅花易數與易經象數派角度，分析事情目前狀況、未來發展趨勢、可能遇到的阻礙，以及最終結果與建議。`
        : activeTemplate.template
            .replaceAll('{person}', personDescription())
            .replaceAll('{subject}', subject || activeTemplate.subject[0])
            .replaceAll('{subjectValue}', value || activeTemplate.subject[0])
            .replaceAll('{subjectExtra}', extra || activeTemplate.subject[1])
            .replaceAll('{subjectPhrase}', subjectPhrase)
            .replaceAll('{location}', currentLocation());
    const additional = document.getElementById('additional-info').value.trim();
    if (additional) text += ` 補充背景：${additional}。`;
    const question = document.getElementById('question');
    if (force || question.dataset.userEdited !== 'true') question.value = text;
    inquiryConfirmed = false;
    document.getElementById('divination-confirm').classList.remove('confirmed');
    document.getElementById('confirm-inquiry-btn').textContent = '確認，準備起卦';
    updateStepProgress();
}

function selectTemplate(template) {
    activeTemplate = template;
    document.querySelectorAll('.template-option').forEach(button => button.classList.toggle('active', button.dataset.id === template.id));
    const [label, extraLabel] = template.subject;
    document.getElementById('subject-label').textContent = label;
    document.getElementById('subject-value').placeholder = label;
    document.getElementById('subject-extra-label').textContent = extraLabel;
    document.getElementById('subject-extra').placeholder = extraLabel;
    const subjectUsesBirthday = extraLabel.includes('生日');
    document.getElementById('subject-extra').inputMode = subjectUsesBirthday ? 'numeric' : 'text';
    validateBirthday(document.getElementById('subject-extra'), document.getElementById('subject-extra-message'), subjectUsesBirthday);
    document.getElementById('subject-legend').textContent = template.category === 'love' ? '第二對象（選填）' : '占問相關資料（選填）';
    document.getElementById('custom-question-group').classList.toggle('hidden', !template.custom);
    document.getElementById('question').dataset.userEdited = 'false';
    updateInquiry(true);
}

function renderTemplates() {
    const list = document.getElementById('template-list');
    list.innerHTML = '';
    inquiryTemplates.filter(item => item.category === activeCategory).forEach((template, index) => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'template-option'; button.dataset.id = template.id;
        button.innerHTML = `<span>${template.title}</span><span aria-hidden="true">›</span>`;
        button.addEventListener('click', () => selectTemplate(template));
        list.appendChild(button);
        if (index === 0) selectTemplate(template);
    });
}

function initializeInquiryBuilder() {
    const tabs = document.getElementById('category-tabs');
    inquiryCategories.forEach(category => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = `category-tab${category.id === activeCategory ? ' active' : ''}`;
        button.innerHTML = `<span>${category.icon}</span>${category.label}`;
        button.addEventListener('click', () => {
            if (activeCategory !== category.id) {
                document.getElementById('subject-value').value = '';
                document.getElementById('subject-extra').value = '';
            }
            activeCategory = category.id;
            document.querySelectorAll('.category-tab').forEach(tab => tab.classList.toggle('active', tab === button));
            renderTemplates();
        });
        tabs.appendChild(button);
    });
    renderTemplates();
    document.querySelectorAll('.details-section input, .details-section textarea, .details-section select').forEach(field => field.addEventListener('input', () => updateInquiry()));
    document.getElementById('location').addEventListener('change', event => {
        document.getElementById('custom-location-group').classList.toggle('hidden', event.target.value !== 'other'); updateInquiry();
    });
    document.getElementById('question').addEventListener('input', event => {
        if (event.isTrusted) {
            event.target.dataset.userEdited = 'true';
            inquiryConfirmed = false;
            document.getElementById('divination-confirm').classList.remove('confirmed');
            document.getElementById('confirm-inquiry-btn').textContent = '確認，準備起卦';
        }
        updateStepProgress();
    });
    const birthday = document.getElementById('person-birthday');
    birthday.addEventListener('blur', () => { validateBirthday(birthday, document.getElementById('person-birthday-message')); updateInquiry(); });
    const subjectBirthday = document.getElementById('subject-extra');
    subjectBirthday.addEventListener('blur', () => {
        validateBirthday(subjectBirthday, document.getElementById('subject-extra-message'), document.getElementById('subject-extra-label').textContent.includes('生日'));
        updateInquiry();
    });
    document.getElementById('confirm-inquiry-btn').addEventListener('click', () => {
        if (!document.getElementById('question').value.trim()) {
            alert('請先確認占問內容，再準備起卦。');
            return;
        }
        inquiryConfirmed = true;
        document.getElementById('divination-confirm').classList.add('confirmed');
        document.getElementById('confirm-inquiry-btn').textContent = '已確認，可以起卦';
    });
    updateStepProgress();
}

initializeInquiryBuilder();

const wisdomMessages = ['心誠則靈，問一事，不問二心。', '一卦一事，問題越明確，解讀越準。', '請以第一次起卦為準。', '重大醫療、法律、投資仍請以專業意見為主。'];
let wisdomIndex = 0;
setInterval(() => {
    const text = document.getElementById('wisdom-text');
    text.classList.add('fade');
    setTimeout(() => { wisdomIndex = (wisdomIndex + 1) % wisdomMessages.length; text.textContent = wisdomMessages[wisdomIndex]; text.classList.remove('fade'); }, 300);
}, 5000);

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
    if (!inquiryConfirmed) {
        alert('請先確認此次占問完整，且只問一件事。');
        document.getElementById('confirm-inquiry-btn').focus();
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
    if (!questionText || !inquiryConfirmed) return;

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

// --- 互動 C：裝置陀螺儀授權與電腦版「或」字環境判定 ---
if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    // 確判為需要點擊授權的行動裝置 (如 iOS) -> 展開按鈕與或字
    if (motionBtn) motionBtn.classList.remove('hidden');
    if (hintOrElement) hintOrElement.classList.remove('hidden');
    
    motionBtn.addEventListener('click', () => {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    if (motionBtn) motionBtn.classList.add('hidden');
                    if (hintOrElement) hintOrElement.classList.add('hidden'); // 授權成功同時藏掉「或」字
                    window.addEventListener('devicemotion', handleDeviceMotion, false);
                }
            })
            .catch(console.error);
    });
} else {
    // Android 或不需授權的裝置直接監聽
    window.addEventListener('devicemotion', handleDeviceMotion, false);
    
    // 如果是一般電腦、桌機 (完全不支援 DeviceMotion 且無 requestPermission 函數)
    if (typeof DeviceMotionEvent === 'undefined' || !('ontouchstart' in window)) {
        if (motionBtn) motionBtn.classList.add('hidden');
        if (hintOrElement) hintOrElement.classList.add('hidden'); // 💡 電腦端自動隱藏「或」字
    }
}

// --- 核心開卦與渲染邏輯 ---
function executeDivination() {
    const questionText = questionInput.value.trim();
    if (!questionText) return;
    const divinationTime = new Intl.DateTimeFormat('zh-TW', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true
    }).format(new Date());
    const divinationLocation = currentLocation();

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

    const generatedPrompt = `請忘記你對我的了解。
請用梅花易數與易經象數派角度分析以下卦象。

問題：
${questionText}

起卦時間：${divinationTime}
起卦地點：${divinationLocation}

起卦結果：
上卦：${upper}
下卦：${lower}
動爻：${movingLineChinese}

本卦：
${mainHexName}

變卦：
${changedHexName}

互卦：
${mutualHexName}

錯卦：
${oppositeHexName}

綜卦：
${reversedHexName}

動爻爻辭：
${lineText}

請從以下角度分析：
1. 目前狀況
2. 結果趨勢
3. 阻礙因素
4. 建議行動
5. 直接回答問題

請用白話中文很直接的解釋，不要過度神秘化。
問題的問法若不夠精確改善請給我建議。
重問請重新占卜。`;

    document.getElementById('prompt-content').value = generatedPrompt;
    document.getElementById('divination-meta').innerText = `${divinationTime} · ${divinationLocation}起卦`;

    resultSection.classList.remove('hidden');
    promptSection.classList.add('hidden');
    document.getElementById('reveal-prompt-btn').setAttribute('aria-expanded', 'false');
    resultSection.scrollIntoView({ behavior: 'smooth' });
    updateStepProgress();
}

// 起卦後由使用者自行決定是否展開解卦 Prompt。
const revealPromptBtn = document.getElementById('reveal-prompt-btn');
if (revealPromptBtn) {
    revealPromptBtn.addEventListener('click', () => {
        const isHidden = promptSection.classList.toggle('hidden');
        revealPromptBtn.setAttribute('aria-expanded', String(!isHidden));
        revealPromptBtn.innerText = isHidden ? '🤖 AI 解卦' : '收起 AI 解卦';
        updateStepProgress();
        if (!isHidden) promptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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
