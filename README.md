<h1> 뉴스뷰어입니다. </h1>
<h4>
사용 기술 
React, styled-component, axios, newsAPI
</h4>
<h5> 코드설명 </h5>

Component List
---------------
Categories.js는 6개의 카테고리를 만들어 선택한 카테고리를 NewsLIst 컴포넌트에 Props로 전달합니다.
NewsList.js는 Categories에서 전달받은 Props로 뉴스API 키의 query로 사용하여 NewsITem.js의 props로 해당 아티클을 전달합니다.
NewsItem.js는 아티클을 전달받아 title, description, url, urlToImage로 비구조화 할당을 통해 styled을 하여 렌더링해줍니다.
NewsPage.js는 react의 route를 사용하여 라우터에 카테고리 선택 값을 URL 파라미터로 넘겨줍니다. 

App.js는 라우터를 통해 선택된 경로의 페이지를 렌더링해줍니다.



최적화
--------
리액트의 Hooks들을 통해 렌더링 소모비용을 줄일 수 있었다
useCallback(함수를 사용할 때마다 생성하지 않고 렌더링시에 만들어두고 재사용)
useEffect(렌더링이 일어났을 때(mount와 unmount)

비동기
------
axios를 사용하여 GET해야할 Promise들을 async함수로 만들어 await이 되었을 때 처리하게 만들었음.도
