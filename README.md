# backend
🎞 WE-SOPT client &amp; server seminar "NETFLIX"

### 1. 역할 분담
#### 💡 [주현](https://github.com/wngus4296): 초기 환경 세팅, DB 설계, API 구현, README 작성, WIKI 작성
#### 💡 [유림](https://github.com/choiyoorim): DB 설계, API 구현
<br>

[API 명세서 보러가기](https://github.com/WE-SOPT-TEAM-18/backend/wiki) <-- click!
| URI | 메서드 | 설명 | 담당 |
| :-----: | :-----: | :-----: | :-----: |
| /watching | GET | 시청 중인 콘텐츠 가져오기 | 주현 |
| /content/rank | GET | 랭킹 순으로 콘텐츠 가져오기 | 주현 |
| /content/:categoryNum | GET | 카테고리 별로 가져오기 | 주현 |
| /like/:id | POST | 좋아요, 좋아요 취소 | 유림 |
| /like | GET | 좋아요 누른 콘텐츠 가져오기 | 유림 |

<br>
<br>

### 2. 코드 컨벤션
#### ****📌**** 변수명

1. **Camel Case 사용** <br>
• lower Camel Case
2. **함수의 경우 동사+명사 사용** <br>
• ex) getInformation()
3. **길이는 20자로 제한한다.** <br>
• 부득이한 경우 팀원과의 상의를 거친다.
4. **flag로 사용 되는 변수는 조동사 + flag 종류로 구성** <br>
• ex) isNum
5. **약어는 되도록 사용하지 않는다.** <br>
<br>

#### ****📌 주석****

- 한 줄 주석은 // 을 사용한다.
- 그 이상은 /** */ 을 사용한다.
- 함수 설명 주석은 /** */ 을 사용한다.
    
    ```jsx
    /**
     *  @route GET /user/:userId
     *  @desc GET one user
     *  @access Private
     */
    ```
    

<br>

#### ****📌**** Bracket


```jsx
// 한줄 if 문 - 여러 줄로 작성
 if(trigger) {
   return;
 }

// 괄호 사용 한칸 띄우고 사용한다.
 if (left == true) {
    return;
 }

// 띄어쓰기
 if (a == 5) { // 양쪽 사이로 띄어쓰기
    return;  
 }
```

<br>

#### ****📌 비동기 함수의 사용****


- async await 함수 사용을 지향한다.
- Promise 사용은 지양한다.

<br>

#### ****📌 Database****


1. **DB 이름 (스키마)**
    - 데이터베이스 명은 영어 대문자로 구성한다.
    - 길이는 8자 이내로 구성한다.
2. **컬렉션**
    - 소문자를 사용한다
    - 's' 를 사용(ex, users profiles)
    - 컬렉션 명의 구성은 최대 3단어까지 사용할 수 있다.
    - 최대 길이는 26자 이내로 구성한다.
3. **컬럼**
    - 컬럼은 snake 표기법을 따르고, 의미있는 컬럼명_접미사 형태로 작성한다.
    - 컬럼의 성질을 나타내는 접미사를 사용한다. (사용하는 데이터의 타입을 나타내는 것이 아님에 유의)
   
 <br>

#### ****📌 문자열****

- 문자열을 쓸 때는 `''` 따옴표를 사용한다.

<br>

#### ****📌 스타일****

- 타입 앞에 공백을 넣는다.
    
    예) const foo: string = "hello";
    
- 세미콜론, 콜론, 컴마 뒤에는 항상 공백을 둔다.
    
    예) `for (var i = 0, n = str.length; i < 10; i++) { }`
    
- 변수는 단일 선언을 한다.
    - use `var x = 1; var y = 2;` over `var x = 1, y = 2;`
- 앞의 공백(indentation)은 스페이스 2개로 맞춘다.
- 화살표 함수
    - `(x) => x + x` (X) `x => x + x` (O)
    - `(x,y) => x + y` (O) `<T>(x: T, y: T) => x === y` (O)
   
 
<br>
<br>

### 3. GIT 브랜치 전략
#### ****🌈 Git Workflow****
#### main → develop → juhyeon_feature/#3
main은 모든 작업이 끝난 후 develop에서 merge 시킨다.

—————————————————————————
* main - 초기 세팅 존재<br>
* develop - local 작업 완료 후 merge 브랜치<br>
* juhyeon - 주현 local 브랜치<br>
* yoorim - 유림 local 브랜치<br>
* localdevelop_feature/#issue - 각자의 기능 추가 브랜치<br>

—————————————————————————

1. `local - feature` 에서 각자 기능 작업
2. 작업 완료 후 `remote - develop` 에 PR 후 Merge
3. 코드 리뷰 후 Confirm 받고 Merge
4. remote - develop 에 Merge 될 때 마다 **모든 팀원 remote - develop pull** 받아 최신 상태 유지

<br>

#### 📌 Commit Convention

**태그: 제목의 형태**

| 태그 이름| 설명 |
| :--: | :-----: |
| FEAT | 새로운 기능을 추가할 경우 |
| FIX | 버그를 고친 경우 |
| !BREAKING CHANGE | 커다란 API 변경의 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |
| STYLE | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| COMMENT | 필요한 주석 추가 및 변경 |
| DOCS | 문서를 수정한 경우 (ex. README 수정) |
| RENAME | 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우 |
| REMOVE | 파일을 삭제하는 작업만 수행한 경우 |
| CHORE | 빌드 태스크 업데이트, 패키지 매니저를 설정하는 경우 |

<br><br>

### 4. 프로젝트 폴더링

```markdown
|-📋 firebaserc
|-📋 firebase.json
|-📋 .gitignore
|-📁 functions_
               |- 📋 index.js
               |- 📋 package.json
               |- 📋 .gitignore
               |- 📋 .env
               |- 📁 api_ 
               |         |- 📋 index.js
               |         |- 📁 routes_
               |                      |- 📋 index.js
               |
               |- 📁 config_ 
               |            |- 📋 dbConfig.js
               |
               |- 📁 constants_ 
               |               |- 📋 responseMessage.js
               |               |- 📋 statusCode.js
               |
               |- 📁 db_ 
               |        |- 📋 db.js
               |        |- 📋 index.js
               |
               |- 📁 lib_
                         |- 📋 convertSnakeToCamel.js
                         |- 📋 util.js
               
```
<br><br>

### 5. ERD
![Untitled (2)](https://user-images.githubusercontent.com/58043306/143550154-2a0e87d6-fa11-4e89-a4eb-521590e9510c.png)

<br><br>
