import { Component, For } from 'solid-js';

const App: Component = () => {
    return (
        <div class="h-screen w-screen bg-green-100">
            <div class="utable grid w-full h-full p-10" style={{ "grid-template-columns": "repeat(4, auto)" }}>
                <div class="uth bg-slate-500">askldnsalkd</div>
                <div class="uth bg-slate-500">askldnsalkd</div>
                <div class="uth bg-slate-500">askldnsalkd</div>
                <div class="uth bg-slate-500">askldnsalkd</div>

                <For each={Array(100)}>
                    {() => <>
                        <div class="utd">nklnlkhntrklnhktrlnhkltrn</div>
                        <div class="utd">nklnlkhntrklnhktrlnhkltrn</div>
                        <div class="utd">nklnlkhntrklnhktrlnhkltrn</div>
                        <div class="utd">nklnlkhntrklnhktrlnhkltrnaasdsadsadsadasdsadasrgrengklnkkkkkkkkkkkkkkkkkkkkknskladkllllllllllllllllllllllllllll</div>
                    </>}
                </For>
            </div>
        </div>
    );
};

export default App;
