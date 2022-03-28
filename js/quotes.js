const quotes=[
    {
        quote:"인생에서 실패한 사람 중 다수는 성공을 목전에 두고도 모른 채 포기한 이들이다.",
        author:"Thomas A. Edison"
    },
    {
        quote:"성공의 겉모습 만큼 성공하는 것은 없다.",
        author:"Christopher Lasch"
    },
    {
        quote:"성공은 중요한 생일이 다가왔는데 당신은 전과 똑같다는 사실을 발견하는 것이다.",
        author:"Audrey Hepburn"
    },
    {
        quote:"인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 좇는 사람이다. 그것이 헌신이다.",
        author:"Cecil B. DeMille"
    },
    {
        quote:"성공에는 비밀이 없다. 성공한 사람 치고 성공에 대해 말하지 않는 사람을 본적 있는가?",
        author:"Kin Hubbard"
    },
    {
        quote:"운명이 가하는 고통에 우리는 인내심을 가지고 맞서야 하며, 적이 가하는 고통은 남자다운 용기로 맞서야 한다",
        author:"Thucydides"
    },
    {
        quote:"모든 성공은 더 어려운 문제로 가는 입장권을 사는 것일 뿐이다.",
        author:"Henry Kissinger"
    },
    {
        quote:"내가 성공한 것은 최고의 조언에 진심으로 귀 기울인 후 그에 얽매이지 않고 정 반대를 행한 덕이다.",
        author:"G. K. Chesterton"
    },
    {
        quote:"성공이 그렇게 달콤한 것은 결코 성공하지 못한 사람들이 있기 때문이다.",
        author:"Emily Dickinson"
    },
    {
        quote:"성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아나가는 것이다.",
        author:"Albert Schweitzer"
    }
   


    
]

const quote = document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;