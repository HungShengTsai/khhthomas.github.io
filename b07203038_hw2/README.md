# Template Used
[https://themewagon.com/themes/free-bootstrap-4-html5-portfolio-website-template-devfolio/]
***
# Code Reference
[https://codepen.io/ElmiraMukhamedjanova/pen/XGazrK] (只使用其中的CSS)
***
# Personal Work
***
## index.html,index.css
* 自製封面圖片 [cover-bg](./img/cover-bg.png)
* 自製Carousel圖片 [carousel01](./img.carousel01.png) , [carousel02](./img.carousel02.png)
* 使用Bootstrap Carousel，贈加商品網真實度
* 更改上方標籤頁縮圖（使用favicon功能）
* 自製button樣式,並加上動畫（使用hover效果）（詳見 [index.css](./css/index.css) )

## addition.html,addition.css
* 修改 [additionMain.js](./js/additionMain.js) 使封面圖片與其動畫消失，並讓Navbar在滾動頁面時維持同個顏色與樣式
* 修改輸入資料格子的編框顏色 (詳見 [addition.css](./css/addition.css))
* 插入圖片檔及文字圖片檔設計版面
[question-mark](./img/question-mark.jpg)、[addition01](./img/addition01.png)、[addition02](./img/addition02.png)
* 使用CSS使圖片置中
* 自製button樣式,並加上動畫（使用hover效果）（詳見 [addition.css](./css/addition.css) )

## index.js,addition.js (這裡只記錄老師上課筆記以外的部分)
* 去除index.js中的查詢按鈕的功能，畫面一載入就展示商品
* 使分頁功能得以執行（運用$(this)）
* 使上一頁、下一頁功能得以執行（運用.parent()、.children()、.prev()、.next()）
* 發現老師上課筆記中index.js的一個bug:(詳見社團貼文（fb名稱：湯瑪士))
```
在幫點擊的分頁加上active的時候，發現最後一頁沒辦法跟前面幾頁一樣如期運行。
檢查原始碼後發現，點擊最後一頁的時候會出現一個Uncaught TypeError: Cannot read property 'image' of undefined
原本以為是自己code的問題，所以我用老師上傳的電商前端應用code來試，好像仍有一樣的問題。
```

```
bug原因：
老師上課中，函式showItem的code如下

#showItem code
var start = (page - 1) * pageCount
var end = start + pageCount - 1
for (var i = start; i <= end; i++) {
            newItem(items[i])
       })

由於前面定義的end會跑到無窮大，故i會跑不完，就會一直從資料庫撈資料，導致最後一頁出錯（抓不到item.image）無法加上active
*註：最後感謝洪瑋佑同學debug~(詳見社團貼文)*
```

