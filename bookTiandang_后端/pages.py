import os
import sqlite3
import math

for t1 in os.listdir('data'):
    conn=sqlite3.connect('bookTianDang.db')
    conn.execute('''
        create table '{}'
        ( charpter_index varchar(10),
          charpter_title varchar(50),
          page_index varchar(10)
          );
    '''.format(t1))
    i=1
    j=1
    for t2 in os.listdir(t1):
        conn.execute(" insert into '{}' values('{}','{}','{}')".format(i,t2.split('.')[-1],j))
        f=open(t2,"r",encoing="utf-8")
        line=f.readline()
        t3=1
        if t3:
            w=open("{}.txt".format(j),"w",encoding="utf-8")
            w.write(t2)
            t4=math.ceil((len(line)-18)/20)+1
            for k in t4:
                if k==0:



