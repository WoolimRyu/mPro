# error 나는 부분 정리.

@ 노드의 비동기로 인한 Callback Hell 사태 발생. <br>

==> 해결 : client 측에서 token 값을 입력 후, submit 하면 ajax POST 요청을 보낸다. <br>
서버에서 post 요청을 받으면, 전역변수 watcha_value 에 token 값을 저장하고, watcha() save() 를 차례로 호출한다. <br>
watcha 와 save 함수에서는, if 문을 사용해서 조건을 걸어 다음 함수를 차례로 호출한다.
<br>

-> 순서대로 실행되어야만하는 함수들. <br>
-> save > save2 > play1 > play2 > play3 > play4



@ 왓챠의 개인 Token 을 클라이언트에서 받아와야함. <br>
==> 해결
<br>
-> 현재는, var Token = "" 으로 하드코딩된 상태.



@ 테스트용도로 쓰인 주석들 삭제해야함.
