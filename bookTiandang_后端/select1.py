import sqlite3
import requests
import os
from bs4 import BeautifulSoup


conn=sqlite3.connect('bookTianDang.db')
try:
    conn.execute("drop table bookself")
    conn.commit()
except:
    pass
conn.execute('''
      create table bookself(
         account_info varchar(11),
         book_id varchar(11), 
         book_pointer varchar(50)
        );
    ''')
conn.commit()
try:
    conn.execute("drop table books")
    conn.commit()
except:
    pass
conn.execute('''
    create table books(
    book_id varchar(11),
    book_title varchar(50),
    book_author varchar(50),
    book_address varchar(50),
    book_cover varchar(100),
    book_description varchar(100)
    );
''')




conn.commit()
conn.close()
header={
'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive',
'Cookie': '_abcde_qweasd=0; _abcde_qweasd=0; Hm_lvt_169609146ffe5972484b0957bd1b46d6=1623558975; Hm_lpvt_169609146ffe5972484b0957bd1b46d6=1623564102; cscpvrich9192_fidx=2; cscpvcouplet9193_fidx=3',
'Host': 'www.xbiquge.la',
'Pragma': 'no-cache',
'Referer': 'https://www.xbiquge.la/0/685/',
'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
'sec-ch-ua-mobile': '?0',
'Sec-Fetch-Dest': 'document',
'Sec-Fetch-Mode': 'navigate',
'Sec-Fetch-Site': 'same-origin',
'Sec-Fetch-User': '?1',
'Upgrade-Insecure-Requests': '1',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
}
os.mkdir('data')
os.chdir('data')
web='https://www.xbiquge.la/modules/article/waps.php'
book_title=['唐砖','汉儿不为奴','乱唐','王者时刻','我要做皇帝','穿越1630之崛起南美','汉乡','赘婿','汉祚高门','寸芒','造化之门']
i=1
current=os.getcwd()
for each in book_title:
    datas={'searchkey':each}
    res=requests.post('https://www.xbiquge.la/modules/article/waps.php',data=datas,headers=header)
    soup=BeautifulSoup(res.content.decode("utf-8"),"lxml")

    td=soup.find("td",class_="even")
    url=td.find("a")['href']
    res=requests.get(url)
    soup=BeautifulSoup(res.content.decode("utf-8"),"lxml")
    div=soup.find("div",id="info")
    title=div.find("h1").string
    author=div.find("p").string.split("：")[1]
    cover=soup.find("div",id="fmimg").find('img')['src']
    id=i
    i=i+1
    div=soup.find("div",id="intro")

    p=div.find_all("p")
    #print(p)
    description=p[-1].string
    os.mkdir(each)
    os.chdir(each)
    address=os.getcwd()
    conn=sqlite3.connect("../../bookTianDang.db")

    conn.execute("insert into books values('{}','{}','{}','{}','{}','{}')".format(id,title,author,address,cover,description))
    conn.commit()
    conn.close()
    div=soup.find("div",id="list")
    a=div.find_all('a')
    for item in a:
        charpter_title=item.string

        url="https://www.xbiquge.la"+item['href']

        res=requests.get(url,headers=header)

        soup=BeautifulSoup(res.content.decode("utf-8"),"lxml")
        try:
            with open(r"{}.txt".format(charpter_title),"a",encoding="utf-8") as f:
                div=soup.find("div",id="content")

                f.write(div.get_text())
        except:
            continue
    dir_list=os.listdir(address)
    dir_list.sort(key=lambda fn:os.path.getmtime(address+'\\'+fn))
    os.chdir(address)









