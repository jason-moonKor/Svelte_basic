<script>
    import {todos} from "~/store"
    import CreateTodo from "./components/CreateTodo.svelte";

</script>

<div class="container">
    <CreateTodo/>
    {#each $todos as todo (todo.id)}
        <div>{todo.title}</div>
    {/each}
</div>

<style lang="scss"></style>