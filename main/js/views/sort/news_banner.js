function news_banner()
{
    if ( top_list.length > 3) {

    var num1 = top_list[1].split("/")[4].split(".")[0]; // number_of_files();
    var num2 = top_list[2].split("/")[4].split(".")[0]; //num1-1;
    var num3 = top_list[3].split("/")[4].split(".")[0]; //num1-2;

    news_container = document.createElement("div");
    news_container.className = "news_grid-container";

    news_intro = document.createElement("div");
    news_intro.className = "news_text";
    news_intro.innerHTML = leading['news'];

    title_item1 = news_title(num1) 
    item1 = document.createElement("a");    
    item1.className = "news_kop1";
    item1.href = xhref['post'] + num1
    item1.innerHTML = title_item1

    title_item2 = news_title(num2)
    item2 = document.createElement("a");
    item2.className = "news_kop2";
    item2.href = xhref['post'] + num2
    item2.innerHTML = title_item2

    title_item3 = news_title(num3)
    item3 = document.createElement("a");
    item3.className = "news_kop3";
    item3.href = xhref['post'] + num3
    item3.innerHTML = title_item3

    news_container.appendChild(news_intro);
    news_container.appendChild(item1);
    news_container.appendChild(item2);
    news_container.appendChild(item3);
    document.body.appendChild(news_container);

    }
}
