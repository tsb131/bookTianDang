import sqlite3

conn=sqlite3.connect("bookTianDang.db")
conn.execute("delete from bookself")
conn.commit()
conn.execute("insert into bookself values ('13187246069','1','0')")
cursor=conn.execute("select * from books")
conn.commit()
result=cursor.fetchall()
for each in result:
    print(each)
cursor=conn.execute("select * from bookself")
conn.commit()
result=cursor.fetchall()
for each in result:
    print(each)
cusor=conn.execute("select * from users")
conn.commit()
result=cursor.fetchall()
for each in result:
    print(each)
conn.close()