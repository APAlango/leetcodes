<h1>Random Quote Machine</h1>
<sub>Guide available <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine">here</a></sub>

<div id="quote-box">
  <p id="text">{data.quote.quote}</p>
  <sub id="author">{data.quote.author}</sub>
  <button id="new-quote">New quote</button>
  <ul>
    <li>
      <a href="_blank" id="tweet-quote"></a>
    </li>
  </ul>
</div>


<script lang="ts">
  import type { QuoteType } from '$lib/types.js';
  export let data;

</script>