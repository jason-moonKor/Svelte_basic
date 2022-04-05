## Svelte basic 맛보기

#### Svelte 특징

- Write less code 보일러플레이트를 사용해서 코드양을 줄일수있다
- No virtual DOM 기존의 react처럼 가상돔을 이용하지않아도특정한 렌더링이 일어나는부분만 렌더링되도록하는기술을 사용함으로써 속도를 올릴수있다
- Truly reactive 반응성을 구현할수있다. 디테일함을 개발자가 추구할수있다

```
SvelteJs 페이지에서 Repl 에서 간단한 코딩가능 및깃헙에 저장가능

Vue처럼 <template>안에 html 태그 작성필요없음그냥 작성하면됨

<script> , <style> 태그만 사용하면됨

반응성을 위해선 꼭 할당연산자 = 를 사용해야함

svelte는 상태관리위한 스토어 기능이 자동탑제되어있다

```

---

store.js 파일을 생성한 후

```
import { readable, writable } from "svelte/store"

export let name = writable("jason")
```

App.svelte파일로 와서

```
<script>
   import { name } from "./store.js"
</script>

<h1> {$name} </h1>
```

와 같이 스토어로 받은 변수는 $ 기호를 앞에 써준다

---

#### 문법 특이점

- 시작은 # 중간은 : 끝은 /

```
onClick => on:click

{#if isShow}
   <h1>isShow가 true일때 나타남</h1>
{:else if name === "aaa"}
   <h1> name변수가 aaa일때 나타남</h1>
{:else}
   <h1>isShow가 false일때 나타남</h1>
{/if}

let fruits = ['Apple', "Banana','Cherry","Tomato"]

function deleteFruit() {
   fruits.splice(2,1) // fruits배열안에 인덱스2번째부터 1개를 추출함 = "Cherry"
   fruits = fruits // svelte의 특징으로 다시 값을 fruits에 할당해줘야 함 이 라인을 삭제하면 반응성이 없어져서 화면에 변경이 안됨
}



// fruits 라는 배열에서 key라는 임의의 값으로 반복문을 돌리겠다는 뜻. each문 끝에 소괄호() 안에 값은
반복문안에 key를 지정하는 값임
<ul>
   { #each fruits as key (key) }
      <li>{key}</li>
   {/each}
</ul>


//부모와 자식 컴포넌트사이에 단방향이아니고 양방//향으로 데이터를 전달하기위해서는
//부모객체에서 자식객체로 프롭스를 전달할때

bind:name={name}

//이런식으로 데이터를 전해줘야 한다

```

---

#### Snowpack 의 특징

번들러와 비슷한 동작을 하지만 빌드도구이다

프로젝트 규모와 상관없는 빠른빌드최소한의 구성다양한 개발 환경에 적용 가능

아직은 낮은 완성도 ESM ( ECMAScript Module) 미지원 브라우저에서는 동작불가마이그레이션 비용(처음부터 스노우팩으로 개발되지않은 프로젝트에 중간부터 적용하기 힘듬)

---

#### 사용한 터미널 명령어

```
npm i -D snowpack svelte @snowpack/plugin-svelte

npm i -D @snowpack/plugin-optimize // 빌드를 최적화 해주는 플러그인 -> 빌드된 파일들이 한줄로 난독화되어 최적화된다

npm i -D @snowpack/plugin-babel

npm i -D @snowpack/plugin-sass

npm i -D svelte-preprocess // 참고:https://github.com/sveltejs/svelte-preprocess

npm i -D shortid


```

설치한 플러그인은 snowpack.config.js 파일안에 plugins 배열안에 추가해줘야 적용된다.
