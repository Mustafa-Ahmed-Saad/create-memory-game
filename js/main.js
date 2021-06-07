/* document.querySelector('.control-buttons span').onclick = function(){
    let theName = prompt('whats your name.');

    if (theName == null || theName == "") { // لو اليوزر مكتبش اسم او عمل كانسيل خلي بالك النال هنا يعني اليوزر عمل كانسيل فالبرومبيد هترجعلك نال بدل ما ترجعلك الاسم اللي كتبو
        document.querySelector('.info-container .name span').textContent = 'unknown';
    } else {
        document.querySelector('.info-container .name span').textContent = theName;
    }
    // لو عاوزين نشيل عنصر من الدوم بنعمل التالي
    document.querySelector('.control-buttons').remove();
    // or
    // document.querySelector('.control-buttons').style.display = 'none';  // كدا انت مش هتحزف العنصر من الدوكيومينت بل هتخفية خالص لكن لو عاوز تحزف العنصر خالص استعملالطريقة اللي فوق
} */
document.querySelector('.control-buttons span').onclick = function(){
    let theName = prompt('whats your name.');

    if (theName == null || theName == "" || theName == " ") { /* لو اليوزر مكتبش اسم او عمل كانسيل خلي بالك النال هنا يعني اليوزر عمل كانسيل فالبرومبيد هترجعلك نال بدل ما ترجعلك الاسم اللي كتبو */
        return false;
    } else {
        document.querySelector('.info-container .name span').textContent = theName;
        // لو عاوزين نشيل عنصر من الدوم بنعمل التالي
        document.querySelector('.control-buttons').remove();  // حطيتها هنا علشان اخلي اليوزر لازم يكتب اسمو الاول علشان اللعبة تشتغل و لو عاوز اخلية في الحاليتين كتب او مش كتب اسمة تختفي و يلعب فلازم احها بعد الاف
        // or
        // document.querySelector('.control-buttons').style.display = 'none';  // كدا انت مش هتحزف العنصر من الدوكيومينت بل هتخفية خالص لكن لو عاوز تحزف العنصر خالص استعملالطريقة اللي فوق
    }
}



// الوقت اللي الكارت بيتعملو فليب فية او الوقت اللي الشخص يقدر يفتح الكارت فية لان مشكلة اللعبة ممكن تفتح كذا كارت قبل ما الكارت الاول يقفل
// و علشان تهندل الموضوع دا و علشان الشخص يفتح كارتين بس و يضطر انو بستني يشوف الكارتين صح ولا لا علشان يبدا يفتح بعد كدا فلازم نعتمد علي الديوريشن او وقت لففان الكارت
let duration = 1000;

// بعد كدا محتاج اجيب الكونتينر اللي ماسك العناصر كلهاعلشان اديلو كلاس معين في حالة معينة و علشان اقدر ابحثعن العناصر اللي جواه
let blocksContainer = document.querySelector('.memory-game-blocks');

// محتاج اجمع كل العناصر في اراي علشان اقدر اعمل فيها كل اللي انا عاوزة
let blocks = Array.from(blocksContainer.children);

// انا عاوز اوزع الصور بتعتي و البلوكات دي عشوائي مش ينفع اسيبهم كدا كل اتنين زي بعض جنب بعض فهستخدم خاصية الاوردر اللي في السي اس اس و هي خاصية من خواص الفليكس علشان اوزعهم عشوائي بس لازم الاوردر دا يكون اخرة عدد البلوكات او الكروت اللي عندي فانا هحتاج الارقام من صفر ل تسعتاشر بس تكون راندوم
// يبقي هعمل اراي فيها ارقامك عشوائية و اعوز الارقام دي علي الااي التانية اللي فيها البلوكات بتعتي بحيث تتوز عن طريق الاوردر علشان كل بلوك يروح في مكان معين
// طيب انا هعمل ارقام عشوائية من صفر ل تسعتاشر ازاي و احطهم في اراي ببساطة هعمل التالي
let orderRange = [...Array(blocks.length).keys()]; // الميثود اللي اسمها كيس دي بترجعلك الاندكسات بتعت الاراي كلها في اوبجيكت او في اراي
//or
// let randomNumArray = Array.from(Array(blocks.length).keys()); // دي فيها ايتيريتور و ممكن نلف عليها 
// or
/* let myArray = [];
for (let i = 0; i < blocks.length; i++) {
    myArray.push(i);
} */
// or
/* let myArray = [];
for (let index of Array(blocks.length).keys()) {
    myArray.push(index);
} */

// لازم ننده الفانكشن هنا علشان تخلي الاراي تبقي متلخبطة علشان لما نعمل الفور ايتش علي الاراي اللي فيها بلوكات و نختار بلوك بلوك و نجيب الاندكس بتاعي نجيب العنصر اللي في الاندكس دا فلازم الاراي اللي هنختار منها الرقم تكون متلخبطة
shuffle(orderRange);

