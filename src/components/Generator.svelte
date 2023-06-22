<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineNodeExpand from "svelte-icons-pack/ai/AiOutlineNodeExpand";
  let options = {
    upper: "Include Uppercase Letters",
    lower: "Include Lowercase Letters",
    number: "Include Numbers",
    symbol: "Include Symbols",
  };
</script>

<main>
  <div class="heading">Password Generator</div>
  <div class="box display">
    <p class="password">56785678567675675</p>
    <Icon src={AiOutlineNodeExpand} />
  </div>
  <div class="box">
    <div class="charl">
      <label for="length">Length</label>
      <input type="number" id="length" value="8" readonly />
    </div>
    <input type="range" id="length" value="8" min="0" max="25" />
    <div class="options">
      {#each Object.entries(options) as [option]}
        <label class="option">
          {options[option]}
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
      {/each}
    </div>
    <div class="inside_box">
      <h5>STRONG</h5>
      <div class="level_bar">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
    <div class="btn_div">
      <button class="btn">Generate Password</button>
    </div>
  </div>
</main>

<style>
  main {
    position: absolute;
    margin: auto;
    inset: 0;
    margin: auto;
    border-radius: 10px;
    height: 70%;
    width: 30%;
    background-color: rgb(10, 10, 10);
    color: aliceblue;
    padding: 5px;
  }
  .options {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 60px 60px auto;
  }
  .heading,
  .display {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    margin: 5px 0px;
  }
  .heading {
    text-align: center;
    font-size: 1.2rem;
    padding-top: 10px;
  }
  .box {
    background-color: rgb(44, 41, 41);
  }
</style>
