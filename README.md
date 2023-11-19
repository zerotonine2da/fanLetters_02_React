# 뉴진스 팬레터 홈페이지 만들기 with React

팬레터 CRUD 구현 (작성,조회,수정,삭제)  
props-drilling / context / redux 3가지로 구현

## 개발기간

23.11.10 ~ 23.11.19

## 주요 기능

(1) 팬레터 CRUD 구현 (작성,조회,수정,삭제)  
(2) 아티스트별 게시물 조회 기능 구현  
(3) 상세페이지에서 팬레터 수정 & 삭제 구현

## 코드 구성

### Home.jsx

메인페이지 구성  
(1) WriteComments.jsx : 댓글 작성  
(2) CommentsLayout.jsx : 아티스트 선택 가능  
(2-1) Comments.jsx : 등록된 댓글 보여주기

### Details.jsx

상세페이지 구성  
(1) 등록된 댓글 : 조회, 수정, 삭제

### DetailsUpdate.jsx

상세페이지 댓글 수정  
(1) 등록된 댓글 수정 후 메인페이지로 이동