// هعمل لوب علي كل البوكات اللي في الاراي و اجيبهم بلوك بلوك بالاندكس بتاعو و اخلي كلبلوك فيهم ياخد اوردر من الاراي اللي مترتبة عشوائي و هنمشي علي الاراي اللي مترتبة عشوائي برضو واحدة واحدة علي حدسب انكس البلوك علشان منخدش الرقم مرتين
blocks.forEach((block, index) => {  // or use .filter
    block.style.order = orderRange[index];  // هنا الفكرة اننا عاوزين نحط اوردر عشوائي بس الاودر دا علشام يكونعشوائي لازم الاراي الارقام الليفيهاتترب من صفر ل تسعتاشر بطريقة عشوائية و بعدين نعمل السطر دا  لان السطر دا بيمشي علي الاراي واحدة واحدة فلو الاراس مش كانت الارقام فيها مترتبة عشوائي يبقي كدا مش عملنا حادجة
    // هنا احنا عملنا لوب علي البلوك بتاعتنا كلها ف فرصة اننا نضيف ايفنت الكليك هنا
    block.addEventListener('click', function() {
        flipblock(this); // or // flipblock(block)
    });
    // or
    /* block.onclick = function() {
        flipblock(this);
    } */
});

// flip block function
function flipblock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    // الفلتر بترجعلك اراي فيها اللي ينطبق علية الفانكشن اللي جواها و برضو بتعمل لوب علي الاراي اللي قبل الدوت و الفانكشن بتاعتها اللي جواها بتمرر العناصر اللي في الاراي عنصر عنصر
    let allflippedblocks = blocks.filter((block) => {return block.classList.contains('is-flipped')}); // الفلتر دي هتطبقلك الفانكشن اللي جواها اللي هيا هتجيبلك كل اللي واخد الكلاس دا في اراي
    // عاوز اعرف هل انا فاتح دلوقتي 2 ولا لا
    if (allflippedblocks.length == 2) {
        // stop clicking function
        stopCliking();
        // chick matched block function
        checkMatchedBlocks(allflippedblocks[0], allflippedblocks[1]);
    }

}

function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    
    // if (firstBlock.children[1].children[0].src === secondBlock.children[1].children[0].src) {  // لو عاوز اشيك بالصورة
    // if (firstBlock.getAttribute('data-techbology') === secondBlock.getAttribute('data-techbology')) { // لو عاوز اشيط بالاتربيوت
    if (firstBlock.dataset.techbology === secondBlock.dataset.techbology) { // لو عاوز اشيك بالاتربيوت و لكن طريقة اسرع
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped'); // هنشيل الكلاس دا علشان لما ارجع اتشيك تاني و انفز الفانكشن الفليب كارت هيجبلي كل البلوكات اللي واخدة الكلاس دا فهيسبب مشاكل فلازم اشيل الكلاي دا طيب لو لاحطت ان هيحصل مشكلة و هي اني لما بشيل الكلاي دا اه مشكلة انو لما بيجمع البلوكات اللي واخدة كلاس فليب دول مش بيكونو منهم و كلو بيكون تمام لكن بتلاقيهم اتقلبة مع انهم صح و انا مش عاوز كدا 
        
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');     // هنضيف الكلاس دا اللي فية نفس خصائص الاز فليب و لكن باسمتاني علشان نحل مشكلة ان الكارت لو صح ميتقلبش تاني و يفضل ملفوف زي ما هو و كمان هنتفادا مشكلة ان العنصر دا يتحسب من العناصر اللي ليها كلاس الاز فليب فيتعمل يبقي في الاراي اللي فيها فليبد كليك و احنا مش عاوزين كدا لاننا عاوزيزن الاراي يكون فيها العناصر الحالية فقط مش اللي اتفتحت و بقت صح

        document.getElementById('success').play();
        
    } else {
        // عملنا السيت تايم اوت علشان مش اول ما اضفط علي الكارت التاني و يطلع غلط مش يقلبهم علي طول قبل ما اشوفهم بل يستني شوية و بعدين يقلبهم
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
        
        triesElement.textContent = parseInt(triesElement.textContent) + 1;
        
        document.getElementById('fail').play();
    }
}

function stopCliking() {
    blocksContainer.classList.add('no-clicking');
    // لازم نعمل سيت تايم اوت علشان احنا عاوزين بس اليوزر ميقدرش يدوس لمدة معينة و بعدين يرجع يعرف يدوس تاني سواء الكارتين طلعو شبة بعض او لا فعلشان كدا لازم نستعمل سيت تايم اوت
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

// الفكرة كلها هنا اننا بنجيب الاراي المرتبة و نمشي من ورا خالص و كل عنصر بنعدي علية بنبدل قيمة العنصر دا بقيمة العنصر العشوائي و بعدين ننتقل للعنصر اللي بعدو
function shuffle(array) {
    let current = array.length;
    while(current > 0) {
        let randomNum = Math.floor(Math.random() * current);  // هنجيب رقمعشوائي من صفر ل اخر عنصر في الاراي علي حسب عدد الاراي
        current--; // لو هنحط دي في الاخر هنخلي الكارنت بيساوي الاراي دوت لينص نااااقص واحد
        // [1] save current element in stash or temp
        let temp = array[current];  // هنخزن القيمة الحالية اللي واقفين عليها في مخزن اسمو تيمب
        // [2] current element = random element
        array[current] = array[randomNum];  // الرقم العشوائي اللي هعملو هختار بية عنصر عشوائي او رقم عشوائي من الاراي و اخلي قيمة العنصر دا هيا هيا قيمة العنصر اللي انا واقف علية
        // [3] random element = current element in stash or trmp
        array[randomNum] = temp  // و بعدين اجيب قيمة العنصر اللي انا واقف علية اللي القديمة لان قيمتة الجديدة بقت بتساوي العنصر العشوائي فهجيب قيمتة القديمة اللي انا مخزنها في التيمب و اديها للعنصر العشوائي اللي انا اخدت قيمتو
    }
    return array;
}