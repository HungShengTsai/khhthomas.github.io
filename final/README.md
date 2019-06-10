# 期末專題主題簡介
民以食為天，吃一直是人類為了基本生理需求不可或缺的部分。
只可惜現代人選擇太多，常會為了要「吃什麼」困擾不已。
因此，是否能夠專為臺大人開發一個網頁，羅列台大附近的巷弄美食與餐廳，
並幫助使用者挑選呢？
# 使用者指南
1) 點選「餐廳總覽」觀看台大美食地圖收錄的所有餐廳與飲料店，可用標籤選擇不同類別（共有4種）
2) 點選「餐廳選擇」讓系統依照類別（共有4種），幫你亂數決定今天吃什麼。
* _註：若不滿意選擇結果，可再躑一次，但若第二次不滿意，就請大俠從新來過_

# 製作說明
## Template Used
[https://themewagon.com/themes/free-responsive-html5-personal-portfolio-website-template-dimension/](https://themewagon.com/themes/free-responsive-html5-personal-portfolio-website-template-dimension/)
[https://themewagon.com/themes/free-bootstrap-4-html5-gaming-website-template-endgame/](https://themewagon.com/themes/free-bootstrap-4-html5-gaming-website-template-endgame/)

## Code Reference
[https://free.com.tw/embed-google-maps-street-view/](https://free.com.tw/embed-google-maps-street-view/)

## Personal Work
### index.html
* 更改上方標籤頁縮圖（使用favicon功能）
* 修改超連結使兩個Template能相連接（由網頁可知首頁跟其他頁面使用的template不同)
* 更改背景圖片
* 以font awesome 新增icon，置換原本的icon
* 使用文字圖片檔製作封面文字
* 更改 #contact 內容，並加以排版（使用class="field")

### selection.html
* 自製button樣式,並加上動畫（使用hover效果）
* 更改背景圖片與按鈕文字

### restaurantList.html, restaurantList02.html, restaurantList03.html, restaurantList04.html
* 設計列表中的餐廳樣式，並加上圖片及動畫（使用hover效果）
* 更改標籤按鈕文字，並設計位於該頁面時會呈現不同顏色
* 為每個餐廳加上超連結，再獨立製作屬於每個餐廳的介紹網頁（即resturantHtml中的各個餐廳網站）
* 將餐廳分門別類放入不同標籤中，並附上與restaurantList的超連結

### restaurant.rice(01～26).html, restaurant.noodle(01～05).html, 
### restaurant.other(01～15).html, restaurant.beverage(01～06).html
* 設計52個不同餐廳的網站版面，包含菜單，地址，與評價（使用div.stickySidebar與div.widget-item）
* 查詢各家餐廳的菜單、評價與地址
* 使用google 地圖中的iframe功能，在網頁中嵌入地圖

### riceSelection.js, noodleSelection.js, otherSelection.js, beverageSelection.js
* 使用亂數函式 random()，並產生一數字陣列，再利用亂數函式，與for迴圈將其重新打散
* 使用.attr()與.append()產生HTML element
* 使用.get()配合特定的id抓取想要的HTML element
* 設計「再次選擇」的函式
* 設計「大俠請從新來過」的函式，使用window.location.reload()重新整理網頁
