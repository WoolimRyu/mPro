# mPro
movie, product, dvds, webSearch result, Watcha


## 서비스 소개
* 내가 본 영화들의 관련 상품 정보를 제공/추천해주는 웹 서비스.

<br> * 왓챠에서 내가 본 영화리스트를 (관람일 순, 높은 별점 순) 불러와서 저장하고, 각 영화의 관련 상품 (원작/DVD/피규어 등)의 정보를 제공하며, 상품을 추천해준다.


## 사용하는 API
** yes24 api 
<br>- yes24 에서 제공하는 상품 검색 api를 사용하여, 영화 관련 상품 정보를 제공한다.<br>
** watcha json file 직접 저장. 
<br>- 왓챠에서는 따로 회원의 영화리스트 api를 제공해주지 않기 때문에, json 파일을 자동으로 불러서 DB에 저장한다. <br>
** Google Search api 
<br>- 구글에서 각 영화의 관련 물품 판매 사이트를 검색하여 정보를 제공한다.


## 구동환경 및 개발환경
server - jwp 수업에서 제공받은 server 사용.
<br> mac 환경에서, front-end (html/css/js/jQuery), back-end (ruby on rails)
DB - mongodb /mongoose 사용하여 개발.


## DB model 설계 (미완성)
** Table list <br>
- User (userId, password)<br>
- User Movie list (userId, movieId, movieTitle)<br>
- Movie Product list (movieId, ...)<br>
- DVD Product list (dvdId, ...) <br>
- HOT Product list (hotId, ...) <br>
- User Wish list (wishId, userId, productId)


## Schedule
- 9월 12일 (토) 까지<br>DB- 테이블 및 칼럼 설계 및 생성 / front- 마크업 부분 완성, css 완성 / back- watcha json 파일 자동으로 호출하고 DB 에 저장하기 <br><br>

- 9월 19일 (토) 까지<br>front- UI/UX 수정, 동적인 부분 추가시키기 / back- yes24 API 연동하기, google API 연동하기 /DB- api 통해서 얻은 정보 저장하는 기능 완성 <br><br>

- 9월 20일 (일)<br>최종 점검, 리팩토링 <br><br>

- 9월 21일 화요일까지<br>리팩토링 <br><br>