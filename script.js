let post = document.getElementById("post"); 
let postsBox = document.getElementById("posts") 
let li = 0;
let imgs = [ 
    "danial.jpg", 
    "danial2.jpg",
    "user.jpg",
    "verif.png"
] 
let texts = [ 
    "Привет, Я ЖИВУ!", 
    "Я На турнире)",
    "ТЕКСТ №",
    "ТЕКСТ 4"
] 
for(let i = 0; i < 100; i++){ 
    var s = '<div class="post" id="post"><div class="glavn"><div class="miniprofileimagediv"><img src="danial.jpg" class="miniprofileimage" alt=""></div><h1 class="img">Zhakipzhanov Danial</h1></div><div class="divfoto"><img src="'+imgs[i%4]+'" class="foto" alt=""></div><div class="ilikeit"><div class="likes" onclick="like1('+(i+2).toString()+')"><img class="dislike" id="dis1" src="unlove.png" alt=""><img class="like" id="like1" src="love.png" alt=""></div><p class="likecnt" id="cnt1">0</p></div><div><p class="opisanie">'+texts[i%4]+'</p></div><div class="comments"><div class="comment" id="comment1"><p class="comenta">Коментарии:</p></div><div class="sen"><input class="se" id="input1" type="text" placeholder="Введите коментарий" maxlength="50"><div class="send" onclick="send1('+(i+2).toString()+')"><p class="sends">Отправить</p></div></div></div></div>';
    var newpost = document.createElement('div');
    newpost.innerHTML = s;
    postsBox.append(newpost)
}

let sub=document.getElementById('sub');
let unsub=document.getElementById('unsub');
let cnt=document.getElementById('cnt');
let subscr=document.getElementById('subscr');
function subs(){
    if(cnt.textContent=="99 подписчиков"){
        cnt.textContent="100 подписчик";
        sub.style.opacity=0;
        unsub.style.opacity="100%";
        subscr.style.backgroundColor="rgb(106, 154, 216)";
    }else{
        cnt.textContent="99 подписчиков";
        sub.style.opacity="100%";
        unsub.style.opacity=0;
        subscr.style.backgroundColor="rgb(24, 119, 242)";
    }
}
function like1(num){
    let lik1=document.querySelectorAll("[id='like1'");
    let dis1=document.querySelectorAll("[id='dis1'");
    let cnt1=document.querySelectorAll("[id='cnt1'");
    if(cnt1[num].textContent=='0'){
        cnt1[num].textContent='1';
        lik1[num].style.opacity="100%";
        dis1[num].style.opacity=0;
    }else{
        cnt1[num].textContent='0';
        lik1[num].style.opacity=0;
        dis1[num].style.opacity="100%";
    }
}
function send1(num) {
    let input=document.querySelectorAll("[id='input1']");
    let comment1=document.querySelectorAll("[id='comment1']");
    let text=input[num].value;
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='user.jpg';
        img.style.height="5vmin";
        img.style.width="5vmin";
        img.style.borderRadius="100vmax";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="1vmin 1vmin";
        let name=document.createElement('p');
        name.style.fontSize="3vmin"
        name.textContent='Вы:';
        name.style.margin="1vmin 1vmin";
        let ttext=document.createElement('p');
        ttext.style.fontSize="3vmin"
        ttext.textContent = text;
        ttext.style.margin="1vmin 1vmin";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        comment1[num].appendChild(comment);
        input.value='';
    }
}