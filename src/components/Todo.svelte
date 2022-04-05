<script>
    import {todos,saveStorage} from "~/store"
    export let todo

    let isEdit = false
    let title = ""

    function onEdit(){
        title = todo.title
        isEdit = true
    }

    function offEdit(){
        isEdit = false

    }
    function updateTodo(){
        todo.title = title
        saveStorage()
        offEdit()
    }

    function deleteTodo(){
        alert("삭제했습니다")
        $todos = $todos.filter((item)=>item.id !== todo.id)
        saveStorage()
    }
</script>

<div class="todo">

    {#if isEdit}
    <div class="edit-mode">
        <input on:keyup={(e)=>{
            if(e.key === "Enter") {updateTodo()}
        }} bind:value={title} type="text" class="form-control"/>
        <button class="btn btn-primary" on:click={updateTodo}>OK</button>
        <button class="btn btn-secondary" on:click={offEdit}>Cancel</button>
    </div>
    {:else}
    <div class="normal-mode">
        <div class="title">
            {todo.title}
        </div>
        <button class="btn btn-secondary" on:click={onEdit}>Edit</button>
        <button class="btn btn-danger" on:click={deleteTodo}>Delete</button>
    </div>
    {/if}

</div>

<style lang="scss">
    .todo{
        padding:10px 14px;
        border-radius:6px;
        &:hover{
            background-color:$gray-100;
        }
        .edit-mode,
        .normal-mode{
            display:flex;
        }
        .title{
            flex-grow:1;
            display:flex;
            align-items: center;
            font-size:18px;
        }
        .btn{
            flex-shrink:0;
            margin-left:10px;
        }
    }
</style>